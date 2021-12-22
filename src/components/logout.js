import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Features/userSlice";
import "./logout.css";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = (e) => {
    dispatch(logout());
  }; 

  return(
  <form>
    <h1>
      Welcome <span className='user__name'>{user.name}</span>
    </h1>

    <button className="logout__button" onClick={(e) => logout(e)}>
      Logout
    </button>

  </form>
  );
};
 
  
 export default Logout;