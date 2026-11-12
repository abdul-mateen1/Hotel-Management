"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { loginUser } from '@/services/authService';

export default function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const credentials = {
    email: email,
    password: password
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await loginUser(credentials);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.roleId);

    }
    catch (error) {

      setError(error.message);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Enter a valid Email address.")
      }
      if (!password) {
        setError("Password is required.")
      } else if (password.length < 6) {
        setError("Password must be at least 6 characters.")
      }
    }
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none text-white  p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-black">
        Welcome to Hotel The `Gran
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-800 dark:white ">
        Login to start your Day
      </p> <span className="text-xs text-red-500">(For admin and staff only)</span>

      <form className="my-6 text-white" onSubmit={handleLogin}>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </LabelInputContainer>

        <input
          type="checkbox"
          checked={showPassword}
          onChange={(e) => setShowPassword(e.target.checked)} />
        <span className="text-sm text-black"> Show Password</span>


        <div className="text-pink-600">{error && <p className="text-sm ">{error}</p>}</div>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign In &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
