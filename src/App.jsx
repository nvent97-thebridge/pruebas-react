import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputValidation from "./components/InputValidation";
import UserList from "./components/UserList";
import Contador from "./components/Contador";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {

  /*
  EJERCICIO

  Crear un nuevo componente llamado UserList
  Agregar la ruta y el link.
  Hacer un fetch a la API: 
  https://jsonplaceholder.typicode.com/users

  En el componente UserList renderizar 
  name - email - company de cada usuario.

  - Si tienen ganas le pueden dar un poco de amor
  a los estilos.
  
  -- Bonus
  - Implementar busqueda local de usuarios.
  */

    return (
        <>
            <div>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contador" element={<Contador />} />
                        <Route
                            path="/inputValidation"
                            element={<InputValidation />}
                        />
                        <Route
                            path="/users"
                            element={<UserList />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
