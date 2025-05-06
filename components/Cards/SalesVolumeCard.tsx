import { ArrowRight, MoveDownRight, MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface SalesCardType {
    increasing: Boolean,
    icon: React.ReactNode,
    title: String,
    linkTitle: String,
    percent: Number,
    value: String,
    pageLink: string

}


export default function ({ increasing, icon, title, linkTitle, percent, value, pageLink }: SalesCardType) {
    return (
        <div className='bg-white rounded-lg  p-4'>
            <div className='flex justify-between h-3/5 items-center '>
                <div className='grid gap-1 py-4'>
                    <h3 className='text-gray-500 font-bold text-xs'>{title}</h3>
                    <div className='flex gap-2 items-center'>
                        <span className='text-2xl font-semibold'>{value}</span>
                        <div className={`flex items-center rounded-full gap-1 p-1 ${increasing ? "bg-green-400" : 'bg-red-500'}`}>
                            <span className='text-xs font-semibold'>{increasing ? "+" : "-"}{`${percent}%`}</span>
                            {increasing ? <MoveUpRight className="w-3 h-3" /> : <MoveDownRight className="w-3 h-3" />}
                        </div>
                    </div>
                </div>
                <div className=' bg-gray-200 p-2 rounded-full w-fit h-fit'>
                    {icon}
                </div>
            </div>
            <div className='divider' />
            <div className="flex justify-between items-center pt-2">
                <Link className='text-xs font-bold underline' href={pageLink}>{linkTitle}</Link>
                <ArrowRight className='w-4 h-4 font-bold' />
            </div>
        </div>
    )
}
