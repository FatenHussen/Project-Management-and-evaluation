<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
// Correct import for your Project model
use App\Models\Project;

class Student extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $table = "students";
    
    protected $fillable = [
        'name', 'email', 'password', 'year', 'semester', 'specialization',
        'completedHours', 'currentHours', 'cgpa', 'gender', 'uniId', 'project_id'
    ];
    

    /**
     * The project associated with the student.
     */
    
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_students');
    }
}
