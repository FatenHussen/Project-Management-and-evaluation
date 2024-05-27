<?php

namespace App\Http\Requests;


class SpecializationRequest extends BaseRequest
{

    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3'
         ];
    }
}