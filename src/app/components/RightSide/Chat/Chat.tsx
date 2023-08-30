import React from 'react'
import MessageList from './MessageList';
import FormMessage from './FormMessage';
import { prisma } from '@/app/lib/db';

export const getMessages = async () => {
  const data = await prisma.message.findMany({
    select: {
      message: true,
      id: true,
      User: {
        select: {
          name: true
        }
      }
    },
    orderBy: {
      createdAt: 'asc'
    },
  })

  return data;
}

const Chat = async () => {

  const messages = await getMessages();

  return (
    <div className='w-full flex flex-col gap-2'>
      <MessageList messages={messages}/>
      <FormMessage/>
    </div>
  )
}

export default Chat