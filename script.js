function showRoomInfo(roomName) {
    const infos = {
        "Salle Réunion 1": ["Extincteur", "Sortie de secours"],
        "Salle Réunion 2": ["Extincteur"],
        "Salle Réunion 3": ["Détecteur de fumée"],
        "WC 1": ["Lave-mains", "Détecteur de fumée"],
        "WC 2": ["Lave-mains"],
        "Ascenseur G": ["Ascenseur", "Alarme"],
        "Ascenseur D": ["Ascenseur", "Alarme"],
        "Local Info": ["Serveur", "Extincteur"],
        "Réserve": ["Stockage", "Extincteur"]
    };

    const infoPanel = document.getElementById('info-panel');
    const items = infos[roomName] || ["Aucune information disponible."];

    infoPanel.innerHTML = `
        <h2>${roomName}</h2>
        <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
    infoPanel.style.display = 'block';
}
