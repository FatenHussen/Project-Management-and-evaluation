<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AcademicYearRequest extends BaseRequest
{

    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3',
        ];
    }
}