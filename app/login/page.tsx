import { User } from "@prisma/client";
import { login, register,userList } from "./api";
import LoginForm from "./loginForm";
import { ReactNode } from "react";
const LoginPage = async () => {
    const listItem = ():ReactNode[] => {
        const list = userList as unknown;
        const listItem = (list as Array<User>).map((item) : ReactNode[] => {
            <li>
                <span>{item.account}</span>
                <span>{item.password}</span>
                <span>{item.name}</span>
                <span>{item.email}</span>
            </li>
        });
        return listItem;
    }
    return (
        <>
            <LoginForm login={login} register={register}></LoginForm>
            <ul>{}</ul>
        </>
    )
}
export default LoginPage;