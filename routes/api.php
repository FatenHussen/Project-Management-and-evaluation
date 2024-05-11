<?php

use App\Http\Controllers\UserController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\EvaluationController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\SupervisorController;
use App\Http\Controllers\EndEvaluationController;
use App\Http\Controllers\FinalEvaluationController;

use App\Http\Middleware\DoctorMiddleware;
use App\Http\Middleware\StudentMiddleware;
use App\Http\Middleware\SupervisoreMiddleware;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->group(function () {
    Route::middleware(StudentMiddleware::class)->group(function () {
     // Route::post('/students', [StudentController::class, 'create']);
    });
    Route::middleware(SupervisoreMiddleware::class)->group(function () {
       // Route::put('/supervisors/{id}', [SupervisorController::class, 'update']);
    });
    Route::middleware(DoctorMiddleware::class)->group(function () {
        Route::delete('/user/{id}', [UserController::class, 'delete']);
        Route::delete('/students/{id}', [StudentController::class, 'delete']);
    });
});

//Students
Route::get('/students', [StudentController::class, 'getAll']);
Route::get('/students/{id}', [StudentController::class, 'getById']);
Route::post('/students', [StudentController::class, 'create']);
Route::put('/students/{id}', [StudentController::class, 'update'])->middleware(['auth:student_api']);
Route::delete('/students/{id}', [StudentController::class, 'delete']);
Route::get('/students/projects', [StudentController::class, 'listStudentsWithProjects']);


//Supervisors
Route::get('/users', [UserController::class, 'getAll']);
Route::get('/users/{id}', [UserController::class, 'getById']);
Route::post('/users', [UserController::class, 'create']);
Route::put('/users/{id}', [UserController::class, 'update'])->middleware(['auth:sanctum']);
Route::delete('/users/{id}', [UserController::class, 'delete']);

//doctors
Route::get('/doctors', [DoctorController::class, 'getAll']);
Route::get('/doctors/{id}', [DoctorController::class, 'getById']);
//Route::post('/doctors', [DoctorController::class, 'create']);
Route::put('/doctors/{id}', [DoctorController::class, 'update']);
Route::delete('/doctors/{id}', [DoctorController::class, 'delete']);

//groups
Route::get('/groups', [GroupController::class, 'getAll']);
Route::get('/groups/{id}', [GroupController::class, 'getById']);
Route::post('/groups', [GroupController::class, 'create']);
Route::put('/groups/{id}', [GroupController::class, 'update']);
Route::delete('/groups/{id}', [GroupController::class, 'delete']);

//projects
Route::get('/projects', [App\Http\Controllers\ProjectController::class, 'getAll']);
Route::get('/projects/{id}', [App\Http\Controllers\ProjectController::class, 'getById']);
Route::post('/projects', [App\Http\Controllers\ProjectController::class, 'create']);
Route::put('/projects/{id}', [App\Http\Controllers\ProjectController::class, 'update']);
Route::delete('/projects/{id}', [App\Http\Controllers\ProjectController::class, 'delete']);
Route::get('/showProjectMembers',[App\Http\Controllers\StudentController::class,'showProjectMembers']);



//end_Evoluation
Route::get('/end_Evoluation', [EndEvaluationController::class, 'getAll']);
Route::get('/end_Evoluation/{id}', [EndEvaluationController::class, 'getById']);
Route::post('/end_Evoluation', [EndEvaluationController::class, 'create']);
Route::put('/end_Evoluation/{id}', [EndEvaluationController::class, 'update']);
Route::delete('/end_Evoluation/{id}', [EndEvaluationController::class, 'delete']);
//Evaluation
Route::get('/evaluation', [EvaluationController::class, 'getAll']);
Route::get('/evaluation/{id}', [EvaluationController::class, 'getById']);
Route::post('/evaluation', [EvaluationController::class, 'create']);
Route::put('/evaluation/{id}', [EvaluationController::class, 'update']);
Route::delete('/evaluation/{id}', [EvaluationController::class, 'delete']);
//Proposal
Route::get('/Proposal', [ProposalController::class, 'getAll']);
Route::get('/Proposal/{id}', [ProposalController::class, 'getById']);
Route::post('/Proposal', [ProposalController::class, 'create']);
Route::put('/Proposal/{id}', [ProposalController::class, 'update']);
Route::delete('/Proposal/{id}', [ProposalController::class, 'delete']);

//final_Evaluation
Route::get('/final_evaluation', [FinalEvaluationController::class, 'getAll']);
Route::get('/evaluation/{id}', [FinalEvaluationController::class, 'getById']);
Route::post('/final_evaluation', [FinalEvaluationController::class, 'create']);
Route::put('/final_evaluation/{id}', [FinalEvaluationController::class, 'update']);
Route::delete('/final_evaluation/{id}', [FinalEvaluationController::class, 'delete']);





//Authrization
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
}); 
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('Student_Register', 'Student_Register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
}); 
