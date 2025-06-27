<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\Dashboard;
use App\Http\Controllers\admin\HeroContent;
use App\Http\Controllers\admin\AboutContent;
use App\Http\Controllers\admin\SkillsContent;
use App\Http\Controllers\admin\SummaryContent;



Route::middleware(['auth', 'verified'])->prefix("admin-ag")->group(function () {

    // dashboard
    Route::controller(Dashboard::class)->group(function () {
        Route::get('/', "index")->name('dashboard');
    });

    // Hero contents
    Route::controller(HeroContent::class)->group(function () {
        Route::get('/home-contents/hero', "index");
        Route::post('/home-contents/hero', "update");
    });
    // Summary contents
    Route::controller(SummaryContent::class)->group(function () {
        Route::get('/home-contents/summary', "index");
        Route::post('/home-contents/summary', "update");
    });
    // About contents
    Route::controller(AboutContent::class)->group(function () {
        Route::get('/home-contents/about', "index");
        Route::post('/home-contents/about', "update");
    });

    // Skills contents
    Route::controller(SkillsContent::class)->group(function () {
        Route::get('/home-contents/skills', "index");
        Route::post('/home-contents/skills', "update");
    });
});
