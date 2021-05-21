<?php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\User;

//import auth facades
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Store a new user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function register(Request $request)
    {
        //validate incoming request 
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'tipoConta' => 'required|string',
            'password' => 'required|confirmed',
            'saldo' => 'required',
            'pergunta' => 'required|string',
            'resposta' => 'required|string',
        ]);

        try {

            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->tipoConta = $request->tipoConta;
            $plainPassword = $request->password;
            $user->saldo = $request->saldo;
            $user->password = app('hash')->make($plainPassword);
            $user->pergunta = $request->pergunta;
            $user->resposta = $request->resposta;

            $user->save();

            //return successful response
             return response()->json(['user' => $user, 'message' => 'CREATED'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User Registration Failed!'], 409);
        }

    }

    public function somarNumeros1(Request $request){
        $this->validate($request, [
            'numeros' => 'required|string'

        ]);

        $stringNumeros = $request->numeros;

        $arrayNumeros = explode("-", $stringNumeros);

        $total = 0;
        foreach ($arrayNumeros as $item){
            $total += (int)$item;
        }

        return $total;
    }




    /**
     * Get a JWT via given credentials.
     *
     * @param  Request  $request
     * @return Response
     */
    public function login(Request $request)
    {
          //validate incoming request 
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only(['email', 'password']);

        if (! $token = Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }


}