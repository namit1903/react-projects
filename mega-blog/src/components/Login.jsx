import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {login as authLogin} from '../store/authSlice.js' ;
import {Button,Input,Logo} from './index.js'
import{useDispatch} from "react-redux";
import authService from '../appwrite/auth.js';
import {useForm} from 'react-hook-form'

function Login() {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const {register,handleSubmit}=useForm();
  const [error,setError]=useState(null);    
  const login
=async(data)=>{
setError("")//clean the errors!!!
try{
  const session=await authService.login(data)
  if(session){
    const userData=await authService.getCurrentUser();
    if(userData) dispatch(authLogin(userData));//userData is action actually
    navigate("/")
      
  }
}catch(error){
  setError(error.message);
}
} ;
 return (
    <div>
      
    </div>
  )
}

export default Login
