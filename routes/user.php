<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\EvaluationController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\ProposalController;
use App\Http\Controllers\Dashboard\AcademicYearController;
use App\Http\Controllers\Dashboard\SemesterController;
use App\Http\Controllers\Dashboard\SpecializationController;
use App\Http\Controllers\Dashboard\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/send_otp', [AuthController::class, 'send_otp']);
Route::post('/verify_otp', [AuthController::class, 'verify_otp']);

Route::group(['middleware' => "auth:users"], function () {

    Route::prefix('/profile')->group(function () {
        Route::get('/', [AuthController::class, 'get_profile']);
        Route::post('/update', [AuthController::class, 'update_profile']);
    });

    Route::prefix('/specializations')->group(function () {
        Route::get('/all', [SpecializationController::class, 'all_specializations']);
    });
    Route::prefix('/academic_years')->group(function () {
        Route::get('/all', [AcademicYearController::class, 'all_academic_years']);
    });

    Route::prefix('/semesters')->group(function () {
        Route::get('/all', [SemesterController::class, 'all_semesters']);
    });

    Route::prefix('/users')->group(function () {
        Route::get('/all', [UserController::class, 'get_all']);
    });

    //project
    Route::prefix('/projects')->group(function () {
        Route::get('/get_users_for_project/{id}', [ProjectController::class, 'get_users_for_project']);
        Route::get('/get_project_for_user', [ProjectController::class, 'get_project_for_user']);
        Route::get('/get_info_for_project/{id}', [ProjectController::class, 'get_info_for_project']);
        Route::post('/create', [ProjectController::class, 'create_project']);
        Route::delete('/delete', [ProjectController::class, 'delete_project']);
        // Route::get('/get_users_and_employees',[ProjectController::class,'delete_project','get_users_employees']);
    });


    Route::prefix('/proposal')->group(function () {
        Route::post('/create', [ProposalController::class, 'create_proposal']);
        Route::get('/get_proposal', [ProposalController::class, 'get_proposal']);
        Route::get('/get_draft_proposal', [ProposalController::class, 'get_draft_proposal']);
        Route::delete('/delete_proposal', [ProposalController::class, 'delete_proposal']);
    });
    Route::prefix('/evaluation')->group(function () {
        Route::get('/mid_evaluation', [EvaluationController::class, 'get_mid_user']);
        Route::get('/final_evaluation', [EvaluationController::class, 'get_final_user']);
        Route::get('/weekly_evaluations', [EvaluationController::class, 'evaluations_for_user']);
    });
});
