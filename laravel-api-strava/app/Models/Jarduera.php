<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jarduera extends Model
{
    use HasFactory;
    protected $table = 'jardueras';
    public function atleta()
    {
        $this->belongsTo(Atleta::class,'atleta_id','id');
    }
}
