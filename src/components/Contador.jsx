import { useEffect, useState } from "react";

const Contador = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Componente montado
    // Extraer el valor del localStorage
    // y guardarlo en el estado
    const savedCounter = localStorage.getItem("counter");
    setCounter(Number(savedCounter))
  }, []);

  useEffect(() => {
    // Componente actualizado
    localStorage.setItem("counter", counter)
  }, [counter]);

  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Contador;
