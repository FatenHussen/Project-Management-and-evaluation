<?php

namespace App\Http\Controllers;

use App\Models\Evaluation;
use Illuminate\Http\Request;
use App\Models\final_Evaluation;

class FinalEvaluationController extends Controller
{
    public function getAll()
    {
        $final_Evaluation = final_Evaluation::all();
        return response()->json($final_Evaluation);
    }
    public function getById(Request $request, $id)
    {
        // $Evaluation = Evaluation::with('user')->find($id);
        $final_Evaluation = final_Evaluation::find($id);
        return response()->json($final_Evaluation);
    }
    public function create(Request $request)
    {
        $request->validate([
            'project_id' => 'required',
            'committe_id' => 'required',
            'name' => 'required',
        ]);


        $final_Evaluation = final_Evaluation::create([
            'name' => $request->name,
        ]);
        return response()->json($final_Evaluation);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'project_id' => 'required',
            'committe_id' => 'required',
            'name' => 'required',

        ]);
        $final_Evaluation = final_Evaluation::find($id);
        $final_Evaluation->name = $request->name;

        $final_Evaluation->save();
        return response()->json($final_Evaluation);
    }
    public function delete(Request $request, $id)
    {
        $final_Evaluation = final_Evaluation::find($id);
        $final_Evaluation->delete();
        return response()->json($final_Evaluation);
    }
}
