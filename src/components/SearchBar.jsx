import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            onSearch('');
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="mb-3 mb-md-4">
            <div className="card">
                <div className="card-header py-2 py-3">
                    <h5 className="card-title mb-0 fs-6 fs-md-3">Cerca Partecipante</h5>
                </div>
                <div className="card-body p-2 p-md-3">
                    <div className="d-block d-md-none">
                        <div className="mb-2">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Cerca per nome e cognome"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <button
                                className="btn btn-primary btn-sm flex-fill"
                                type="button"
                                onClick={handleSubmit}
                            >
                                <i className="fas fa-search me-1"></i>
                                <span className="d-none d-sm-inline">Cerca</span>
                            </button>
                            {searchTerm && (
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    type="button"
                                    onClick={handleClear}
                                >
                                    <i className="fas fa-times"></i>
                                    <span className="d-none d-sm-inline ms-1">Pulisci</span>
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="d-none d-md-block">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Cerca per nome o cognome..."
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <button 
                                className="btn btn-primary ms-2 me-2" 
                                type="button"
                                onClick={handleSubmit}
                            >
                                <i className="fas fa-search"></i> Cerca
                            </button>
                            {searchTerm && (
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={handleClear}
                                >
                                    <i className="fas fa-times"></i> Pulisci
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;