<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*derrigorrezkoa*/
use App\Http\Controllers\KlubaController;
use App\Http\Controllers\AtletaController;


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
/*Nire rutak*/
Route::get('klubak', [KlubaController::class, 'index'])->name('klubak');
Route::get('klubak/{id}', [KlubaController::class, 'show'])->name('klubak/{id}');
Route::get('atletak', [AtletaController::class, 'index'])->name('atletak');
Route::get('atletak/{id}', [AtletaController::class, 'show'])->name('atletak/{id}');

Route::post('klubak', [KlubaController::class, 'store'])->name('klubak');
Route::put('klubak/{id}', 'KlubaController@update');
Route::delete('klubak/{id}', 'KlubaController@delete');

/*
Route::post('klubak', 'KlubaController@store');
Route::get('klubak', 'KlubaController@index');

Route::get('klubak/{id}', 'KlubaController@show');
finito*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
