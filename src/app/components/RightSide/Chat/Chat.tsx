import { getMessages } from '@/app/actions';
import FormMessage from './FormMessage';
import MessageList from './MessageList';


const Chat = () => {

  // const messages = await getMessages()

  /*   useEffect(() => {
      const get = async () => {
        const res = await getMessages();
        setMessages(res)
      }
      get();
      
    }, []) */


  return (
    <div className='w-full h-[90%] flex flex-col gap-4'>
      {/* <MessageList messages={messages} /> */}
      <FormMessage />
    </div>
  )
}

export default Chat