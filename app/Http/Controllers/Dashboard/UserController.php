<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Services\EvaluationService;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private  $_service;
    private  $e_service;

    public function __construct(UserService $service, EvaluationService $e_service)
    {
        $this->_service = $service;
        $this->e_service = $e_service;
    }

    public function get_all()
    {
        $data = $this->_service->get_all();
        return $this->sendResponse(message: '', data: $data);
    }

    public function one_with_project($id)
    {
        $data = $this->_service->get_one_with_relation($id, 'project');
        return $this->sendResponse(message: '', data: $data);
    }

    public function evaluate_student($id)
    {
        $data = $this->e_service->evaluateStudent($id);
        return $this->sendResponse(message: '', data: $data);
    }
}
