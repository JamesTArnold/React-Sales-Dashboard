import logo from "../logo.svg";
import "./Nav.scss";
const Nav = ({ isPerformanceActive, handleNav }) => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="navbar-brand-icon"
              src={logo}
              alt=""
              width="38"
              height="34"
            ></img>
            React Sales
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={() => handleNav(true)}
                  className={`nav-link${isPerformanceActive ? " active" : ""}`}
                  aria-current={`${isPerformanceActive ? "page" : false}`}
                  href="#"
                >
                  Performance
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => handleNav(false)}
                  className={`nav-link${isPerformanceActive ? "" : " active"}`}
                  href="#"
                >
                  Opportunities
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
