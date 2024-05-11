<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;
    protected $table = "evaluations";
    protected $fillable = [
        'id',
        'member_1_name',
        'member_1_degree',
        'member_1_description',
        'member_2_name',
        'member_2_degree',
        'member_2_description',
        'member_3_name',
        'member_3_degree',
        'member_3_description',
        'member_4_name',
        'member_4_degree',
        'member_4_description',
        'title',
        'members',
        'notes',
        'rating',
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
        return $this->belongsTo(User::class);
    }
}
