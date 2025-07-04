import viaggiInCorso from "../../data/currentTrip";

const ViaggiPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Viaggi in Corso</h2>

      <div className="row g-4">
        {viaggiInCorso.map((viaggio) => (
          <div
            key={viaggio.id}
            className="col-md-6 col-lg-4"
            style={{ transition: "transform 0.2s" }}
          >
            <div
              className="card shadow-sm h-100 border-0 hover-effect"
              style={{ overflow: "hidden" }}
            >
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={viaggio.immagine}
                  className="card-img-top"
                  alt={viaggio.titolo}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />
              </div>
              <div className="card-body">
                <span className="badge bg-primary mb-2">In corso</span>
                <h5 className="card-title text-primary fw-bold">
                  {viaggio.titolo}
                </h5>
                <p className="card-text text-muted">
                  {viaggio.descrizione}
                </p>
                <p className="card-text">
                  <small>
                    <strong>Partenza:</strong> {viaggio.dataInizio}
                    <br />
                    <strong>Ritorno:</strong> {viaggio.dataFine}
                  </small>
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 text-end">
                <button className="btn btn-outline-primary btn-sm">
                  Dettagli
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-effect:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default ViaggiPage;
