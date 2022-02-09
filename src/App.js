import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () =>  {
  const[post, setPost] = useState({});
  const[id, setId] = useState(1);
  const[idFromBtnClick, setIdFromBtnClick] = useState(1);

  const handleClick = () => {
    setIdFromBtnClick(id);
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
    .then((res) => {
      setPost(res.data);     
    }).catch((err) => {
      console.log("err", err)
    })
  }, [idFromBtnClick])


  return (
    <div className="App">
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      <p>{post.title}</p>
      {/* {posts.map((post) => (<li key={post.id}>{post.title}</li>))} */}
    </div>
  );
}

export default App;
