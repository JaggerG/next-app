"use server"
import prisma from '@/prisma/index';
import { formData } from './dataType';
import { User } from '@prisma/client';
const checkEmpty = (loginInfo: formData):boolean => {
    if (loginInfo.account === '' || loginInfo.password === '') { 
        alert('Please enter account and password');
        return false;
    }
    return true;
}
export const login = async (loginInfo:formData):Promise<boolean> =>{

    if (checkEmpty(loginInfo)) {
        const res = await prisma.user.findUnique({
            where: {
                account: loginInfo.account,
            }
        });
        if (res) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}
export const register = async (loginInfo:formData):Promise<boolean> =>{
    if (checkEmpty(loginInfo)) {
        const res = await prisma.user.findUnique({
            where: {
                account: loginInfo.account,
            }
        });
        if (res) {
            return false;
        } else {
            await prisma.user.create({
                data: {
                    account: loginInfo.account,
                    password: loginInfo.password
                }
            });
            return true;
        }
    } else {
        return false;
    }
}

export const userList = async (): Promise<User[]> => {
    const res = await prisma.user.findMany();
    console.log(res);
    return res
}