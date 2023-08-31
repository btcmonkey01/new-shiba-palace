"use client"
import Pusher from 'pusher-js';
import React, { useEffect, useRef, useState } from 'react'

interface MessageListProps {
  messages: {
    message: string;
    id: string;
    User: {
      name: string | null;
    } | null;
  }[]
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const [totalMessages, setTotalMessages] = useState(messages)
  const messageEndRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: 'us2'
    });

    var channel = pusher.subscribe('chat');
    channel.bind('hello', function (data: any) {
      const parsedComments = JSON.parse(data.message);
      setTotalMessages(prev => [...prev, parsedComments])
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [totalMessages])

  return (
    <div id='messages' className='overflow-y-scroll flex flex-col gap-2 rounded-sm'>
      {totalMessages.map(msg => (
        <div key={msg.id} className='bg-primary/50 border border-white/30 hover:bg-primary ease-in-out duration-300 rounded-sm p-2'>
          {/* <h3 className='text-secondary font-semibold text-sm'> {msg.User?.name}:</h3> */}
          <h3 className='text-secondary font-semibold text-sm'> bigtrader69:</h3>
          <p className='break-words text-sm text-white'> {msg.message} </p>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  )
}

export default MessageList