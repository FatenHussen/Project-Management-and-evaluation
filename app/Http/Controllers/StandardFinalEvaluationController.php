<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\final_standard_Evaluation;


class StandardFinalEvaluationController extends Controller
{
    public function getAll()
    {
        $final_standard_Evaluation = final_standard_Evaluation::all();
        return response()->json($final_standard_Evaluation);
    }
    public function getById(Request $request, $id)
    {
        // $Evaluation = Evaluation::with('user')->find($id);
        $final_standard_Evaluation = final_standard_Evaluation::find($id);
        return response()->json($final_standard_Evaluation);
    }
    public function create(Request $request)
    {
        $request->validate([
            'project_id' => 'required',
            'committe_id' => 'required',
            'name' => 'required',
        ]);


        $final_standard_Evaluation = final_standard_Evaluation::create([
            'name' => $request->name,
        ]);
        return response()->json($final_standard_Evaluation);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'project_id' => 'required',
            'committe_id' => 'required',
            'name' => 'required',

        ]);
        $final_standard_Evaluation = final_standard_Evaluation::find($id);
        $final_standard_Evaluation->name = $request->name;

        $final_standard_Evaluation->save();
        return response()->json($final_standard_Evaluation);
    }
    public function delete(Request $request, $id)
    {
        $final_standard_Evaluation = final_standard_Evaluation::find($id);
        $final_standard_Evaluation->delete();
        return response()->json($final_standard_Evaluation);
    }
}
