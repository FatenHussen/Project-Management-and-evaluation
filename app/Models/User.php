<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'student_number',
        'specialization_id',
        'academic_year_id',
        'project_id',
        'cumulative_average',
        'gender',
        'current_hours',
        'hours_completed',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    //Relations

    public function specialization(): BelongsTo
    {
        return $this->BelongsTo(Specialization::class);
    }

    public function academic_year(): BelongsTo
    {
        return $this->BelongsTo(Academic_year::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function evaluations() :HasMany
    {
        return $this->hasMany(Weekly_evaluation_student::class);
    }

    public function evaluationss() :HasMany
    {
        return $this->hasMany(Evaluation_student::class);
    }


}