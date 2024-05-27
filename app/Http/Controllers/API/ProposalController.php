<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateProposalRequest;
use App\Http\Requests\ProposalDraftRequest;
use App\Http\Requests\ProposalSaveRequest;
use App\Models\Proposal;
use App\Services\ProposalService;
use Illuminate\Http\Request;

class ProposalController extends Controller
{

    private $_service;

    public function __construct(ProposalService $service)
    {
        $this->_service = $service;
    }

    public function create_proposal(CreateProposalRequest $request)
    {
        $info = $request->validated();
        $proposal = Proposal::where('project_id', $request->project_id)->first();
        if (!$proposal)
            $data = $this->_service->create($info);
        else
            $data = $this->_service->update($proposal->id, $info);
        return $this->sendResponse(message: '', data: $data);
    }

    public function get_proposal()
    {
        $id = auth('users')->id();
        $data = $this->_service->get_user_proposal($id);
        return $this->sendResponse(message: '', data: $data);
    }

    public function get_draft_proposal()
    {
        $id = auth('users')->id();
        $data = $this->_service->get_draft_proposal($id);
        return $this->sendResponse(message: '', data: $data);
    }

    public function delete_proposal()
    {
        $user = auth('users')->user();
        $project_id = $user->project_id;
        $id = Proposal::where('project_id', $project_id)->first()->id;
        $data = $this->_service->destroy($id);
        if ($data == true) {
            return $this->sendResponse(message: '', data: $data);
        } else
            return $this->sendError(message: 'not found');
    }

    public function get_project_proposal($id)
    {
        $data = $this->_service->get_project_proposal($id);
        return $this->sendResponse(message: '', data: $data);
    }
}