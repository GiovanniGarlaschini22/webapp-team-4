import { Link } from "react-router-dom";const AppButtons = () => {
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
         
    </div>
  );
};

export default AppButtons;