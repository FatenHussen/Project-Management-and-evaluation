<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DoctorController extends Controller
{
    public function getAll()
    {
        $doctor = Doctor::all();
        return response()->json($doctor);
    }
    public function getById(Request $request, $id)
    {
        // $doctor = Doctor::with('user')->find($id);
        $doctor = Doctor::find($id);
        return response()->json($doctor);
    }

    public function create(Request $request)
    {

        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'user_id' => 'required',

        ]);


        $doctor = Doctor::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'user_id' => $request->user_id,

        ]);
        return response()->json($doctor);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',

        ]);
        $doctor = Doctor::find($id);
        $doctor->firstname = $request->firstname;
        $doctor->lastname = $request->lastname;
        $doctor->save();
        return response()->json($doctor);
    }
    public function delete(Request $request, $id)
    {
        $doctor = Doctor::find($id);
        $doctor->delete();
        return response()->json($doctor);
    }
}
