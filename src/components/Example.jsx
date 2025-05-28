import { useState, useEffect } from "react";

const Example = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  const [test, setTest] = useState(0);

  // 1er useEffect (al montarse)
  useEffect(() => {
    console.log("Se ejecuta el 1er useEffect - componente montado");
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 4000);
  }, []);

  useEffect(() => {
    console.log("Color favorito actualizado")
  }, [favoriteColor])

  useEffect(()=>{
    //console.log("Test se ha actualizado con: ", test);
  }, [test])

  return <h1 onClick={() => setTest(Math.random())}>My Favorite Color is {favoriteColor} - {test}</h1>;
};

/*
    1. Monto el componente.
    2. Se ejecuta el primer useEffect
    3. Define un timeout de 2 segundos
    y modifica el estado
    4. Se actualiza el componente
    
    1. Al hacer click en el h1
    2. Modifico el estado (test)
    3. Se dispara el segundo useEffect porque test esta
    definido en sus dependencias
    4. Aparece en consola el numero aleatorio
*/
export default Example;
