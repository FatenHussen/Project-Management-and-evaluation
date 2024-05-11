<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class final_Evaluation extends Model
{
    use HasFactory;
    protected $table = "final_evaluation";
    protected $fillable = [
        'id',
        'project_member_1_name',
        'project_member_1_degree',
        'project_member_1_description',
        'project_member_2_name',
        'project_member_2_degree',
        'project_member_2_description',
        'project_member_3_name',
        'project_member_3_degree',
        'project_member_3_description',
        'project_member_4_name',
        'project_member_4_degree',
        'project_member_4_description',
        'project_title',
        'project_members',
        'project_notes',
        'idea_rating',
        'signal_study_rating',
        'analytical_study_rating',
        'design_rating',
        'programming_rating',
        'management_rating',
        'github_rating',
        'options_rating',
        'results_analysis_rating',
        'added_value_rating',
        'estimate_rating',
        'presentation_rating',
        'total_score',
    ];
    public function User()
    {
        return $this->belongsToMany(User::class);
    }

}
