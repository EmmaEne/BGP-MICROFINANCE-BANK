import "../App.css" 

import logo from "/images/logo-icon-white.svg"

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <div className="container-fluid mycontainer">
        {/* <img src={logo} className="navbar-brand" /> */}
        <a href="#" className="navbar-brand">BGP Micro-finance</a>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Solution</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Link</a></li>
              <li><a className="dropdown-item" href="#">Another link</a></li>
              <li><a className="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Inside BGP Micro-finance</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Link</a></li>
              <li><a className="dropdown-item" href="#">Another link</a></li>
              <li><a className="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Resources</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Link</a></li>
              <li><a className="dropdown-item" href="#">Another link</a></li>
              <li><a className="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>
        </ul>
        <div className="signup">
        <button className="btn">Sign up</button>
        </div>
        </div>
    </nav>
  )
}

export default Header;