// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080')
        .then(res => {
            return setData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <p>Company Name: {data.CompanyName}</p>
        <p>Address: {data.PostalCode} {data.Address}</p>
        <p>City: {data.City}</p>
        <p>Phone number and Email: {data.PhoneNumber} {data.Email}</p>
        <p>Status: {data.Status}</p>
        <p>Company form: {data.CompanyForm}</p>
        <p>Industry: {data.Industry}</p>
      </header>
    </div>
  );
}

export default App;
