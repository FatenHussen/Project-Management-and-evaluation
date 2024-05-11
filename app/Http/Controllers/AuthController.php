<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Doctor;
use App\Models\Student;
use App\Models\Supervisor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required|string|email',
    //         'password' => 'required|string',
    //     ]);
    //     $credentials = $request->only('email', 'password');

    //     $token = Auth::attempt($credentials);
    //     if (!$token) {
    //         return response()->json([
    //             'status' => 'error',
    //             'message' => 'Unauthorized',
    //         ], 401);
    //     }
    //     $user = $request->user();
    //     $tokenResult = $user->createToken('Personal Access Token');
    //     $token = $tokenResult->plainTextToken;
    //     return response()->json([
    //         'status' => 'success',
    //         'user' => $user,
    //         'authorisation' => [
    //             'token' => $token,
    //             'type' => 'bearer',
    //         ]
    //     ]);
    // }

    public function login(Request $request)
    {
        if (\auth('student')->attempt(['email' => request('email'), 'password' => request('password')]))
        {


            $student=Auth::guard('student')->user();
            $token = $student->createtoken('ABC')->plainTextToken;
            return response()->json(
                ['student'=>$student,
                    'token' => $token,
                    'message' => 'student login successfully'
                ],200);}


       else if(Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('ABC')->plainTextToken;
            return response()->json(
                [
                    'user' => $user,
                    'token' => $token,
                    'message' => 'admin login successfully'
                ], 200);
        } else {
            return response()->json(['message' => 'Unauthorised'], 401);
        }

    }
    public function Student_Register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:students',
            'password' => 'required|string',
            'project_id' => 'nullable|exists:projects,id' // Ensure it's nullable and exists if provided
        ]);
        
        $student = Student::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'year' => $request->year ?? 0,
            'semester' => $request->semester ?? '',
            'specialization' => $request->specialization ?? '',
            'completedHours' => $request->completedHours ?? 0,
            'currentHours' => $request->currentHours ?? 0,
            'cgpa' => $request->cgpa ?? 0,
            'gender' => $request->gender ?? 'male',
            'uniId' => $request->uniId ?? '0000000000',
            'project_id' => $request->filled('project_id') ? $request->project_id : null, // Properly handle nullable project_id
        ]);
        
         $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        $tokenResult = $student->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
        return response()->json([
            'status' => 'success',
            'message' => 'Student created successfully',
            'user' => $student,
            'auth' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);

    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'role' =>'required'

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
            'numOfProject' => 0,  // Assuming 'numOfProject' can be set to 0 as default
            'gender' => 'male',
            'activeDays' => ['Monday', 'Wednesday', 'Friday'],  // Directly pass array, Laravel will encode it
            'specialization' => 'General Management'
        ]);


        $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        // $user = Auth::user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => Auth::user(),
            'auth' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    /*public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
          'role' =>'required|string|max:255'

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        if ($user->role == 'Doctor') {
         Doctor::create([
                     'name' => $user->name,
                 'user_id' => $user->id,
            ]);
    } else  if ($user->role == 'Student') {
            Student::create([
                'name' => $user->name,
                'user_id' => $user->id,
                'year' => 0,
                'specialization' => ' ',
                'completedHours' => 0,
                'currentHours' => 0,
                'cgpa' => 0,
                'gender' => 'male',
                'uniId' =>'0000000000',
            ]);
         } else if ($user->role == 'Supervisor') {
            Supervisor::create([
                'name' => $user->name,
                'user_id' => $user->id,
                'numOfProject' => 0,  // Assuming 'numOfProject' can be set to 0 as default
                'gender' => 'male',
                'activeDays' => ['Monday', 'Wednesday', 'Friday'],  // Directly pass array, Laravel will encode it
                'specialization' => 'General Management'
            ]);
        }

        $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'auth' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    } */

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorization' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
