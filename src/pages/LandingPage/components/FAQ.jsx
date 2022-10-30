import React, { useState } from "react";
import styles from "../../../style";
import HelloPsi from "./Accordion/HelloPsi";
import Patient from "./Accordion/Patient";
import Specialist from "./Accordion/Specialist";
import { searchFAQ } from "../../../../assets";

const FAQ = () => {
  const [showFAQ, setShowFAQ] = useState("Patient");
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
          className={`${styles.paragraph} text-purple-500 font-semibold text-center sm:text-start`}
        >
          Confira as perguntas mais frequentes sobre a Hello Psi
        </p>
        <div className="flex flex-center scroll-auto md:justify-start justify-center items-center w-full sm:gap-5 xs:gap-2 gap-4 mt-4">
          {showFAQ === "HelloPSI" ? (
            <button className="bg-purple-500 text-white font-semibold py-2 px-5 text-[14px] rounded">
              Hello Psi
            </button>
          ) : (
            <button
              onClick={() => setShowFAQ("HelloPSI")}
              className="bg-transparent text-purple-600 font-semibold xs:block hidden py-2 px-5 border text-[14px] border-purple-600 rounded"
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
        <div className={`md:flex w-full`}>
          {showFAQ === "HelloPSI" ? <HelloPsi /> : null}
          {showFAQ === "Patient" ? <Patient /> : null}
          {showFAQ === "Specialist" ? <Specialist /> : null}
          <div className="items-center justify-center">
            <img
              src={searchFAQ}
              alt="FAQ"
              className="max-w-[290px] md:block hidden"
            />
            <div className="text-center">
              <p className="font-medium m-4">Ainda tem alguma dúvida?</p>
              <button
                type="button"
                className="bg-transparent  hover:bg-purple-600 hover:text-white font-bold py-2 px-5 border text-[14px] border-purple-300 rounded-xl"
              >
                Fale conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
