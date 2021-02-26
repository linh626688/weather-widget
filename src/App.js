import React, {useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import {API_ROUTE} from "./constants/constants";
import {getRequest} from "./utils/requestUtils";

function App() {
  useEffect(() => {
    let url = API_ROUTE.ICONS.replace("@q", 'london');
    getRequest(url).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }, []);

  const handleChangeInput = e => {

  };

  return (
    <div className="App">
      <input className="form-control" name="input" onChange={handleChangeInput}/>
    </div>
  );
}

export default App;
