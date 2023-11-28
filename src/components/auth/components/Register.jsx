"use client"

import React from 'react'
import { Button, Input } from "@nextui-org/react";
import { useRegister } from '../hooks/useRegister';
import Link from 'next/link';

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister()
  return (
    <main className=" space-y-5">
      <div className=" space-y-5">
        <Input
          name="name"
          type="name"
          color="warning"
          label="Name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
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

      <Button isDisabled={loading} className=' w-[320px] bg-orange-400 text-zinc-50' onClick={handleSubmitRegister}>Register</Button>
      <div className="flex gap-1 text-zinc-50">
        <div>Already have an account ?</div>
        <Link href="/login">Login</Link>
      </div>
    </main>
  )
}
