<?php

namespace App\Models;

use App\Models\Student;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;



class Group extends Model
{
    use HasFactory;
    protected $table="groups";
    protected $fillable=
    [  'user_id',
       'name',
       'supervisor_id',
       'project_id',
        'description',
];
    


public function supervisor(): BelongsTo
{
    return $this->BelongsTo(supervisor::class);

}
public function Students(): BelongsTo
{
    return $this->belongsTo(students::class);

}
public function projects(): BelongsTo
{ 
    return $this->BelongsTo(projects::class,'groups_id');

}
}
