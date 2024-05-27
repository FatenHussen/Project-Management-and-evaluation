<?php

namespace App\Rules;

use App\Http\Requests\CreateProposalRequest;
use App\Models\Project;
use App\Models\User;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class StudentForProjectRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */

    protected $projectId;

    public function __construct($projectId)
    {
        $this->projectId = $projectId;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $student = User::find($value);

        if ($student && $student->project_id == $this->projectId) {
            return;
        } else
            $fail("Error.");
    }
}