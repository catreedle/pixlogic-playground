"use client"

import { Button, Input } from "@nextui-org/react";
import { useLogin } from '../hooks/useLogin';

export const Login = () => {
  const { handleChange, handleSubmitLogin } = useLogin()
  return (
    <main className=" space-y-5">
      <div className=" space-y-5">
        <Input
          name="email"
          type="email"
          color="warning"
          label="Email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          color="warning"
          label="Password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </div>

      <Button className=' w-[320px] bg-orange-400 text-zinc-50' onClick={handleSubmitLogin}>Login</Button>
    </main>
  )
}
