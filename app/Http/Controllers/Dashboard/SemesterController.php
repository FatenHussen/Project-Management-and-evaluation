<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\SemesterRequest;
use App\Services\SemesterService;

class SemesterController extends Controller
{
    protected $_service;
    public function __construct(SemesterService $service)
    {
        $this->_service = $service;
    }

    public function all_semesters()
    {
        $data = $this->_service->get_all();
        return $this->sendResponse(message: '', data: $data);
    }
    public function one_semester($id)
    {
        $data = $this->_service->get_one($id);
        return $this->sendResponse(message:'',data:$data);
    }


     public function create_semester(SemesterRequest $request)
     {
         $data = $request->validated();
         $data = $this->_service->create($data);
         return $this->sendResponse(message:'',data:$data);
     }

     public function update_semester(SemesterRequest $request, $id)
     {
         $data = $request->validated();
         $data = $this->_service->update($id, $data);
         return $this->sendResponse(message:'',data:$data);
     }

     public function delete_semester($id)
     {
         $data = $this->_service->destroy($id);
         if($data == true){
             return $this->sendResponse(message:'',data:$data);
         }
         else
         return $this->sendError(message:'not found');
     }

}