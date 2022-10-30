import React, { useState } from "react";
import styles from "../../../style";

const Feed = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <div className={`${styles.paddingY} text-center  flex-col relative `}>Feed</div>;
};

export default Feed;
