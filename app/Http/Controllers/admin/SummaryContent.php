<?php

namespace App\Http\Controllers\admin;

use Inertia\Inertia;
use App\Models\HomeContent;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SummaryContent extends Controller
{
    public function index(Request $request)
    {
        $contents = HomeContent::where('section', 'summary')->first();
        $contents = $contents?->contents;
        return Inertia::render('admin/SummaryContent', [
            'contents' => $contents
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'image_1' => 'nullable|file|mimes:svg,png,jpg,jpeg|max:2048',
            'image_2' => 'nullable|file|mimes:svg,png,jpg,jpeg|max:2048',
            'image_3' => 'nullable|file|mimes:svg,png,jpg,jpeg|max:2048',
            'image_4' => 'nullable|file|mimes:svg,png,jpg,jpeg|max:2048',
            'summary_1' => 'required|string',
            'summary_2' => 'required|string',
            'summary_3' => 'required|string',
            'summary_4' => 'required|string',
        ], [
            'summary_1.required' => 'Summary 1 is required.',
            'summary_2.required' => 'Summary 2 is required.',
            'summary_3.required' => 'Summary 3 is required.',
            'summary_4.required' => 'Summary 4 is required.',
            'image_1.image' => 'Summary image must be an image file.',
            'image_2.image' => 'Summary image must be an image file.',
            'image_3.image' => 'Summary image must be an image file.',
            'image_4.image' => 'Summary image must be an image file.',
        ]);
        $content =  HomeContent::where('section', 'summary')->first();

        $contents = [];
        if ($content && $content->contents) {
            $contents = $content->contents;
        }

        $contents['summary_1'] = $request->summary_1;
        $contents['summary_2'] = $request->summary_2;
        $contents['summary_3'] = $request->summary_3;
        $contents['summary_4'] = $request->summary_4;
        // Handle Image Uploads
        foreach (['image_1' => "summary_1", 'image_2' => "summary_2", 'image_3' => "summary_3", 'image_4' => "summary_4"] as $file_key => $text_key) {
            if ($request->hasFile($file_key)) {
                $image = $request->file($file_key);
                $imageName = Str::slug($request[$text_key]) . time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('storage/uploads/summary'), $imageName);
                $contents[$file_key] = $imageName;
            }
        }

        // Save the Content
        HomeContent::updateOrCreate(['section' => 'summary'], [
            'contents' => $contents
        ]);

        return redirect()->back()->with('success', 'Summary content updated successfully.');
    }
}
