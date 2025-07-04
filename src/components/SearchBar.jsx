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

        // Ricerca in tempo reale
        if (value.trim() === '') {
            onSearch('');
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="mb-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Cerca Partecipante</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Cerca per nome o cognome..."
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <button className="btn btn-primary" type="submit">
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;