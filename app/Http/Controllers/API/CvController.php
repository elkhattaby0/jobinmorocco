<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Cv;
use Illuminate\Support\Facades\Validator;

class CvController extends Controller
{

    public function index()
    {
        $res = Cv::all();
        return response()->json($res);
    }

    public function store(Request $request)
    {
        $res = Cv::where('userId', $request->userId)->get();
        if($res->count() === 0)
        {
            $validator = Validator::make($request->all(), [
                'userId' => 'required|unique:cvs',
                'fullname' => 'required',
                'dateBirth' => 'required|date',
                'phoneNumbre' => 'required',
                'address' => 'required',
                'email' => 'required|email',
                'education' => 'required',
                'experience' => 'required',
                'skills' => 'required',
                'interests' => 'required',
            ]);
    
            if ($validator->fails()) {
                return response()->json( $validator->errors(), 400);
            }else {
                Cv::create([
                    'userId' => $request->userId,
                    'fullname' => $request->fullname,
                    'dateBirth' => $request->dateBirth,
                    'phoneNumbre' => $request->phoneNumbre,
                    'address' => $request->address,
                    'email' => $request->email,
                    'education' => $request->education,
                    'experience' => $request->experience,
                    'skills' => $request->skills,
                    'interests' => $request->interests,
                ]);
    
                return response()->json('Successfully');
            }
        }else {
            $validator = Validator::make($request->all(), [
                'fullname' => 'required',
                'dateBirth' => 'required|date',
                'phoneNumbre' => 'required',
                'address' => 'required',
                'email' => 'required|email',
                'education' => 'required',
                'experience' => 'required',
                'skills' => 'required',
                'interests' => 'required',
            ]);
    
            if ($validator->fails()) {
                return response()->json( $validator->errors(), 400);
            }else {
                $info = Cv::find($request->id);
                $info->fullname = $request->fullname;
                $info->dateBirth = $request->dateBirth;
                $info->phoneNumbre = $request->phoneNumbre;
                $info->address = $request->address;
                $info->email = $request->email;
                $info->education = $request->education;
                $info->experience = $request->experience;
                $info->skills = $request->skills;
                $info->interests = $request->interests;

                $info->save();
            }
        }
        
    }
}
