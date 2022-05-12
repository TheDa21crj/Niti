<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CsvController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/ImportanceofOilPalm', function () {
    return view('ImportanceofOilPalm');
});

Route::get('/IndiaCurrentSituation', function () {
    return view('IndiaCurrentSituation');
});

Route::get('/BotanyofOilPalm', function () {
    return view('BotanyofOilPalm');
});

Route::get('/Products', function () {
    return view('Products');
});

Route::get('/GovernmentPolicy', function () {
    return view('GovernmentPolicy');
});

Route::get('/SuccessStories', function () {
    return view('SuccessStories');
});

Route::get('/Dashboard', function () {
    return view('Dashboard');
});

Route::get('/ArunachalPradesh', function () {
    return view('ArunachalPradesh');
});

Route::get('/Assam', function () {
    return view('Assam');
});

Route::get('/Manipur', function () {
    return view('Manipur');
});

Route::get('/Mizoram', function () {
    return view('Mizoram');
});

Route::get('/Nagaland', function () {
    return view('Nagaland');
});

Route::get('/AndhraPradesh', function () {
    return view('AndhraPradesh');
});

Route::get('/Chhattisgarh', function () {
    return view('Chhattisgarh');
});

Route::get('/Gujarat', function () {
    return view('Gujarat');
});

Route::get('/Karnataka', function () {
    return view('Karnataka');
});

Route::get('/Odisha', function () {
    return view('Odisha');
});

Route::get('/Tamilnadu', function () {
    return view('Tamilnadu');
});

Route::get('/Telangana', function () {
    return view('Telangana');
});

Route::get('/Goa', function () {
    return view('Goa');
});

Route::get('/Kerala', function () {
    return view('Kerala');
});

Route::get('/TrainingManual', function () {
    return view('TrainingManual');
});

Route::get('/PackageofPractices', function () {
    return view('PackageofPractices');
});

Route::get('/IrriagtionCalculator', function () {
    return view('IrriagtionCalculator');
});

Route::get('/FertlizerCalculator', function () {
    return view('FertlizerCalculator');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/Refrences', function () {
    return view('Refrences');
});


Route::get('/nodal-officer', function () {
    return view('welcome');
});

Route::get("/data", [CsvController::class, "index"], function () {
    return view('data');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
