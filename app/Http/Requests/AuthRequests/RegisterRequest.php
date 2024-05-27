<?php

namespace App\Http\Requests\AuthRequests;

use App\Http\Requests\BaseRequest;
use Illuminate\Validation\Rule;

class RegisterRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:15',
            'email' =>
            ['required', 'email',
            Rule::unique('users'),
            Rule::unique('admins'),
            Rule::unique('employees'),
        ],
            'password' => 'required|string|min:8',

        ];
    }
}