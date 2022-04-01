import logo from '../logo.svg';
import "./Nav.scss";

function Nav(props) {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark  bg-primary"  >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img className="navbar-brand-icon" src={logo} alt="" width="38" height="34" ></img>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={"nav-link " + props.activePage === "Performance" ? "active": ""} aria-current={ props.activePage === "Performance" ?  "page" : "false"} href="#" >
                  Performance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Opportunities
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
