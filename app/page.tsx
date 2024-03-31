"use client"

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const toLogin = () => {
    router.push('/login');
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={()=> toLogin()}
        style={{backgroundColor:'white',color:'black',width:'300px',padding:'12px'}}>登录</button>
    </main>
  );
}
