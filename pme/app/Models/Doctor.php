<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Doctor extends Model
{
    use HasFactory;
    protected $table = "doctors";
    protected $fillable = [
        'user_id',
        'firstname',
        'lastname',
    ];
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
