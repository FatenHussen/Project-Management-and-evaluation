<?php

namespace App\Http\Controllers;

use App\Models\supervisor_committe;
use Illuminate\Http\Request;


class SupervisoeCommitteController extends Controller
{
    public function getAll()
    {
        $supervisor_committe = supervisor_committe::all();
        return response()->json($supervisor_committe);
    }
    public function getById(Request $request, $id)
    {
        // $supervisor_committe = supervisor_committe::with('user')->find($id);
        $supervisor_committe = supervisor_committe::find($id);
        return response()->json($supervisor_committe);
    }

    public function create(Request $request)
    {

        $request->validate([
            'committe_id' => 'required',
            'supervisors_id' => 'required',

        ]);


        $supervisor_committe = supervisor_committe::create([
            'committe_id' => $request->committe_id,
            'supervisors_id' => $request->supervisors_id,
        ]);
        return response()->json($supervisor_committe);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'committe_id' => 'required',
            'supervisors_id' => 'required',

        ]);
        $supervisor_committe = supervisor_committe::find($id);
        $supervisor_committe->committe_id = $request->committe_id;
        $supervisor_committe->supervisors_id = $request->supervisors_id;
        $supervisor_committe->save();
        return response()->json($supervisor_committe);
    }

    public function delete(Request $request, $id)
    {
        $supervisor_committe = supervisor_committe::find($id);
        $supervisor_committe->delete();
        return response()->json($supervisor_committe);
    }
}
