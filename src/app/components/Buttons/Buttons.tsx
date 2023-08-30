"use client"
import React from 'react'
import { signOut, signIn } from 'next-auth/react'

export const Logout = () => {
  return (
    <button onClick={() => signOut()}>Logout</button>
  )
}
export const NavLogin = () => {
  return (
    <button onClick={() => signIn("github")}>Login with Github</button>
  )
}
/* export const Logout = () => {
  return (
    <button onClick={() => signOut()}>Logout</button>
  )
} */
