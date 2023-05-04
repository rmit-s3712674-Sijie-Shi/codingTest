import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useCallback } from 'react';

const baseUrl = "http://localhost:8080/issue"

function App() {
  const [title, setTitle] = useState()
  const [des, setDes] = useState()
  const [id, setId] = useState()

  let createIssue = useCallback(() => {
    
    axios.post(baseUrl, {
      title: title,
      description: des
    }, { headers: { "Content-Type": "application/json" } })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  },[])

  let read = useCallback(() => {
    
    axios.get(baseUrl + `/${id}`, { headers: { "Content-Type": "application/json" } })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  },[])

  const changeTitle = (value) => {
    console.log(value.target.value)
    setTitle(value.target.value)
  }
  const changeDes = (value) => {
    setDes(value.target.value)
  }
  const changeId = (value) => {
    console.log(value.target.value)
    setId(value.target.value)
  }

  return (
    <div className="App">
      <div>
        <input onChange={changeTitle}></input>
      </div>
      <div>
        <input onChange={changeDes}></input>
      </div>
      <div>
        <input onChange={changeId}></input>
      </div>
      <button onClick={createIssue}>create</button>
      <button onClick={read}>read</button>
      <div>

      </div>
    </div>
  );
}

export default App;
