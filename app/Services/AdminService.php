<?php

namespace App\Services;

use App\Models\Admin;
use App\Services\BaseCrud\BaseCrudService;

class AdminService extends BaseCrudService
{
    protected $admin;
    public function __construct(Admin $admin) {
        parent::__construct($admin);

    }

}