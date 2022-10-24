import React from "react";
import styles from "../../../style";
import { people } from "../../../../assets";

const Header = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 flex justify-center items-center md:items-start flex-col xl:px-0 sm:px-10 px-6`}
    >
      <div className="flex flex-center justify-between items-center w-full">
        <h1 className="flex-1 md:text-start text-center font-poppins font-semibold ss:text-[55px] text-[35px] text-black">
          Com a <br className="lg:hidden"/> <span className="text-gradient">mente em paz</span>
          {","} <br /> você pode mais
        </h1>
      </div>
      <p className={`${styles.paragraph} text-gray-400 max-w-[480px] mt-4`}>
        Pensando sempre no seu bem-estar criamos a Hello Psi, um ambiente
        agradável e acolhedor para você.
      </p>
      <button className="mt-5 bg-purple-600 hover:bg-purple-500 px-5 py-2.5 rounded-lg text-white font-bold">
        Agende sua consulta
      </button>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={people}
        alt="peoople"
        className="w-[90%] h-[90%] md:w-[95%] md:h-[95%] relative z-[5]"
      />
    </div>
  </section>
);

export default Header;
