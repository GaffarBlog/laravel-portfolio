<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $table = 'skills';
    protected $fillable = [
        'name',
        'icon',
        'description',
        'type',
        'parent_id',
    ];
}
