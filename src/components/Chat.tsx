'use client'

import { useChat } from 'ai/react'

import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[440px] flex flex-col">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using SDK to create a chat bot.</CardDescription>
        </CardHeader>

        <CardContent>
          <ScrollArea className="h-[360px] w-full pr-4">
            {messages.map((message) => {
              return (
                <div key={message.id} className="flex gap-2 text-gray-600 text-sm mb-4">
                  {message.role === 'user' ? (
                    <Avatar>
                      <AvatarFallback>AM</AvatarFallback>
                      <AvatarImage src="https://github.com/AdrianMouzinho.png" className="bg-gray-200" />
                    </Avatar>
                  ) : (
                    <Avatar>
                      <AvatarFallback>RS</AvatarFallback>
                      <AvatarImage src="https://github.com/rocketseat.png" className="bg-gray-200" />
                    </Avatar>
                  )}

                  <p className="leading-relaxed">
                    <span className="block font-bold text-gray-700">{message.role === 'user' ? 'Humano:' : 'AI:'}</span>
                    {message.content}
                  </p>
                </div>
              )
            })}
          </ScrollArea>
        </CardContent>

        <CardFooter>
          <form onSubmit={handleSubmit} className="w-full flex gap-2">
            <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
  )
}