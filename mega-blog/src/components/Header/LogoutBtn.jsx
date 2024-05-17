 import React from 'react';
import {useDispatcher} from 'react-redux';
import authService from '../../appwrite/config';
import {logout} from "../../store/authSlice.js"

function LogoutBtn() {
  const dispatch=useDispatcher();
  const logoutHandler=()=>{
    authService.logout()
    .then(()=>{
      dispatch(logout());
    })
  }
  return (
  <button className="inlinr-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={logoutHandler}>Log out</button>
  )
}

export default LogoutBtn
