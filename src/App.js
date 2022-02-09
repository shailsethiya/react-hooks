import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () =>  {
  const[post, setPost] = useState([]);

  useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      setPost(res.data.id);     
    }).catch((err) => {
      console.log("err", err)
    })
  }, [])


  return (
    <div className="App">
      {post}
    </div>
  );
}

export default App;
