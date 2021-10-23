import {
   BrowserRouter,
   Switch,
   Route, Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Tareas from "./pages/Tareas";
import Usuarios from "./pages/Usuarios";
export default function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/app-tareas/tareas" component={Tareas} render={() => <Redirect to="/app-tareas" />}/>
           
            <Route path="/app-tareas/usuarios" component={Usuarios} render={() => <Redirect to="/app-tareas" />} />
            <Route path="/app-tareas/inicio" component={Inicio} render={() => <Redirect to="/app-tareas" />} />
            <Route path="/app-tareas" component={Login} />
            <Route path="/" component={Login} />
         </Switch>
      </BrowserRouter>
   )
}
