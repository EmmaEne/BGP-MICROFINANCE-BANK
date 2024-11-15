import "../App.css" 

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <div className="container-fluid mycontainer">
        <a href="#" className="navbar-brand">BGP Micro-finance</a>
      
        {/* Offcanvas Toggle Button (Visible on Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      
        {/* Standard Navbar (Visible on Desktop Only) */}
        <ul className="navbar-nav desktop">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Solution
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Link</a></li>
              <li><a className="dropdown-item" href="#">Another link</a></li>
              <li><a className="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Inside BGP Micro-finance
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Link</a></li>
              <li><a className="dropdown-item" href="#">Another link</a></li>
              <li><a className="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Resources
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Link</a></li>
              <li><a className="dropdown-item" href="#">Another link</a></li>
              <li><a className="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>
        </ul>
      
        {/* Signup Button (Visible on Desktop Only) */}
        <div className="signup d-none d-sm-block">
          <button className="btn">Sign up</button>
        </div>
      
        {/* Offcanvas Navigation (Hidden by Default for All Screen Sizes) */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >X</button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mobile">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Solution
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link</a></li>
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Inside BGP Micro-finance
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link</a></li>
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link</a></li>
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>
            </ul>
            <div className="signup mt-3">
              <button className="btn w-100">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Header;