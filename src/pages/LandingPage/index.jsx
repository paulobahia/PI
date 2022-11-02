import styles from "../../style";
import {
  Guide,
  Advantage,
  Feedback,
  Shortcut,
  FAQ,
  Contact,
  Navbar,
  Header,
} from "./components";

export const LadingPage = () => {
  return (
    <div className="bg-purple-600 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>
      <div className={`bg-slate-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className={`bg-purple-100 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Advantage />
        </div>
      </div>
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Guide />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Feedback />
          <Shortcut />
          <FAQ />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-gradient-to-br from-purple-600 to-purple-300 ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default LadingPage;
