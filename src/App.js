import { useState } from 'react';
import './App.css';

const App = () =>  {
  const[inputField, setInputField] = useState({firstName : '', lastName: ''});
    
  const handleText = (e) => {
    e.preventDefault();
    setInputField((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value}))
  }

  const handleSubmit = (event) => {
     event.preventDefault();
     console.log(event);
  }

  return (
    <div className="App">
      <header className="App-header">
         Hello World
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={inputField.firstName} onChange={handleText}/>
        <input type="text" name="lastName"  value={inputField.lastName} onChange={handleText}/>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;
