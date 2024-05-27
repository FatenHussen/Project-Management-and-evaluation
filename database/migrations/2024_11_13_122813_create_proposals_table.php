<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->nullable()->constrained('projects')->onDelete('set null');
            $table->string('problem')->nullable();
            $table->string('domain')->nullable();
            $table->text('literature_references')->nullable();
            $table->string('main_map')->nullable();//خريطة رئيسية(ملف)
            $table->string('experts')->nullable();
            $table->string('users')->nullable();
            $table->string('stakeholders')->nullable();//الأطراف المعنيين
            $table->text('solution_literature_references')->nullable();//مراجع
            $table->string('mind_map')->nullable();//ملف الخريطة الذهنية
            $table->text('proposed_solution')->nullable();
            $table->text('functional_requirements')->nullable();
            $table->text('non_functional_requirements')->nullable();
            $table->string('methodology')->nullable();
            $table->text('meetings')->nullable();
            $table->text('communication')->nullable();
            $table->foreignId('project_leader')->nullable()->constrained('users')->nullonDelete('cascade');//method technologies//
            $table->text('file_sharing')->nullable();
            $table->string('platform')->nullable();
            $table->string('tools')->nullable();
            $table->string('languages')->nullable();
            $table->string('database')->nullable();
            $table->string('packages')->nullable();
            $table->boolean('is_draft')->nullable()->default(1);
            $table->date('date')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('proposals');
    }
};