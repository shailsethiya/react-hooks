import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () =>  {
  const[posts, setPost] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      setPost(res.data);     
    }).catch((err) => {
      console.log("err", err)
    })
  }, [])


  return (
    <div className="App">
    {posts.map((post) => (<li key={post.id}>{post.title}</li>))}
    </div>
  );
}

export default App;
