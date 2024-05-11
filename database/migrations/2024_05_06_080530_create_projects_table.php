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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('project_member_1_name')->nullable();
            $table->string('project_member_2_name')->nullable();
            $table->string('project_member_3_name')->nullable();
            $table->string('project_member_4_name')->nullable();
            $table->string('project_member_5_name')->nullable();
            $table->string('supervisor_1_name')->nullable();
            $table->string('supervisor_2_name')->nullable();
            $table->string('supervisor_3_name')->nullable();
            $table->string('title');
            $table->text('description');
            $table->string('semester');
            $table->unsignedBigInteger('proposal_id')->nullable();

            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
