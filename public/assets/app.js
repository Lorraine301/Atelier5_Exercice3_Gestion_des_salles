document.addEventListener('DOMContentLoaded', () => {
    // Charger les salles au démarrage
    getRooms();

    // Gestion du formulaire d'ajout de salle
    const form = document.getElementById('create-room-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const capacity = document.getElementById('capacity').value;
        createRoom(name, capacity);
    });

    // Gestion du formulaire de mise à jour de salle
    const updateForm = document.getElementById('update-room-form');
    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('update-room-id').value;
        const name = document.getElementById('update-name').value;
        const capacity = document.getElementById('update-capacity').value;
        updateRoom(id, name, capacity);
    });
});

// Fonction pour récupérer toutes les salles
function getRooms() {
    fetch('http://localhost:8000/api/rooms')
        .then(response => response.json())
        .then(data => {
            displayRooms(data);
        })
        .catch(error => console.error('Erreur:', error));
}

// Afficher les salles dans un tableau HTML
function displayRooms(rooms) {
    const list = document.getElementById('room-list');
    list.innerHTML = ''; // Clear existing content

    // Créer un tableau avec des en-têtes
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    // Créer les en-têtes de tableau
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Nom de la Salle';
    headerRow.appendChild(nameHeader);
    
    const capacityHeader = document.createElement('th');
    capacityHeader.textContent = 'Capacité';
    headerRow.appendChild(capacityHeader);
    
    const actionsHeader = document.createElement('th');
    actionsHeader.textContent = 'Actions';
    headerRow.appendChild(actionsHeader);
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Créer le corps du tableau (les lignes pour chaque salle)
    const tbody = document.createElement('tbody');
    rooms.forEach(room => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = room.name;
        row.appendChild(nameCell);

        const capacityCell = document.createElement('td');
        capacityCell.textContent = room.capacity;
        row.appendChild(capacityCell);

        const actionsCell = document.createElement('td');

        // Bouton Modifier
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Modifier';
        updateButton.classList.add('update');
        updateButton.addEventListener('click', () => fillUpdateForm(room));

        // Bouton Supprimer
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteRoom(room.id));

        // Ajouter les boutons dans la cellule "Actions"
        actionsCell.appendChild(updateButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    list.appendChild(table);
}


// Remplir le formulaire de mise à jour avec les données de la salle
function fillUpdateForm(room) {
    document.getElementById('update-room-id').value = room.id;
    document.getElementById('update-name').value = room.name;
    document.getElementById('update-capacity').value = room.capacity;

    // Afficher le formulaire de mise à jour
    document.getElementById('update-room-form').style.display = 'block';
}

// Fonction pour ajouter une nouvelle salle
function createRoom(name, capacity) {
    fetch('http://localhost:8000/api/rooms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, capacity }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Salle ajoutée:', data);
        getRooms(); // Recharger la liste des salles
    })
    .catch(error => console.error('Erreur:', error));
}

// Fonction pour mettre à jour une salle
function updateRoom(id, name, capacity) {
    fetch(`http://localhost:8000/api/rooms/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, capacity }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Salle mise à jour:', data);
        getRooms(); // Recharger la liste des salles

        // Cacher le formulaire de mise à jour après la mise à jour
        document.getElementById('update-room-form').style.display = 'none';
    })
    .catch(error => console.error('Erreur:', error));
}

// Fonction pour supprimer une salle
function deleteRoom(id) {
    fetch(`http://localhost:8000/api/rooms/${id}`, {
        method: 'DELETE',
    })
    .then(() => {
        console.log('Salle supprimée');
        getRooms(); // Recharger la liste des salles
    })
    .catch(error => console.error('Erreur:', error));
}
