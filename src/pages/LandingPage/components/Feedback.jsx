import React from "react";
import styles from "../../../style";
import FeedbackCard from "./FeedbackCard";
import { people01, people02, people03 } from "../../../../assets";

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Fazer parte da Hello Psi me permitiu trabalhar em home office, e em menos de um ano, consegui ter uma gama de clientes que tenho hoje.",
    name: "Daniela Lima",
    title: "Psicanalista Clínico",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Excelente profissional, gostei muito da primeira sessão com ele! Recomendo a todos",
    name: "Felipe dos Santos",
    title: "Paciente de Marcos Felipe",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Sou psicóloga do Hello Psi há 03 anos e posso afirmar com toda certeza que ao ingressar na plataforma gerou um divisor de águas na minha vida",
    name: "Fernanda Lima",
    title: "Terapeuta",
    img: people03,
  },
];

const Feedback = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} text-black`}>
          O que as pessoas estão <br className="sm:block hidden" /> falando
          sobre nós
        </h2>
        <p className={`${styles.paragraph} text-left text-black max-w-[450px]`}>
          Depoimentos de pessoas que já estão conosco e resolveram dividir um
          pouco da experiencia de participar desse time incrivel que é a Hello
          Psi
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
