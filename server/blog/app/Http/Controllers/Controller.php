<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    protected function response($return)
    {
        //$return['request_id'] = AppLog::getRequestId();
        if (isset($return['http_code'])) {
            $http_code = $return['http_code'];
            unset($return['http_code']);
        } else {
            $http_code = 200;
        }

        return response()->json($return, $http_code);
    }
}
