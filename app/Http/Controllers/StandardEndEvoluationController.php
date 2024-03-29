<?php

namespace App\Http\Controllers;

use App\Models\standard_end_Evoluation;
use Illuminate\Http\Request;

class StandardEndEvoluationController extends Controller
{
    public function getAll()
    {
        $standard_end_evoluation = standard_end_Evoluation::all();
        return response()->json($standard_end_evoluation);
    }
    public function getById(Request $request, $id)
    {
        // $standard_end_Evoluation = standard_end_Evoluation::with('user')->find($id);
        $standard_end_evoluation = standard_end_Evoluation::find($id);
        return response()->json($standard_end_evoluation);
    }
    public function create(Request $request)
    {
        $request->validate([
            'supervisor_id' => 'required',
            'evoluation_id' => 'required',
            'standard_id' => 'required',
            'degree' => 'required',
        ]);


        $standard_end_evoluation = standard_end_Evoluation::create([
            'name' => $request->name,
        ]);
        return response()->json($standard_end_evoluation);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'supervisor_id' => 'required',
            'evoluation_id' => 'required',
            'standard_id' => 'required',
            'degree' => 'required',
        ]);
        $standard_end_evoluation = standard_end_Evoluation::find($id);
        $standard_end_evoluation->name = $request->name;

        $standard_end_evoluation->save();
        return response()->json($standard_end_evoluation);
    }
    public function delete(Request $request, $id)
    {
        $standard_end_evoluation = standard_end_Evoluation::find($id);
        $standard_end_evoluation->delete();
        return response()->json($standard_end_evoluation);
    }
}
