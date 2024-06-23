"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useAuth from "@/config/auth";

export default function Login() {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <main className='flex flex-1 flex-col justify-center h-[70vh] p-4'>
      <div className='mx-auto space-y-6 w-full max-w-sm'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold text-[rgb(73,209,250)]'>
            INICIO DE SESION
          </h1>
          <p className='text-gray-500 dark:text-gray-400'>
            Ingresa tu correo y contraseña
          </p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='dark:bg-white dark:text-gray-900'
            />
          </div>
          <div className='space-y-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
            </div>
            <Input
              id='password'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='dark:bg-white dark:text-gray-900'
            />
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <Button
            type='submit'
            className='w-full bg-[rgb(73,209,250)]'
            disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </main>
  );
}
