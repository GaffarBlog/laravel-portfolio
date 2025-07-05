<?php

namespace App\Http\Controllers\admin;

use Inertia\Inertia;
use App\Models\Skill;
use App\Models\HomeContent;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SkillsController extends Controller
{
    public function index($id = null)
    {
        $skills = Skill::get();
        return Inertia::render('admin/Skills', [
            'skills' => $skills,
            'parent_id' => $id,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:skills,name|max:255',
            'description' => 'nullable|string',
            'type' => 'required|string|in:skill,featured,tab',
            'icon' => 'nullable|file|max:2048',
            'parent_id' => 'nullable|integer|exists:home_contents,id'
        ]);
        // return $request->parent_id;
        $file_name = null;
        if ($request->hasFile("icon")) {
            $file = $request->file("icon");
            $file_name = Str::slug($request->name) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('storage/uploads/skills'), $file_name);
        }
        $data = [
            'description' => $request->description,
            'type' => $request->type,
            'icon' => $file_name,
        ];
        if ($request->parent_id) {
            $data['parent_id'] = $request->parent_id;
        }
        Skill::updateOrCreate(
            ['name' => $request->name],
            $data
        );

        return redirect()->back()->with('success', 'Skills updated successfully.');
    }
    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required|integer|exists:skills,id',
            'name' => 'required|string|unique:skills,name,' . $request->id . '|max:255',
            'description' => 'nullable|string',
            'type' => 'required|string|in:skill,featured,tab',
            'icon' => 'nullable|file|max:2048',
            'parent_id' => 'nullable|integer|exists:home_contents,id'
        ]);

        // return $request->parent_id;
        $skill = Skill::find($request->id);
        $file_name = $skill->icon; // Keep the existing icon if not updated
        if ($request->hasFile("icon")) {
            $file = $request->file("icon");
            $file_name = Str::slug($request->name) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('storage/uploads/skills'), $file_name);
        }
        $data = [
            'description' => $request->description,
            'type' => $request->type,
            'icon' => $file_name,
            'name' => $request->name,
        ];
        if ($request->parent_id) {
            $data['parent_id'] = $request->parent_id;
        }
        $skill->update($data);

        return redirect()->back()->with('success', 'Skills updated successfully.');
    }
}
