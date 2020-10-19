<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\TransactionModel;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    protected $request;

    protected $model;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, TransactionModel $model)
    {
        $this->request = $request;
        $this->model   = $model;
    }

    public function lists()
    {
        
    }

    public function store()
    {

    }

    public function update($id)
    {

    }
}
