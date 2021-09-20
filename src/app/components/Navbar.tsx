import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
   const [Collapse, setCollapse] = useState(false)

   const actionCollapse = ()=>{
      setCollapse(!Collapse)
   }
   return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" onClick={actionCollapse} >
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className={Collapse?'navbar-collapse':'navbar-collapse collapse'}  >
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                     <Link to="/inicio" className="nav-link">Inicio</Link>
                  </li>
                  <li className="nav-item">
                     <Link  to="/tareas" className="nav-link"> Mis Tareas </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/usuarios" className="nav-link">Usuarios</Link>
                  </li>
               </ul>
            </div>

         </nav>
   )
}
