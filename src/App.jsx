import { useState } from 'react'
import { GooeyInput } from '@/components/ui/gooey-input';
import './App.css'

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <h1 className="text-4xl font-bold text-blue-600 underline">
        Tailwind works!
      </h1>
      <div className="flex h-40 w-full items-center justify-center">
      <GooeyInput placeholder="Search..." />
    </div>

    </div>
  )
}