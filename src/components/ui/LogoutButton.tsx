"use client"

import { useRouter } from "next/navigation"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error('Logout failed', error)
    }
  }

  return (
    <button 
      onClick={handleLogout}
      className="text-left px-4 py-2 mt-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors w-full"
    >
      Logout
    </button>
  )
}
