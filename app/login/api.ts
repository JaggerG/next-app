"use server"
import prisma from '@/prisma/index';
import { formData } from './dataType';
export const login = async () =>{
    console.log('login api');
    const res = await prisma.user.findMany();
    console.log(res);
}
export const register = async (formData:formData) =>{
    console.log('register api');
    const res = await prisma.user.findMany();
    console.log(res);
}