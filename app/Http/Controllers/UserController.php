<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;

class UserController extends Controller
{
     /**
     * Instantiate a new UserController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Get the authenticated User.
     *
     * @return Response
     */
    public function profile()
    {
        return response()->json(['user' => Auth::user()], 200);
    }

    /**
     * Get all User.
     *
     * @return Response
     */
    public function allUsers()
    {
         return response()->json(['users' =>  User::all()], 200);
    }

    /**
     * Get one user.
     *
     * @return Response
     */
    public function singleUser($id)
    {
        try {
            $user = User::findOrFail($id);

            return response()->json(['user' => $user], 200);

        } catch (\Exception $e) {

            return response()->json(['message' => 'user not found!'], 404);
        }

    }

    public function createProduct(Request $request){
        $this->validate($request, [
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'stock' => 'required'
        ]);
        
        try{
            $user = Auth::user();
            if($user->tipoConta=="Vendor")
            {
                $product = new Product;
                $product->idSeller = $user->id;
                $product->name = $request->name;
                $product->price = $request->price;
                $product->description = $request->description;
                $product->stock = $request->stock;
                $product->save();
                 return response()->json(['product' => $product, 'message' => 'CREATED'], 201);
            }
            else{
                return response()->json(['product' => $product, 'message' => 'Conta Inválida'], 201);
            }
            
           

           
        }
        catch (\Exception $e){
            return response()->json(['message' => 'Product Creation Failed!'], 409);
        }
    }

    

    public function buyProduct(Request $request){
        $this->validate($request, [
            'name' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric',

        ]);

        try{
            $user = Auth::user();
            if($user->tipoConta=="Vendor" || $user->tipoConta=="Client" )
            {
                $product = new Product;
                $product->name = $request->name;
                $product->price = $request->price;
                $product->quantity = $request->quantity;
                
                $product->save();
                 return response()->json(['product' => $product, 'message' => 'CREATED'], 201);
            }
            else{
                return response()->json(['product' => $product, 'message' => 'Conta Inválida'], 201);
            }
            
           

           
        }
        catch (\Exception $e){
            return response()->json(['message' => 'Product Creation Failed!'.$e], 409);
        }
        }

}

