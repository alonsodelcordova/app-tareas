import { UserLogin } from "../models";
import {post_peticion} from './MainService'

export async function loginPost(user:UserLogin) {
   return await post_peticion('security/login', user,{})
}

