<?php

namespace App\Http\Requests;

use App\Models\Project;
use App\Rules\StudentForProjectRule;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\ValidationRule;

class CreateProposalRequest extends BaseRequest
{

    public function rules(): array
    {

        $rules = $this->get('is_draft') == true ? [
            'project_id' => ['required', 'exists:projects,id'],
            'problem' => 'nullable|string|min:6',
            'domain' => 'nullable|string|min:6',
            'literature_references' => 'nullable|string|min:6',
            'main_map' => 'nullable|file',
            'experts' => 'nullable|string|min:6',
            'users' => 'nullable|string|min:6',
            'stakeholders' => 'nullable|string|min:6',
            'solution_literature_references' => 'nullable|string|min:6',
            'mind_map' => 'nullable|file',
            'experts_mind' => 'nullable|string|min:6',
            'users_mind' => 'nullable|string|min:6',
            'stakeholders_mind' => 'nullable|string|min:6',
            'proposed_solution' => 'nullable|string|min:6',
            'functional_requirements' => 'nullable|string|min:6',
            'non_functional_requirements' => 'nullable|string|min:6',
            'methodology' => 'nullable|string|min:6',
            'meetings' => 'nullable|string|min:6',
            'communication' => 'nullable|string|min:6',
            'project_leader' => 'nullable|numeric|exists:users,id',
            'file_sharing' => 'nullable|string|min:6',
            'platform' => 'nullable|string|min:6',
            'tools' => 'nullable|string|min:6',
            'languages' => 'nullable|string|min:6',
            'database' => 'nullable|string|min:6',
            'packages' => 'nullable|string|min:6',
            'date' => 'nullable|date',
            'student_role' => ['nullable', 'array'],
            'student_role.*.student_id' => ['nullable', 'numeric' , new StudentForProjectRule($this->get('project_id'))],
            'student_role.*.role' => ['nullable', 'string', 'min:3'],
        ] : [
            'project_id' => 'required|exists:projects,id',
            'problem' => 'required|string|min:6',
            'domain' => 'required|string|min:6',
            'literature_references' => 'required|string|min:6',
            'main_map' => 'required|file',
            'experts' => 'required|string|min:6',
            'users' => 'required|string|min:6',
            'stakeholders' => 'required|string|min:6',
            'solution_literature_references' => 'required|string|min:6',
            'mind_map' => 'required|file',
            'experts_mind' => 'nullable|string|min:6',
            'users_mind' => 'nullable|string|min:6',
            'stakeholders_mind' => 'nullable|string|min:6',
            'proposed_solution' => 'required|string|min:6',
            'functional_requirements' => 'required|string|min:6',
            'non_functional_requirements' => 'required|string|min:6',
            'methodology' => 'required|string|min:6',
            'meetings' => 'required|string|min:6',
            'communication' => 'required|string|min:6',
            'project_leader' => 'required|numeric|exists:users,id',
            'file_sharing' => 'required|string|min:6',
            'platform' => 'required|string|min:6',
            'tools' => 'required|string|min:6',
            'languages' => 'required|string|min:6',
            'database' => 'required|string|min:6',
            'packages' => 'required|string|min:6',
            'date' => 'required|date',
            'student_role.*.student_id' => ['required', 'numeric' , new StudentForProjectRule($this->get('project_id'))],
            'student_role.*.role' => ['required', 'string', 'min:3'],
        ];

        $project = Project::find($this->get('project_id'));
        if (isset($project)) {
            $project->user()->count();
        }
        return $rules;
    }
}