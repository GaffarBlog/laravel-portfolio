<?php

use App\Http\Controllers\Home;
use Illuminate\Support\Facades\Route;


Route::controller(Home::class)->group(function () {
    Route::get('/', 'index');
});


// others routes file
require __DIR__ . '/admin.php';
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
