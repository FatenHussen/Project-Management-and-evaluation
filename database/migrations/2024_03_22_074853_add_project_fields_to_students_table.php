<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('students', function (Blueprint $table) {

            $table->string('project_semester');
            $table->integer('completed_hours');
            $table->integer('current_semester_hours');
            $table->double('cumulative_gpa', 4, 0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::dropIfExists('students');
    }
};
