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
        Schema::table('weekly_evaluation_students', function (Blueprint $table) {
            $table->integer('analysis')->nullable();
            $table->integer('final_result')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('weekly_evaluation_students', function (Blueprint $table) {
            $table->dropColumn('analysis');
            $table->dropColumn('final_result');
        });
    }
};
