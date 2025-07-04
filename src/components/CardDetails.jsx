import { useNavigate } from "react-router-dom";

const CardDetails = ({ selectedTrip, onClose }) => {
  const navigate = useNavigate()
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

    //PARTE NUOVA Fra//
  const handleCLick = () => {
    onClose()
    navigate(`/rubrica?id=${selectedTrip.id}`);
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

  if (!selectedTrip) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: 'rgba(34, 52, 84, 0.5)',
        zIndex: 1050
      }}
    >
      <div className="modal-dialog modal-md">
        <div
          className="modal-content border-0"
          style={{
            borderRadius: '20px',
            overflow: 'hidden'
          }}
        >
          <div
            className="modal-header text-white border-0"
            style={{
              backgroundColor: '#384FD8',
              background: 'linear-gradient(135deg, #384FD8 0%, #223454 100%)'
            }}
          >
            <h5 className="modal-title fw-bold d-flex align-items-center" style={{ fontSize: '1.1rem' }}>
              {selectedTrip.destinazione}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Chiudi"
            ></button>
          </div>

          <div className="modal-body p-4" style={{ backgroundColor: '#E7F0FF' }}>
            <div className="row">
              <div className="col-12">
                <div className="position-relative">
                  <img
                    src={selectedTrip.immagine}
                    className="img-fluid rounded mb-3 shadow-sm"
                    alt={selectedTrip.destinazione}
                    style={{
                      borderRadius: '15px',
                      objectFit: 'cover',
                      height: '200px',
                      width: '100%'
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
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h4 className="mb-3 fw-bold d-flex align-items-center" style={{ color: '#223454', fontSize: '1.3rem' }}>
                  <i className="fas fa-map-marker-alt me-2" style={{ color: '#384FD8' }}></i>
                  {selectedTrip.destinazione}
                </h4>

                <div className="mb-3">
                  <h6 className="d-flex align-items-center mb-1" style={{ color: '#223454', opacity: '0.8', fontSize: '0.9rem' }}>
                    Data di partenza:
                  </h6>
                  <p className="fw-bold mb-3 ms-4" style={{ color: '#223454', fontSize: '0.9rem' }}>
                    {formatDate(selectedTrip.dataInizio)}
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="d-flex align-items-center mb-1" style={{ color: '#223454', opacity: '0.8', fontSize: '0.9rem' }}>
                    Data di ritorno:
                  </h6>
                  <p className="fw-bold mb-3 ms-4" style={{ color: '#223454', fontSize: '0.9rem' }}>
                    {formatDate(selectedTrip.dataFine)}
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="d-flex align-items-center mb-1" style={{ color: '#223454', opacity: '0.8', fontSize: '0.9rem' }}>
                    Durata del viaggio:
                  </h6>
                  <p className="fw-bold mb-3 ms-4" style={{ color: '#223454', fontSize: '0.9rem' }}>
                    {calculateDuration(selectedTrip.dataInizio, selectedTrip.dataFine)} giorni
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="d-flex align-items-center mb-2" style={{ color: '#223454', opacity: '0.8', fontSize: '0.9rem' }}>
                    Descrizione:
                  </h6>
                  <p className="ms-4" style={{ color: '#223454', lineHeight: '1.6', fontSize: '0.85rem' }}>
                    Un viaggio indimenticabile alla scoperta di {selectedTrip.destinazione}.
                    Immergiti nella cultura locale, scopri monumenti storici e vivi esperienze uniche.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer border-0 p-3" style={{ backgroundColor: '#E7F0FF' }}>
            <button
              type="button"
              onClick={handleCLick}
              className="btn px-3 py-2 fw-bold d-flex align-items-center justify-content-center modal-btn"
              style={{
                backgroundColor: '#384FD8',
                borderColor: '#384FD8',
                color: 'white',
                borderRadius: '25px',
                fontSize: '0.8rem'
              }}
            >
              Vai a rubrica
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;