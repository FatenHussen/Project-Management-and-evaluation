<?php

namespace App\Http\Controllers;

use App\Models\Evaluation;
use Illuminate\Http\Request;

class EvaluationController extends Controller
{
    public function getAll()
    {
        $Evaluation = Evaluation::all();
        return response()->json($Evaluation);
    }
    public function getById(Request $request, $id)
    {
        // $Evaluation = Evaluation::with('user')->find($id);
        $Evaluation = Evaluation::find($id);
        return response()->json($Evaluation);
    }
    public function create(Request $request)
    {

        $request->validate([
            'project_id' => 'required',
            'committe_id' => 'required',
            'name' => 'required',
        ]);


        $evaluation = Evaluation::create([
            'name' => $request->name,
        ]);
        return response()->json($evaluation);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'project_id' => 'required',
            'committe_id' => 'required',
            'name' => 'required',

        ]);
        $evaluation = Evaluation::find($id);
        $evaluation->tname = $request->name;

        $evaluation->save();
        return response()->json($evaluation);
    }
    public function delete(Request $request, $id)
    {
        $evaluation = Evaluation::find($id);
        $evaluation->delete();
        return response()->json($evaluation);
    }
}
