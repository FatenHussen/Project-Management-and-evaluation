<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequests\LoginEmployeeRequest;
use App\Http\Requests\AuthRequests\RegisterRequest;
use App\Http\Requests\AuthRequests\UpdateUserRequest;
use App\Http\Requests\AuthRequests\LoginRequest;
use App\Http\Requests\AuthRequests\SendOtpRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Services\AuthService;
use App\Services\EmployeeService;
use App\Services\UserService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private $_service;
    private $userService;
    private $employee;
    public function __construct(AuthService $service, UserService $userService, EmployeeService $employee)
    {
        $this->_service = $service;
        $this->userService = $userService;
        $this->employee = $employee;
    }

    public function register(RegisterRequest $request)
    {
        $user = $request->validated();
        $data = $this->_service->register($user);

        if ($data == false) {
            return $this->sendError(__('auth.faild_register'), 401);
        }

        return $this->sendError(__('auth.verify_account'), 401);
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        $res = $this->_service->login($data['email'], $data['password']);
        return $res;
    }

    public function send_otp(SendOtpRequest $request)
    {
        $data = $request->validated();
        $res = $this->_service->sendOtp($data['email']);

        if ($res == false) {
            return $this->sendError('Sending OTP failed', 401);
        }

        return $this->sendResponse(__('Sending OTP success'), 200);
    }

    public function verify_otp(Request $request)
    {
        $data = $request->all();
        $res = $this->_service->verifyOtp($data);
        return $res;
    }

    public function get_profile()
    {
        $id = auth('users')->id();

        $data['user'] = $this->userService->get_one($id);

        return $this->sendResponse(message: '', data: $data);
    }

    public function update_profile(UpdateUserRequest $request)
    {
        $user = auth('users')->id();

        $success = $request->validated();

        $data['user'] = $this->userService->update($user, $success);

        return $this->sendResponse(message: '', data: $data);
    }

    public function update_employee(UpdateEmployeeRequest $request)
    {
        $employee = auth('employees')->id();

        $success = $request->validated();

        $data = $this->employee->update($employee, $success);

        return $this->sendResponse(message: '', data: $data);
    }
}
