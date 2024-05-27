<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\EvaluationRequest;
use App\Http\Requests\FinalEvaluationRequest;
use App\Models\Employee;
use App\Models\Evaluation;
use App\Models\Project;
use App\Models\Weekly_evaluation;
use App\Services\EvaluationService;

class EvaluationController extends Controller
{
    private $_service;

    public function __construct(EvaluationService $service)
    {
        $this->_service = $service;
    }

    public function get_evaluations_for_project($id)
    {
        $data = $this->_service->get_evaluations_for_project($id);
        return $this->sendResponse(message: '', data: $data);
    }

    public function create_evaluation_for_project(EvaluationRequest $request)
    {
        $id = auth('employees')->id();
        $employee = Project::where('id', $request->project_id)
            ->whereHas('employees', function ($query) use ($id) {
                $query->where('employee_id', $id);
            })
            ->exists();
        if ($employee) {
            $count = Weekly_evaluation::where('project_id', $request->project_id)->count();
            if ($count < 16) {
                $info = $request->validated();
                $info['employee_id'] = $id;
                $data = $this->_service->create_evaluation_for_project($info);
                return $this->sendResponse(message: '', data: $data);
            } else {
                return $this->sendResponse(message: '16 weekly evaluations were recorded for this project');
            }
        } else {
            return $this->sendResponse(message: 'You are not assigned to this project');
        }
    }

    public function get_evaluations_for_user($id)
    {
        //$id = auth('users')->id();
        $data = $this->_service->get_evaluations_for_user($id);
        return $this->sendResponse(message: '', data: $data);
    }

    public function evaluations_for_user()
    {
        $id = auth('users')->id();
        $data = $this->_service->get_evaluations_for_user($id);
        return $this->sendResponse(message: '', data: $data);
    }

    public function create_evaluation(FinalEvaluationRequest $request)
    {
        $id = auth('employees')->id();
        $employee = Employee::find($id);
        if ($employee->is_evaluator) {
            $info = $request->validated();
            $info['employee_id'] = $id;
            $data = $this->_service->create_evaluation($info);
            return $this->sendResponse(message: '', data: $data);
        } else {
            return $this->sendResponse(message: 'you can not make evaluation');
        }
    }

    public function get_all_final_evaluations()
    {
        $id = auth('employees')->id();
        $employee = Employee::find($id);
        if ($employee->is_evaluator) {
            $data = $this->_service->get_final_evaluations();
            return $this->sendResponse(message: '', data: $data);
        } else {
            return 'you are not evaluator';
        }

    }

    public function get_all_mid_evaluations()
    {
        $id = auth('employees')->id();
        $employee = Employee::find($id);
        if ($employee->is_evaluator) {
            $data = $this->_service->get_mid_evaluations();
            return $this->sendResponse(message: '', data: $data);
        } else {
            return 'you are not evaluator';
        }

    }

    public function get_mid_user()
    {
        $id = auth('users')->id();
        $data = $this->_service->get_mid_user($id);
        return $this->sendResponse(message: '', data: $data);

    }

    public function get_final_user()
    {
        $id = auth('users')->id();
        $data = $this->_service->get_final_user($id);
        return $this->sendResponse(message: '', data: $data);
    }


    public function update_evaluation($id,FinalEvaluationRequest $request)
    {
        $employee_id = auth('employees')->id();
        $employee = Employee::find($employee_id);
        if ($employee->role != 'doctor')
        {
            return 'you can not open this api';
        }
        else
        {
            $info = $request->validated();
            $data = $this->_service->update($id, $info);

            return $this->sendResponse(message: '', data: $data);
        }
    }

}