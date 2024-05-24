import "../../assets/css/header/footerCss.css";
import { BsDice1 } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Soporte</h4>
          <ul>
            <li>
              <a href="#">soporte@example.com</a>
            </li>
            <li>
              <a href="#">+57 3224029104</a>
            </li>
            <li>
              <address>p sherman calle wallaby 42 sidney</address>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Seguimiento</h4>
          <ul className="social-media-links">
            <li>
              <a>ingreso-usuario</a>
            </li>
            <li>
              <a>validacion-contabilidad</a>
            </li>
            <li>
              <a>aprobacion-admin</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
            lacinia diam, quis mollis tellus tincidunt at. Mauris sit amet dolor
            eget erat aliquam tincidunt.
          </p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Example Company</p>
      </div>
    </footer>
  );
};
