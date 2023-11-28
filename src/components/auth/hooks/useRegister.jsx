"use client"
import { useState } from 'react'
import { API_URL } from "@/config/apiUrl";

export const useRegister = () => {

    const [registerData, setRegisterData] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
        // ... => spread operator
        // registerData.name
        // registerData["password"]: e.target.value
        // DRY - DONT REPEAT YOURSELF
    }

    async function handleSubmitRegister() {
        // Problem ada di backend
        // setLoading(true);
        const { name, email, password } = registerData;
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();
        // Cookies.set("token", data.token);

        if (!data) {
            // setLoading(false);
            toast.error("Error login!");
            return;
        }

        console.log(data)

        // setLoading(false);
        // toast.success("Login succesfully, redirecting...");
        // setTimeout(() => router.push("/dashboard"), 2000);
    }
    return { handleChange, handleSubmitRegister }

}
