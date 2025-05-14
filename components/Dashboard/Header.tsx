import { Bell, ChevronRight, Search } from 'lucide-react'
import React from 'react'
import Notification from './Notification'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Input } from '../ui/input'

export default function Header() {
  return (
    <div className='flex w-full py-3 px-5 justify-between items-center shadow-xs '>
      {/* <div className='text-sm text-center flex  items-center'>
        <span>Application</span>
        <ChevronRight className='w-4 h-4' />
        <span className='font-bold text-lg'>Dashboard</span>
      </div> */}

      <div className='hidden lg:flex items-center ml-[30px] gap-4 bg-gray-200 rounded-full px-3 '>
        <Input
          placeholder='Search...'
          className='border-none focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:border-none shadow-none outline-none'
        />
        <Search />
      </div>
      <div className='flex gap-4 items-center'>
        <Notification />
        <Avatar className="border-2 border-gray-400">
          <AvatarImage src="/images/userprofile.png" />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
