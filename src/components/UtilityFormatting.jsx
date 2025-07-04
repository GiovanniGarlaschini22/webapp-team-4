

export const formatDateForMobile = (dataInizio, dataFine) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    };
    return `${formatDate(dataInizio)}-${formatDate(dataFine)}`;
};

export const truncateDestination = (destinazione, maxLength = 15) => {
    if (destinazione.length <= maxLength) return destinazione;
    return destinazione.substring(0, maxLength) + '...';
};