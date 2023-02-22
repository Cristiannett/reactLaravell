<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class LoginController extends Controller
{
    public function register(Request $request)
    {
        $user = new User;

        $user->name = $request->name;
        $user->password = Hash::make($request->password);

        $user->save();

        Auth::login($user);
        return redirect(route("privada"));
    }

    public function login(Request $request)
    {
        $credentials = [
            "name" => $request->name,
            "password" => $request->password,
            //"active"=> true
        ];

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended(route("privada"));
        } else {
            return redirect("login");
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect(route("login"));
    }
}