<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\SpecializationRequest;
use App\Models\Specialization;
use App\Services\SpecializationService;

class SpecializationController extends Controller
{

    private  $_service;
    public function __construct(SpecializationService $service)
    {
        $this->_service = $service;
    }

    public function all_specializations()
    {
        $data = $this->_service->get_all();
        return $this->sendResponse(message: '', data: $data);
    }

    public function one_specialization($id)
    {
        $data = $this->_service->get_one($id);
        return $this->sendResponse(message: '', data: $data);
    }


    public function create_specialization(SpecializationRequest $request)
    {
        $data = $request->validated();
        $data = $this->_service->create($data);
        return $this->sendResponse(message: '', data: $data);
    }

    public function update_specialization(SpecializationRequest $request, $id)
    {
        $data = $request->validated();
        $data = $this->_service->update($id, $data);
        return $this->sendResponse(message: '', data: $data);
    }

    public function delete_specialization($id)
    {
        $data = $this->_service->destroy($id);
        if ($data == true) {
            return $this->sendResponse(message: '', data: $data);
        } else
            return $this->sendError(message: 'not found');
    }
}
