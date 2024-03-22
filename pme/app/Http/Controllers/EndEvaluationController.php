<?php

namespace App\Http\Controllers;

use App\Models\end_Evoluation;
use Illuminate\Http\Request;

class EndEvaluationController extends Controller
{
    public function getAll()
    {
        $end_Evoluation = end_Evoluation::all();
        return response()->json($end_Evoluation);
    }
    public function getById(Request $request, $id)
    {
        // $end_Evoluation = end_Evoluation::with('user')->find($id);
        $end_Evoluation = end_Evoluation::find($id);
        return response()->json($end_Evoluation);
    }
    public function create(Request $request)
    {

        $request->validate([
            'project_id' => 'required',
            'name' => 'required',
        ]);


        $end_Evoluation = end_Evoluation::create([
            'name' => $request->name,
        ]);
        return response()->json($end_Evoluation);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'project_id' => 'required',
            'name' => 'required',

        ]);
        $end_Evoluation = end_Evoluation::find($id);
        $end_Evoluation->name = $request->name;

        $end_Evoluation->save();
        return response()->json($end_Evoluation);
    }
    public function delete(Request $request, $id)
    {
        $end_Evoluation = end_Evoluation::find($id);
        $end_Evoluation->delete();
        return response()->json($end_Evoluation);
    }
}
