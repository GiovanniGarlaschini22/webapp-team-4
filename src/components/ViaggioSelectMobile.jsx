const ViaggioSelectMobile = ({ viaggi, selectedId, onSelectChange, formatDateForMobile, truncateDestination }) => {
    return (
        <>
            <label htmlFor="viaggioSelectMobile" className="form-label fs-7 fw-semibold d-block d-md-none text-dark">
                Viaggio:
            </label>

            <select
                id="viaggioSelectMobile"
                className="form-select form-select-sm d-block d-md-none border-2 rounded-3"
                value={selectedId || ''}
                onChange={onSelectChange}
            >
                <option value="">Seleziona</option>
                {viaggi.map(viaggio => (
                    <option key={viaggio.id} value={viaggio.id}>
                        {truncateDestination(viaggio.destinazione)} ({formatDateForMobile(viaggio.dataInizio, viaggio.dataFine)})
                    </option>
                ))}
            </select>
        </>
    );
};

export default ViaggioSelectMobile;