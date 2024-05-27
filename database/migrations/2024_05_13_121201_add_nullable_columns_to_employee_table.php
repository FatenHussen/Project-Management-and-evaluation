<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->enum('gender', ["male", "female"])->nullable();
            $table->foreignId('specialization_id')->nullable()->constrained('specializations')->nullOnDelete();
            $table->json('work_days')->nullable();
            $table->integer('projects_count')->nullable();
        });
    }

    public function down()
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('gender');
            $table->dropConstrainedForeignId('specialization_id');
            $table->dropColumn('work_days');
            $table->dropColumn('projects_count');
        });
    }
};
