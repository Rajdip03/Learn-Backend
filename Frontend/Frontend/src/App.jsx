import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
const [bio, setBio] = useState([])

useEffect(()=>{
  axios.get('/api/bio')
  .then((response)=>{
    setBio(response.data)
  })
  .catch((error)=>{
    console.log('error');
  })
}) 

  return (
    <>
    <h1>Bio Data</h1>
    {
      bio.map((bio, index)=>(
        <div key={index}>
          <h2>Name: {bio.name}</h2>
          <h3>Dept: {bio.Dept}</h3>
          <h3>college: {bio.College}</h3>
          <h3>Experience: {bio.Experience}</h3>
          <h3>skills: {bio.Skills}</h3>
        </div>
      ))
    }
    </>
  )
}

export default App
