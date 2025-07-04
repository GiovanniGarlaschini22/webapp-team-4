const TripCard = ({ viaggio, onDetailsClick }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="col-12 col-md-6">
      <div
        className="card h-100 shadow-sm border-0 trip-card"
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="position-relative">
          <img
            src={viaggio.immagine}
            className="card-img-top"
            alt={viaggio.destinazione}
            style={{
              height: '200px',
              objectFit: 'cover'
            }}
          />
          <div className="position-absolute top-0 end-0 m-3">
            <span
              className="badge px-3 py-2 d-flex align-items-center"
              style={{
                backgroundColor: '#384FD8',
                fontSize: '0.7rem',
                borderRadius: '15px',
                border: '2px solid white'
              }}
            >
              <i className="fas fa-circle me-1" style={{ fontSize: '0.5rem', color: '#00ff00' }}></i>
              In corso
            </span>
          </div>
        </div>

        <div className="card-body d-flex flex-column p-4">
          <h5 className="card-title fw-bold mb-3 d-flex align-items-center" style={{ color: '#223454', fontSize: '1.1rem' }}>
            <i className="fas fa-map-marker-alt me-2" style={{ color: '#384FD8' }}></i>
            {viaggio.destinazione}
          </h5>

          <div className="mb-3">
            <p className="card-text mb-2 d-flex align-items-start" style={{ color: '#223454', opacity: '0.8', fontSize: '0.85rem' }}>
              <span>
                <strong className="me-2">Partenza:</strong>
                {formatDate(viaggio.dataInizio)}
              </span>
            </p>
            <p className="card-text mb-3 d-flex align-items-start" style={{ color: '#223454', opacity: '0.8', fontSize: '0.85rem' }}>
              <span>
                <strong className="me-2">Ritorno:</strong>
                {formatDate(viaggio.dataFine)}
              </span>
            </p>
          </div>

          <button
            className="btn mt-auto px-3 py-2 fw-bold d-flex align-items-center justify-content-center card-btn"
            style={{
              backgroundColor: '#384FD8',
              borderColor: '#384FD8',
              color: 'white',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              fontSize: '0.85rem'
            }}
            onClick={() => onDetailsClick(viaggio)}
          >
            Dettagli
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;