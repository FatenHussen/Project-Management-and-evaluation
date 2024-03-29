<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function getAll()
    {
        $group = Group::all();
        return response()->json($group);
    }
    public function getById(Request $request, $id)
    {
        // $student = Student::with('user')->find($id);
        $group = Group::find($id);
        return response()->json($group);
    }
    public function create(Request $request)
    {

        $request->validate([
            'project_id' => 'required',
            'name' => 'required',
            'description' => 'required',

        ]);


        $group = group::create([
            'name' => $request->name,
        ]);
        return response()->json($group);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',

        ]);
        $group = Group::find($id);
        $group->tname = $request->name;

        $group->save();
        return response()->json($group);
    }
    public function delete(Request $request, $id)
    {
        $group = Group::find($id);
        $group->delete();
        return response()->json($group);
    }
}
