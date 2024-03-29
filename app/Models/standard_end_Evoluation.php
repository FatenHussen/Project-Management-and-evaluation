<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class standard_end_Evoluation extends Model
{
    use HasFactory;
    protected $table = "standard_end_evoluations";
    protected $fillable = [
        'supervisor_id',
        'evoluation_id',
        'standard_id',
        'degree'
    ];
}
