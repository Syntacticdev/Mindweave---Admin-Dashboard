import React from 'react'
import { Popover, PopoverContent } from '../ui/popover'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Bell } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export default function Notification() {
    const notifications = [
        {
            title: "Your call has been confirmed.",
            description: "1 hour ago",
        },
        {
            title: "You have a new message!",
            description: "1 hour ago",
        },
        {
            title: "Your subscription is expiring soon!",
            description: "2 hours ago",
        },
    ]
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className=' relative'>
                    <div className='absolute bg-red-400 min-w-2 min-h-2 text-center text-xs text-white -top-2 right-0 rounded-full '>1</div>
                    <Bell />
                </div>
            </PopoverTrigger>
            <PopoverContent sideOffset={10} className='w-80'>
                <Card className='shadow-none border-none'>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>You have 3 unread messages </CardDescription>
                    </CardHeader>

                    <CardContent className='grid gap-4'>
                        {notifications.map((notification, index) => (
                            <div
                                key={index}
                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                            >
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {notification.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {notification.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </PopoverContent>
        </Popover>
    )
}
