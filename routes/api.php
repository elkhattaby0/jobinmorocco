<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\userController;
use App\Http\Controllers\API\CvController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/register', userController::class);

Route::get('/job', [JobController::class, 'index']);
Route::post('/job', [JobController::class, 'store']);

Route::post('/login', [userController::class, 'login']);
Route::get('/logout', [userController::class, 'logout']);
Route::put('/update_user', [userController::class, 'update']);


Route::get('/cv', [CvController::class, 'index']);
Route::post('/cv', [CvController::class, 'store']);