import { useState } from "react";

const Contador = () => {
  const [counter, setCounter] = useState(0);
  const [otroCounter, setOtroCounter] = useState(100);

  return (
    <>
      <h1
        onClick={() => {
          setCounter(counter + 1);
          setOtroCounter(otroCounter - 1);
        }}
      >
        Counter: {counter} - {otroCounter}
      </h1>
    </>
  );
};


export default Contador;
