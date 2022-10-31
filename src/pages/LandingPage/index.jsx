import styles from "../../style";
import {
  Guide,
  Advantage,
  Feedback,
  Feed,
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
      <div className={`bg-slate-100 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Guide />
        </div>
      </div>
      <div className={`bg-slate-100 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Advantage />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Feedback />
          <Shortcut />
          <FAQ />
          <Feed />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-purple-500 ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default LadingPage;
