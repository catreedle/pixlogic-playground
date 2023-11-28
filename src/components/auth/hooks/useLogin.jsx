"use client"
import { useState } from 'react'
import { API_URL } from "@/config/apiUrl";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export const useLogin = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
        // ... => spread operator
        // registerData.name
        // registerData["password"]: e.target.value
        // DRY - DONT REPEAT YOURSELF
    }

    async function handleSubmitLogin() {
        setLoading(true);
        const { email, password } = loginData;
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        Cookies.set("token", data.token);

        if (data.token == undefined) {
            setLoading(false);
            toast.error(data.message);
            return;
        }

        console.log(data)

        setLoading(false);
        toast.success(data.message);
        setTimeout(() => router.push("/dashboard"), 2000);
    }
    return { loading, handleChange, handleSubmitLogin }

}
