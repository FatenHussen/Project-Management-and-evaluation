<?php

namespace App\Http\Requests;

use App\Rules\UniqueEmailRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:15',
            'email' => ['required','email',
            Rule::unique('users'),
            Rule::unique('admins'),
            Rule::unique('employees'),],
            'password' => 'required|string|min:8',
            'role' => 'required|string|min:3',
            'is_evaluator' => 'required|boolean',

       ];
    }
}