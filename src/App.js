import React from 'react';
import Login from './components/login';
import "./App.css";
import Logout from './components/logout';
import { useSelector } from 'react-redux';
import {selectUser} from "./Features/userSlice";

const App=() => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
  <div>
    {user ? <Logout /> : <Login />}
  
  </div>);
}

export default App;
