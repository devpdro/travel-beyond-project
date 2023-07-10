import styles from "../../styles/layout/NavBar.module.scss";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/">
          <h1>Travel</h1>
        </Link>
      </div>
      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
