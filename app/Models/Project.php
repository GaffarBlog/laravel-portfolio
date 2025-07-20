<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';
    protected $fillable = [
        'title',
        'slug',
        'description',
        'images',
        'live_link',
        'github_link',
        'tags',
        'category_id'
    ];

    public function Category()
    {
        return $this->hasOne(Skill::class, 'id', 'category_id');
    }
}
