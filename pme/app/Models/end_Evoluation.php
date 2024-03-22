<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class end_Evoluation extends Model
{
    use HasFactory;
    protected $table = "end_evoluation";
    protected $fillable = [
        'project_id',
        'name'

    ];
}
