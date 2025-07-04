import React, { useState } from 'react';
import CartellaSanitaria from './CartellaSanitaria';

const PartecipantiTable = ({ viaggio, partecipanti, isSearchMode }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleCartellaSanitaria = (user) => {
        setSelectedUser(user);
    };

    const handleCloseCartella = () => {
        setSelectedUser(null);
    };

    if (partecipanti.length === 0) {
        return null;
    }

    return (
        <div className="mb-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">
                        {isSearchMode ?
                            `Risultati ricerca (${partecipanti.length} partecipanti trovati)` :
                            `Partecipanti - ${viaggio?.destinazione}`
                        }
                    </h5>
                    {!isSearchMode && viaggio && (
                        <small className="text-muted">
                            Dal {viaggio.dataInizio} al {viaggio.dataFine}
                        </small>
                    )}
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Cognome</th>
                                    {isSearchMode && <th scope="col">Destinazione</th>}
                                    <th scope="col">Email</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Azioni</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partecipanti.map((partecipante, index) => (
                                    <tr key={partecipante.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{partecipante.nome}</td>
                                        <td>{partecipante.cognome}</td>
                                        {isSearchMode && <td>{partecipante.destinazione}</td>}
                                        <td>{partecipante.email}</td>
                                        <td>{partecipante.telefono}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-outline-info"
                                                onClick={() => handleCartellaSanitaria(partecipante)}
                                            >
                                                <i className="fas fa-file-medical"></i> Cartella Sanitaria
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-3">
                        <small className="text-muted">
                            Totale partecipanti: {partecipanti.length}
                        </small>
                    </div>
                </div>
            </div>

            {selectedUser && (
                <CartellaSanitaria
                    user={selectedUser}
                    onClose={handleCloseCartella}
                />
            )}
        </div>
    );
};

export default PartecipantiTable;