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
        Schema::create('weekly_evaluation_students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('evaluation_id')->nullable()->constrained('weekly_evaluations')->nullOnDelete();
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->integer('testing')->nullable();
            $table->integer('code')->nullable();
            $table->integer('design')->nullable();
            $table->integer('presentation')->nullable();
            $table->integer('report')->nullable();
            $table->integer('github')->nullable();
            $table->integer('refernce_study')->nullable();
            $table->integer('results')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weekly_evaluation_students');
    }
};