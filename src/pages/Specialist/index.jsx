import React from 'react'
import styles from "../../style";
import {
    Navbar,
    Header,
} from "./components";

const Specialist = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <Navbar />
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Header />
                </div>
            </div>
        </div>
    )
}

export default Specialist