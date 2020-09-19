<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->get('/key', function() {
    return \Illuminate\Support\Str::random(32);
});






    $router->group([
        "prefix"    => "api"
    ], function ($api) {
        // header('Access-Control-Allow-Origin: *');
        // header('Access-Control-Allow-Headers: Authorization, Content-Type, x-request-id');
        // header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        // header('Access-Control-Allow-Credentials', true);

        $api->post('/login', 'AuthController@postLogin');

        $api->group(['middleware' => 'auth'], function ($test) {
   
			    $test->get('/test', function() {

				$currentUser = Auth::user();
				return response()->json($currentUser);
		    });
		});

	});

