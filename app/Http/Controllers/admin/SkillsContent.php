<?php

namespace App\Http\Controllers\admin;

use Inertia\Inertia;
use App\Models\HomeContent;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SkillsContent extends Controller
{
    public function index(Request $request)
    {
        $contents = HomeContent::where('section', 'skills')->first();
        $contents = $contents?->contents;
        return Inertia::render('admin/SkillsContent', [
            'contents' => $contents
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'skills' => 'required|array',
            'skills.*' => 'required|string|max:255',
            'images' => 'nullable|array',
            'images.*' => 'nullable|file|mimes:jpg,jpeg,png,svg|max:2048',
        ], [
            'skills.required' => 'The skills field is required.',
            'skills.*.required' => 'Please fill the skill title.',
            'skills.*.string' => 'Each skill title must be a string.',
            'skills.*.max' => 'Each skill title may not be greater than 255 characters.',
            'images.*.file' => 'Each image must be a valid file.',
            'images.*.mimes' => 'Each image must be a file of type: jpg, jpeg, png, svg.',
            'images.*.max' => 'Each image may not be greater than 2MB.',
        ]);

        $content =  HomeContent::where('section', 'skills')->first();

        $contents = [];
        if ($content && $content->contents) {
            $contents = $content->contents;
        }

        if ($request->skills) {
            // return "okey";
            foreach ($request->skills as $index => $title) {
                $contents[$index]['title'] = $title;
                if ($request->hasFile("images.$index")) {
                    $image = $request->file("images.$index");
                    $imageName = Str::slug($title) . time() . '.' . $image->getClientOriginalExtension();
                    $image->move(public_path('storage/uploads/skills'), $imageName);
                    $contents[$index]['image'] = $imageName;
                }
            }
        }
        // Save the Content
        HomeContent::updateOrCreate(['section' => 'skills'], [
            'contents' => $contents
        ]);

        return redirect()->back()->with('success', 'Skills content updated successfully.');
    }
}
