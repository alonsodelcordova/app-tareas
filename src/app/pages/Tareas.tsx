import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { Tarea } from "../models";
import { delete_tarea, edit_tarea, get_tareas, post_tareas } from './../services/TareaService'

export default function Tareas() {
   const [tareasList, settareasList] = useState<Tarea[]>([])
   const { register, handleSubmit, formState: { errors }, setValue } = useForm<Tarea>();

   const getTareas = async () => {
      await get_tareas().then(
         res => settareasList(res.data)
      ).catch(e => console.log(e))
      initDatos()
   }

   const save = async (data: Tarea) => {
      if (data.id !== 0) {
         /**update */
         await edit_tarea(data).then(
            res => {
               getTareas()
               alert('Actualización Exitosa')
            }).catch(error => alert(error?.response?.data?.detail))
      } else {
         /** save */
         await post_tareas(data).then(
            res => {
               getTareas()
               alert('Registro Exitoso')
            }
         ).catch(error => alert(error?.response?.data?.detail))
      }
   }

   const edit = (tarea: Tarea) => {
      setValue('id', tarea.id)
      setValue('titulo', tarea.titulo)
      setValue('descripcion', tarea.descripcion)
   }
   const eliminar = async (id: number) => {
      await delete_tarea(id).then(
         res => {
            getTareas()
            alert('Eliminado correctamente')
         }
      ).catch(error => alert(error?.response?.data?.detail))
   }

   const initDatos = () => {
      setValue('id', 0)
      setValue('titulo', '')
      setValue('descripcion', '')
   }

   useEffect(() => {
     
   }, []);

   return (
      <div>
         <Navbar />
         <div className="container mt-2">
            <div className="row">
               <div className="col">
                  <Card>
                     <Card.Body>
                        <Card.Title className="text-center">Agregar Tarea</Card.Title>
                        <form onSubmit={handleSubmit(save)}>
                           <input type="hidden" {...register('id')} />
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Titulo"
                                 {...register('titulo', {
                                    required: 'Este campo es obligatorio',
                                 })}
                              />
                              {errors?.titulo && <p className="text-danger text-sm">{errors.titulo.message}</p>}
                           </div>
                           <div className="form-group">
                              <textarea rows={4} className="form-control" placeholder="Descripcion"
                                 {...register('descripcion', {
                                    required: 'Este campo es obligatorio',
                                 })}
                              ></textarea>
                              {errors?.descripcion && <p className="text-danger text-sm">{errors.descripcion.message}</p>}

                           </div>
                           <button className="btn btn-outline-success btn-block">Agregar</button>
                        </form>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col">
                  <Card>
                     <Card.Body>
                        <Card.Title className="text-center">Lista de Tareas</Card.Title>
                        <div className="table-responsive">
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th>Titulo</th>
                                    <th>Acciones</th>
                                 </tr>
                              </thead>

                              <tbody>
                                 {tareasList.map((tarea) =>
                                    <tr key={tarea.id}>
                                       <td>{tarea.titulo}</td>
                                       <td>
                                          <button
                                             className="btn btn-warning btn-sm mx-1"
                                             onClick={() => edit(tarea)}
                                          >Editar</button>
                                          <button
                                             className="btn btn-danger btn-sm mx-1"
                                             onClick={() => eliminar(tarea?.id || 0)}
                                          >Eliminar</button>
                                       </td>
                                    </tr>
                                 )}
                              </tbody>
                           </table>
                        </div>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   )
}
