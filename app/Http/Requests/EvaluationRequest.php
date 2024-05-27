<?php

namespace App\Http\Requests;

class EvaluationRequest extends BaseRequest
{
    public function rules(): array
    {
        return
        [
            'project_id' => 'required|exists:projects,id',
            'total' => 'nullable|integer',
            'evaluation' => 'required|numeric',
            'notes' => 'required|string',
            'missions' => 'required|string',
            'date' => 'required|date',
            'weekly_evaluation_students.*.user_id' => 'required|exists:users,id',
            'weekly_evaluation_students.*.testing' => 'nullable|integer',
            'weekly_evaluation_students.*.code' => 'nullable|integer',
            'weekly_evaluation_students.*.design' => 'nullable|integer',
            'weekly_evaluation_students.*.presentation' => 'nullable|integer',
            'weekly_evaluation_students.*.report' => 'nullable|integer',
            'weekly_evaluation_students.*.github' => 'nullable|integer',
            'weekly_evaluation_students.*.refernce_study' => 'nullable|integer',
            'weekly_evaluation_students.*.results' => 'nullable|integer',
            'weekly_evaluation_students.*.analysis' => 'nullable|integer',
            'weekly_evaluation_students.*.final_result' => 'nullable|integer',

        ];
    }
}