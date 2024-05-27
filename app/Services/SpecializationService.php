<?php

namespace App\Services;

use App\Models\Specialization;
use App\Services\BaseCrud\BaseCrudService;

class SpecializationService extends BaseCrudService
{

   public function __construct(Specialization $specialization) {
    parent::__construct($specialization);
   }

}
