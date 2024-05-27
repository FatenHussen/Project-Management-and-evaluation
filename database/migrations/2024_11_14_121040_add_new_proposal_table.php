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
        Schema::table('proposals', function (Blueprint $table) {
            $table->string('project_lead')->nullable(); // Add the new string column
            $table->string('experts_mind')->nullable();
            $table->string('users_mind')->nullable();
            $table->string('stakeholders_mind')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('proposals', function (Blueprint $table) {
            $table->dropColumn('project_lead'); // Drop the new string column
            $table->dropColumn('experts_mind');
            $table->dropColumn('users_mind');
            $table->dropColumn('stakeholders_mind');
        });
    }
};