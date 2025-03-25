<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoomController;

Route::middleware('api')->get('/test', function () {
    return response()->json(['message' => 'API fonctionne !']);
});

Route::resource('rooms', RoomController::class);
Route::get('rooms', [RoomController::class, 'index']);
Route::post('rooms', [RoomController::class, 'store']);
Route::get('rooms/{id}', [RoomController::class, 'show']);
Route::put('rooms/{id}', [RoomController::class, 'update']);
Route::delete('rooms/{id}', [RoomController::class, 'destroy']);
