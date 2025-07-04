import React from 'react';
import ViaggioSelectMobile from './ViaggioSelectMobile';
import ViaggioSelectDesktop from './ViaggioSelectDesktop';
import { formatDateForMobile, truncateDestination } from '../components/UtilityFormatting';

const ViaggioSelector = ({ viaggi, onSelect, selectedId }) => {
    const handleSelectChange = (event) => {
        const viaggioId = parseInt(event.target.value);
        onSelect(viaggioId);
    };

    return (
        <div className="mb-3 mb-md-4">
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary text-white py-2 py-md-3 border-0">
                    <h5 className="card-title mb-0 fs-6 fs-md-5 fw-bold">
                        <i className=""></i>
                        Seleziona Viaggio
                    </h5>
                </div>
                <div className="card-body p-2 p-md-3 bg-light">
                    <div className="form-group">

                        <ViaggioSelectMobile
                            viaggi={viaggi}
                            selectedId={selectedId}
                            onSelectChange={handleSelectChange}
                            formatDateForMobile={formatDateForMobile}
                            truncateDestination={truncateDestination}
                        />

                        <ViaggioSelectDesktop
                            viaggi={viaggi}
                            selectedId={selectedId}
                            onSelectChange={handleSelectChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViaggioSelector;