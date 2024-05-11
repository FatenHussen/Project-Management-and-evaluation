<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Models\Evaluation;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'password',
        'role',
        'specialization',
        'numOfProject',
        'gender',
        'activeDays'
    ];
    public function evaluations()
    {
        return $this->hasMany(Evaluation::class);
    }

    public function finalEvaluations()
    {
        return $this->hasMany(final_Evaluation::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_users');
    }

    public function committees()
    {
        return $this->belongsToMany(Committe::class);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'activeDays'=>'array',

    ];
}
