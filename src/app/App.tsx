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
            <Route path="/tareas" component={Tareas} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/usuarios" component={Usuarios} />
            <Route path="/" component={Login} />
         </Switch>
      </BrowserRouter>
   )
}
