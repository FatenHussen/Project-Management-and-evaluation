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
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'role' =>  'required|string',

        ]);

        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        if ($user->role == 'Doctor') {
            Doctor::create([
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'user_id' => $user->id,
            ]);
        } else  if ($user->role == 'Student') {
            Student::create([
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'user_id' => $user->id,
                'year' => 0,
                'specialization' => ' ',
                'project_semester' => ' ',
                'completed_hours' => 0,
                'current_semester_hours' => 0,
                'cumulative_gpa' => 0,
            ]);
        } else  if ($user->role == 'Supervisor') {
            Supervisor::create([
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'user_id' => $user->id,
                'specialization' => ' ',
                'projects_per_semesters' => 0,
                'Active_days' => 0
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
    }

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
