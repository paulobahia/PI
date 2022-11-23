import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { signInEmailandPassword } = useContext(AuthContext);

  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignInEmailandPassword(e) {
    e.preventDefault();
    try {
      await signInEmailandPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("Login Realizado");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-pastel w-screen'>
      <div className='flex justify-center h-screen items-center'>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-2xl font-medium text-gray-900 text-center dark:text-white">Entrar na Hello Psi</h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu e-mail</label>
              <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua senha</label>
              <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mantenha-me conectado</label>
              </div>
              <a href="/" className="ml-auto text-sm text-purple-600 hover:underline dark:text-purple-500">Esqueceu a senha?</a>
            </div>
            <button onClick={handleSignInEmailandPassword} type="submit" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Sem registro?  <a href="/signin" className="text-purple-600 hover:underline dark:text-purple-500">Registre-se agora</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login