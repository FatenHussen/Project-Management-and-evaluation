<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use Illuminate\Http\Request;


class ProposalController extends Controller
{
    // Display a listing of all Proposal evaluations
    public function getAll()
    {
        $proposals = Proposal::with('projects')->get(); // Assuming there's a 'project' relationship defined in Proposal model
        return response()->json($proposals);
    }

    // Display a specific Proposal evaluation by ID
    public function getById(Request $request, $id)
    {
        $proposal = Proposal::with('projects')->find($id);
        if (!$proposal) {
            return response()->json(['message' => 'Proposal Not Found'], 404);
        }
        return response()->json($proposal);
    }
    // Create a new Proposal evaluation
    public function create(Request $request)
    {
                    $validated = $request->validate([
                        'project_id' =>'required',
                        'project_name' => 'required|string',
                'problem' => 'required|string|max:1024',
                'field' => 'required|string|max:255',
                'literature_references_problem' => 'nullable|string|max:2048',
                'main_map' => 'nullable|string|max:255',
                'experts' => 'nullable|string|max:255',
                'users' => 'nullable|string|max:255',
                'stakeholders' => 'nullable|string|max:255',
                'literature_references_solution' => 'nullable|string|max:2048',
                'mind_map' => 'nullable|string|max:255',
                'proposed_solution' => 'required|string|max:2048',
                'functional_requirements' => 'required|string|max:2048',
                'non_functional_requirements' => 'required|string|max:2048',
                'methodology' => 'required|string|max:255',
                'meetings' => 'nullable|string|max:2048',
                'communication' => 'nullable|string|max:2048',
                'project_leader' => 'required|string|max:255',
                'file_sharing' => 'nullable|string|max:255',
                'platform' => 'required|string|max:255',
                'tools' => 'required|string|max:255',
                'languages' => 'required|string|max:255',
                'database' => 'required|string|max:255',
                'packages' => 'nullable|string|max:255',
                'student_1_name' => 'nullable|string|max:255',
                'student_1_role' => 'nullable|string|max:255',
                'student_2_name' => 'nullable|string|max:255',
                'student_2_role' => 'nullable|string|max:255',
                'student_3_name' => 'nullable|string|max:255',
                'student_3_role' => 'nullable|string|max:255',
                'student_4_name' => 'nullable|string|max:255',
                'student_4_role' => 'nullable|string|max:255',
                'student_5_name' => 'nullable|string|max:255',
                'student_5_role' => 'nullable|string|max:255',
                'supervisor_1_name'=> 'nullable|string|max:255',
                'supervisor_1_specialization' => 'nullable|string|max:255',
                'supervisor_2_name'=> 'nullable|string|max:255',
                'supervisor_2_specialization'=> 'nullable|string|max:255',
                'supervisor_3_name'=> 'nullable|string|max:255',
                'supervisor_3_specialization'=> 'nullable|string|max:255',
                'date' => 'required|date',
                'committee_decision' => 'nullable|string|max:2048',
        ]);

        $Proposal = new Proposal;
        $Proposal->project_id = $request->project_id;
        $Proposal->project_name = $request->project_name;
        $Proposal->problem = $request->problem;
        $Proposal->field = $request->field;
        $Proposal->literature_references_problem = $request->literature_references_problem;
        $Proposal->main_map = $request->main_map;
        $Proposal->experts = $request->experts;
        $Proposal->users = $request->users;
        $Proposal->stakeholders = $request->stakeholders;
        $Proposal->literature_references_solution=$request->literature_references_solution;
        $Proposal->mind_map = $request->mind_map;
        $Proposal->proposed_solution=$request->proposed_solution;
        $Proposal->functional_requirements=$request->functional_requirements;
        $Proposal->non_functional_requirements=$request->non_functional_requirements;
        $Proposal->methodology=$request->methodology;
        $Proposal->meetings=$request->meetings;
        $Proposal->communication=$request->communication;
        $Proposal->project_leader=$request->project_leader;
        $Proposal->file_sharing=$request->file_sharing;
        $Proposal->platform=$request->platform;
        $Proposal->tools=$request->tools;
        $Proposal->languages=$request->languages;
        $Proposal->database=$request->database;
        $Proposal->packages=$request->packages;
        $Proposal->student_1_name=$request->student_1_name;
        $Proposal->student_1_role=$request->student_1_role;
        $Proposal->student_2_name=$request->student_2_name;
        $Proposal->student_2_role=$request->student_2_role;
        $Proposal->student_3_name=$request->student_3_name;
        $Proposal->student_3_role=$request->student_3_role;
        $Proposal->student_4_name=$request->student_4_name;
        $Proposal->student_4_role=$request->student_4_role;
        $Proposal->student_5_name=$request->student_5_name;
        $Proposal->student_5_role=$request->student_5_role;
        $Proposal->supervisor_1_name=$request->supervisor_1_name;
        $Proposal->supervisor_1_specialization=$request->supervisor_1_specialization;
        $Proposal->supervisor_2_name=$request->supervisor_2_name;
        $Proposal->supervisor_2_specialization=$request->supervisor_2_specialization;
        $Proposal->supervisor_3_name=$request->supervisor_3_name;
        $Proposal->supervisor_3_specialization=$request->supervisor_3_specialization;
        $Proposal->date=$request->date;
        $Proposal->committee_decision=$request->committee_decision;

        $Proposal->save();

        return response()->json($Proposal, 201);
    }

