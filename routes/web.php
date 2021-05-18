<?php

/** @var \Laravel\Lumen\Routing\Router $router */

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

$router->group(['middleware' => 'cors'], function () use ($router) {
    //All the routes you want to allow CORS for
  
    $router->options('/{any:.*}', function (Request $req) {
      return;
    });

    // API route group

    // POST  - url:8000/api/register

    $router->group(['prefix' => 'api'], function () use ($router) {
        // Matches "url:8000/api/register
        $router->post('register', 'AuthController@register');


        $router->post('createProduct', 'UserController@createProduct');

        // Matches "/api/login
        $router->post('login', 'AuthController@login');





        $router->post('somarNumeros1', 'AuthController@somarNumeros1');



        $router->post('somarNumeros', 'AuthController@somarNumeros');


        $router->post('buyProduct', 'UserController@buyProduct');

        // Matches "/api/profile
        $router->get('profile', 'UserController@profile');

        // Matches "/api/users/1 
        //get one user by id
        $router->get('users/{id}', 'UserController@singleUser');

        // Matches "/api/users
        $router->get('users', 'UserController@allUsers');
        
    });
});