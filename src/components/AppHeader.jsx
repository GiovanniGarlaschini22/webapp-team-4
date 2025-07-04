import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header
      className="shadow-sm position-sticky top-0"
      style={{
        backgroundColor: '#384FD8',
        zIndex: 1030
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark py-2">
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold fs-5 text-white d-flex align-items-center" to="/">
            <i className="fas fa-map-marked-alt me-2"></i>
            BooRoad
          </Link>

          <button
            className="navbar-toggler border-0 p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: '#223454',
              borderRadius: '6px',
              width: '32px',
              height: '32px'
            }}
          >
            <span className="navbar-toggler-icon" style={{ fontSize: '0.8rem' }}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1">
                <Link
                  className="nav-link fw-medium text-white px-3 py-2 rounded-pill text-center d-flex align-items-center justify-content-center nav-btn"
                  to="/"
                  style={{
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem',
                    minWidth: '80px'
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  className="nav-link fw-medium text-white px-3 py-2 rounded-pill text-center d-flex align-items-center justify-content-center nav-btn"
                  to="/rubrica"
                  style={{
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem',
                    minWidth: '80px'
                  }}
                >
                  Rubrica
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  className="nav-link fw-medium text-white px-3 py-2 rounded-pill text-center d-flex align-items-center justify-content-center nav-btn"
                  to="/contattaci"
                  style={{
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem',
                    minWidth: '90px'
                  }}
                >
                  Contattaci
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style>
        {`
          .navbar-nav .nav-link:hover {
            background-color: #223454 !important;
            transform: translateY(-2px);
          }
          
          .navbar-toggler:focus {
            box-shadow: none;
          }
          
          .navbar-toggler:hover {
            background-color: #1a2640 !important;
          }
          
          @media (max-width: 991.98px) {
            .navbar-nav {
              background-color: #223454;
              margin-top: 1rem;
              padding: 1rem;
              border-radius: 12px;
            }
            
            .navbar-nav .nav-item {
              margin: 0.25rem 0;
            }
            
            .navbar-nav .nav-link {
              text-align: center;
              justify-content: center;
              font-size: 0.9rem !important;
            }
          }
          
          @media (max-width: 576px) {
            .nav-btn {
              padding: 0.4rem 1.5rem !important;
              font-size: 0.8rem !important;
              min-width: 70px !important;
            }
          }
        `}
      </style>
    </header>
  );
};

export default AppHeader;