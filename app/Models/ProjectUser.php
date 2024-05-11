<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectUser extends Model
{
    use HasFactory;
    
    protected $table = 'project_user';

    protected $fillable = ['project_id', 'user_id'];

    /**
     * Define a many-to-many relationship with the User model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Define a many-to-many relationship with the Project model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
  
}
