<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;
    protected $fillable = [
        'project_id',
        'employee_id',
        'is_final',
        'date',
        'project_idea',
        'signal_study',
        'analytical_study',
        'design',
        'programming',
        'administration',
        'github',
        'results',
        'value_added',
        'appreciation',
        'presentation',
        'final_result',
    ];

    protected $casts = [
        'project_idea' => 'json',
        'signal_study' => 'json',
        'analytical_study' => 'json',
        'design' => 'json',
        'programming' => 'json',
        'administration' => 'json',
        'github' => 'json',
        'results' => 'json',
        'value_added' => 'json',
        'appreciation' => 'json',
        'presentation' => 'json',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
    public function evaluations()
    {
        return $this->belongsTo(Evaluation_student::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}