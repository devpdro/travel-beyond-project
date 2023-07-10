import styles from "../styles/NavBar.module.scss";


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h1>Travel</h1>
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
