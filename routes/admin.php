<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\Dashboard;
use App\Http\Controllers\admin\HeroContent;
use App\Http\Controllers\admin\AboutContent;
use App\Http\Controllers\admin\SkillsContent;
use App\Http\Controllers\admin\SummaryContent;
use App\Http\Controllers\admin\SkillsController;



Route::middleware(['auth', 'verified'])->prefix("admin-ag")->group(function () {
    Route::get("/", function () {
        return redirect()->route('dashboard');
    });
    // dashboard
    Route::controller(Dashboard::class)->group(function () {
        Route::get('/dashboard', "index")->name('dashboard');
    });
    // Categories
    Route::controller(SkillsController::class)->group(function () {
        Route::get('/skills/{id?}', "index");
        Route::post('/skills-add', "store");
        Route::post('/skills-update', "update");
        Route::delete('/skills/{category}', "destroy");
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
