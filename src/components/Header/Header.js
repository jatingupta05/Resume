import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A Resume that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. It's free.
        </p>
      </div>
    </div>
  );
}

export default Header;