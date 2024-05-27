<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class VerificationCode extends Model
{
    use HasFactory;

    protected $table = "verification_codes" ;
    
    protected $fillable = [
        'code',
        'user_id',
        'end_at',
        'verified_at',
    ];


}
