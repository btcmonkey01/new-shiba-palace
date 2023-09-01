import { prisma } from '@/app/lib/db';
import FormMessage from './FormMessage';
import MessageList from './MessageList';

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

  const messages = await getMessages()

  return (
    <div className='w-full h-[90%] flex flex-col gap-4'>
      <MessageList messages={messages} />
      <FormMessage />
    </div>
  )
}

export default Chat