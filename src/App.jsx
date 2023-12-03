import React, { useState } from "react";
import userImage from "./assets/user.png";
import Google from "./assets/google.svg";
import Facebook from "./assets/facebook.svg";
import { useValidations } from "./hooks/usevalidations";

function App() {
  const {
    setUser,
    setPassword,
    errorUser,
    errorPassword,
    handleSubmit,
    password,
  } = useValidations();

  const handleChangeUser = (event) => {
    const inputValue = event.target.value;
    setUser(inputValue);
  };

  const handleChangePassword = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    console.log();
  };

  return (
    <div className="h-screen w-screen bg-neutral-300 flex justify-center items-center font-mainFont">
      <form
        className="w-[342px] min-h-[390px] shadow-2xl rounded-md bg-white relative px-4"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <img
            src={userImage}
            alt="user Icon"
            title="user"
            className="h-20 absolute -top-10 block"
          />
        </div>
        <fieldset className="mt-10 border-b border-neutral-300 relative">
          <legend className="text-xl text-[#1e1e42] text-center uppercase">
            sing up
          </legend>
          <div className="mb-3">
            <label htmlFor="email" className="block text-neutral-800 text-lg">
              Email
            </label>
            <input
              name="email"
              type="text"
              className="border-b border-black outline-none w-full text-md"
              placeholder="Example@gmail.com"
              onChange={handleChangeUser}
              required
            />
            {errorUser && <p className="text-sm text-red-500">{errorUser}</p>}
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-neutral-800 text-lg"
            >
              Contraseña
            </label>
            <input
              type="Password"
              name="password"
              className="border-b border-black outline-none w-full text-md"
              placeholder="1a2b3c45"
              onChange={handleChangePassword}
            />
            {errorPassword && (
              <p className="text-sm text-red-500">{errorPassword}</p>
            )}
          </div>
          <div className="mb-3 flex gap-1 items-center">
            <input
              type="checkbox"
              name="remenber"
              className="checked:bg-indigo-400 checked:accent-indigo-400"
            />
            <label htmlFor="remenber">Mantener mi cuenta</label>
          </div>
          <button className="bg-indigo-400 text-white w-full py-[7px] rounded-md outline-none mb-4 font-semibold">
            Enviar
          </button>
          <div className="w-full flex justify-center">
            <p className="absolute -bottom-3 flex text-lg bg-white px-2 text-center">
              o
            </p>
          </div>
        </fieldset>
        <footer className="flex flex-col my-2">
          <a href="https//google.com" className="mb-3 text-center">
            ¿ha olvidado su contraseña?
          </a>

          <div className="flex justify-between items-center w-full mb-1">
            <div className="bg-[#dc4e41] flex justify-center items-center px-14 py-1 rounded">
              <img
                src={Google}
                alt="Google Icon"
                title="Google"
                className="h-7"
              />
            </div>
            <div className="bg-[#3B5998] flex justify-center items-center px-14 py-1 rounded">
              <img
                src={Facebook}
                alt="Facebook Icon"
                title="Facebook"
                className="h-7"
              />
            </div>
          </div>
        </footer>
      </form>
    </div>
  );
}

export default App;
