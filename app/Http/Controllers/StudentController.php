<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StudentController extends Controller
{
    public function getAll()
    {
        $students = Student::all();
        return response()->json($students);
    }
    public function getById(Request $request, $id)
    {
        // $student = Student::with('user')->find($id);
        $student = Student::find($id);
        return response()->json($student);
    }
    public function create(Request $request)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'user_id' => 'required',
            'year' => 'required',
            'specialization' => 'required',
            'project_semester' => 'required',
            'completed_hours' => 'required',
            'current_semester_hours' => 'required',
            'cumulative_gpa' => 'required',

        ]);


        $student = Student::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'user_id' => $request->user_id,
            'year' => $request->year,
            'specialization' => $request->specialization,
            'project_semester' => $request->project_semester,
            'completed_hours' =>  $request->completed_hours,
            'current_semester_hours' => $request->current_semester_hours,
            'cumulative_gpa' => $request->cumulative_gpa,
        ]);
        return response()->json($student);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'year' => 'required',
            'specialization' => 'required',
            'project_semester' => 'required',
            'completed_hours' => 'required',
            'current_semester_hours' => 'required',
            'cumulative_gpa' => 'required',
        ]);
        $student = Student::find($id);
        if ($student->user_id != $request->user()->id) {
            return response()->json("Un Authorized!");
        }
        $student->firstname = $request->firstname;
        $student->lastname = $request->lastname;
        $student->year = $request->year;
        $student->specialization = $request->specialization;
        $student->project_semester = $request->project_semester;
        $student->completed_hours = $request->completed_hours;
        $student->current_semester_hours = $request->current_semester_hours;
        $student->cumulative_gpa = $request->cumulative_gpa;



        $student->save();
        return response()->json($student);
    }
    public function delete(Request $request, $id)
    {
        $student = Student::find($id);
        $student->delete();
        return response()->json($student);
    }
}
