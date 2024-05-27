<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\Dashboard\AcademicYearController;
use App\Http\Controllers\Dashboard\SemesterController;
use App\Http\Controllers\Dashboard\SpecializationController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group([],function(){
    //Route::get('/test',[UserController::class,'get_profile'])->middleware('auth:users');

    // Route::prefix('/profile')->group(function(){
    //     Route::get('/',[UserController::class,'get_profile']);
    //     Route::post('/update', [UserController::class,'update_profile']);
    // });

    // Route::prefix('/specializations')->group(function () {
    //     Route::get('/all', [SpecializationController::class,'all_specializations']);
    //     // Route::get('/one/{id}', [SpecializationController::class,'one_specialization']);
    //     // Route::post('/create', [SpecializationController::class,'create_specialization']);
    //     // Route::post('/update/{id}', [SpecializationController::class,'update_specialization']);
    //     // Route::delete('/delete/{id}', [SpecializationController::class,'delete_specialization']);

    // });
    // Route::prefix('/academic_years')->group(function () {
    //     Route::get('/all', [AcademicYearController::class, 'all_academic_years']);
    //     // Route::get('/one/{id}', [AcademicYearController::class,'one_academic_year']);
    //     // Route::post('/create', [AcademicYearController::class,'create_academic_year']);
    //     // Route::post('/update/{id}', [AcademicYearController::class,'update_academic_year']);
    //     // Route::delete('/delete/{id}', [AcademicYearController::class,'delete_academic_year']);

    // });
    // Route::prefix('/semesters')->group(function () {
    //     Route::get('/all', [SemesterController::class, 'all_semesters']);
    //     // Route::get('/one/{id}', [SemesterController::class,'one_semester']);
    //     // Route::post('/create', [SemesterController::class,'create_semester']);
    //     // Route::post('/update/{id}', [SemesterController::class,'update_semester']);
    //     // Route::delete('/delete/{id}', [SemesterController::class,'delete_semester']);

    // });
});

Route::get('/unAuthorized', function () {
    return response()->json([
        'error' => "Anauthorized operation"
    ],401);
})->name('unAuthorized');
