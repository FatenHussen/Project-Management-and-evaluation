<?php

use App\Http\Controllers\API\AuthController as APIAuthController;
use App\Http\Controllers\Dashboard\AcademicYearController;
use App\Http\Controllers\Dashboard\AuthController;
use App\Http\Controllers\Dashboard\EmployeeController;
use App\Http\Controllers\Dashboard\ProjectController;
use App\Http\Controllers\Dashboard\SemesterController;
use App\Http\Controllers\Dashboard\SpecializationController;
use App\Http\Controllers\Dashboard\UserController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;


//Route::post('/login',[APIAuthController::class,'login']);

Route::group(['middleware' => "auth:admins"],function(){
    Route::post('/logout',[AuthController::class,'logout']);
    Route::get('/get_profile',[AuthController::class,'get_profile']);
    Route::prefix('/project')->group(function(){
        Route::get('/all',[ProjectController::class,'get_all']);
        Route::get('/info_for_project/{id}',[ProjectController::class,'get_info']);
        Route::get('/get_status',[ProjectController::class,'get_status']);
    });
    Route::prefix('/users')->group(function (){
        
        Route::get('/evaluate_student/{id}',[UserController::class,'evaluate_student']);
        Route::get('/all',[UserController::class,'get_all']);
        Route::get('/one_with_project/{user_id}',[UserController::class,'one_with_project']);
    });

    Route::prefix('/employee')->group(function (){
        Route::get('/all',[EmployeeController::class,'get_all']);
        Route::post('/create',[EmployeeController::class,'create_employee']);
        Route::post('/update/{id}',[EmployeeController::class,'update_employee']);
        Route::delete('/delete/{id}',[EmployeeController::class,'delete_employee']);
    });

    Route::prefix('/specializations')->group(function () {
        Route::get('/all', [SpecializationController::class,'all_specializations']);
         Route::get('/one/{id}', [SpecializationController::class,'one_specialization']);
         Route::post('/create', [SpecializationController::class,'create_specialization']);
         Route::post('/update/{id}', [SpecializationController::class,'update_specialization']);
         Route::delete('/delete/{id}', [SpecializationController::class,'delete_specialization']);

    });
    Route::prefix('/academic_years')->group(function () {
        Route::get('/all', [AcademicYearController::class, 'all_academic_years']);
        Route::get('/one/{id}', [AcademicYearController::class,'one_academic_year']);
        Route::post('/create', [AcademicYearController::class,'create_academic_year']);
        Route::post('/update/{id}', [AcademicYearController::class,'update_academic_year']);
        Route::delete('/delete/{id}', [AcademicYearController::class,'delete_academic_year']);

    });
    Route::prefix('/semesters')->group(function () {
        Route::get('/all', [SemesterController::class, 'all_semesters']);
        Route::get('/one/{id}', [SemesterController::class,'one_semester']);
        Route::post('/create', [SemesterController::class,'create_semester']);
        Route::post('/update/{id}', [SemesterController::class,'update_semester']);
        Route::delete('/delete/{id}', [SemesterController::class,'delete_semester']);

    });

});