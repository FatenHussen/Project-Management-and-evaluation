<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'year', 'semester_id'];

    public function employees(): BelongsToMany
    {
        return $this->belongsToMany(Employee::class,'project_employee');
    }

    public function semester(): BelongsTo
    {
        return $this->belongsTo(Semester::class);
    }

    public function user(): HasMany
    {
        return $this->hasMany(User::class);
    }
    public function draft_proposal(): HasOne
    {

        return $this->hasOne(Proposal::class, 'project_id')->where('is_draft', true);
    }

    public function proposal(): HasOne
    {

        return $this->hasOne(Proposal::class, 'project_id')->where('is_draft', false);
    }

    public function evaluations() :HasMany
    {
        return $this->hasMany(Weekly_evaluation::class);
    }

}