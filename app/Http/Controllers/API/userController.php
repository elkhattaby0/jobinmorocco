<?php

namespace App\Http\Controllers\API;

use App\Models\user;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() 
    {
        $user = user::all();
        return response()->json($user);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fullname' => 'required|min:1',
            'dateBirth' => 'required|date',
            'gender' => 'required',
            'type' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json( $validator->errors(), 400);
        }else {
            User::create([
                'fullname' => $request->fullname,
                'dateBirth' => $request->dateBirth,
                'gender' => $request->gender,
                'type' => $request->type,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            return response()->json("Sccessfully");
        }
        
        
        
    }

    public function login(Request $request){

        $check = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if(Auth::attempt($check)) {
            return response()->json(auth()->user());
        } else {
            return response()->json("Not Connected");
        }
    }

    public function logout(){
        Session::flush();
        Auth::logout();
        return response()->json("logout");
    }

    /**
     * Display the specified resource.
     */
    public function show(user $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, user $user)
    {
        
        $validator = Validator::make($request->all(), [
            'fullname' => 'required|min:1',
            'dateBirth' => 'required|date',
            'gender' => 'required',
            'email'  => 'required|email|unique:users,email,'.$request->id,
        ]);
        if ($validator->fails()) {
            return response()->json( $validator->errors(), 400);
        }else {
            $info = User::find($request->id);
            $info->fullname = $request->fullname;
            $info->dateBirth = $request->dateBirth;
            $info->gender = $request->gender;
            $info->email = $request->email;

            $info->save();
            return response()->json($info);
        }

        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(user $user)
    {
        //
    }
}
