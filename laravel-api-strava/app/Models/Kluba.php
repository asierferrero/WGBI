<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kluba extends Model
{
    use HasFactory;

    protected $table = 'klubas';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'cover_photo_small',
        'sport_type',
        'private',
        'member_count',
        'description',
        'club_type'
    ];
    public function atletak()
    {
        return $this->hasMany(Atleta::class,'kluba_id','id');
    }
    public function jarduerak()
    {
        return $this->hasManyThrough(Jarduera::class,Atleta::class,'kluba_id','atleta_id');
    }
}
