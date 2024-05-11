<?php

namespace App\Http\Controllers;

use id;
use App\Models\Project;
use App\Models\Proposal;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    // Get all projects
    public function getAll()
    {
        $project = Project::with('proposals')->get(); // Assuming there's a 'project' relationship defined in Proposal model
        return response()->json($project);
    }

    // Display a specific Proposal evaluation by ID
    public function getById(Request $request, $id)
    {
        $project = Project::with('proposals')->find($id);
        if (!$project) {
            return response()->json(['message' => 'Proposal Not Found'], 404);
        }
        return response()->json($project);
    }

    // Create a new project with multiple students and users
    public function create(Request $request)
    {
        $request->validate([
            'project_member_1_name' => 'nullable|string|max:2048',
            'project_member_2_name' => 'nullable|string|max:2048',
            'project_member_3_name' => 'nullable|string|max:2048',
            'project_member_4_name' => 'nullable|string|max:2048',
            'project_member_5_name' => 'nullable|string|max:2048',
            'supervisor_1_name' => 'nullable|string|max:2048',
            'supervisor_2_name' => 'nullable|string|max:2048',
            'supervisor_3_name' => 'nullable|string|max:2048',
            'title' => 'required|string',
            'description' => 'required|string',
            'semester' => 'required|string'
        ]);

        $project = new Project;
        $project->project_member_1_name = $request->project_member_1_name;
        $project->project_member_2_name = $request->project_member_2_name;
        $project->project_member_3_name = $request->project_member_3_name;
        $project->project_member_4_name = $request->project_member_4_name;
        $project->project_member_5_name = $request->project_member_5_name;
        $project->supervisor_1_name = $request->supervisor_1_name;
        $project->supervisor_2_name = $request->supervisor_2_name;
        $project->supervisor_3_name = $request->supervisor_3_name;
        $project->title = $request->title;
        $project->description = $request->description;
        $project->semester = $request->semester;
        $project->save();

        return response()->json($project, 201);
    }

    // Update a project and manage its students and users
    public function update(Request $request, $id)
    {
        $request->validate([
            'project_member_1_name' => 'nullable|string|max:2048',
            'project_member_2_name' => 'nullable|string|max:2048',
            'project_member_3_name' => 'nullable|string|max:2048',
            'project_member_4_name' => 'nullable|string|max:2048',
            'project_member_5_name' => 'nullable|string|max:2048',
            'supervisor_1_name' => 'nullable|string|max:2048',
            'supervisor_2_name' => 'nullable|string|max:2048',
            'supervisor_3_name' => 'nullable|string|max:2048',
            'title' => 'required|string',
            'description' => 'required|string',
            'semester' => 'required|string'
        ]);

        $project = Project::find($id);
        if (!$project) {
            return response()->json(['message' => 'Project not found'], 404);
        }

        $project->update($request->all());

        return response()->json($project);
    }

    // Delete a project
    public function delete($id)
    {
        $project = Project::find($id);
        if ($project) {
            $project->delete();
            return response()->json(['message' => 'Project deleted successfully']);
        } else {
            return response()->json(['message' => 'Project not found'], 404);
        }
    }
}
