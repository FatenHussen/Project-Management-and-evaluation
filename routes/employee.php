<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\EvaluationController;
use App\Http\Controllers\API\ProposalController;
use App\Http\Controllers\Dashboard\EmployeeController;
use App\Http\Controllers\Dashboard\ProjectController;
use App\Http\Controllers\Dashboard\UserController;
use Illuminate\Support\Facades\Route;

//Route::post('/login',[AuthController::class,'login']);

Route::group(['middleware' => "auth:employees"], function () {
    Route::get('/get_profile', [EmployeeController::class, 'get_profile']);
    Route::post('/update_profile', [AuthController::class, 'update_employee']);
    Route::get('/get_project_for_one_employee', [EmployeeController::class, 'get_projects']);
    Route::get('/get_info_project/{id}', [ProjectController::class, 'get_info']);

    Route::get('/students_for_academic_year/{id}', [EmployeeController::class, 'get_users_for_academic']); //new
    Route::get('/info_for_student', [EmployeeController::class, 'info_for_users']);
    Route::get('/all_employees', [EmployeeController::class, 'all_employees']);
    Route::get('/info_all_projects', [EmployeeController::class, 'info_all_projects']);

    Route::get('/get_project_proposal/{id}',[ProposalController::class,'get_project_proposal']);

    Route::prefix('/users')->group(function (){
        Route::get('/all',[UserController::class,'get_all']);
    });

    Route::prefix('/evaluations')->group(function () {
        Route::get('/get_evaluations_for_project/{id}', [EvaluationController::class, 'get_evaluations_for_project']);
        Route::post('/create_evaluation_for_project', [EvaluationController::class, 'create_evaluation_for_project']);
        Route::get('/get_evaluations_for_user/{id}', [EvaluationController::class, 'get_evaluations_for_user']);
        Route::post('/create_evaluation', [EvaluationController::class, 'create_evaluation']);
        Route::get('/get_all_final_evaluations', [EvaluationController::class, 'get_all_final_evaluations']);
        Route::get('/get_all_mid_evaluations', [EvaluationController::class, 'get_all_mid_evaluations']);
        Route::post('/update_evaluation/{id}', [EvaluationController::class, 'update_evaluation']);
    });

});