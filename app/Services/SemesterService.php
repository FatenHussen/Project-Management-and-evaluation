<?php

namespace App\Services;

use App\Models\Semester;
use App\Services\BaseCrud\BaseCrudService;

class SemesterService extends BaseCrudService
{
    public function __construct(Semester $semester)
    {
        parent::__construct($semester);
    }
}