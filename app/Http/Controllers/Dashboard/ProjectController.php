<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Services\ProjectService;
class ProjectController extends Controller
{
    private ProjectService $_service;

    public function __construct(ProjectService $service)
    {
        $this->_service = $service;
    }

    public function get_all()
    {
        $data = $this->_service->get_all();
        return $this->sendResponse(message: '', data: $data);
    }

    public function get_info($id)
    {
        $data =  $this->_service->get_info($id);
        return $this->sendResponse(message: '', data: $data);
    }

    public function get_status()
    {
        $data =  $this->_service->get_status();
        return $this->sendResponse(message: '', data: $data);
    }
}