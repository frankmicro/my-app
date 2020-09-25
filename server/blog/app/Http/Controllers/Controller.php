<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class Controller extends BaseController
{
    protected function response($return)
    {
        if (isset($return['http_code'])) {
            $http_code = $return['http_code'];
            unset($return['http_code']);
        } else {
            $http_code = 200;
        }

        return response()->json($return, $http_code);
    }

    protected function validateApi(array $data, array $rules)
    {
        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            $message = implode(',', $validator->errors()->all());
            throw new ValidationException($message);
        }
    }
}
