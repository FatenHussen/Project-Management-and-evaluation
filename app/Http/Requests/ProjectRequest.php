<?php

namespace App\Http\Requests;

class ProjectRequest extends BaseRequest
{

    public function rules(): array
    {
        return [
            'name' => 'required|string|min:8',
            'description' => 'required|string|min:10',
            'semester_id' => 'required|numeric|exists:semesters,id',
            'year' => 'required|string',
            'students' => 'required|array|max:5',
            'students.*' => 'required|numeric|exists:users,id',
            'supervisors' => 'required|array|max:3',
            'supervisors.*' => 'required|numeric|exists:employees,id'
        ];
    }
}
