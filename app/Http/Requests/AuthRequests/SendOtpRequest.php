<?php

namespace App\Http\Requests\AuthRequests;

use App\Http\Requests\BaseRequest;

class SendOtpRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required|email|exists:users,email',
        ];
    }
}
