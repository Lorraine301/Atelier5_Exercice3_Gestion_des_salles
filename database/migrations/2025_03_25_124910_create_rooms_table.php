<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('rooms', function (Blueprint $table) {
        $table->id(); // Champ id
        $table->string('name'); // Nom de la salle
        $table->integer('capacity'); // Capacité de la salle
        $table->timestamps(); // Créé_at et mis à jour_at
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
