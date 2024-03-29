<?php

namespace App\Http\Controllers;

use App\Models\Committe;
use Illuminate\Http\Request;

class CommitteController extends Controller
{
    public function getAll()
    {
        $committe = Committe::all();
        return response()->json($committe);
    }
    public function getById(Request $request, $id)
    {
        // $committe = committe::with('user')->find($id);
        $committe = Committe::find($id);
        return response()->json($committe);
    }
    public function create(Request $request)
    {

        $request->validate([
            'group_id' => 'required',
            'name' => 'required',
            'description' => 'required',
        ]);


        $committe = Committe::create([
            'name' => $request->name,
        ]);
        return response()->json($committe);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'group_id' => 'required',
            'name' => 'required',
            'description' => 'required',

        ]);
        $committe = Committe::find($id);
        $committe->tname = $request->name;

        $committe->save();
        return response()->json($committe);
    }
    public function delete(Request $request, $id)
    {
        $committe = Committe::find($id);
        $committe->delete();
        return response()->json($committe);
    }
}
