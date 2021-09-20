import axios from 'axios';
const URL_SERVER = 'https://api-tarea.herokuapp.com/'


let user_Token = JSON.parse(sessionStorage.getItem('user_token')||'{}')
let token =  user_Token?.token


const header = {
   'Content-Type': 'application/json',
   'Authorization': 'Token '+token
}


export const get_peticion = async (url:string)=>{
   return await axios.get(`${URL_SERVER}${url}`, {headers:header} )
}

export const post_peticion = async (url:string,data: Object, headerH:any=header )=>{
   return await axios.post(`${URL_SERVER}${url}`,data,  {headers:headerH} )
}

export const put_peticion = async (url:string,data:Object )=>{
   return await axios.put(`${URL_SERVER}${url}`,data,  {headers:header} )
}

export const patch_peticion = async (url:string,data:Object )=>{
   return await axios.patch(`${URL_SERVER}${url}`,data,  {headers:header} )
}

export const delete_peticion = async (url:string)=>{
   return await axios.delete(`${URL_SERVER}${url}`,  {headers:header} )
}


