import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
   const [Collapse, setCollapse] = useState(false)

   const actionCollapse = ()=>{
      setCollapse(!Collapse)
   }
   return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Link to="/app-tareas" className="navbar-brand">Inicio</Link>
            <button className="navbar-toggler" type="button" onClick={actionCollapse} >
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className={Collapse?'navbar-collapse':'navbar-collapse collapse'}  >
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                     <Link to="/app-tareas/inicio" className="nav-link">Inicio</Link>
                  </li>
                  <li className="nav-item">
                     <Link  to="/app-tareas/tareas" className="nav-link"> Mis Tareas </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/app-tareas/usuarios" className="nav-link">Usuarios</Link>
                  </li>
               </ul>
            </div>

         </nav>
   )
}
