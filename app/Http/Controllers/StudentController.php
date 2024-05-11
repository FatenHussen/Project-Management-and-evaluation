<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StudentController extends Controller
{
    public function getAll()
    {
        $students = Student::with('project')->get(); // Use 'project' here, not 'projects'
        return response()->json($students);
    }
    public function getById(Request $request, $id)
    {
        $student = Student::with('project')->find($id);
        $student = Student::find($id);
        return response()->json($student);
    }
    // List all students with their projects
    public function showProjectMembers()
    {
        $students = Student::all(); // Fetches all students from the database
        return view('yourViewName', ['students' => $students]); // Replace 'yourViewName' with the name of your actual view
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|max: 255',
            'password' => 'required|max: 255',
            'name' => 'required|string|max:255',
            'year' => 'required|integer',
            'semester' => 'required|string|max:255',
            'specialization' => 'required|string|max:255',
            'completedHours' => 'required|integer',
            'currentHours' => 'required|integer',
            'gender' => 'required|string|max:10',
            'uniId' => 'required|string|max:255',
            'cgpa' => 'required|numeric',
            'project_id' => 'nullable|exists:projects,id' // 'nullable' and must exist in 'projects' table if provided

        ]);


        $student = Student::create([
         
            'name' => $request->name,
            'email' => $request->email,
            'password' =>$request->password,
            'specialization' => $request->specialization,
            'year' => $request->year,
            'semester' => $request->semester,
            'completedHours' =>  $request->completedHours,
            'currentHours' => $request->currentHours,
            'gender' => $request->gender,
            'uniId' => $request->uniId,
            'cgpa' => $request->cgpa,
            'project_id' => $request->project_id // This must be provided as per validation


                ]);
        return response()->json($student);
    }
public function update(Request $request, $id)
{
    $request->validate([
        'name' => 'required',
        'year' => 'required',
        'semester' => 'required|string|max:255',
        'specialization' => 'required',
        'completedHours' => 'required',
        'currentHours' => 'required',
        'gender' => 'required',
        'uniId' => 'required',
        'cgpa' => 'required',
    ]);

    $student = Student::find($id);
      if ($student) {
        $student->name = $request->name;
        $student->year = $request->year;
        $student->semester = $request->semester;
        $student->specialization= $request->specialization;
        $student->completedHours = $request->completedHours;
        $student->currentHours = $request->currentHours;
        $student->gender = $request->gender;
        $student->uniId = $request->uniId;
        $student->cgpa = $request->cgpa;
        $student->save();
        return response()->json($student);
    } else {
        return response()->json(['message' => 'student not found'], 404);
    }
}
    public function delete(Request $request, $id)
    {
        $student = Student::find($id);
        $student->delete();
        return response()->json($student);
    }
}
