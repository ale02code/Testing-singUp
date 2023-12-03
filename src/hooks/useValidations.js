import { useState } from "react";

export function useValidations() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (event) => {
    if (user.startsWith === " ") {
      setErrorUser("No puedes dejar este campo vacio");
      event.preventDefault();
    } else if (!user.includes('@') || !user.includes('.')) {
      setErrorUser("Este no es un correo valido");
      event.preventDefault();
    } else if (user.includes(" ")) {
      setErrorUser("Tu correo no debe contener espacios");
      event.preventDefault();
    }

    if (password === " " || password === "") {
      setErrorPassword("Tu contraseña no debe estar vacia");
      event.preventDefault();
    } else if (password.includes(" ")) {
      setErrorPassword("Tu contraseña no debe contener espacios");
      event.preventDefault();
    } else if (password.length <= 4) {
      setErrorPassword("Tu contraseña debe tener un minimo de 5 caracteres");
      event.preventDefault();
    }

    event.preventDefault();
  };

  return { setUser, setPassword, password, errorUser, errorPassword, handleSubmit }
}