import { useEffect, useState } from "react";
import ViaggioSelector from '../components/ViaggioSelector';
import PartecipantiTable from '../components/PartecipantiTable';
import SearchBar from '../components/SearchBar';
import users from '../../data/users.js';
import viaggiInCorso from '../../data/currentTrip.js';
import { useLocation } from "react-router-dom";

const Rubrica = () => {
    const [selectedViaggioId, setSelectedViaggioId] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleViaggioSelect = (viaggioId) => {
        setSelectedViaggioId(viaggioId);
        setIsSearching(false);
        setSearchResults([]);
    };

    //PARTE NUOVA Fra//
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const idFromUrl = params.get("id");
        if (idFromUrl) {
            const id = parseInt(idFromUrl);
            const exists = viaggiInCorso.find((v) => v.id === id);
            if (exists) {
                setSelectedViaggioId(id);
            }
        }
    }, [location.search, selectedViaggioId]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const idFromUrl = params.get("id");
        if (idFromUrl) {
            window.scrollTo({ top: 100, behavior: "smooth" });
        }
    }, [location.search]);


    const handleSearch = (searchTerm) => {
        if (searchTerm.trim() === '') {
            setSearchResults([]);
            setIsSearching(false);
            return;
        }

        const results = users.filter(user =>
            user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.cognome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            `${user.nome} ${user.cognome}`.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(results);
        setIsSearching(true);
    };

    const getSelectedViaggio = () => {
        return viaggiInCorso.find(viaggio => viaggio.id === selectedViaggioId);
    };

    const getPartecipanti = () => {
        if (isSearching) {
            return searchResults;
        }
        return selectedViaggioId ? users.filter(user => user.viaggioId === selectedViaggioId) : [];
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: '#EBF2F9', minHeight: '100vh' }}>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12">
                        {/* Page Header */}
                        <div className="text-center mb-5">
                            <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#384FD8',
                                borderRadius: '50%',
                                boxShadow: '0 8px 25px rgba(56, 79, 216, 0.3)'
                            }}>
                                <i className="fas fa-address-book" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                            </div>
                            <h1 className="display-6 fw-bold mb-2" style={{ color: '#223454' }}>
                                Rubrica Viaggi
                            </h1>
                            <p className="lead mb-0" style={{ color: '#223454', opacity: '0.8' }}>
                                Gestisci i partecipanti ai tuoi viaggi
                            </p>
                        </div>

                        {/* Search Bar */}
                        <SearchBar onSearch={handleSearch} />

                        {/* Search Results Message */}
                        {isSearching && searchResults.length === 0 && (
                            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                                <div className="card-body text-center py-4" style={{ backgroundColor: '#FFF3CD' }}>
                                    <i className="fas fa-search mb-2" style={{ fontSize: '2rem', color: '#856404' }}></i>
                                    <h6 className="fw-bold mb-1" style={{ color: '#856404' }}>
                                        Nessun risultato trovato
                                    </h6>
                                    <p className="mb-0" style={{ color: '#856404', opacity: '0.8' }}>
                                        Prova a modificare i termini di ricerca
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Viaggio Selector */}
                        {!isSearching && (
                            <ViaggioSelector
                                viaggi={viaggiInCorso}
                                onSelect={handleViaggioSelect}
                                selectedId={selectedViaggioId}
                            />
                        )}

                        {/* Empty State */}
                        {!isSearching && !selectedViaggioId && (
                            <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                                <div className="card-body text-center py-5" style={{ backgroundColor: '#E7F0FF' }}>
                                    <i className="fas fa-map-marked-alt mb-3" style={{ fontSize: '3rem', color: '#384FD8', opacity: '0.5' }}></i>
                                    <h5 className="fw-bold mb-2" style={{ color: '#223454' }}>
                                        Seleziona un viaggio per iniziare
                                    </h5>
                                    <p className="mb-0" style={{ color: '#223454', opacity: '0.7' }}>
                                        Scegli un viaggio dal menu sopra per visualizzare i partecipanti
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Partecipanti Table */}
                        {(selectedViaggioId || (isSearching && searchResults.length > 0)) && (
                            <PartecipantiTable
                                viaggio={getSelectedViaggio()}
                                partecipanti={getPartecipanti()}
                                isSearchMode={isSearching}
                            />
                        )}

                        {/* Statistics */}
                        {(selectedViaggioId || isSearching) && getPartecipanti().length > 0 && (
                            <div className="row g-3 mt-4">
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                                        <div className="card-body p-3" style={{ backgroundColor: '#E7F0FF' }}>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#384FD8'
                                                    }}>
                                                        <i className="fas fa-users text-white"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 fw-bold" style={{ color: '#223454' }}>
                                                        Totale Partecipanti
                                                    </h6>
                                                    <h4 className="mb-0 fw-bold" style={{ color: '#384FD8' }}>
                                                        {getPartecipanti().length}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                                        <div className="card-body p-3" style={{ backgroundColor: '#E7F0FF' }}>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#00C851'
                                                    }}>
                                                        <i className="fas fa-check text-white"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 fw-bold" style={{ color: '#223454' }}>
                                                        Stato
                                                    </h6>
                                                    <h6 className="mb-0 fw-bold" style={{ color: '#00C851' }}>
                                                        {isSearching ? 'Ricerca Attiva' : 'Viaggio Selezionato'}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rubrica;