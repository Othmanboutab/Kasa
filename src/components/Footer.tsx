import logo from "../assets/logo-white.svg";
import "../styles/component/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo-white" />
      <h3>© 2023 Kasa. All rights reserved</h3>
    </footer>
  );
};

export default Footer;
