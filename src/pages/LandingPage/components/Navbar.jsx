import { useState } from "react";
import { logo, menu, close } from "../../../../assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let navigate = useNavigate();

  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <img src={logo} alt="hellopsi" className="w-[50px] h-[50px]" />
      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        <li
          className={`font-poppins  font-normal  text-[16px] text-white ml-10`}
        >
          <div className="gap-x-3 flex">
            <a
              className="hover:bg-purple-500 cursor-pointer rounded py-1 px-2"
            >
              Especialistas
            </a>
            <a
              href=""
              className="hover:bg-purple-500 cursor-pointer rounded py-1 px-2"
            >
              Empresa
            </a>
            <a
              href=""
              className="hover:bg-purple-500 cursor-pointer rounded py-1 px-2"
            >
              Blog
            </a>
          </div>
        </li>
      </ul>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className={`font-poppins font-normal  text-[16px] text-white`}>
          <div className="gap-x-5 flex items-center">
            <li className="md:flex hidden hover:bg-purple-500 cursor-pointer rounded py-1 px-2 ">
              Nossos Especialistas
            </li>
            <button
              onClick={() => { navigate('/login') }}
              type="button"
              className="bg-transparent  hover:bg-white hover:text-purple-600 font-bold py-2 px-5 border text-[14px] border-white rounded-xl"
            >
              Login
            </button>
            <button
              onClick={() => { navigate('/signin') }}
              type="button"
              className="py-2 px-5 rounded-xl hover:bg-purple-500 hover:text-white  bg-white font-bold text-[14px] text-purple-700"
            >
              Cadastro
            </button>
          </div>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"
            } p-6 bg-gradient-to-r from-purple-500 to-indigo-400 absolute top-20 right-0 mx-0 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-ends items-center flex-1">
            <div className={`font-poppins font-normal text-[16px] text-white`}>
              <li className="cursor-pointer">Especialistas</li>
              <li className="cursor-pointer">Empresa</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Nossos Especialistas</li>
              <div className="mt-5 flex gap-5">
                <button
                  type="button"
                  className="bg-transparent  hover:bg-white hover:text-purple-600 font-bold py-2 px-5 border text-[14px] border-white rounded-xl"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="py-2 px-5 rounded-xl hover:bg-purple-500 hover:text-white  bg-white font-bold text-[14px] text-purple-700"
                >
                  Cadastro
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
