import AppButtons from '../components/AppButtons';

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <div className="text-center py-5 mb-4" style={{
            background: 'linear-gradient(135deg, #E7F0FF 0%, #EBF2F9 50%, #D8E4F0 100%)',
            color: '#223454'
          }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 mx-auto">
                  <h1 className="display-5 fw-bold mb-3" style={{ color: '#223454' }}>
                    Benvenuto in BooRoad
                  </h1>
                  <p className="lead mb-4" style={{ color: '#223454', opacity: '0.8', fontSize: '1.1rem' }}>
                    Scopri i nostri viaggi in corso e prenota la tua prossima avventura!
                    <br />
                    Esplora destinazioni incredibili con la nostra esperienza.
                  </p>
                  <AppButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;