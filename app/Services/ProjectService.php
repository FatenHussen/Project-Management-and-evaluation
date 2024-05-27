<?php

namespace App\Services;

use App\Models\Project;
use App\Models\User;
use App\Services\BaseCrud\BaseCrudService;

class ProjectService extends BaseCrudService
{
    public function __construct(Project $project)
    {
        parent::__construct($project);
    }

    public function get_users_for_project($id)
    {
        $users = User::where('project_id', $id)->get();
        return $users;
    }

    public function get_info_for_project($id)
    {
        $project = Project::find($id);
        $employees = $project->employees;
        $users = $project->user;
        $data['users'] = $users;
        $data['employees'] = $employees;
        return $data;
    }

    public function create_project($data)
    {
        $project = Project::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'year' => $data['year'],
            'semester_id' => $data['semester_id'],
        ]);

        $project->save();

        foreach ($data['students'] as $studentId) {
            $user = User::findOrFail($studentId);
            $user->project_id = $project->id;
            $user->save();
        }

        $project->employees()->attach($data['supervisors']);

        return $project;
    }

    public function get_info($id)
    {
        return Project::with('user', 'employees', 'proposal')->find($id);
    }

    public function get_project_for_user($user_id)
    {

    }

    public function get_all()
    {
        $projects = Project::with(['proposal', 'draft_proposal', 'user', 'employees'])
            ->get()
            ->map(function ($project) {
                $proposal = 'pending';
                if ($project->proposal) {
                    $proposal = 'complete';
                } elseif ($project->draft_proposal) {
                    $proposal = 'pending';
                }

                return [
                    'id' => $project->id,
                    'name' => $project->name,
                    'description' => $project->description,
                    'semester_id' => $project->semester_id,
                    'year' => $project->year,
                    'students' => $project->user->pluck('id'),
                    'supervisors' => $project->employees->pluck('id'),
                    'proposal' => $proposal,
                    'draft_proposal' => $project->draft_proposal ? 'pending' : 'not submitted',
                ];
            });

        return $projects;
    }

    public function get_status()
    {
        $projects = Project::with(['proposal', 'user', 'employees'])
            ->get()
            ->map(function ($project) {
                $proposalStatus = 'not submitted';
                if ($project->proposal) {
                    $proposalStatus = 'complete';
                }

                return [
                    'id' => $project->id,
                    'name' => $project->name,
                    'year' => $project->year,
                    'proposal_status' => $proposalStatus,
                    'semester_id'=>$project->semester
                ];
            });

        return $projects;
    }

}