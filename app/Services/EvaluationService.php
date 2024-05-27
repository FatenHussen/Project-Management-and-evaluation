<?php

namespace App\Services;

use App\Models\Evaluation;
use App\Models\Evaluation_student;
use App\Models\Weekly_evaluation;
use App\Models\Weekly_evaluation_student;
use App\Services\BaseCrud\BaseCrudService;

class EvaluationService extends BaseCrudService
{
    public function __construct(Weekly_evaluation $weekly_evaluation)
    {
        parent::__construct($weekly_evaluation);
    }
    public function get_evaluations_for_project($id)
    {
        $evaluation = Weekly_evaluation::where('project_id', $id)->with('evaluations')->get();
        return $evaluation;
    }

    public function create_evaluation_for_project($info)
    {
        $evaluation = Weekly_evaluation::create($info);

        $evaluation->save();

        foreach ($info["weekly_evaluation_students"] as $student) {
            $evaluation->evaluations()->create($student);
        }
        return "create success";
    }

    public function get_evaluations_for_user($id)
    {
        $evaluation = Weekly_evaluation_student::where('user_id', $id)->with('evaluation')->get();
        return $evaluation;
    }

    public function create_evaluation($info)
    {
        $evaluation = Evaluation::create($info);
        $evaluation->save();
        if (isset($info['evaluation_students'])) {
            foreach ($info['evaluation_students'] as $evaluationStudent) {
                $evaluation->evaluations()->create([
                    'user_id' => $evaluationStudent['user_id'],
                    'grade' => $evaluationStudent['grade'],
                    'notes' => $evaluationStudent['notes'],
                ]);
            }
        }
        return $evaluation;
    }

    public function get_final_evaluations()
    {
        return Evaluation::where('is_final', 1)->get();
    }

    public function get_mid_evaluations()
    {
        return Evaluation::where('is_final', 0)->get();
    }

    public function update($id, $data)
    {
        $objectToEdit = Evaluation::find($id);
        $objectToEdit->update($data);
        return $objectToEdit;
    }

    public function get_mid_user($id)
    {
        return Evaluation_student::whereHas('evaluation', function ($query) {
            $query->where('is_final', false)
                ->whereHas('employee', function ($query) {
                    $query->where('role', 'doctor');
                });
        })->where('user_id', $id)->with('evaluation')->get();
    }

    public function get_final_user($id)
    {
        return Evaluation_student::whereHas('evaluation', function ($query) {
            $query->where('is_final', true)
                ->whereHas('employee', function ($query) {
                    $query->where('role', 'doctor');
                });
        })->where('user_id', $id)->with('evaluation')->get();
    }

    public function evaluateStudent($id)
    {
        $evaluations = Weekly_evaluation_student::where('user_id', $id)->get();
        $array = [];
        foreach ($evaluations as $evaluation) {
            $array[] = [
                $evaluation->testing,
                $evaluation->code,
                $evaluation->design,
                $evaluation->presentation,
                $evaluation->report,
                $evaluation->github,
                $evaluation->refernce_study,
                $evaluation->results,
                $evaluation->analysis,
            ];
        }

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
        // echo "<br>" . $data;

        $scriptPath = 'C:\Users\jawad\Documents\projects\Octopus\Proposal\script.py';

        $command = 'python ' . $scriptPath . ' ' . escapeshellarg($data);
        $output = [];
        $exitCode = 0;
        exec($command, $output, $exitCode);

        if ($exitCode === 0) {
            $predictions = implode(', ', $output);
        } else {
            return "An error occurred while executing the script.";
        }
        return ['predictions' => $predictions, 'array' => $array];
        //return true;
        //return $array;
    }
}
