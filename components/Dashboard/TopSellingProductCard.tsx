import Image from 'next/image'
import React from 'react'

export default function TopSellingProductCard() {
    return (
        <div className='h-25 flex rounded-2xl gap-3 shadow-md p-3 '>
            <div className='relative max-w-[100px] w-[25%] rounded-lg overflow-hidden h-full '>
                <Image
                    src="/images/elect.jpg"
                    alt="avatar"
                    width={100}
                    height={100}
                    priority

                />
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='font-bold text-xs'>Apple VR Series 10 46mm GPS</h3>
                <div className='flex items-center text-sx'>
                    <span className=' space-x-0.5 mr-1  text-xs'>Brand: </span>
                    <span className='text-xs font-semibold'>Apple</span>
                </div>
                <span className='text-xs text-muted-foreground '>432 Available in stocks</span>
                <span className='text-xs font-bold '>$2,799.00</span>
            </div>
        </div>
    )
}
