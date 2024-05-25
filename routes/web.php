<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FunctionController;

Route::get('/', function () {
    return view('index');
});

// Route::get('/evaluation/{3}' , [\App\Http\Controllers\FunctionController::class, 'executeFunction']);

Route::get('/evaluation' , [\App\Http\Controllers\FunctionController::class, 'executeFunction']);
Route::get('/evaluation_Final' , [\App\Http\Controllers\FunctionControllerExpert::class, 'executeFunctionExpert']);
