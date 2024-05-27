<?php

namespace App\Services;

use App\Models\Academic_year;
use App\Services\BaseCrud\BaseCrudService;

class AcademicYearService extends BaseCrudService
{
    public function __construct(Academic_year $academic_year) {
        parent::__construct($academic_year);
       }
}