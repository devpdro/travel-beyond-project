import styles from "../../styles/layout/NavBar.module.scss";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/">
          <h1>TravelBeyond</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
