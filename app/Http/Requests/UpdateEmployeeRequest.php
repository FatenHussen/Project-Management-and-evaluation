<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEmployeeRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'gender' => 'nullable|in:male,female',
            'specialization_id' => 'nullable|exists:specializations,id',
            'work_days' => 'nullable|array|max:5',
            'work_days.*' => 'string',
            'projects_count' => 'nullable|integer',
            'old_password' => 'nullable|string',
            'new_password' => 'nullable|string|min:8',
        ];
    }
}
