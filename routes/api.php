<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::apiResource('/job', JobController::class);
    Route::apiResource('/event', EventController::class);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/jobs/create', [JobController::class, 'store']);
Route::post('/events/create', [EventController::class, 'store']);


Route::get('/job', [JobController::class, 'index'])->withoutMiddleware('auth');
Route::get('/event', [EventController::class, 'index'])->withoutMiddleware('auth');
