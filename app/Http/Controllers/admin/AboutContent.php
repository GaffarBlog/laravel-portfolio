<?php

namespace App\Http\Controllers\admin;

use Inertia\Inertia;
use App\Models\HomeContent;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AboutContent extends Controller
{
    public function index(Request $request)
    {
        $contents = HomeContent::where('section', 'about')->first();
        $contents = $contents?->contents;
        return Inertia::render('admin/AboutContent', [
            'contents' => $contents
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'about_image' => 'nullable|file|mimes:svg,png,jpg,jpeg|max:2048',
        ], [
            'title.required' => 'Please fill the title.',
            'subtitle.required' => 'Please fill the subtitle.',
            'description.required' => 'Please fill the description.',
        ]);
        $content =  HomeContent::where('section', 'about')->first();

        $contents = [];
        if ($content && $content->contents) {
            $contents = $content->contents;
        }

        $contents['title'] = $request->title;
        $contents['subtitle'] = $request->subtitle;
        $contents['description'] = $request->description;
        // Handle Image Uploads
        if ($request->hasFile("about_image")) {
            $image = $request->file("about_image");
            $imageName = Str::slug($request->title) . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('storage/uploads/about'), $imageName);
            $contents['about_image'] = $imageName;
        }

        // Save the Content
        HomeContent::updateOrCreate(['section' => 'about'], [
            'contents' => $contents
        ]);

        return redirect()->back()->with('success', 'About content updated successfully.');
    }
}
