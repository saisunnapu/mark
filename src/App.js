import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const a = [1,2,3]

  const [input, setInput] = useState('');
  const [drop, setDrop] = useState('');

  const onChangeHandler=(event)=>{
    let value = event.target.value
    const regex = /^[A-Za=z]+$/
    if ( regex.test(value) || value === ''){
      setInput(value)

    }
  }
    const hadleChangeData =(event)=>{
      let value = event.target.value
      setDrop(value)
    }

  
  return (
    <div className="App">
      <header className="App-header">
       <input type='text' placeholder='Enter input' value= {input} onChange={onChangeHandler}/>
       <select value={drop} onChange={hadleChangeData}>
        <option>
          {a[0]}
        </option>
        <option>
          {a[1]}
        </option>
        <option>
          {a[2]}
        </option>
       </select>
      </header>
    </div>
  );
}

export default App;
