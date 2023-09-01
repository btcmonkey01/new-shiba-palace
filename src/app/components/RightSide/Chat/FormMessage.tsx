"use client"
import { postData } from '@/app/actions'
import { useMetaMask } from 'metamask-react'
import React, { useRef } from 'react'
import { BiMailSend } from 'react-icons/bi'

const FormMessage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { account } = useMetaMask()

  /*   const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if(!formRef.current) return
  
      const formData = new FormData();
  
      // Obtener el valor del campo de mensaje del formData
      const message = formData.get('message') as string;
  
      if (!message.trim()) {
        // El campo del mensaje está vacío, no se envía nada
        return;
      }
  
      formRef.current?.reset();
      await postData(message, account);
    } */

  if (!account) return (
    <p className='text-white font-semibold text-center'>Connect your Wallet to Chat</p>
  )

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        if (formData.get('message') !== '') {
          formRef.current?.reset()
          await postData(formData, account)
        }
      }}>
      <div className='flex w-full justify-between p-1 bg-white rounded-sm'>
        <input
          name='message'
          placeholder='type your message...'
          type="text"
          className='p-1 w-2/3 text-sm outline-none'
        /* border-none w-full text-sm sm:text-base  rounded-full focus:ring-secondary/50 placeholder:italic */
        />
        <button className='w-1/3 flex justify-center items-center px-2 bg-white' type='submit'>
          <BiMailSend
            className='text-xl text-gray-400 hover:text-secondary ease-in-out duration-300'>
          </BiMailSend>
        </button>
      </div>
    </form>
  )
}

export default FormMessage