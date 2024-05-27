<?php

namespace App\Http\Requests\AuthRequests;

use App\Http\Requests\BaseRequest;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'name' => 'nullable|string|min:3',
            'email' => 'nullable|email|unique:users:email',
            'password' => 'nullable|string|min:8',
            'student_number' => 'nullable|string|unique:users,student_number',
            'specialization_id' => 'nullable|exists:specializations,id',
            'academic_year_id' => 'nullable|exists:academic_years,id',
            'semester_id' => 'nullable|exists:semesters,id',
            'cumulative_average' => 'nullable',
            'gender' => 'nullable|string|min:4',
            'current_hours' => 'nullable|integer',
            'hours_completed' => 'nullable|integer',
        ];
    }
}