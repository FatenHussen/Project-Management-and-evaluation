<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Services\ProjectService;
use App\Services\UserService;

class ProjectController extends Controller
{
    private $_service;
    private $user_service;

    public function __construct(ProjectService $service , UserService $user_service)
    {
        $this->_service = $service;
        $this->user_service = $user_service;
    }

    public function get_users_for_project($id)
    {

        $data = $this->_service->get_users_for_project($id);
        return $this->sendResponse(message:'',data:$data);
    }

    public function get_project_for_user()
    {
        $user_id = auth('users')->id();
        $data = $this->user_service->get_one_with_relation($user_id,'project');
        return $this->sendResponse(message:'',data:$data);
    }

    public function get_info_for_project($id)
    {
        $data = $this->_service->get_info_for_project($id);
        //$data['users'] =  $data = $this->_service->get_users_for_project($id);
        return $this->sendResponse(message:'',data:$data);
    }

    public function create_project(ProjectRequest $request)
    {
        $user = auth('users')->user();
        if ($user->project_id == null)
        {  $success = $request->validated();
            $data = $this->_service->create_project($success);
            return $this->sendResponse(message:'',data:$data);
        }
        else{
            return $this->sendError(message:'you created project');
            }
    }

    public function delete_project()
    {
        $user = auth('users')->user();
        $id = $user->project_id;
        $data = $this->_service->destroy($id);
        if($data == true)
        {
            return $this->sendResponse(message:'',data:$data);
        }
        else
        return $this->sendError(message:'not found');
    }

}
