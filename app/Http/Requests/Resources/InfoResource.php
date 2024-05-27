<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($info): array
    {
        return [
            'project' => $info,
            'users' => $this->user,
            'proposal' => $this->proposal,
            'employees' => $this->employees,
        ];
    }
}