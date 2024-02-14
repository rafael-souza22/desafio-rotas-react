import "./styles.css";
import homeIcon from "../../assets/home.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <div className="navbar-left">
          <div>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "active-menu-item " : ""
              }
            >
              Início
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "active-menu-item " : ""
              }
            >
              Produtos
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-menu-item " : ""
              }
            >
              Sobre nós
            </NavLink>
          </div>
        </div>
        <div className="navbar-icon">
          <Link to="/">
            {" "}
            <img src={homeIcon} alt="Início" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
