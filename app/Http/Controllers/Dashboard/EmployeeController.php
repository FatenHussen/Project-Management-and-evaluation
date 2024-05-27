<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Models\Employee;
use App\Services\EmployeeService;

class EmployeeController extends Controller
{

    private $_service;
    public function __construct(EmployeeService $service)
    {
        $this->_service = $service;
    }

    public function get_all()
    {

        $data = $this->_service->get_all();
        return $this->sendResponse(message: '', data: $data);
    }

    public function create_employee(EmployeeRequest $request)
    {

        $employee = $request->validated();
        $data = $this->_service->create($employee);

        return $this->sendResponse(message: '', data: $data);
    }

    public function update_employee(UpdateEmployeeRequest $request, $id)
    {

        $employee = $request->validated();
        $data = $this->_service->update($id, $employee);

        return $this->sendResponse(message: '', data: $data);
    }

    public function delete_employee($id)
    {
        $data = $this->_service->destroy($id);
        if ($data == true) {
            return $this->sendResponse(message: '', data: $data);
        } else {
            return $this->sendError(message: 'not found');
        }

    }

    public function get_projects()
    {
        $id = auth('employees')->id();
        $employee = Employee::find($id);
        if ($employee->is_evaluator == 0) {
            $data = $this->_service->get_one_with_relation($id, ['project','project.employees']);
        } else {
            $data = $this->_service->get_all_projects_for_evaluator();
        }

        return $this->sendResponse(message: '', data: $data);
    }

    public function get_profile()
    {
        $id = auth('employees')->id();

        $data['employee'] = $this->_service->get_one($id);

        return $this->sendResponse(message: '', data: $data);
    }

    public function get_users_for_academic($academic_id)
    {
        $id = auth('employees')->id();
        $employee = Employee::find($id);
        if ($employee->role != 'doctor')
        {
            return 'you can not open this api';
        }
        else
        {
            $data = $this->_service->get_users_for_academic($academic_id);

            return $this->sendResponse(message: '', data: $data);
        }
    }

    public function info_for_users()
    {
        $id = auth('employees')->id();
        $employee = Employee::find($id);
        if ($employee->role != 'doctor')
        {
            return 'you can not open this api';
        }
        else
        {
            $data = $this->_service->info_for_users();

            return $this->sendResponse(message: '', data: $data);
        }
    }

    public function all_employees()
    {
        $id = auth('employees')->id();
        $employee = Employee::find($id);
        if ($employee->role != 'doctor')
        {
            return 'you can not open this api';
        }
        else
        {
            $data = $this->_service->get_all();

            return $this->sendResponse(message: '', data: $data);
        }
    }

    public function info_all_projects()
    {
        $id = auth('employees')->id();
        $employee = Employee::find($id);
        if ($employee->role != 'doctor')
        {
            return 'you can not open this api';
        }
        else
        {
            $data = $this->_service->get_info_projects();

            return $this->sendResponse(message: '', data: $data);
        }
    }
}