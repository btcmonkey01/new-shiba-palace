import React, { useEffect, useState } from 'react'
import MessageList from './MessageList';
import FormMessage from './FormMessage';
import { prisma } from '@/app/lib/db';
import { getMessages } from '@/app/actions';


const Chat = async () => {

  const messages = await getMessages()

  /*   useEffect(() => {
      const get = async () => {
        const res = await getMessages();
        setMessages(res)
      }
      get();
      
    }, []) */


  return (
    <div className='w-full h-[90%] flex flex-col gap-4'>
      <MessageList messages={messages} />
      <FormMessage />
    </div>
  )
}

export default Chat