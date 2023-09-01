"use client"
import Pusher from 'pusher-js';
import React, { useEffect, useRef, useState } from 'react'
import * as blockies from 'blockies-ts';
import { useMetaMask } from 'metamask-react';

interface MessageListProps {
  messages: {
    message: string,
    email: string | null,
    id: string,
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
    <div id='messages' className='overflow-y-scroll h-[95%] flex flex-col gap-2 rounded-sm'>
      {totalMessages.map(msg => (
        <div key={msg.id} className='bg-primary/50 border border-white/30 hover:bg-primary ease-in-out duration-300 rounded-sm p-2'>
          <span className='text-secondary font-semibold text-sm flex items-center gap-1'>
            {/* <img src={blockies.create({ seed: msg.email ?? '' }).toDataURL()} alt="User hat" className='w-4 rounded-full h-fit' /> */}
            <img src="./Hat.webp" alt="User hat" className='w-4 h-fit' />
            {msg.email}
          </span>
          <p className='break-words text-sm text-white'> {msg.message} </p>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  )
}

export default MessageList