<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'project_name',
        'problem',
        'field',
        'literature_references_problem',
        'main_map',
        'experts',
        'users',
        'stakeholders',
        'literature_references_solution',
        'mind_map',
        'proposed_solution',
        'functional_requirements',
        'non_functional_requirements',
        'methodology',
        'meetings',
        'communication',
        'project_leader',
        'file_sharing',
        'platform',
        'tools',
        'languages',
        'database',
        'packages',
        'supervisor_1_name',
        'supervisor_1_specialization',
        'supervisor_2_name',
        'supervisor_2_specialization',
        'supervisor_3_name',
        'supervisor_3_specialization',
        'student_1_name',
        'student_1_role',
        'student_2_name',
        'student_2_role',
        'student_3_name',
        'student_3_role',
        'student_4_name',
        'student_4_role',
        'student_5_name',
        'student_5_role',
        'date',
        'committee_decision',
    ];
    public function projects()
{
    return $this->hasOne(Project::class);
}

}
