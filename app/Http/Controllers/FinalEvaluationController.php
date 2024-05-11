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
            'project_id' => 'required|integer',
            'name' => 'required|string',
            'project_member_1_name' => 'required|string',
            'project_member_1_degree' => 'required|integer',
            'project_member_1_description' => 'required|string',
            'project_member_2_name' => 'nullable|string',
            'project_member_2_degree' => 'nullable|integer',
            'project_member_2_description' => 'nullable|string',
            'project_member_3_name' => 'nullable|string',
            'project_member_3_degree' => 'nullable|integer',
            'project_member_3_description' => 'nullable|string',
            'project_member_4_name' => 'nullable|string',
            'project_member_4_degree' => 'nullable|integer',
            'project_member_4_description' => 'nullable|string',
            'project_title' => 'required|string',
            'project_members' => 'required|string',
            'project_notes' => 'nullable|string',
            'idea_rating' => 'required|integer',
            'signal_study_rating' => 'required|integer',
            'analytical_study_rating' => 'required|integer',
            'design_rating' => 'required|integer',
            'programming_rating' => 'required|integer',
            'management_rating' => 'required|integer',
            'github_rating' => 'required|integer',
            'options_rating' => 'required|integer',
            'results_analysis_rating' => 'required|integer',
            'added_value_rating' => 'required|integer',
            'estimate_rating' => 'required|integer',
            'presentation_rating' => 'required|integer',
            'total_score' => 'required|integer',
        ]);


        $final_Evaluation = final_Evaluation::create([
            'name' => $request->name,
            'project_member_1_name' => $request->project_member_1_name,
            'project_member_1_degree' => $request->project_member_1_degree,
            'project_member_1_description' => $request->project_member_1_description,
            'project_member_2_name' => $request->project_member_2_name,
            'project_member_2_degree' => $request->project_member_2_degree,
            'project_member_2_description' => $request->project_member_2_description,
            'project_member_3_name' => $request->project_member_3_name,
            'project_member_3_degree' => $request->project_member_3_degree,
            'project_member_3_description' => $request->project_member_3_description,
            'project_member_4_name' => $request->project_member_4_name,
            'project_member_4_degree' => $request->project_member_4_degree,
            'project_member_4_description' => $request->project_member_4_description,
            'project_title' => $request->project_title,
            'project_members' => $request->project_members,
            'project_notes' => $request->project_notes,
            'idea_rating' => $request->idea_rating,
            'signal_study_rating' => $request->signal_study_rating,
            'analytical_study_rating' => $request->analytical_study_rating,
            'design_rating' => $request->design_rating,
            'programming_rating' => $request->programming_rating,
            'management_rating' => $request->management_rating,
            'github_rating' => $request->github_rating,
            'options_rating' => $request->options_rating,
            'results_analysis_rating' => $request->results_analysis_rating,
            'added_value_rating' => $request->added_value_rating,
            'estimate_rating' => $request->estimate_rating,
            'presentation_rating' => $request->presentation_rating,
            'total_score' => $request->total_score,
        ]);
        return response()->json($final_Evaluation);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string',
            'project_member_1_name' => 'required|string',
            'project_member_1_degree' => 'required|integer',
            'project_member_1_description' => 'required|string',
            'project_member_2_name' => 'nullable|string',
            'project_member_2_degree' => 'nullable|integer',
            'project_member_2_description' => 'nullable|string',
            'project_member_3_name' => 'nullable|string',
            'project_member_3_degree' => 'nullable|integer',
            'project_member_3_description' => 'nullable|string',
            'project_member_4_name' => 'nullable|string',
            'project_member_4_degree' => 'nullable|integer',
            'project_member_4_description' => 'nullable|string',
            'project_title' => 'required|string',
            'project_members' => 'required|string',
            'project_notes' => 'nullable|string',
            'idea_rating' => 'required|integer',
            'signal_study_rating' => 'required|integer',
            'analytical_study_rating' => 'required|integer',
            'design_rating' => 'required|integer',
            'programming_rating' => 'required|integer',
            'management_rating' => 'required|integer',
            'github_rating' => 'required|integer',
            'options_rating' => 'required|integer',
            'results_analysis_rating' => 'required|integer',
            'added_value_rating' => 'required|integer',
            'estimate_rating' => 'required|integer',
            'presentation_rating' => 'required|integer',
            'total_score' => 'required|integer',
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
