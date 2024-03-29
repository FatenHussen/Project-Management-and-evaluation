<?php

namespace App\Http\Controllers;

use App\Models\Supervisor;
use Illuminate\Http\Request;

class SupervisorController extends Controller
{
    public function getAll()
    {
        $supervisors = Supervisor::all();
        return response()->json($supervisors);
    }
    public function getById(Request $request, $id)
    {
        // $Supervisor = Supervisor::with('user')->find($id);
        $supervisor = Supervisor::find($id);
        return response()->json($supervisor);
    }

    public function create(Request $request)
    {

        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'user_id' => 'required',
            'specialization' => 'required',
            'projects_per_semesters' => 'required',
            'Active_days' => 'required',
        ]);


        $supervisor = Supervisor::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'user_id' => $request->user_id,
            'specialization' => $request->specialization,
            'projects_per_semester' => $request->projects_per_semesters,
            'Active_days' => $request->Active_days,
        ]);
        return response()->json($supervisor);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'specialization' => 'required',
            'projects_per_semesters' => 'required',
            'Active_days' => 'required',
        ]);
        $supervisor = Supervisor::find($id);
        $supervisor->firstname = $request->firstname;
        $supervisor->lastname = $request->lastname;
        $supervisor->specialization = $request->specialization;
        $supervisor->projects_per_semesters = $request->projects_per_semesters;
        $supervisor->Active_days = $request->Active_days;
        $supervisor->save();
        return response()->json($supervisor);
    }

    public function delete(Request $request, $id)
    {
        $supervisor = Supervisor::find($id);
        $supervisor->delete();
        return response()->json($supervisor);
    }
}
