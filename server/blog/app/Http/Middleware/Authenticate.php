<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Services\Traits\ResponseCodeTrait;

class Authenticate
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    use ResponseCodeTrait;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ($this->auth->guard($guard)->guest()) {
            $response = self::getResponseCode(103);
            return $this->response($response);
            //return response('Unauthorized.', 401);
        }

        return $next($request);
    }

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
