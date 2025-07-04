const AppButtons = () => {
  return (
    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
      <button className="btn px-4 py-2 fw-bold d-flex align-items-center justify-content-center hero-btn" style={{
        backgroundColor: '#384FD8',
        borderColor: '#384FD8',
        color: 'white',
        borderRadius: '25px',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease'
      }}>
        Esplora Viaggi
      </button>
      <button className="btn btn-outline-primary px-4 py-2 fw-bold d-flex align-items-center justify-content-center hero-btn" style={{
        borderColor: '#384FD8',
        color: '#384FD8',
        borderRadius: '25px',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease'
      }}>
        Scopri di più
      </button>

      <style>
        {`
          .hero-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(56, 79, 216, 0.3);
          }
          
          .hero-btn:first-child:hover {
            background-color: #2c3faa !important;
            border-color: #2c3faa !important;
          }
          
          .hero-btn:last-child:hover {
            background-color: #384FD8 !important;
            color: white !important;
          }
          
          @media (max-width: 576px) {
            .hero-btn {
              padding: 0.5rem 2rem !important;
              font-size: 0.8rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AppButtons;