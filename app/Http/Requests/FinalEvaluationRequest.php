<?php

namespace App\Http\Requests;


class FinalEvaluationRequest extends BaseRequest
{

    public function rules(): array
    {
        return [
            'project_id' => ['required', 'exists:projects,id'],
            'is_final' => ['required', 'boolean'],
            'date' => ['required', 'date'],
            'project_idea' => ['required', 'json'],
            'signal_study' => ['required', 'json'],
            'analytical_study' => ['required', 'json'],
            'design' => ['required', 'json'],
            'programming' => ['required', 'json'],
            'administration' => ['required', 'json'],
            'github' => ['required', 'json'],
            'results' => ['required', 'json'],
            'value_added' => ['required', 'json'],
            'appreciation' => ['required', 'json'],
            'presentation' => ['required', 'json'],
            'final_result' => ['required', 'integer'],
            'evaluation_students' => ['required', 'array'],
            'evaluation_students.*.user_id' => ['required', 'exists:users,id'],
            'evaluation_students.*.grade' => ['required', 'integer'],
            'evaluation_students.*.notes' => ['required', 'string'],
        ];
    }
}