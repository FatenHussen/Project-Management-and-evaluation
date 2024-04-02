<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class supervisor_Committe extends Model
{
    use HasFactory;
    protected $table = "supervisor_committes";
    protected $fillable =
    [
        'committe_id',
        'supervisors_id',
    ];
}
