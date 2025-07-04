import React from 'react';

const ViaggioSelector = ({ viaggi, onSelect, selectedId }) => {
    const handleSelectChange = (event) => {
        const viaggioId = parseInt(event.target.value);
        onSelect(viaggioId);
    };

    return (
        <div className="mb-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Seleziona Viaggio</h5>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="viaggioSelect" className="form-label">Scegli un viaggio:</label>
                        <select
                            id="viaggioSelect"
                            className="form-select form-select-lg"
                            value={selectedId || ''}
                            onChange={handleSelectChange}
                        >
                            <option value="">-- Seleziona un viaggio --</option>
                            {viaggi.map(viaggio => (
                                <option key={viaggio.id} value={viaggio.id}>
                                    {viaggio.destinazione} ({viaggio.dataInizio} - {viaggio.dataFine})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViaggioSelector;