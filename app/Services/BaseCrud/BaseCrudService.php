<?php

namespace App\Services\BaseCrud;

use Illuminate\Database\Eloquent\Model;

class BaseCrudService
{
    private Model $Model;
    public function __construct(Model $model)
    {
        $this->Model = $model;
    }
    public function get_all()
    {
        return  $this->Model::get();
    }

    public function get_one($id)
    {
        $object = $this->Model->where('id', $id)->first();
        return $object;
    }


    public function get_one_with_relation($id, $relation)
    {
        $object = $this->Model->where('id', $id)->with($relation)->first();
        return $object;
    }

    public function create($data)
    {
        return  $this->Model::create($data);
    }

    public function update($id, $data)
    {
        $objectToEdit = $this->Model::find($id);
        $objectToEdit->update($data);
        return $objectToEdit;
    }
    public function destroy($id)
    {
        $objectToDelete = $this->Model::find($id);
        if(!isset($objectToDelete))
        {
            return false ;
        }
        $objectToDelete->delete();
        return true;
    }
}