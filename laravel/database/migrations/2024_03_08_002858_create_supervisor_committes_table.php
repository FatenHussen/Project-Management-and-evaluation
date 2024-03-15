<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('supervisor_committes', function (Blueprint $table) {
            $table->foreignId('supervisor_id')->constrained('supervisors')->onDelete('cascade');
        
            $table->foreignId('committe_id')->constrained('committes')->onDelete('cascade');
        

            $table->id();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('supervisor_committes');
    }
};
