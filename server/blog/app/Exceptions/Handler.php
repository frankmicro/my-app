<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Laravel\Lumen\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthorizationException::class,
        HttpException::class,
        ModelNotFoundException::class,
        ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     * @return void
     */
    public function report(Exception $e)
    {
        parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        $response = [];
        $response['request_id'] = '';
        $response['success'] = false;

        if ($exception instanceof AuthServiceException) {
            $response['request_id'] = '';
            $response['success'] = false;
            $exception_code = $exception->getCode();
            $response['response_code'] = (!empty($exception_code)) ? $exception_code : 203;
            $response['message'] = $exception->getMessage();
            return response()->json($response, 401);
        } elseif ($exception instanceof ValidationException) {
            $response['response_code'] = 101;
            $response['message'] = $exception->getMessage();
            return response()->json($response, 400);
        } elseif ($exception instanceof BlogErrorException) {
            $exception_code = $exception->getCode();
            $response['response_code'] = (!empty($exception_code)) ? $exception_code : 102;

            $response['message'] = $exception->getMessage();
            if (App::environment('production')) {
                $response['message'] = 'Something went wrong!';
            }

            return response()->json($response, 500);
        } 

        return parent::render($request, $exception);
    }
}
