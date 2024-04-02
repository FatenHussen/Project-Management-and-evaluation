<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
    use HasFactory;
    protected $table = "students";
    protected $fillable = [
        'firstname',
        'lastname',
        'user_id',
        'year',
        'specialization',
        'project_semester',
        'completed_hours',
        'current_semester_hours',
        'cumulative_gpa'
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
