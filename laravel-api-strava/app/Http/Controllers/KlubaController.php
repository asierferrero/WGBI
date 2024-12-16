<?php

namespace App\Http\Controllers;

use App\Models\Atleta;
use App\Models\Jarduera;
use App\Models\Kluba;
use Illuminate\Http\Request;

class KlubaController extends Controller
{
    //
    public function index()
    {
        $klubak = Kluba::all();
        return response()->json($klubak,200);
    }

    public function show(int $id)
    {
        //Hemen klub baten jarduerak ikusteko
        $kluba = Kluba::with('jarduerak')
            ->where('id',$id)
            ->first();
        return response()->json($kluba, 200);
    }

    public function store(Request $request)
    {
        $kluba = Kluba::create($request->all());

        return response()->json($kluba, 201);
    }

    public function update(Request $request, Kluba $kluba)
    {
        $kluba->update($request->all());

        return response()->json($kluba, 200);
    }

    public function delete(Kluba $kluba)
    {
        $kluba->delete();

        return response()->json(null, 204);
    }
}
