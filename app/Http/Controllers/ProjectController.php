<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function getAll()
    {
        $project = Project::all();
        return response()->json($project);
    }
    public function getById(Request $request, $id)
    {
        // $student = Student::with('user')->find($id);
        $project = Project::find($id);
        return response()->json($project);
    }
    public function create(Request $request)
    {

        $request->validate([
            'group_id' => 'required',
            'name' => 'required',
            'description' => 'required',
        ]);


        $project = Project::create([
            'name' => $request->name,
        ]);
        return response()->json($project);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'group_id' => 'required',
            'name' => 'required',
            'description' => 'required',

        ]);
        $project = Project::find($id);
        $project->tname = $request->name;

        $project->save();
        return response()->json($project);
    }
    public function delete(Request $request, $id)
    {
        $project = Project::find($id);
        $project->delete();
        return response()->json($project);
    }
}
