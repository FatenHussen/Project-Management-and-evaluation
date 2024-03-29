<?php

namespace App\Http\Controllers;

use App\Models\standard_Evoluation;
use Illuminate\Http\Request;

class StandardEvoluationController extends Controller
{
    public function getAll()
    {
        $standard_evoluation = standard_Evoluation::all();
        return response()->json($standard_evoluation);
    }
    public function getById(Request $request, $id)
    {
        // $standard_evoluation = standard_Evoluation::with('user')->find($id);
        $standard_evoluation = standard_Evoluation::find($id);
        return response()->json($standard_evoluation);
    }
    public function create(Request $request)
    {

        $request->validate([
            'standard_id' => 'required',
            'supervisor_id' => 'required',
            'evoluation_id' => 'required',
            'standard_id' => 'required',
            'degree' => 'required'
        ]);


        $standard_evoluation = standard_Evoluation::create([
            'name' => $request->name,
        ]);
        return response()->json($standard_evoluation);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'standard_id' => 'required',
            'supervisor_id' => 'required',
            'evoluation_id' => 'required',
            'standard_id' => 'required',
            'degree' => 'required'

        ]);
        $standard_evoluation = standard_Evoluation::find($id);
        $standard_evoluation->name = $request->name;

        $standard_evoluation->save();
        return response()->json($standard_evoluation);
    }
    public function delete(Request $request, $id)
    {
        $standard_evoluation = standard_Evoluation::find($id);
        $standard_evoluation->delete();
        return response()->json($standard_evoluation);
    }
}
