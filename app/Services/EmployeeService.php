<?php

namespace App\Services;

use App\Models\Employee;
use App\Models\Project;
use App\Models\User;
use App\Services\BaseCrud\BaseCrudService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class EmployeeService extends BaseCrudService
{
    public function __construct(Employee $employee)
    {
        parent::__construct($employee);
    }

    public function get_all()
    {
        return Employee::with('specialization')->get()->map(function ($emp) {
            $emp['work_days'] = json_decode($emp['work_days']) ?? [];
            return $emp;
        });
    }

    public function create($data)
    {
        return Employee::create($data);
    }

    public function update($id, $data)
    {

        $objectToEdit = Employee::find($id);
        $data['old_password'] = $data['old_password'] ?? null;
        $data['new_password'] = $data['new_password'] ?? null;

        if ($data['old_password'] && $data['new_password']) {
            if (!Hash::check($data['old_password'], $objectToEdit->password)) {
                return 'password is wrong';
            }

            $objectToEdit->password = Hash::make($data['new_password']);
        }
        $data['work_days'] = json_encode($data['work_days'] ?? []);

        $objectToEdit->update($data);
        return $objectToEdit;
    }

    public function get_all_projects_for_evaluator()
    {
        return Project::all();
    }

    public function get_users_for_academic($academic_id)
    {
        return User::where('academic_year_id', $academic_id)->count();
    }

    public function info_for_users()
    {
        return User::select('name', 'current_hours', 'hours_completed', 'academic_year_id')
            ->with('project:name,year,semester_id')
            ->get();
    }

    public function get_info_projects()
    {
        
        return Project::with([
            'employees' => function ($query)
            {
                $query->select('employees.*', DB::raw('(SELECT COUNT(*) FROM weekly_evaluations WHERE weekly_evaluations.employee_id = employees.id) as evaluations_count'));
            }
        ])
        ->withCount('employees')
        ->get();
    }


    public function get_one_with_relation($id, $relation)
    {
        $object = Employee::where('id', $id)->with($relation)->first();
        return $object;
    }
}
