import { useState } from "react";
import viaggiInCorso from "../../data/currentTrip";

const ViaggiList = () => {
  const [viaggi, setViaggi] = useState(viaggiInCorso);
  const [showForm, setShowForm] = useState(false);

  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [dataInizio, setDataInizio] = useState("");
  const [dataFine, setDataFine] = useState("");
  const [immagine, setImmagine] = useState("");

  const handleAddClick = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);

  const handleSubmit = (e) => {
    e.preventDefault();

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

    const aggiornati = [...viaggi, nuovoViaggio];
    setViaggi(aggiornati);
    viaggiInCorso.push(nuovoViaggio);

    setTitolo("");
    setDescrizione("");
    setDataInizio("");
    setDataFine("");
    setImmagine("");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const aggiornati = viaggi.filter((v) => v.id !== id);
    setViaggi(aggiornati);
    viaggiInCorso.length = 0;
    viaggiInCorso.push(...aggiornati);
  };

  return (
    <div>
      <div className="text-end mb-3">
        {!showForm && (
          <button className="btn btn-success" onClick={handleAddClick}>
            + Aggiungi Viaggio
          </button>
        )}
      </div>

      {showForm && (
        <div className="card p-3 mb-4">
          <h5>Aggiungi Nuovo Viaggio</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Titolo"
                className="form-control"
                value={titolo}
                onChange={(e) => setTitolo(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <textarea
                placeholder="Descrizione"
                className="form-control"
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="row g-2 mb-2">
              <div className="col">
                <input
                  type="date"
                  placeholder="Partenza"
                  className="form-control"
                  value={dataInizio}
                  onChange={(e) => setDataInizio(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="date"
                  placeholder="Ritorno"
                  className="form-control"
                  value={dataFine}
                  onChange={(e) => setDataFine(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-2">
              <input
                type="text"
                placeholder="URL Immagine (opzionale)"
                className="form-control"
                value={immagine}
                onChange={(e) => setImmagine(e.target.value)}
              />
            </div>
            <div className="text-end">
              <button className="btn btn-secondary me-2" onClick={handleCancel} type="button">
                Annulla
              </button>
              <button type="submit" className="btn btn-primary">
                Salva
              </button>
            </div>
          </form>
        </div>
      )}

        </div>
  );
};

export default ViaggiList;