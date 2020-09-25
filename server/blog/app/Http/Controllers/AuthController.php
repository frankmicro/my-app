<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\CustomValidationService;
use App\Services\Traits\ResponseCodeTrait;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{
    /**
     * @var \Tymon\JWTAuth\JWTAuth
     */
    protected $jwt;

    protected $custom_validation;

    protected $request;

    use ResponseCodeTrait;

    public function __construct(JWTAuth $jwt, CustomValidationService $custom_validation, Request $request)
    {
        $this->jwt               = $jwt;
        $this->custom_validation = $custom_validation;
        $this->request           = $request;
    }

    public function postLogin()
    {
        $data = $this->request->all();

        $required_fields = ['email', 'password'];

        $rules = $this->custom_validation->getRules($required_fields);

        $this->validateApi($data, $rules);

        $response = self::getResponseCode(1);

        try {

            if (!$token = $this->jwt->attempt($this->request->only('email', 'password'))) {
                $response            = self::getResponseCode(104);
                $response['message'] = "user_not_found";
                return $this->response($response);
            }

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent' => $e->getMessage()], 500);

        }
        $response['data']         = compact('token');
        $response['data']['user'] = \Auth::user();
        return $this->response($response);
    }
}
