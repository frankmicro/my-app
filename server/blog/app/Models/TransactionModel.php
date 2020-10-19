<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransactionModel extends Model
{
    protected $table = 'transactions';

    protected $fillable = [
        'name','description','amount','added_at'
    ];

    public function lists()
    {
        return TransactionModel::all();   
    }

    public function add($params)
    {
        return TransactionModel::create($params);
    }
}
