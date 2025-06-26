<?php

namespace App\Http\Controllers\admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HeroContent extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('admin/HeroContent');
    }

    public function update(Request $request)
    {
        $request->validate([
            'badge' => 'required|string',
            'sub_title' => 'required|string',
            'title' => 'required|string',
            'image_1' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_2' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_3' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_4' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'button_1' => 'required|string',
            'button_2' => 'required|string',
        ], [
            'badge.required' => 'Badge is required.',
            'sub_title.required' => 'Subtitle is required.',
            'title.required' => 'Title is required.',
            'image_1.image' => 'Image 1 must be an image file.',
            'image_2.image' => 'Image 2 must be an image file.',
            'image_3.image' => 'Image 3 must be an image file.',
            'image_4.image' => 'Image 4 must be an image file.',
            'button_1.required' => 'Button 1 text is required.',
            'button_2.required' => 'Button 2 text is required.',
        ]);

        // Here you would typically save the data to the database or perform other actions

        return redirect()->back()->with('success', 'Hero content updated successfully.');
    }
}
