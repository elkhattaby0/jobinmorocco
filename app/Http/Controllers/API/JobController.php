<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{

    public function index() {
        $job = Job::all();
        return response()->json($job);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'company' => 'required|string',
            'salary' => 'required|numeric|min:0',
            'job' => 'required|string',
            'educational' => 'required|string',
            'experience' => 'required|string',
            'contract' => 'required|string',
            'region' => 'required|string',
            'language' => 'required|string',
            'description' => 'required|string',
            'userId' => 'required',
        ]);
        
        if ($validator->fails()) {
            return response()->json( $validator->errors(), 400);
        } else {
            Job::create([
                'title' => $request->title,
                'company' => $request->company,
                'salary' => $request->salary,
                'job' => $request->job,
                'educational' => $request->educational,
                'experience' => $request->experience,
                'contract' => $request->contract,
                'region' => $request->region,
                'language' => $request->language,
                'description' => $request->description,
                'userId' => $request->userId,
            ]);

            return response()->json("Sccessfully");
        }
    }

    // public function show(Job $job) {}

    // public function update(Request $request, Job $job) {}
    
    // public function destroy(Job $job) {}
}