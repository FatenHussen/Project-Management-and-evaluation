<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Weekly_evaluation_student extends Model
{
    use HasFactory;

    protected $fillable = [
        'evaluation_id',
        'user_id',
        'testing',
        'code',
        'design',
        'presentation',
        'report',
        'github',
        'refernce_study',
        'results',
        'analysis',
        'final_result'
    ];

    public function evaluation() :BelongsTo
    {
        return $this->belongsTo(Weekly_evaluation::class,'evaluation_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}