    // Update the specified Proposal evaluation
    public function update(Request $request, $id)
    {
        $proposal = Proposal::find($id);
        if (!$proposal) {
            return response()->json(['message' => 'Not Found'], 404);
        }
    
        $validated = $request->validate([
            'project_name' => 'required|string',
                'problem' => 'required|string|max:1024',
                'field' => 'required|string|max:255',
                'literature_references_problem' => 'nullable|string|max:2048',
                'main_map' => 'nullable|string|max:255',
                'experts' => 'nullable|string|max:255',
                'users' => 'nullable|string|max:255',
                'stakeholders' => 'nullable|string|max:255',
                'literature_references_solution' => 'nullable|string|max:2048',
                'mind_map' => 'nullable|string|max:255',
                'proposed_solution' => 'required|string|max:2048',
                'functional_requirements' => 'required|string|max:2048',
                'non_functional_requirements' => 'required|string|max:2048',
                'methodology' => 'required|string|max:255',
                'meetings' => 'nullable|string|max:2048',
                'communication' => 'nullable|string|max:2048',
                'project_leader' => 'required|string|max:255',
                'file_sharing' => 'nullable|string|max:255',
                'platform' => 'required|string|max:255',
                'tools' => 'required|string|max:255',
                'languages' => 'required|string|max:255',
                'database' => 'required|string|max:255',
                'packages' => 'nullable|string|max:255',
                'student_1_name' => 'nullable|string|max:255',
                'student_1_role' => 'nullable|string|max:255',
                'student_2_name' => 'nullable|string|max:255',
                'student_2_role' => 'nullable|string|max:255',
                'student_3_name' => 'nullable|string|max:255',
                'student_3_role' => 'nullable|string|max:255',
                'student_4_name' => 'nullable|string|max:255',
                'student_4_role' => 'nullable|string|max:255',
                'student_5_name' => 'nullable|string|max:255',
                'student_5_role' => 'nullable|string|max:255',
                'supervisor_1_name'=> 'nullable|string|max:255',
                'supervisor_1_specialization' => 'nullable|string|max:255',
                'supervisor_2_name'=> 'nullable|string|max:255',
                'supervisor_2_specialization'=> 'nullable|string|max:255',
                'supervisor_3_name'=> 'nullable|string|max:255',
                'supervisor_3_specialization'=> 'nullable|string|max:255',
                'date' => 'required|date',
                'committee_decision' => 'nullable|string|max:2048',
        ]);
    
        // Update the proposal with validated data
        $proposal->update($validated);
    
        return response()->json($proposal, 200);
    }

    // Delete the specified Proposal evaluation
    public function delete(Request $request, $id)
    {
        $Proposal = Proposal::find($id);
        if (!$Proposal) {
            return response()->json(['message' => 'Not Found'], 404);
        }

        $Proposal->delete();
        return response()->json(null, 204); // No content on successful deletion
    }
}
