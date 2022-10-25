import React, { useState } from "react";
import styles from "../../../style";
import HelloPsi from "./Accordion/HelloPsi";
import Patient from "./Accordion/Patient";
import Specialist from "./Accordion/Specialist";

const FAQ = () => {
  const [showFAQ, setShowFAQ] = useState("");
  return (
    <section className={`${styles.paddingY}  flex-col relative `}>
      <div
        className={`flex-1 flex justify-center items-center md:items-start flex-col xl:px-0 sm:px-10 px-6`}
      >
        <div className="flex flex-center justify-between items-center w-full">
          <h1 className="flex-1 md:text-start text-center font-poppins font-semibold ss:text-[55px] text-[35px] text-black">
            Dúvidas
          </h1>
        </div>
        <p
          className={`${styles.paragraph} text-purple-500 font-semibold max-w-[480px]`}
        >
          Confira as perguntas mais frequentes <br /> sobre a Hello Psi
        </p>
        <div className="flex flex-center items-center w-full gap-5 mt-4">
          {showFAQ === "HelloPSI" ? (
            <button className="bg-purple-500 text-white font-semibold py-2 px-5  text-[14px] rounded">
              Hello Psi
            </button>
          ) : (
            <button
              onClick={() => setShowFAQ("HelloPSI")}
              className="bg-transparent text-purple-600 font-semibold py-2 px-5 border text-[14px] border-purple-600 rounded"
            >
              Hello Psi
            </button>
          )}
          {showFAQ === "Patient" ? (
            <button className="bg-purple-500 text-white font-semibold py-2 px-5  text-[14px] rounded">
              Paciente
            </button>
          ) : (
            <button
              onClick={() => setShowFAQ("Patient")}
              className="bg-transparent text-purple-600 font-semibold py-2 px-5 border text-[14px] border-purple-600 rounded"
            >
              Paciente
            </button>
          )}
          {showFAQ === "Specialist" ? (
            <button className="bg-purple-500 text-white font-semibold py-2 px-5  text-[14px] rounded">
              Especialista
            </button>
          ) : (
            <button
              onClick={() => setShowFAQ("Specialist")}
              className="bg-transparent text-purple-600 font-semibold py-2 px-5 border text-[14px] border-purple-600 rounded"
            >
              Especialista
            </button>
          )}
        </div>
        <div className={`${styles.boxWidth} text-center`}>
          {showFAQ === "HelloPSI" ? <HelloPsi /> : null}
          {showFAQ === "Patient" ? <Patient /> : null}
          {showFAQ === "Specialist" ? <Specialist /> : null}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
