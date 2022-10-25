import React from "react";
import styles from "../../../style";

const Shortcut = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-gradient-to-r from-purple-600 to-purple-300 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex md:text-start text-center flex-col">
        <h2 className={styles.heading2}>Venha fazer parte do nosso time!</h2>
        <p className={`${styles.paragraph} mt-5`}>
          Tudo o que você precisa para ter uma vida mais saudavel você encontra
          com a Hello Psi
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:mt-0 mt-10`}>
        <button
          type="button"
          className={`py-4 px-6 my-3 font-poppins font-medium text-[18px] text-black bg-white rounded-[10px] outline-none ${styles}`}
        >
          Realizar cadastro
        </button>
      </div>
    </section>
  );
};

export default Shortcut;
