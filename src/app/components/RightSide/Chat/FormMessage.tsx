"use client"
import { postData } from '@/app/actions'
import React, { useRef } from 'react'
import { BiMailSend } from 'react-icons/bi'

const FormMessage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        formRef.current?.reset()
        await postData(formData)
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