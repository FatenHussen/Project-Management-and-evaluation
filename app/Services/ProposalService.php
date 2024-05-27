<?php

namespace App\Services;

use App\Models\Proposal;
use App\Models\User;
use App\Services\BaseCrud\BaseCrudService;
use App\Traits\FileTrait;

class ProposalService extends BaseCrudService
{
    use FileTrait;

    
    public function __construct(Proposal $proposal)
    {
        parent::__construct($proposal);
    }
    public function get_user_proposal($id)
    {
        $user = User::find($id);
        return $user->project->proposal;
    }

    public function get_draft_proposal($id)
    {
        $user = User::find($id);
        return $user->project->draft_proposal;
    }

    public function get_project_proposal($id)
    {
        return Proposal::where('project_id',$id)->get();
    }

    public function create($data)
    {
        if (isset($data['mind_map']) ) {
            $path = $this->uploadFile("public", $data['mind_map']);
            $data['mind_map'] = $path;
        }
        if (isset($data['main_map']) ) {
            $path = $this->uploadFile("public", $data['main_map']);
            $data['main_map'] = $path;
        }
        return Proposal::create($data);
    }

    public function update($id, $data)
    {
        $result = Proposal::find($id);
        if ($result) {
            if (isset($data['mind_map'])) {
                $this->deleteFile("public", $result->mind_map);
                $path = $this->uploadFile("public", $data['mind_map']);
                $data['mind_map'] = $path;
            }
            if (isset($data['main_map'])) {
                $this->deleteFile("public", $result->main_map);
                $path = $this->uploadFile("public", $data['main_map']);
                $data['main_map'] = $path;
            }
            $result->update($data);
            return $result;
        }
        else {
            return response()->json(
                ['error' => 'update error'], 400
            );
        }
    }
}