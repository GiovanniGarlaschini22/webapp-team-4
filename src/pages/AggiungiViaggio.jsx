import { useState } from "react";
import { useNavigate } from "react-router-dom";
import viaggiInCorso from "../../data/currentTrip";

const AggiungiViaggio = () => {
  const navigate = useNavigate();

  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [dataInizio, setDataInizio] = useState("");
  const [dataFine, setDataFine] = useState("");
  const [immagine, setImmagine] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titolo.trim() || !descrizione.trim() || !dataInizio || !dataFine) {
      setError("Tutti i campi (tranne immagine) sono obbligatori.");
      return;
    }

    const nuovoViaggio = {
      id: Date.now(),
      titolo,
      descrizione,
      dataInizio,
      dataFine,
      immagine: immagine.trim()
        ? immagine
        : "https://via.placeholder.com/600x400?text=Nuovo+Viaggio",
    };

    viaggiInCorso.push(nuovoViaggio);
    navigate("/viaggi");
  };

  return (
    <div className="container mt-4">
      <h2>Aggiungi Nuovo Viaggio</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Titolo</label>
          <input
            type="text"
            className="form-control"
            value={titolo}
            onChange={(e) => setTitolo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descrizione</label>
          <textarea
            className="form-control"
            value={descrizione}
            onChange={(e) => setDescrizione(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Data Partenza</label>
          <input
            type="date"
            className="form-control"
            value={dataInizio}
            onChange={(e) => setDataInizio(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Data Ritorno</label>
          <input
            type="date"
            className="form-control"
            value={dataFine}
            onChange={(e) => setDataFine(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL Immagine (opzionale)</label>
          <input
            type="text"
            className="form-control"
            value={immagine}
            onChange={(e) => setImmagine(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-5">
          Salva Viaggio
        </button>
      </form>
    </div>
  );
};

export default AggiungiViaggio;
