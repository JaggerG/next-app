"use client"
import { useId,useState } from "react";
import { formData } from "./dataType";
const LoginForm = ({
    login,register
}: {
    login: (loginInfo: formData) => Promise<boolean>,
    register: (registerInfo: formData) => Promise<boolean>
}) => {
    const accountId = useId();
    const passwordId = useId();
    const [loginInfo, setLoginInfo] = useState({
        account: '',
        password: '',
    });
    const handleInputChange = (e:any, type: string) => {
        if (type === 'account') {
            setLoginInfo({...loginInfo, account:e.target.value})
        } else {
            setLoginInfo({...loginInfo, password:e.target.value})
        }
    }
    const handleLogin = async () => {
        const result:boolean= await login(loginInfo);
        alert(result ? '登录成功' : '登录失败');
    }
    const handleRegister = async () => {
        const result: boolean = await register(loginInfo);
        alert(result ? '注册成功' : '注册失败');
    }
    return (
                <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 font-bold text-lg">Login</h1>
            <div>
                <label className="mr-2" htmlFor={accountId}>账号:</label>
                <input id={accountId}
                    className="mb-4"
                    placeholder="account"
                    value={loginInfo.account}
                    onChange={(e)=>handleInputChange(e,'account')}
                ></input>
            </div>
            <div>
                <label className="mr-2" htmlFor={passwordId}>密码:</label>
                <input id={passwordId}
                    className="mb-4"
                    placeholder="password"
                    value={loginInfo.password}
                    onChange={(e)=>handleInputChange(e,'password')}
                    type="password"
                ></input>
            </div>
            <div className="mt-2">
                <button
                    onClick={()=>handleLogin()}
                    className="rounded-full bg-cyan-400 w-16 h-7 text-slate-50 font-bold mr-2">登录</button>
                <button
                    onClick={()=>handleRegister()}
                    className="rounded-full bg-cyan-400 w-16 h-7 text-slate-50 font-bold ml-2">注册</button>
            </div>
        </div>
    )
}
export default LoginForm