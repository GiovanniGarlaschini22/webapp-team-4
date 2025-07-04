const AppFooter = () => {
  return (
    <footer
      className="text-white py-5 mt-5"
      style={{
        backgroundColor: '#223454',
        background: 'linear-gradient(135deg, #223454 0%, #384FD8 100%)'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <div
                className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  width: '50px',
                  height: '50px'
                }}
              >
                <i className="fas fa-route" style={{ color: '#fff', fontSize: '1.5rem' }}></i>
              </div>
              <div>
                <h5 className="text-white fw-bold mb-0">BooRoad</h5>
                <small className="text-white-50">Travel Agency</small>
              </div>
            </div>
            <p
              className="text-white-50 mb-0"
              style={{
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}
            >
              La tua agenzia di viaggi di fiducia per esperienze indimenticabili in tutto il mondo.
            </p>
          </div>

          <div className="col-md-6">
            <div className="text-center text-md-end">
              <h6 className="text-white fw-bold mb-3 d-flex align-items-center justify-content-center justify-content-md-end">
                <i className="fas fa-share-alt me-2"></i>
                Seguici sui social
              </h6>
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a
                  href="#"
                  className="text-white p-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    width: '45px',
                    height: '45px',
                    textDecoration: 'none'
                  }}
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-white p-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    width: '45px',
                    height: '45px',
                    textDecoration: 'none'
                  }}
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-white p-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    width: '45px',
                    height: '45px',
                    textDecoration: 'none'
                  }}
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-white p-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    width: '45px',
                    height: '45px',
                    textDecoration: 'none'
                  }}
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr
          className="my-4"
          style={{
            border: 'none',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
          }}
        />

        <div className="row">
          <div className="col-12 text-center">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
              <p
                className="mb-0"
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)'
                }}
              >
                © 2025 BooRoad. Tutti i diritti riservati.
              </p>
              <div className="d-flex gap-3">
                <a
                  href="#"
                  className="text-white-50 text-decoration-none"
                  style={{
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Privacy Policy
                </a>
                <span className="text-white-50">|</span>
                <a
                  href="#"
                  className="text-white-50 text-decoration-none"
                  style={{
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Termini di Servizio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;