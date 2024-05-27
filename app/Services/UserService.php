<?php

namespace App\Services;

use App\Models\User;
use App\Services\BaseCrud\BaseCrudService;

class UserService extends BaseCrudService
{

    protected $user;
    public function __construct(User $user)
    {
        parent::__construct($user);
    }

    public function get_all()
    {
        return  User::all()->map(function ($user) {
            $semester = $user->project->semester->name ?? 'No project yet';
            $user['semester'] = $semester;
            return $user;
        });
    }
}