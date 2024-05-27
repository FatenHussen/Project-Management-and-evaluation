<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Weekly_evaluation extends Model
{
    use HasFactory;
    protected $fillable = ['project_id','employee_id','total', 'evaluation', 'notes','missions', 'date'];

    public function project() :BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function evaluations() :HasMany
    {
       return $this->hasMany(Weekly_evaluation_student::class,'evaluation_id');
    }

    public function employee() :BelongsTo
    {
       return $this->belongsTo(Employee::class);
    }


}