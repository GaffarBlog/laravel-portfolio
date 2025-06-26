<?php

namespace App\Http\Controllers\admin;

use Inertia\Inertia;
use App\Models\HomeContent;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HeroContent extends Controller
{
    public function index(Request $request)
    {
        $contents = HomeContent::where('section', 'hero')->first();
        $contents = $contents?->contents;
        return Inertia::render('admin/HeroContent', [
            'contents' => $contents
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'badge' => 'required|string',
            'sub_title' => 'required|string',
            'title' => 'required|string',
            'image_1' => 'nullable|image',
            'image_2' => 'nullable|image',
            'image_3' => 'nullable|image',
            'image_4' => 'nullable|image',
            'button_1' => 'required|string',
            'button_2' => 'required|string',
            'image_1_text' => 'required|string',
            'image_2_text' => 'required|string',
            'image_3_text' => 'required|string',
            'image_4_text' => 'required|string',
            // 'resume' => 'nullable|file|max:2048', // Optional PDF file
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
            'image_1_text.required' => 'Image 1 text is required.',
            'image_2_text.required' => 'Image 2 text is required.',
            'image_3_text.required' => 'Image 3 text is required.',
            'image_4_text.required' => 'Image 4 text is required.',

            // 'resume.file' => 'Resume must be a file.',
            // 'resume.max' => 'Resume must not be greater than 2MB.',
        ]);
        $content =  HomeContent::where('section', 'hero')->first();

        $contents = [];
        if ($content && $content->contents) {
            $contents = $content->contents;
        }

        $contents['badge'] = $request->badge;
        $contents['sub_title'] = $request->sub_title;
        $contents['title'] = $request->title;
        $contents['button_1'] = $request->button_1;
        $contents['button_2'] = $request->button_2;
        $contents['image_1_text'] = $request->image_1_text;
        $contents['image_2_text'] = $request->image_2_text;
        $contents['image_3_text'] = $request->image_3_text;
        $contents['image_4_text'] = $request->image_4_text;
        // Handle Image Uploads
        foreach (['image_1' => "image_1_text", 'image_2' => "image_2_text", 'image_3' => "image_3_text", 'image_4' => "image_4_text"] as $file_key => $text_key) {
            if ($request->hasFile($file_key)) {
                $image = $request->file($file_key);
                $imageName = Str::slug($request[$text_key]) . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('storage/uploads/home'), $imageName);
                $contents[$file_key] = $imageName;
            }
        }
        if ($request->hasFile("resume")) {
            $file = $request->file("resume");
            $appname = env("APP_NAME") ?? "Laravel";
            $file_name = Str::slug($appname) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('storage/uploads/home'), $file_name);
            $contents["resume"] = $file_name;
        }
        // Save the Content
        HomeContent::updateOrCreate(['section' => 'hero'], [
            'contents' => $contents
        ]);

        return redirect()->back()->with('success', 'Hero content updated successfully.');
    }
}
