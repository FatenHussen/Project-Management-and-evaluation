<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Supervisor extends Model
{
    use HasFactory;
    protected $table = "supervisors";
    protected $fillable = [
        'user_id',
        'firstname',
        'lastname',
        'specialization',
        'projects_per_semesters',
        'active_days'

    ];
    public function user()
    {
        return $this->HasOne(User::class, 'user_id', 'id');
    }
    public function groups()
    {
        return $this->hasMany(User::class, 'user_id', 'id');
    }
}
