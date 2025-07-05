import { useState } from "react";

const AggiungiViaggio = ({ onAggiungi }) => {
  const [destinazione, setDestinazione] = useState("");
  const [dataInizio, setDataInizio] = useState("");
  const [dataFine, setDataFine] = useState("");
  const [immagine, setImmagine] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuovoViaggio = {
      id: Date.now(),
      destinazione,
      dataInizio,
      dataFine,
      immagine: immagine || "https://via.placeholder.com/600x400?text=Nuovo+Viaggio",
    };

    onAggiungi(nuovoViaggio);

    setDestinazione("");
    setDataInizio("");
    setDataFine("");
    setImmagine("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-3 shadow-sm mb-4"
      style={{ borderRadius: "15px" }}
    >
      <h5>Aggiungi Viaggio</h5>
      <input
        type="text"
        placeholder="Destinazione"
        className="form-control mb-2"
        value={destinazione}
        onChange={(e) => setDestinazione(e.target.value)}
        required
      />
      <div className="row g-2 mb-2">
        <div className="col">
          <input
            type="date"
            className="form-control"
            value={dataInizio}
            onChange={(e) => setDataInizio(e.target.value)}
            required
          />
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            value={dataFine}
            onChange={(e) => setDataFine(e.target.value)}
            required
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="URL Immagine"
        className="form-control mb-2"
        value={immagine}
        onChange={(e) => setImmagine(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Salva
      </button>
    </form>
  );
};

export default AggiungiViaggio;
