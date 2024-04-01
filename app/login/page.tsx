import { login, register } from "./api";
import LoginForm from "./loginForm";
const LoginPage = () =>{
    return (
        <>
            <LoginForm login={login} register={register}></LoginForm>
        </>
    )
}
export default LoginPage;