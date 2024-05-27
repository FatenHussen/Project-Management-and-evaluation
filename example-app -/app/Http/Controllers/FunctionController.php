<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FunctionController extends Controller
{
    public function executeFunction(Request $request)
    {
        $array = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [100, 40, 40, 0, 0, 0, 0, 0, 0],
            [100, 80, 100, 100, 100, 100, 0, 0, 0],
            [100, 100, 100, 100, 100, 100, 60, 0, 100],
            [100, 100, 100, 100, 100, 100, 100, 0, 100],
            [100, 100, 100, 100, 100, 100, 100, 60, 100],
        ];

        $columns = 9;
        // $array = [];

        // $rows = 15; // number of meeting
        // $x = 0;
        // $y = 100;

        // for ($i = 0; $i < 15; $i++) {
        //     $row = [];
        //     for ($j = 0; $j < $columns; $j++) {
        //         $value = rand($x, $y);
        //         $row[] = $value;
        //     }
        //     $array[] = $row;
        // }

        $multipliedArray = [];
        
        foreach ($array as $index => $row) {
            $multiplier = ($index + 1) * 0.01;
        
            $multipliedRow = array_map(function ($value) use ($multiplier) {
                return $value * $multiplier;
            }, $row);
        
            $multipliedArray[] = $multipliedRow;
        }
        
        $columnCount = count($multipliedArray[0]);
        $rowCount = count($multipliedArray);
        
        $columnSums = [];
        
        
        for ($colIndex = 0; $colIndex < $columnCount; $colIndex++) {
            $w = 0;
            for ($rowIndex = 0; $rowIndex < $rowCount; $rowIndex++) {
                $value = $multipliedArray[$rowIndex][$colIndex];
                if ($value != 0) {
                    $multiplier = ($rowIndex + 1) * 0.01;
                    $w += $multiplier;
                }
                if (!isset($columnSums[$colIndex])) {
                    $columnSums[$colIndex] = $value;
                } else {
                    $columnSums[$colIndex] += $value;
                }
            }
            $columnSums[$colIndex] = ceil($columnSums[$colIndex] / $w);
        }
        
        $data = implode(',', $columnSums);

        $scriptPath = 'D:/study/project/example-app/script.py';
        
        $command = 'python ' . $scriptPath . ' ' . escapeshellarg($data);
        $output = [];
        $exitCode = 0;
        exec($command, $output, $exitCode);

        if ($exitCode === 0) {
            $predictions = implode(', ', $output);
        } else {
            echo "An error occurred while executing the script.";
        }
        return view('evaluation', compact('id','predictions','array'));
    }
}