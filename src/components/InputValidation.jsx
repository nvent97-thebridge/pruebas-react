import { useEffect, useState } from "react";

const InputValidation = () => {
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (!password) {
      return;
    }
    if (password.length > 5) {
      setValidationMessage("Valid password");
    } else if (password.length < 6) {
      setValidationMessage("Invalid password");
    }
  }, [password]);
  // Si la contrasenia tiene menos de 5 caracteres
  // mostrar texto de "Invalid pass"
  // Si tiene mas de 5 mostrar "Valid pass-"
  return (
    <>
      <input onChange={handleInputChange} placeholder="Ingrese password" />
      {validationMessage}
    </>
  );
};

export default InputValidation;
