import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";


export const Signin = () => {

  let navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function handlecreateUser(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      await createUser(emailRef.current.value, passwordRef.current.value);
      navigate('/')
    } catch (erro){
      console.log(erro) 
    }
  }
  return (

    <div className='bg-pastel w-screen'>
      <div className='flex justify-center h-screen items-center'>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-3" action="#">
            <h5 className="text-2xl font-medium text-gray-900 text-center dark:text-white">Registra-se na Hello Psi</h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu e-mail</label>
              <input type="text" ref={emailRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua senha</label>
              <input type="" ref={passwordRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar senha</label>
              <input type="" ref={passwordConfirmRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" />
            </div>
            <button onClick={handlecreateUser} type="submit" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Inscrever-se</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Já possui uma conta?  <a href="/login" className="text-purple-600 hover:underline dark:text-purple-500">Conecte-se</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin
