<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employee extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $fillable = ['name', 'email', 'password', 'role', 'gender', 'specialization_id', 'work_days', 'projects_count','is_evaluator'];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'password' => 'hashed',
    ];

    public function project(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'project_employee');
    }


    public function evaluations() :HasMany
    {
       return $this->hasMany(Weekly_evaluation::class);
    }

    public function final_evaluations() :HasMany
    {
       return $this->hasMany(Evaluation::class);
    }

    public function specialization()
    {
        return $this->belongsTo(Specialization::class);
    }

}