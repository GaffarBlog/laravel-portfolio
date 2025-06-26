<?php

use App\Http\Controllers\admin\Dashboard;
use App\Http\Controllers\admin\HeroContent;
use Illuminate\Support\Facades\Route;



Route::middleware(['auth', 'verified'])->prefix("admin-ag")->group(function () {

    // dashboard
    Route::controller(Dashboard::class)->group(function () {
        Route::get('/', "index")->name('dashboard');
    });

    // dashboard
    Route::controller(HeroContent::class)->group(function () {
        Route::get('/home-contents/hero', "index");
        Route::post('/home-contents/update', "update");
    });
});
