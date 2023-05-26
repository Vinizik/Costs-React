import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../imgs/costs_logo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="costs"></img>
        </Link>
        <ul className={styles.list}>
          <li className={styles.items}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.items}>
            <Link to="/projects">Projetos</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
