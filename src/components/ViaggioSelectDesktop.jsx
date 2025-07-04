
const ViaggioSelectDesktop = ({ viaggi, selectedId, onSelectChange }) => {
    return (
        <>
            <label htmlFor="viaggioSelect" className="form-label fs-7 fw-semibold d-none d-md-block text-dark">
                Scegli un viaggio:
            </label>

            <select
                id="viaggioSelect"
                className="form-select form-select-lg d-none d-md-block border-2 rounded-3"
                value={selectedId || ''}
                onChange={onSelectChange}
            >
                <option value="">Seleziona un viaggio</option>
                {viaggi.map(viaggio => (
                    <option key={viaggio.id} value={viaggio.id}>
                        {viaggio.destinazione} ({viaggio.dataInizio} - {viaggio.dataFine})
                    </option>
                ))}
            </select>
        </>
    );
};

export default ViaggioSelectDesktop;