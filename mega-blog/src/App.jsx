// import dotenv from 'dotenv';
// dotenv.config()
import React, {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js'
import './App.css'
import {login,logout} from './store/authSlice.js'
import { Footer, Header } from './components/index.js';
function App() {
const [loading,setLoading]=useState(true)
const dispatch =useDispatch;

  // console.log(import.meta.env.VITE_APPWRITE_URL)
  useEffect(()=>{
authService.getCurrentUser()
.then((userData)=>{
  if (userData){
  dispatch(login({userData}))
  } 
  else{
    dispatch(logout({userData}))
  }
})
.finally(()=>setLoading(false))
},[])
  return !loading?(
    <div className="min-h-sc flex content-between bg-gray-400">hii
    <div className="w-full block">
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer/>
    </div></div>
  ):null
}

export default App;
