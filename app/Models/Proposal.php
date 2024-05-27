<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Proposal extends Model
{
    use HasFactory;
    protected $fillable = [
        'project_id', 'problem', 'domain', 'literature_references', 'main_map', 'experts', 'users', 'stakeholders', 'solution_literature_references',
        'mind_map', 'experts_mind', 'users_mind', 'stakeholders_mind',  'proposed_solution', 'functional_requirements',
        'non_functional_requirements', 'methodology', 'meetings', 'communication',
        'project_lead', 'file_sharing', 'platform', 'tools', 'languages', 'database',
        'packages',
        'date',
    ];

    public function project(): HasOne
    {
        return $this->hasOne(Project::class);
    }
    public function team_leader()
    {
        return $this->hasOne(User::class);
    }
}
