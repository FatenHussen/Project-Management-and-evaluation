<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAll()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function getById(Request $request, $id)
    {
        // $Supervisor = Supervisor::with('user')->find($id);
        $User = User::find($id);
        return response()->json($User);
    }

    public function create(Request $request)
    {

        $request->validate([

            'email'=>'required',
            'password'=>'required',
            'role' => 'required|in:Admin,Dean,Supervisor,Doctor,Vice', // تأكد من تحديد القيم المسموح بها هنا
            'name' => 'required',
            'specialization' => 'required',
            'numOfProject' => 'required',
            'activeDays' => 'required|array',
            'activeDays.*' => 'in:Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
            'gender' => 'required',
        ]);


        $User = User::create([
            'name' => $request->name,
            'role' => $request ->role,
            'email'=> $request->email,
            'password'=>$request->password,
            'gender' => $request->gender,
            'specialization' => $request->specialization,
            'numOfProject' => $request->numOfProject,
            'activeDays' => $request->activeDays,
        ]);
        return response()->json($User);
    }

   public function update(Request $request, $id)
{
    // Validate the incoming request data
    $request->validate([
        'name' => 'required|string',
        'specialization' => 'required|string',
        'numOfProject' => 'required|integer',
        'activeDays' => 'required|array',
        'activeDays.*' => 'in:Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
        'gender' => 'required|string|in:male,female',
    ]);
     $User = User::find($id);
    if (!$User) {
        return response()->json(['message' => 'Supervisor not found'], 404);
    }
  $User->update([
        'name' => $request->name,
        'specialization' => $request->specialization,
        'numOfProject' => $request->numOfProject,
        'activeDays' => $request->activeDays,
        'gender' => $request->gender,
        ]);
   
        return response()->json($User);
    }

    public function delete(Request $request, $id)
    {
        $User = User::find($id);
        $User->delete();
        return response()->json($User);
    }
}
