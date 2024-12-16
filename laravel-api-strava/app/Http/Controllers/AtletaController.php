<?php

namespace App\Http\Controllers;

use App\Models\Atleta;
use App\Models\Jarduera;
use Illuminate\Http\Request;

class AtletaController extends Controller
{
    //
    public function index()
    {
        $atletak = Atleta::all();
        return response()->json($atletak,200);
    }

    public function show(string $id)
    {
        //Hemen atleta baten jarduerak ikusteko
        $atleta = Atleta::with('jarduerak')
            ->where('id',$id)
            ->first();
        return response()->json($atleta, 200);
    }

    public function store(Request $request)
    {
        $atleta = Atleta::create($request->all());

        return response()->json($atleta, 201);
    }

    public function update(Request $request, Atleta $atleta)
    {
        $atleta->update($request->all());

        return response()->json($atleta, 200);
    }

    public function delete(Atleta $atleta)
    {
        $atleta->delete();

        return response()->json(null, 204);
    }
}
