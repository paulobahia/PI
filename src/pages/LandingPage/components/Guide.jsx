import React from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import styles from "../../../style";
import {
  guideLR,
  guideRL,
  bar,
  guide1,
  guide2,
  guide3
} from "../../../../assets";
import { useEffect } from "react";

const Guide = () => {

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, [])


  return (
    <section className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
      <div
        className={`flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-10 px-6`}
      >
        <div className="flex flex-center  items-center w-full">
          <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[45px] text-[35px] text-black">
            Comece a utilizar o<br className="lg:hidden" />{" "}
            <span className="text-gradient">Hello Psi</span>
            {","} <br className="lg:flex hidden " /> agora mesmo
          </h1>
        </div>
        <p
          className={`${styles.paragraph} text-gray-400 text-center text-[16px] mt-4`}
        >
          Entenda todas as possibilidades <br className="md:hidden" /> e caminhe
          em direção ao seu bem-estar
        </p>
        <div
          data-aos='fade-left'
          className={`flex w-full md:justify-between justify-center ${styles.paddingY}`}
        >
          <div className="items-center flex md:text-start text-center">
            <h2
              className={`font-poppins font-bold text-[30px] text-black`}
            >
              1. Encontre o psicólogo <br className="md:hidden block" /> ideal
              para você
              <p className="my-3 font-medium text-[20px]">
                Na <span className="text-gradient ">Hello Psi,</span> você terá uma gama de especialistas qualificados.
              </p>
              <ul className="text-[16px] md:place-content-start place-content-center font-medium mt-5 grid grid-rows-2 grid-flow-col gap-y-2 gap-x-10">
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Segurança e confiabilidade
                </li>
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Especialistas licenciados
                </li>
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Versatilidade de acessos
                </li>
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Ambiente ideial para suas sessões
                </li>
              </ul>
            </h2>
          </div>
          <img src={guide1} alt="" className="md:flex hidden" />
        </div>
        <div className="w-3/5 md:flex hidden">
          <img src={guideLR} alt="" />
        </div>
        <div
          data-aos='fade-left'
          className={`flex w-full md:justify-between justify-center ${styles.paddingY}`}
        >
          <img src={guide2} alt="" className="md:flex hidden" />
          <div className="items-center flex md:text-start text-center">
            <h2
              className={`font-poppins font-bold text-[30px] text-black`}
            >
              2. Agende sua consulta
              <p className="my-3 font-medium text-[20px]">
                Hora de escolher o melhor hórario para você
              </p>
              <ul className="text-[16px] md:place-content-start place-content-center font-medium mt-5 grid grid-rows-2 grid-flow-col gap-y-2 gap-x-10">
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Hórarios flexiveis
                </li>
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Salas customizaveis.
                </li>
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                   Automação de agendamentos.
                </li>
              </ul>
            </h2>
          </div>

        </div>
        <div className="w-3/5 md:flex hidden">
          <img src={guideRL} alt="" />
        </div>
        <div
          data-aos='fade-left'
          className={`flex w-full md:justify-between justify-center ${styles.paddingY}`}
        >
          <div className="items-center flex md:text-start text-center">
            <h2
              className={`font-poppins font-bold text-[30px] text-black`}
            >
              3. Agora é só aproveitar sua terapia
              <p className="my-3 font-medium text-[20px]">
                Encontre um lugar confortável e tranquilo para assim iniciar a sua terapia
              </p>
              <ul className="text-[16px] md:place-content-start place-content-center font-medium mt-5 grid grid-rows-2 grid-flow-col gap-y-2 gap-x-10">
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Agora é só aproveitar a sua terapia.
                </li>
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Chat em tempo real.
                </li>
                <li className="gap-2">
                  <img data-aos="zoom-in" src={bar} alt="bar" />
                  Ambiente agradavel e seguro.
                </li>
              </ul>
            </h2>
          </div>
          <img src={guide3} alt="" className="md:flex hidden" />
        </div>
      </div>
    </section>
  );
};

export default Guide;
