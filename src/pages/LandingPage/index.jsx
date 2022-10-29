import styles from "../../style";
import {
  Guide,
  Advantage,
  Feedback,
  Feed,
  Shortcut,
  FAQ,
  Navbar,
  Header,
} from "./components";

export const LadingPage = () => {
  return (
    <div className="bg-purple-600 w-full overflow-hidden">
      <div className={`${styles.paddingX} sticky ${styles.flexCenter}`}>
        <Navbar />
      </div>
      <div className={`bg-slate-100 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Guide />
          <Advantage />
          <Feedback />
          <Shortcut />
          <FAQ />
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default LadingPage;
