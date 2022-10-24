import React from "react";
import styles from "../../../style";
import {
  guideLR,
  guideRL,
  bar,
  guideRL_xl,
  guideLR_xl,
} from "../../../../assets";

const Guide = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-10 px-6`}
      >
        <div className="flex flex-center justify-between items-center w-full">
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
          className={`flex w-full md:items-start items-center flex-col ${styles.paddingY}`}
        >
          <h2
            className={`font-poppins md:text-start text-center font-bold text-[30px]  text-black`}
          >
            1. Encontre o psicólogo <br className="md:hidden block" /> ideal
            para você
            <p className="my-3 font-medium text-[20px]">
              Na <span className="text-gradient ">Hello Psi,</span> você terá
              uma gama de especialistas qualificados.
            </p>
            <ul className="text-[16px] font-medium mt-5 grid grid-rows-3 grid-flow-col gap-2">
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
            </ul>
          </h2>
        </div>
        <div className="w-3/5 md:flex hidden">
          <img src={guideLR} alt="" />
        </div>
        <div
          className={`flex w-full md:items-end items-center flex-col ${styles.paddingY}`}
        >
          <h2
            className={`font-poppins md:text-start text-center font-bold text-[30px]  text-black`}
          >
            2. Agende sua consulta
            <p className="my-3 font-medium text-[20px]">
              Hora de escolher o melhor hórario para você
            </p>
            <ul className="text-[16px] font-medium mt-5 grid grid-rows-2 grid-flow-col gap-2">
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
            </ul>
          </h2>
        </div>
        <div className="w-3/5 md:flex hidden">
          <img src={guideRL} alt="" />
        </div>
        <div
          className={`flex w-full md:items-start items-center flex-col ${styles.paddingY}`}
        >
          <h2
            className={`font-poppins md:text-start text-center font-bold text-[30px]  text-black`}
          >
            3. Agora é só aproveitar sua terapia
            <p className="my-3   font-medium text-[20px]">
              Encontre um lugar confortável e tranquilo para assim iniciar a sua
              terapia
            </p>
            <ul className="text-[16px] font-medium mt-5 grid grid-rows-3 grid-flow-col gap-2">
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
              <li className="gap-2">
                <img src={bar} alt="bar" />
                Loren Ipsum
              </li>
            </ul>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Guide;
