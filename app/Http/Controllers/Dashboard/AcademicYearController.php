<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\AcademicYearRequest;
use App\Models\Academic_year;
use App\Services\AcademicYearService;
use Illuminate\Http\Request;

class AcademicYearController extends Controller
{
    private AcademicYearService $_service;

    public function __construct(AcademicYearService $service)
    {
        $this->_service = $service;
    }


    public function all_academic_years(){
        $data=[];
        $data = $this->_service->get_all();
        return $this->sendResponse(message:'',data:$data);

    }

    public function one_academic_year($id)
    {
        $data = $this->_service->get_one($id);
        return $this->sendResponse(message:'',data:$data);
    }


     public function create_academic_year(AcademicYearRequest $request)
     {
         $data = $request->validated();
         $data = $this->_service->create($data);
         return $this->sendResponse(message:'',data:$data);
     }

     public function update_academic_year(AcademicYearRequest $request, $id)
     {
         $data = $request->validated();
         $data = $this->_service->update($id, $data);
         return $this->sendResponse(message:'',data:$data);
     }

     public function delete_academic_year($id)
     {
         $data = $this->_service->destroy($id);
         if($data == true){
             return $this->sendResponse(message:'',data:$data);
         }
         else
         return $this->sendError(message:'not found');
     }

}