import { useState } from "react";

export function useValidations() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (event) => {
    if (!user.includes('@') || !user.includes('.')) {
      setErrorUser("Este no es un correo valido");
      event.preventDefault();
    } else if (user.includes(" ")) {
      setErrorUser("Tu correo no debe contener espacios");
      event.preventDefault();
    }

    if (password === " ") {
      setErrorPassword("Tu contraseña no debe estar vacia");
      event.preventDefault();
    } else if (password.includes(" ")) {
      setErrorPassword("Tu contraseña no debe contener esapcios");
      event.preventDefault();
    }
  };

  return { setUser, setPassword, password, errorUser, errorPassword, handleSubmit }
}