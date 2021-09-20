import { Tarea } from '../models'
import {delete_peticion, get_peticion, post_peticion, put_peticion} from './MainService'

export async function get_tareas() {
   return await get_peticion('task/')
}

export async function post_tareas(tarea:Tarea) {
   return await post_peticion('task/', tarea)
}

export async function edit_tarea(tarea:Tarea) {
   return await put_peticion(`task/${tarea.id}`, tarea)
}

export async function delete_tarea(id:number) {
   return await delete_peticion(`task/${id}`)
}
