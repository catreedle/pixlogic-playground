"use client"
import { useState } from 'react'
import { API_URL } from "@/config/apiUrl";
import { toast } from 'react-hot-toast'

export const useRegister = () => {

    const [registerData, setRegisterData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
        // ... => spread operator
        // registerData.name
        // registerData["password"]: e.target.value
        // DRY - DONT REPEAT YOURSELF
    }

    async function handleSubmitRegister() {
        setLoading(true);
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
            setLoading(false);
            toast.error("Error registering!");
            return;
        }

        console.log(data)

        setLoading(false);
        toast.success("User registered, please login...");
    }
    return { loading, handleChange, handleSubmitRegister }

}
