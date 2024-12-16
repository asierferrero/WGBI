<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atleta extends Model
{
    use HasFactory;
    protected $table = 'atletas';
    protected $keyType = 'string';
    public function kluba()
    {
        $this->belongsTo(Kluba::class,'kluba_id','id');
    }
    public function jarduerak()
    {
        return $this->hasMany(Jarduera::class,'atleta_id','id');
    }
}
