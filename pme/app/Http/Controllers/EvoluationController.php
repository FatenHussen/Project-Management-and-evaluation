<?php

namespace App\Http\Controllers;

use App\Models\Evoluation;
use Illuminate\Http\Request;

class EvoluationController extends Controller
{
    public function getAll()
    {
        $evoluation = Evoluation::all();
        return response()->json($evoluation);
    }
    public function getById(Request $request, $id)
    {
        // $Evoluation = Evoluation::with('user')->find($id);
        $evoluation = Evoluation::find($id);
        return response()->json($evoluation);
    }
    public function create(Request $request)
    {

        $request->validate([
            'project_id' => 'required',
            'name' => 'required',
        ]);


        $evoluation = Evoluation::create([
            'name' => $request->name,
        ]);
        return response()->json($evoluation);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'project_id' => 'required',
            'name' => 'required',

        ]);
        $evoluation = Evoluation::find($id);
        $evoluation->name = $request->name;

        $evoluation->save();
        return response()->json($evoluation);
    }
    public function delete(Request $request, $id)
    {
        $evoluation = Evoluation::find($id);
        $evoluation->delete();
        return response()->json($evoluation);
    }
}
