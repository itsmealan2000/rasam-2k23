import styles from "../styles/Navbar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <ul className={styles.listDesk}>
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
      <ul className={styles.listMob}>
        <li>
          <a href="#">
            <i className="bi bi-info-circle-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-calendar2-event-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-people-fill"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
