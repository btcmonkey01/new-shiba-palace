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
      console.log('working')
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
    <div className='h-[200px] overflow-hidden'>
      {totalMessages.map(msg => (
        <div key={msg.id}>
          <h3> {msg.User?.name} </h3>
          <p> {msg.message} </p>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  )
}

export default MessageList