import styles from "../styles/Navbar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <ul>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">EVENTS</a>
        </li>
        <li>
          <a href="#">SOCIAL</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
