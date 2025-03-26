# Gestion des Salles avec Laravel et JavaScript

## Description
Cet exercice permet de créer une application web permettant de gérer des salles (ajout, modification, suppression et affichage). L'API backend est développée avec Laravel, tandis que le frontend utilise JavaScript pour interagir avec l'API via `fetch`.

## Prérequis
- PHP 8+
- Composer
- Laravel 10+
- Node.js (pour le développement frontend si nécessaire)
- MySQL ou SQLite (ou tout autre SGBD compatible avec Laravel)

## Installation

### Backend (Laravel)
1. Cloner le dépôt :
   ```sh
   git https://github.com/Lorraine301/Atelier5_Exercice3_Gestion_des_salles.git
   ```
2. Installer les dépendances Laravel :
   ```sh
   composer install
   ```

3. Exécuter les migrations pour créer la table `rooms` :
   ```sh
   php artisan migrate
   ```
4. Démarrer le serveur Laravel :
   ```sh
   php artisan serve
   ```

### Frontend (JavaScript pur)
1. Ouvrir `index.html` dans un navigateur.
2. Modifier `assets/app.js` pour pointer vers l'URL de l'API si nécessaire (par défaut `http://localhost:8000/api/rooms`).

## Fonctionnalités
- **Afficher les salles** : Liste dynamique des salles existantes.
- **Ajouter une salle** : Formulaire permettant d'ajouter une nouvelle salle.
- **Modifier une salle** : Mise à jour des informations d'une salle existante.
- **Supprimer une salle** : Suppression d'une salle de la base de données.

## Explication du Code

### Backend (Laravel)
#### 1. Migration (`database/migrations/xxxx_xx_xx_create_rooms_table.php`)
Ce fichier définit la structure de la table `rooms` avec les colonnes :
- `id` : Clé primaire auto-incrémentée.
- `name` : Nom de la salle.
- `capacity` : Capacité d'accueil.
- `timestamps` : Gère automatiquement `created_at` et `updated_at`.

#### 2. Modèle (`app/Models/Room.php`)
Le modèle `Room` représente une salle et définit les attributs remplissables (`fillable`).

#### 3. Contrôleur (`app/Http/Controllers/RoomController.php`)
Ce contrôleur implémente les opérations CRUD :
- `index()` : Récupère toutes les salles.
- `show($id)` : Récupère une salle par ID.
- `store(Request $request)` : Valide et crée une nouvelle salle.
- `update(Request $request, $id)` : Modifie une salle existante.
- `destroy($id)` : Supprime une salle.

#### 4. Routes (`routes/api.php`)
Définit les routes RESTful pour accéder aux salles via l'API (`GET`, `POST`, `PUT`, `DELETE`).

### Frontend (JavaScript)
#### 1. `getRooms()`
Récupère toutes les salles et les affiche dynamiquement dans la page HTML.

#### 2. `displayRooms(rooms)`
Affiche la liste des salles sous forme de tableau avec des boutons d'action (modifier/supprimer).

#### 3. `createRoom(name, capacity)`
Envoie une requête `POST` pour ajouter une nouvelle salle.

#### 4. `fillUpdateForm(room)`
Pré-remplit le formulaire de mise à jour avec les informations d'une salle existante.

#### 5. `updateRoom(id, name, capacity)`
Envoie une requête `PUT` pour modifier une salle.

#### 6. `deleteRoom(id)`
Envoie une requête `DELETE` pour supprimer une salle.

## Endpoints de l'API Laravel
| Méthode | Endpoint            | Description               |
|---------|--------------------|---------------------------|
| GET     | `/api/rooms`       | Récupérer toutes les salles |
| GET     | `/api/rooms/{id}`  | Récupérer une salle par ID |
| POST    | `/api/rooms`       | Créer une nouvelle salle |
| PUT     | `/api/rooms/{id}`  | Mettre à jour une salle |
| DELETE  | `/api/rooms/{id}`  | Supprimer une salle |

## Captures d'écran
Voici l'interface utilisateur avec le formulaire de mise à jour caché en premier lieu:

![Aperçu de l'interface](images/interface_principal.png)

Voici l'interface utilisateur avec le formulaire de mise à jour qui apparaisse quand on clique sur le bouton modifier:

![Aperçu de l'interface](images/interface_modification.png)

## Auteurs
- **RAHELIARISOA Andriamasy Lorraine Agnès** - Lorraine301

## License
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
