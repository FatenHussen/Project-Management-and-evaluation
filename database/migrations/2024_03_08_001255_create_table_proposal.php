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
            Schema::create('proposals', function (Blueprint $table) {
                $table->id();
                $table->string('project_name');
                $table->string('problem');
                $table->string('field');
                $table->string('literature_references_problem')->nullable();
                $table->string('main_map')->nullable();
                $table->string('experts')->nullable();
                $table->string('users')->nullable();
                $table->string('stakeholders')->nullable();
                $table->string('literature_references_solution')->nullable();
                $table->string('mind_map')->nullable();
                $table->string('proposed_solution');
                $table->string('functional_requirements');
                $table->string('non_functional_requirements');
                $table->string('methodology');
                $table->string('meetings')->nullable();
                $table->string('communication')->nullable();
                $table->string('project_leader');
                $table->string('file_sharing')->nullable();
                $table->string('platform');
                $table->string('tools');
                $table->string('languages');
                $table->string('database');
                $table->string('packages')->nullable();
                $table->string('supervisor_1_name')->nullable(); 
                $table->string('supervisor_1_specialization')->nullable();;
                $table->string('supervisor_2_name')->nullable();
                $table->string('supervisor_2_specialization')->nullable();
                $table->string('supervisor_3_name')->nullable();
                $table->string('supervisor_3_specialization')->nullable();
                $table->string('student_1_name')->nullable();
                $table->string('student_1_role')->nullable();
                $table->string('student_2_name')->nullable();
                $table->string('student_2_role')->nullable();
                $table->string('student_3_name')->nullable();
                $table->string('student_3_role')->nullable();
                $table->string('student_4_name')->nullable();
                $table->string('student_4_role')->nullable();
                $table->string('student_5_name')->nullable();
                $table->string('student_5_role')->nullable();
                $table->date('date');
                $table->string('committee_decision')->nullable();
                $table->foreignId('project_id')->constraint('proposals_project_id_foreign')->foreignId('project_id')->onDelete('cascade');
                $table->timestamps();
            });
        }

        /**
         * Reverse the migrations.
         */
        public function down(): void
        {
            Schema::dropIfExists('table_project');
        }
    };
