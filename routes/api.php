<?php

use App\Models\Group;
use App\Models\Standard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\StandardController;
use App\Http\Controllers\EvaluationController;
use App\Http\Controllers\EvoluationController;
use App\Http\Controllers\SupervisorController;
use App\Http\Controllers\EndEvaluationController;
use App\Http\Controllers\FinalEvaluationController;
use App\Http\Controllers\StandardEvoluationController;
use App\Http\Controllers\StandardEndEvoluationController;
use App\Http\Controllers\StandardFinalEvaluationController;
use App\Http\Middleware\DoctorMiddleware;
use App\Http\Middleware\StudentMiddleware;
use App\Http\Middleware\SupervisoreMiddleware;
use Illuminate\Routing\Route as RoutingRoute;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->group(function () {
    Route::middleware(StudentMiddleware::class)->group(function () {
        Route::put('/students/{id}', [StudentController::class, 'update']);
      //  Route::post('/students', [StudentController::class, 'create']);
    });
    Route::middleware(SupervisoreMiddleware::class)->group(function () {
        Route::put('/supervisors/{id}', [SupervisorController::class, 'update']);
    });
    Route::middleware(DoctorMiddleware::class)->group(function () {
        Route::delete('/supervisors/{id}', [SupervisorController::class, 'delete']);
        Route::delete('/students/{id}', [StudentController::class, 'delete']);
    });
});

//Students
Route::get('/students', [StudentController::class, 'getAll']);
Route::get('/students/{id}', [StudentController::class, 'getById']);
Route::post('/students', [StudentController::class, 'create'])->middleware(['auth:sanctum', DoctorMiddleware::class]);
//Route::put('/students/{id}', [StudentController::class, 'update']);
//Route::delete('/students/{id}', [StudentController::class, 'delete']);

//Supervisors
Route::get('/supervisors', [SupervisorController::class, 'getAll']);
Route::get('/supervisors/{id}', [SupervisorController::class, 'getById']);
Route::post('/supervisors', [SupervisorController::class, 'create']);
//Route::put('/supervisors/{id}', [SupervisorController::class, 'update']);
//Route::delete('/supervisors/{id}', [SupervisorController::class, 'delete']);

//doctors
Route::get('/doctors', [DoctorController::class, 'getAll']);
Route::get('/doctors/{id}', [DoctorController::class, 'getById']);
Route::post('/doctors', [DoctorController::class, 'create']);
Route::put('/doctors/{id}', [DoctorController::class, 'update']);
Route::delete('/doctors/{id}', [DoctorController::class, 'delete']);

//groups
Route::get('/groups', [GroupController::class, 'getAll']);
Route::get('/groups/{id}', [GroupController::class, 'getById']);
Route::post('/groups', [GroupController::class, 'create']);
Route::put('/groups/{id}', [GroupController::class, 'update']);
Route::delete('/groups/{id}', [GroupController::class, 'delete']);

//project
Route::get('/project', [ProjectController::class, 'getAll']);
Route::get('/project/{id}', [ProjectController::class, 'getById']);
Route::post('/project', [ProjectController::class, 'create']);
Route::put('/project/{id}', [ProjectController::class, 'update']);
Route::delete('/project/{id}', [ProjectController::class, 'delete']);

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
//Evoluation
Route::get('/evoluation', [EvoluationController::class, 'getAll']);
Route::get('/evoluation/{id}', [EvoluationController::class, 'getById']);
Route::post('/evoluation', [EvoluationController::class, 'create']);
Route::put('/evoluation/{id}', [EvoluationController::class, 'update']);
Route::delete('/evoluation/{id}', [EvoluationController::class, 'delete']);

//final_Evaluation
Route::get('/final_evaluation', [FinalEvaluationController::class, 'getAll']);
Route::get('/evaluation/{id}', [FinalEvaluationController::class, 'getById']);
Route::post('/final_evaluation', [finalEvaluationController::class, 'create']);
Route::put('/final_evaluation/{id}', [FinalEvaluationController::class, 'update']);
Route::delete('/final_evaluation/{id}', [FinalEvaluationController::class, 'delete']);
//final_standard_Evaluation
Route::get('/final_standard_evaluation', [StandardFinalEvaluationController::class, 'getAll']);
Route::get('/final_standard_evaluation/{id}', [StandardFinalEvaluationController::class, 'getById']);
Route::post('/final_standard_evaluation', [StandardFinalEvaluationController::class, 'create']);
Route::put('/final_standard_evaluation/{id}', [StandardFinalEvaluationController::class, 'update']);
Route::delete('/final_standard_evaluation/{id}', [StandardFinalEvaluationController::class, 'delete']);

//standard

Route::get('/standard', [StandardController::class, 'getAll']);
Route::get('/standard/{id}', [StandardController::class, 'getById']);
Route::post('/standard', [StandardController::class, 'create']);
Route::put('/standard/{id}', [StandardController::class, 'update']);
Route::delete('/standard/{id}', [StandardController::class, 'delete']);

//standard_end_Evoluation
Route::get('/standard_end_evoluation', [StandardEndEvoluationController::class, 'getAll']);
Route::get('/standard_end_evoluation/{id}', [StandardEndEvoluationController::class, 'getById']);
Route::post('/standard_end_evoluation', [StandardEndEvoluationController::class, 'create']);
Route::put('/standard_end_evoluation/{id}', [StandardEndEvoluationController::class, 'update']);
Route::delete('/standard_end_evoluation/{id}', [StandardEndEvoluationController::class, 'delete']);

//StandardEvoluation
Route::get('/standard_evoluation', [StandardEvoluationController::class, 'getAll']);
Route::get('/standard_evoluation/{id}', [StandardEvoluationController::class, 'getById']);
Route::post('/standard_evoluation', [StandardEvoluationController::class, 'create']);
Route::put('/standard_evoluation/{id}', [StandardEvoluationController::class, 'update']);
Route::delete('/standard_evoluation/{id}', [StandardEvoluationController::class, 'delete']);


//Authrization
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
}); 
