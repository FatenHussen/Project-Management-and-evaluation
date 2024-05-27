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
        Schema::create('evaluations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->nullable()->constrained('projects')->nullOnDelete();
            $table->foreignId('employee_id')->nullable()->constrained('employees')->nullOnDelete();
            $table->boolean('is_final')->nullable()->default(0);
            $table->date('date')->nullable();
            $table->json('project_idea')->nullable();
            $table->json('signal_study')->nullable();
            $table->json('analytical_study')->nullable();
            $table->json('design')->nullable();
            $table->json('programming')->nullable();
            $table->json('administration')->nullable();
            $table->json('github')->nullable();
            $table->json('results')->nullable();
            $table->json('value_added')->nullable();
            $table->json('appreciation')->nullable();
            $table->json('presentation')->nullable();
            $table->integer('final_result')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evaluations');
    }
};
