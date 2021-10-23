import {
   BrowserRouter,
   Switch,
   Route
} from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Tareas from "./pages/Tareas";
import Usuarios from "./pages/Usuarios";
export default function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/app-tareas/tareas" component={Tareas} />
           
            <Route path="/app-tareas/usuarios" component={Usuarios} />
            <Route path="/app-tareas/inicio" component={Inicio} />
            <Route path="/app-tareas" component={Login} />
            <Route path="/" component={Login} />
         </Switch>
      </BrowserRouter>
   )
}
