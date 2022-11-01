import styles from "../../../style";
import { company, local, call } from "../../../../assets";

const Contact = () => {
  return (
    <div className={`${styles.paddingY}  text-center `}>
      <h2
        id="Contact"
        className="mb-4 text-4xl font-extrabold text-center text-white "
      >
        Fale conosco
      </h2>
      <p className="mb-8 lg:mb-14 font-light text-center text-white  sm:text-xl">
        Tem um problema técnico? Quer enviar comentários um Feedback? <br />
        Esta com duvidas sobre alguma funcionalidade do sistema ? Nos informe!
      </p>
      <div className="py-8 lg:py-10 px-4 mx-auto md:flex flex-1 justify-between w-full">
        <div className="w-full">
          <form action="#" className="space-y-3  w-full">
            <div className="flex w-full space-x-5 justify-between">
              <div className="w-full">
                <label
                  for="email"
                  className="block mb-2 text-sm text-start font-medium text-white "
                >
                  Primeiro nome
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-500 text-white text-sm rounded-lg focus:ring-primary-500  focus:border-primary-500 block w-full p-2.5"
                  placeholder="Kleber"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-start text-white "
                >
                  Ultimo nome
                </label>
                <input
                  type="email"
                  className="shadow-sm bg-gray-50 border border-gray-500 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Rodrigues"
                  required
                />
              </div>
            </div>
            <div className="flex w-full space-x-5 justify-between">
              <div className="w-full">
                <label
                  for="email"
                  className="block mb-2 text-sm text-start font-medium text-white "
                >
                  E-mail
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-500 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="kleber.R@gmail.com"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-start text-white "
                >
                  Motivo do contato
                </label>
                <input
                  type=""
                  className="shadow-sm bg-gray-50 border border-gray-500 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2 w-full">
              <label
                for="message"
                className="block mb-2 text-sm text-start font-medium text-white "
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-500 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>
            <p className="text-start font-medium text-[14px]">
              Ao enviar este formulário, você concorda com nossos{" "}
              <span className="font-bold text-white">termos e condições</span> e
              nossa{" "}
              <span className="font-bold text-white">
                política de privacidade
              </span>
              .
            </p>
            <div className="flex md:justify-start justify-center">
              <button
                type="submit"
                class="  py-2 mt-3 px-4 font-semibold bg-white rounded-lg"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
        <div className="w-full flex-col md:my-0 my-5 items-center ">
          <div className={"text-center mt-5 flex justify-center"}>
            <img src={company} alt="company" />
          </div>
          <p className={`text-[25px] font-bold text-white mt-2 text-center`}>
            Informações da Empresa:
          </p>
          <p className="mt-3 font-normal text-center text-white  sm:text-xl">
            Hello Psi
          </p>
          <div className={"text-center mt-5 flex justify-center"}>
            <img src={local} alt="company" />
          </div>
          <p className={`text-[25px] font-bold text-white mt-2 text-center`}>
            Endereço:
          </p>
          <p className="mt-3 font-normal text-center text-white  sm:text-xl">
            SILVER LAKE, United States 1941 Late Avenue
            <br />
            Zip Code/Postal code:03875
          </p>
          <div className={"text-center mt-5 flex justify-center"}>
            <img src={call} alt="company" />
          </div>
          <p className={`text-[25px] font-bold text-white mt-2 text-center`}>
            Contato:
          </p>
          <p className="mt-5 font-normal text-center text-white  sm:text-xl">
            Ligue-nos para falar com um membro da nossa equipa.
            <br /> Nós estamos sempre felizes em ajudar
          </p>
          <p className="font-extrabold text-black mt-3">+55 (31) 3247-3030</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
