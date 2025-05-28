const InputValidation = () => {
  const handleInputChange = (event) => {
    console.log("Contrasenia: ", event.target.value);
  };
  // Si la contrasenia tiene menos de 5 caracteres
  // mostrar texto de "Invalid pass"
  // Si tiene mas de 5 mostrar "Valid pass-"
  return <input onChange={handleInputChange} placeholder="Ingrese password" />;
};

export default InputValidation;
