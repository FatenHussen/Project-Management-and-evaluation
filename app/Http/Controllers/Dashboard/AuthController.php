<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequests\LoginAdminRequest;
use App\Http\Requests\AuthRequests\LoginRequest;
use App\Services\AdminService;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    private $_service;
    private $admin_service;
    public function __construct(AuthService $service, AdminService $admin_service)
    {
        $this->_service = $service;
        $this->admin_service = $admin_service;
    }

    // public function login(LoginRequest $request)
    // {
    //     $data = $request->validated();
    //     $success = $this->_service->login($data['email'], $data['password']);
    //     if ($success == false) {
    //         return $this->sendError(message: __('auth.faild_login'), code: 401);
    //     }

    //     return $this->sendResponse(message: __('auth.success_login'), code: 200, data: $success);
    // }

    public function logout(Request $request)
    {
        $success = $this->_service->logout($request);
        if ($success == false) {
            return $this->sendError(message: '', code: 401);
        }

        return $this->sendResponse(message: 'logout success', code: 200, data: $success);
    }

    public function get_profile()
    {
        $id = auth('admins')->id();

        $data['admin'] = $this->admin_service->get_one($id);

        return $this->sendResponse(message: '', data: $data);
    }
}