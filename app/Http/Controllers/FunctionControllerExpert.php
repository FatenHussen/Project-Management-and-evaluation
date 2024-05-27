<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FunctionControllerExpert extends Controller
{
    public function executeFunctionExpert(Request $request)
    {
        // $interim = 'أخضر';
        // $interim = "برتقالي";
        $interim = "أحمر";
        // $array = ['أحمر','برتقالي','أحمر','أحمر','أخضر'];    
        // $array = ['أحمر','برتقالي','أحمر','أحمر','أخضر'];    
        $array = ['أحمر','برتقالي','أخضر','أخضر','أخضر'];
        // $array = ['أحمر','أحمر','أحمر','أحمر','أحمر'];
        // $array = ['أخضر','أخضر','أخضر','أخضر','أخضر'];
        

        $data = implode(',', $array);

        $scriptPath = 'D:/study/project/example-app/Fuzzy_Script.py';
        
        $command = 'python ' . $scriptPath . ' ' . escapeshellarg($data) . ' ' . $interim ;
        $output = [];
        $exitCode = 0;
        exec($command, $output, $exitCode);

        if ($exitCode === 0) {
            $predictions = implode(', ', $output);
        } else {
            echo "An error occurred while executing the script.";
            $predictions = ' ';
        }
        return view('evaluationExpert', compact('predictions','array','interim'));
    }
}