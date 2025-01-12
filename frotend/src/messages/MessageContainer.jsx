import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";

export default function MessageContainer() {

    const NochatSelected = true

  return (


    <div className='md:min-w-[450px] flex flex-col'>
        {NochatSelected ? (
            <NoChatSelected />
        ) : (
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text '>To: </span> <span className='text-gray-900 font-bold'>Ravi</span>
        </div>
        <Messages />
        <MessageInput />
        </>
        )}
    </div>
  )
}


const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 Ravi verma 😊</p>
                <p>Select a Chat to Start messaging</p>
                <TiMessages className="text-6xl md:text-6xl text-center" />
                </div>
        </div>
    )
}
