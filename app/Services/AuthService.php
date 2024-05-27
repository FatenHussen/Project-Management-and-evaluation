<?php

namespace App\Services;

use App\Models\Admin;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Mail\OtpMail;
use App\Models\VerificationCode;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthService
{

    public function sendOtp($email)
    {
        $otp = Str::random(6);

        $user = User::where('email', $email)->first();

        VerificationCode::create([
            'code' => $otp,
            'user_id' => $user->id,
            'end_at' => Carbon::now()->addMinutes(15),
        ]);

        try {
            Mail::to($email)->send(new OtpMail($otp));
        } catch (\Throwable $th) {
            return false;
        }

        return true;
    }

    public function verifyOtp($data)
    {

        if (!isset($data['email']) || !isset($data['otp'])) {
            return response()->json([
                'error' => 'missed info'
            ], 400);
        }

        $user = User::where('email', $data['email'])->first();

        if (!$user) {
            return response()->json([
                'error' => 'wrong email'
            ], 400);
        }

        $otpIsValid = VerificationCode::where('user_id', $user->id)
            ->where('code', $data['otp'])->where('end_at', '>', Carbon::now())
            ->where('verified_at', null)->orderBy('id', 'DESC')->first();

        if (!$otpIsValid) {
            return response()->json([
                'error' => "This OTP is not valid",
            ], 400);
        }

        $otpIsValid->verified_at = Carbon::now();
        $otpIsValid->save();

        $user->email_verified_at = Carbon::now();
        $user->save();

        $token = $user->createToken('AUTH')->plainTextToken;

        return response()->json([
            'message' => 'login successfully',
            'data' => [
                'token' => $token,
                'user' => $user,
            ]
        ], 200);
    }

    public function register($data)
    {
        try {
            User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => $data['password'],
            ]);

            $this->sendOtp($data['email']);

            // $token = $user->createToken('AUTH')->plainTextToken;
            // if (!$token)
            //     return false;

            // $res['token'] = $token;

            // $res['user'] = $user;

            // return $res;
        } catch (\Throwable $th) {
            return false;
        }
        return true;
    }

    public function login($email, $password)
    {
        $user = User::where('email', $email)->first();


        if (!$user) {
            $admin = Admin::where('email', $email)->first();
            if ($admin && Hash::check($password, $admin->password)) {
                $token = $admin->createToken('AUTH')->plainTextToken;
                $res['token'] = $token;
                $res['admin'] = $admin;
                return response()->json([
                    'message' => 'login successfully',
                    'data' => $res
                ], 200);
            }

            $employee = Employee::where('email', $email)->first();
            if ($employee && Hash::check($password, $employee->password)) {
                $token = $employee->createToken('AUTH')->plainTextToken;
                $res['token'] = $token;
                $res['employee'] = $employee;
                return response()->json([
                    'message' => 'login successfully',
                    'data' => $res
                ], 200);
            }

            return response()->json([
                'error' => "Wrong credentials"
            ], 400);
        } else {
            if (!Hash::check($password, $user->password)) {
                return response()->json([
                    'error' => "Wrong credentials"
                ], 400);
            }

            if ($user->email_verified_at == null) {
                return response()->json([
                    'error' => "Please verify your account."
                ], 401);
            }

            $token = $user->createToken('AUTH')->plainTextToken;
            $res['token'] = $token;
            $res['user'] = $user;
        }

        return response()->json([
            'message' => 'login successfully',
            'data' => $res
        ], 200);
    }

    public static function logout($request)
    {
        auth()->user()->tokens()->delete();
        return true;
    }
}
