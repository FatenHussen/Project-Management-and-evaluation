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
        Schema::create('final_evaluation', function (Blueprint $table) {
            $table->id();
            $table->string('member_1_name');
            $table->integer('member_1_degree');
            $table->text('member_1_description');
            $table->string('member_2_name');
            $table->integer('member_2_degree');
            $table->text('member_2_description');
            $table->string('member_3_name');
            $table->integer('member_3_degree');
            $table->text('member_3_description');
            $table->string('member_4_name');
            $table->integer('member_4_degree');
            $table->text('member_4_description');
            $table->string('title');
            $table->string('members');
            $table->string('notes')->nullable();
            $table->integer('rating');
            $table->integer('signal_study_rating');
            $table->integer('analytical_study_rating');
            $table->integer('design_rating');
            $table->integer('programming_rating');
            $table->integer('management_rating');
            $table->integer('github_rating');
            $table->integer('options_rating');
            $table->integer('results_analysis_rating');
            $table->integer('added_value_rating');
            $table->integer('estimate_rating');
            $table->integer('presentation_rating');
            $table->integer('total_score');
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
