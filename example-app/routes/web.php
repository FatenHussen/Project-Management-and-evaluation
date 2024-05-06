<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FunctionController;

Route::get('/', function () {
    return view('index');
});

Route::get('/evaluation' , [\App\Http\Controllers\FunctionController::class, 'executeFunction']);
