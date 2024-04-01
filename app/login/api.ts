"use server"
import prisma from '@/prisma/index';
import { formData } from './dataType';
export const login = async (loginInfo:formData):Promise<boolean> =>{
    console.log('login api');
    console.log(loginInfo);
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
}
export const register = async (loginInfo:formData):Promise<boolean> =>{
    console.log('register api');
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
}