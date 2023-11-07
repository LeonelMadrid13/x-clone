'use client'

import { ComposePostButton } from '@/app/components/compose-post-button'
import { Avatar } from "@nextui-org/react"
import { addPost } from "../actions/add-post-action"
import { useRef } from "react"

export async function ComposePost ({
    userAvatarUrl,
}: {
    userAvatarUrl: string
}){
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <form 
            ref={formRef}
            action={async (formData) => {
                await addPost(formData)
                formRef.current?.reset()
            }}
            className="flex flex-row p-3 border-b border-white/20"
            >
            <Avatar radius="full" className="w-10 h-10 mr-2" src={userAvatarUrl} />
            <div className="flex flex-col flex-1 gap-y-4">
                <textarea 
                    name="content" 
                    rows={4}
                    className="w-full bg-black text-2xl placeholder-gray-500 resize-none"
                    placeholder="¡¿Qué está pasando?!"
                >
                </textarea>
                <ComposePostButton />
            </div>
        </form>
    )
}