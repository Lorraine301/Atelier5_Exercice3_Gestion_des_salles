<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    // Indiquer les champs qui peuvent être remplis en masse
    protected $fillable = ['name', 'capacity'];
}
