import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Real Estate</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/properties">Properties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">Buy/Sell/Rent</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pg">PG</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;

