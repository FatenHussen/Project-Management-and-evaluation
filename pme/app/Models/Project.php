<?php

namespace App\Models;

use App\Models\Group;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;
    protected $table = "projects";
    protected $fillable =
    [
        'name',
        'supervisors_id',
        'group_id',
    ];
    public function groups()
    {
        return $this->Hasone(Group::class, 'groups_id');
    }
}
