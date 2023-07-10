import styles from "../../styles/layout/Home.module.scss";

import React from "react-icons";
import { BiDrink } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";
import { AiOutlineCamera } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import { Link } from "react-router-dom";

function Home() {
  return (
    <header className={styles.container}>
      <div className={styles.text_container}>
        <h1>
          Pesquisar tour no próximo <span>Feriado</span>
        </h1>
        <p>Confira nossas melhores promoções</p>
        <div>
          <BiSearch className={styles.search} />
          <input type="text" name="" id="" />
        </div>
        <div className={styles.container_icons}>
          <Link to="/relax">
            <div className={styles.box_icons}>
              <BiDrink className={styles.icons} />
              <h4>Relax</h4>
            </div>
          </Link>
          <Link to="/cultural">
            <div className={styles.box_icons}>
              <FaTheaterMasks className={styles.icons} />
              <h4>Cultural</h4>
            </div>
          </Link>
          <Link to="/sports">
            <div className={styles.box_icons}>
              <GiMountains className={styles.icons} />
              <h4>Sports</h4>
            </div>
          </Link>
          <Link to="/history">
            <div className={styles.box_icons}>
              <AiOutlineCamera className={styles.icons} />
              <h4>History</h4>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Home;
