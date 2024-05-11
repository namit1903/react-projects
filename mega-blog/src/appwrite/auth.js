import conf from '../conf/conf.js';

import { Client, Account, ID } from "appwrite";

export class AuthService{
  client=new Client();
  account;
  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.account=new Account();
    
  }

  async createAccount({email,password,name}){
  try{
    const userAccount=  await this.account.create(ID.unique(),email,password,name);
    if(userAccount){
      //call another function
      return this.login({email,password});
      
    }
    else{
      return        
    }}
    catch(error){
      throw error;
        }
  }
  async login({email, password}){
    try{
    await this.account.createEmailSesssion(email,password);
  }  catch(error){
    throw error;
      }

    }
  async getCurrentUser(){
    try{
     return await this.account.get();
    }
    catch(error){
      console.log("appwrite service ke ander error hai");
throw error;
    }
    return null;  
  }
  async logout(){
    try{
    await this.account.deleteSessions('current');
  }  catch(error){
    throw error;
      }

    }
  }

  const authService = new AuthService();

export default AuthService;