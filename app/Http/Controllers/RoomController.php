<?php
namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    // Afficher toutes les salles
    public function index()
    {
        return Room::all();
    }

    // Afficher une salle spécifique
    public function show($id)
    {
        return Room::findOrFail($id);
    }

    // Créer une nouvelle salle
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'capacity' => 'required|integer',
        ]);

        $room = Room::create($request->all());
        return response()->json($room, 201);
    }

    // Mettre à jour une salle existante
    public function update(Request $request, $id)
    {
        $room = Room::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'capacity' => 'required|integer',
        ]);

        $room->update($request->all());
        return response()->json($room);
    }

    // Supprimer une salle
    public function destroy($id)
    {
        $room = Room::findOrFail($id);
        $room->delete();
        return response()->json(null, 204);
    }
}
