import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/component/header.scss";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Kasa logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
            <div className="line"></div>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
            <div className="line"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
