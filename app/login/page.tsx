"use client"
import { useId } from "react";
import {login, register} from './api'
import { formData } from "./dataType";
const Login = () =>{
    const accountId = useId();
    const passwordId = useId();

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 font-bold text-lg">Login</h1>
            <div>
                <label className="mr-2" htmlFor={accountId}>账号:</label>
                <input id={accountId} className="mb-4" placeholder="account"></input>
            </div>
            <div>
                <label className="mr-2" htmlFor={passwordId}>密码:</label>
                <input type="password" id={passwordId} className="mb-4" placeholder="password"></input>
            </div>
            <div className="mt-2">
                <button
                    onClick={()=>login()}
                    className="rounded-full bg-cyan-400 w-16 h-7 text-slate-50 font-bold mr-2">登录</button>
                <button
                    onClick={()=>login()}
                    className="rounded-full bg-cyan-400 w-16 h-7 text-slate-50 font-bold ml-2">注册</button>
            </div>
        </div>
    )
}
export default Login;