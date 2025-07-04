import React from 'react';

const CartellaSanitaria = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div
            className="modal fade show"
            style={{
                display: 'block',
                backgroundColor: 'rgba(34, 52, 84, 0.5)',
                zIndex: 1050
            }}
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content border-0" style={{ borderRadius: '20px' }}>
                    <div
                        className="modal-header text-white border-0"
                        style={{
                            backgroundColor: '#384FD8',
                            background: 'linear-gradient(135deg, #384FD8 0%, #223454 100%)',
                            borderRadius: '20px 20px 0 0'
                        }}
                    >
                        <h5 className="modal-title fw-bold d-flex align-items-center">
                            <i className="fas fa-file-medical me-2"></i>
                            Cartella Sanitaria
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={onClose}
                            aria-label="Chiudi"
                        ></button>
                    </div>
                    <div className="modal-body p-4" style={{ backgroundColor: '#E7F0FF' }}>
                        <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-4" style={{ backgroundColor: 'white' }}>
                                <div className="row mb-4">
                                    <div className="col-12 text-center">
                                        <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#384FD8',
                                            borderRadius: '50%',
                                            boxShadow: '0 8px 25px rgba(56, 79, 216, 0.3)'
                                        }}>
                                            <i className="fas fa-user-md" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                                        </div>
                                        <h6 className="fw-bold mb-1" style={{ color: '#223454', fontSize: '1.2rem' }}>
                                            {user.nome} {user.cognome}
                                        </h6>
                                        <p className="mb-0" style={{ color: '#223454', opacity: '0.7' }}>
                                            <i className="fas fa-map-marker-alt me-1"></i>
                                            {user.destinazione}
                                        </p>
                                    </div>
                                </div>

                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="p-3 rounded" style={{ backgroundColor: '#F8FBFF', border: '1px solid #E7F0FF' }}>
                                            <h6 className="fw-bold mb-2 d-flex align-items-center" style={{ color: '#223454' }}>
                                                <i className="fas fa-id-card me-2" style={{ color: '#384FD8' }}></i>
                                                Dati Personali
                                            </h6>
                                            <div className="mb-2">
                                                <small className="text-muted d-block">Nome Completo</small>
                                                <span className="fw-medium" style={{ color: '#223454' }}>
                                                    {user.nome} {user.cognome}
                                                </span>
                                            </div>
                                            <div>
                                                <small className="text-muted d-block">Destinazione</small>
                                                <span className="badge px-2 py-1" style={{ backgroundColor: '#384FD8', fontSize: '0.8rem' }}>
                                                    {user.destinazione}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="p-3 rounded" style={{ backgroundColor: '#F8FBFF', border: '1px solid #E7F0FF' }}>
                                            <h6 className="fw-bold mb-2 d-flex align-items-center" style={{ color: '#223454' }}>
                                                <i className="fas fa-credit-card me-2" style={{ color: '#384FD8' }}></i>
                                                Codice Fiscale
                                            </h6>
                                            <div className="p-2 rounded" style={{ backgroundColor: '#E7F0FF' }}>
                                                <code className="fw-bold" style={{ color: '#223454', fontSize: '0.9rem', backgroundColor: 'transparent' }}>
                                                    {user.tesseraSanitaria}
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mt-1">
                                    <div className="col-md-6">
                                        <div className="p-3 rounded" style={{ backgroundColor: '#F8FBFF', border: '1px solid #E7F0FF' }}>
                                            <h6 className="fw-bold mb-2 d-flex align-items-center" style={{ color: '#223454' }}>
                                                <i className="fas fa-envelope me-2" style={{ color: '#384FD8' }}></i>
                                                Email
                                            </h6>
                                            <a
                                                href={`mailto:${user.email}`}
                                                className="text-decoration-none d-flex align-items-center"
                                                style={{ color: '#384FD8' }}
                                            >
                                                <i className="fas fa-external-link-alt me-1" style={{ fontSize: '0.8rem' }}></i>
                                                {user.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="p-3 rounded" style={{ backgroundColor: '#F8FBFF', border: '1px solid #E7F0FF' }}>
                                            <h6 className="fw-bold mb-2 d-flex align-items-center" style={{ color: '#223454' }}>
                                                <i className="fas fa-phone me-2" style={{ color: '#384FD8' }}></i>
                                                Telefono
                                            </h6>
                                            <a
                                                href={`tel:${user.telefono}`}
                                                className="text-decoration-none d-flex align-items-center"
                                                style={{ color: '#384FD8' }}
                                            >
                                                <i className="fas fa-external-link-alt me-1" style={{ fontSize: '0.8rem' }}></i>
                                                {user.telefono}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 p-3 rounded" style={{ backgroundColor: '#FFF3CD', border: '1px solid #FFEAA7' }}>
                                    <h6 className="fw-bold mb-2 d-flex align-items-center" style={{ color: '#856404' }}>
                                        <i className="fas fa-info-circle me-2"></i>
                                        Nota Importante
                                    </h6>
                                    <p className="mb-0" style={{ color: '#856404', fontSize: '0.9rem' }}>
                                        Questi dati sono riservati e protetti secondo le normative sulla privacy.
                                        L'uso è consentito solo per scopi medici e di emergenza durante il viaggio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-0 p-4" style={{ backgroundColor: '#E7F0FF' }}>
                        <button
                            type="button"
                            className="btn px-4 py-2 fw-medium me-2"
                            style={{
                                backgroundColor: '#D8E4F0',
                                borderColor: '#D8E4F0',
                                color: '#223454',
                                borderRadius: '25px',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={onClose}
                        >
                            <i className="fas fa-times me-1"></i>
                            Chiudi
                        </button>
                        <button
                            type="button"
                            className="btn px-4 py-2 fw-medium print-btn"
                            style={{
                                backgroundColor: '#384FD8',
                                borderColor: '#384FD8',
                                color: 'white',
                                borderRadius: '25px',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => window.print()}
                        >
                            <i className="fas fa-print me-1"></i>
                            Stampa
                        </button>
                    </div>
                </div>
            </div>
            <div onClick={onClose}></div>
        </div>
    );
};

export default CartellaSanitaria;