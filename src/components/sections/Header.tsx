import "../../qc.global.css";

const Header = () => {
  const subForm = () => {
    console.log("Donate Now clicked");
  };

  return (
    <nav className="qcg-menu navbar navbar-light bg-white fixed-top border-bottom">
      {/* Updated Notification Bar */}
      <div
        id="covidNotification"
        className="container-fluid text-center d-flex align-items-center justify-content-center"
        style={{
          height: "50px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#000",
          zIndex: 1031,
          color: "white",
        }}
      >
        <div className="col">
          <a
            className="fw-bold text-decoration-none text-white"
            href="/covidinternational"
          >
            <img
              src="/palestine.png"
              alt="Palestine Flag"
              width="20"
              className="me-2"
            />
            <span>Free Palestine</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className="container-fluid navbar-expand-xxl bg-white justify-content-start justify-content-lg-between px-0"
        style={{ marginTop: "50px" }}
      >
        {/* Mobile Menu Toggle */}

        {/* Brand Logo */}
        <div className="h-100 bg-light" style={{ width: "1px" }}></div>

        <a className="navbar-brand py-6 mb-0 h1 bg-white ml-10 px-10" href="/">
          <img
            src="/logo.svg"
            alt="Logo"
            className="d-inline-block align-text-top"
            width={50}
            height={50}
          />
        </a>

        {/* Navigation Items */}
        <ul className="navbar-nav navbar-nav-2 mb-0 fw-medium align-items-center flex-row ms-auto">
         
        <li
            className="nav-item h-100 bg-light d-none d-md-block"
            style={{ width: "1px" }}
          ></li>
          <li className="nav-item d-none d-xl-block ">
            <a className="nav-link text-uppercase" href="/">
              Home
            </a>
          </li>

          <li
            className="nav-item h-100 bg-light d-none d-md-block"
            style={{ width: "1px" }}
          ></li>

          {/* Currency Dropdown */}
          <li className="nav-item  d-none d-md-block">
            <a
              className="nav-link text-uppercase"
              href="/reach-us"
            >
              Contact Us
            </a>
          </li>

          {/* Login Links */}
          <li
            className="nav-item h-100 bg-light d-none d-md-block"
            style={{ width: "1px" }}
          ></li>
          <li className="nav-item d-none d-md-flex">
            <a className="nav-link px-3 text-uppercase" href="/who-we-are">
              About Us
            </a>
          </li>
          <li
            className="nav-item h-100 bg-light d-none d-md-block"
            style={{ width: "1px" }}
          ></li>
          <li className="nav-item d-none d-md-flex">
            <a className="nav-link px-3 text-uppercase" href="/Dash-Admin/Profile/index.html">
              Profile
            </a>
          </li>
          <li className="profilemenumobile nav-item d-block d-md-none ml-4">
            <a href="/login">Login</a>
          </li>
          <li className="nav-item" id="basketIconDiv"></li>
        </ul>

        {/* Donate Button */}
        <ul className="navbar-nav flex-row d-none d-sm-block ms-0">
          <li>
            <form className="d-flex text-nowrap" style={{ height: "86px" }}>
              <button
                className="btn btn-light text-primary rounded-0 align-self-stretch px-5 f-base h-100"
                style={{
                  height: "86px",
                  backgroundColor: "white",
                  border: "1px solid #e9ecef",
                }}
                onClick={subForm}
                type="button"
              >
                <a href="/login" className="text-decoration-none">
                  Login
                </a>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
