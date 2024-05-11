<?php

namespace App\Models;

use App\Models\Projects;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProjectStudent extends Model
{
    use HasFactory;
    
    protected $table = 'project_student';

    protected $fillable = ['project_id', 'student_id'];

    /**
     * Define a many-to-many relationship with the Student model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    /**
     * Define a many-to-many relationship with the Project model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
  
}
