import Contador from "./components/Contador";
import "./App.css";
import Human from "./components/Human";
import { useState } from "react";
import Example from "./components/Example";
import InputValidation from "./components/InputValidation";


function App() {
  const [view, setView] = useState("contador");
  let patata = { value: 1 };

  const renderMenuOption = (menuOption) => {
    switch (menuOption) {
      case "contador":
        return <Contador />;
      case "humano":
        // trabajar con los datos
        return <InputValidation/>;
      case "patata":
        return <h1>Patata</h1>;
      default:
        return <p>Invalid option</p>;
    }
  };

  // view == "contador" ? "una cosa" : "otra"

  // view == "contador" && "contador"

  // true && true => true
  // true && false => false
  // true && algo => algo

  // false && true/false => false
  const incrementarPatata = () => {
    console.log("Incrementar patata");
    patata.value = patata.value + 1;
    setView("test");
    console.log(patata);
  };

  return (
    <>
      <h5 onDoubleClick={() => setView("patata")}>ESTADO</h5>
      <button onClick={() => setView("contador")}>Contador</button>
      <button onClick={() => setView("humano")}>Ejemplo useEffect</button>
      {renderMenuOption(view)}
    </>
  );
}

export default App;
