import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>
          COVID ID
          </h1>
        </div>
        <div>
          <ul className={styles.navbar__item}>
            <li className={styles.navbar__nav}>Global</li>
            <li className={styles.navbar__nav}>Indonesia</li>
            <li className={styles.navbar__nav}>Provinsi</li>
            <li className={styles.navbar__nav}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
