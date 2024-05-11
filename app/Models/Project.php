<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'proposal_id',
        'project_member_1_name',
        'project_member_2_name',
        'project_member_3_name',
        'project_member_4_name',
        'project_member_5_name',
        'student_is',
        'supervisor_1_name',
        'supervisor_2_name',
        'supervisor_3_name',
        'title',
        'description',
        'semester',
    ];


   

    public function students()
    {
        return $this->belongsToMany(Student::class, 'project_students');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'project_users');
    }
    public function proposal()
{
    return $this->belongsTo(Proposal::class);
}


}
