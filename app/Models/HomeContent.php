<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeContent extends Model
{
    protected $table = 'home_contents';

    protected $fillable = [
        'section',
        'contents',
    ];

    protected $casts = [
        'contents' => 'json',
    ];
}
