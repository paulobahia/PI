import React from 'react'
import styles from "../../../style";

const Advantage = () => {
  return (
    <section className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
      <div
        className={`flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-10 px-6`}
      >
        <div className="flex-row flex-center justify-between items-center w-full">
          <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[45px] text-[35px] text-black">
            Por que escolher a<br />{" "}
            <span>plataforma da Hello Psi</span>
          </h1>
          <div className={` ${styles.paddingY} text-[16px]  place-content-center font-medium mt-10 grid grid-rows-2 grid-flow-col gap-y-2 gap-x-10`}>
            <div>
              <p className='font-poppins font-bold text-[22px] text-black'>Profissionais qualificados</p>
              <p className={`font-poppins mt-3 font-semibold text-gray-500 text-[13px]`}>Profissionais qualificados e regulamentados no  Conselho. <br /> E selecionados a mão por nossa equipe</p>
            </div>
            <div>
              <p className='font-poppins font-bold text-[22px] text-black'>Ambiente próprio</p>
              <p className={`font-poppins mt-3 font-semibold text-gray-500 text-[13px]`}>Com a Hello Psi, nós disponibilizamos <br /> um  espaço totalmente personalizado para você.</p>
            </div>
            <div>
              <p className='font-poppins font-bold text-[22px] text-black'>
                Segurança e estabilidade
              </p>
              <p className={`font-poppins mt-3 font-semibold text-gray-500 text-[13px]`}>Mantendo assim o sigilo da suas informações <br /> e tornando a sua chamada o mais estável possivel</p>
            </div>
            <div>
              <p className='font-poppins font-bold text-[22px] text-black'>
                Pefil personalizado
              </p>
              <p className={`font-poppins mt-3 font-semibold text-gray-500 text-[13px]`}>Quem é você? Oque você precisa? O que gosta? <br /> Com a Hello Psi você personaliza seu perfi da sua maneira.  </p>
            </div>
            <div>
              <p className='font-poppins font-bold text-[22px] text-black'>
                Sempre com você
              </p>
              <p className={`font-poppins mt-3 font-semibold text-gray-500 text-[13px]`}>Possibilidade de agendamento conforme sua dispobilidade. <br /> A qualquer momento, você sempre em primeiro lugar! </p>
              <p className={`font-poppins mt-3 font-semibold text-gray-500 text-[13px]`}></p>
            </div>
            <div>
              <p className='font-poppins font-bold text-[22px] text-black'>Blog exclusivo</p>
              <p className={`font-poppins mt-3 font-semibold text-gray-500 text-[13px]`}>Feed de noticias, e tira dúvidas  referente <br /> ao nosso sistema e ao seu bem-estar</p>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default Advantage


