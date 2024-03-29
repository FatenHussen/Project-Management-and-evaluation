<?php

namespace App\Http\Controllers;

use App\Models\Standard;
use Illuminate\Http\Request;

class StandardController extends Controller
{
    public function getAll()
    {
        $standard = Standard::all();
        return response()->json($standard);
    }
    public function getById(Request $request, $id)
    {
        // $Evaluation = Evaluation::with('user')->find($id);
        $Standard = Standard::find($id);
        return response()->json($Standard);
    }
    public function create(Request $request)
    {
        $request->validate([
            'project_id' => 'required',
            'committe_id' => 'required',
            'name' => 'required',
        ]);


        $standard = Standard::create([
            'name' => $request->name,
        ]);
        return response()->json($standard);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'project_id' => 'required',
            'committe_id' => 'required',
            'name' => 'required',

        ]);
        $standard = Standard::find($id);
        $standard->name = $request->name;

        $standard->save();
        return response()->json($standard);
    }
    public function delete(Request $request, $id)
    {
        $standard = Standard::find($id);
        $standard->delete();
        return response()->json($standard);
    }
}
