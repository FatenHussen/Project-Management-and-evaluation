<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function sendResponse($message = "Success", $code = 200, $data = [])
    {
        $response = [
            'data' => $data,
            'message' => $message,
        ];

        return response()->json($response, $code);
    }


    public function sendError($message = "Fail", $code = 400)
    {
        $response = [
            'error' => $message,
        ];

        return response()->json($response, $code);
    }
}
