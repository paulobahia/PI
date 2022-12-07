import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { logo } from "../../../assets";


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
      navigate('/form')
    } catch (erro) {
      console.log(erro)
    }
  }
  return (

    <div className='bg-pastel h-screen'>
      <div className="p-10 flex">
        <div className="flex text-center">
          <img src={logo} alt="hellopsi" className="w-[50px] h-[50px]" />
          <h5 className="text-3xl ml-4 font-medium text-white bold text-center">Hello Psi</h5>
        </div>
      </div>
      
      <div className='flex h-5/6 justify-center items-center'>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-3" action="#">
            <h5 className="text-2xl font-medium text-gray-900 text-center dark:text-white">Registra-se na Hello Psi</h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu e-mail</label>
              <input type="text" ref={emailRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
            </div>
            {error == "Passwords do not match" ? <div>
              <label className="block mb-2 text-sm font-medium text-red-400 dark:text-white">Sua senha</label>
              <input type="password" ref={passwordRef} className="bg-gray-50 border border-red-500 text-red-500 text-sm rounded-lg focus:text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" />
            </div> :
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua senha</label>
                <input type="password" ref={passwordRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" />
              </div>}
            {error == "Passwords do not match" ? <div>
              <label className="block mb-2 text-sm font-medium text-red-400 dark:text-white">Confirmar senha</label>
              <input type="password" ref={passwordConfirmRef} className="bg-gray-50 border border-red-500 text-red-500 text-sm rounded-lg focus:text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" />
            </div> :
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar senha</label>
                <input type="password" ref={passwordConfirmRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" />
              </div>
            }
            {error == "Passwords do not match" ?  <p class="text-red-500 text-xs italic">Senha Incorreta</p> : null}
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
