import { useState } from 'react';
import viaggiInCorso from '../../data/currentTrip.js';
import TripCard from './TripCard';
import CardDetails from './CardDetails';
import AggiungiViaggio from "../pages/AggiungiViaggio";

const AppMain = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
   const [trips, setTrips] = useState(viaggiInCorso);

  const handleDettagli = (viaggio) => {
    setSelectedTrip(viaggio);
  };

  const closeDetails = () => {
    setSelectedTrip(null);
  };
const aggiungiViaggio = (nuovoViaggio) => {
    console.log("Aggiungo viaggio:", nuovoViaggio);
    setTrips((prev) => [...prev, nuovoViaggio]);
  };
  return (
    <main className="py-0" style={{ backgroundColor: '#EBF2F9' }}>
      <div className="container-fluid px-0">
        <div className="row g-0 mb-4">
          <div className="col-12 text-center py-5" style={{ backgroundColor: '#E7F0FF' }}>
            <div className="container">
              <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#384FD8',
                borderRadius: '50%',
                boxShadow: '0 8px 25px rgba(56, 79, 216, 0.3)'
              }}>
                <i className="fas fa-map-marked-alt" style={{ fontSize: '1.5rem', color: 'white' }}></i>
              </div>
              <h2 className="mb-3 fw-bold" style={{ color: '#223454', fontSize: '2rem' }}>
                Viaggi in Corso
              </h2>
              <p className="mb-0" style={{ color: '#223454', opacity: '0.7', fontSize: '1.1rem' }}>
                Scopri le destinazioni più affascinanti del mondo
              </p>
            </div>
          </div>
        </div>
           <div className="container">
          <AggiungiViaggio onAggiungi={aggiungiViaggio} />
        </div>

        <div className="container">
          <div className="row g-4 pb-5">
            {trips.map((viaggio) => (
              <TripCard
                key={viaggio.id}
                viaggio={viaggio}
                onDetailsClick={handleDettagli}
              />
            ))}
          </div>
        </div>
      </div>

      <CardDetails
        selectedTrip={selectedTrip}
        onClose={closeDetails}
      />
    </main>
  );
};

export default AppMain;