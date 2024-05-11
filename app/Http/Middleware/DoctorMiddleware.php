<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DoctorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        if ($user && $user->role == "Doctor") {
            return $next($request);
        }
        
        // Return an error response if the user is not a student or if there is no user
        return response()->json([
            'error' => 'Unauthorized access - only DOCTOR are allowed.'
        ], 403); // Using 403 Forbidden status code as it's more appropriate here
    }
}    
