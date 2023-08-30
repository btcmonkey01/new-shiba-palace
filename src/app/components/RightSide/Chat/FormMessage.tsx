"use client"
import { postData } from '@/app/actions'
import React, { useRef } from 'react'

const FormMessage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form 
    ref={formRef}
    action={async (formData) => {
      formRef.current?.reset()
      await postData(formData)
    }}>
      <input
        name='message'
        placeholder='type your message...'
        type="text"
      />
      <button> send </button>
    </form>
  )
}

export default FormMessage