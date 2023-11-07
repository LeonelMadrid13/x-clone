'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'

type PostCardProps = {
    userfullName: string,
    username: string,
    avatarUrl: string,
    content: string
}

export function PostCard({
    userfullName,
    username,
    avatarUrl,
    content
}: PostCardProps) {

    return (
        <Card className="bg-transparent shadow-none hover:bg-slate-800 transition border-b cursor-pointer rounded-none border-white/20 ">
            <CardHeader className="justify-between">
                <div className="flex gap-x-2">
                    <Link href={`/${username}`}>
                        <Avatar radius="full" size="md" src={avatarUrl} />
                    </Link>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{userfullName}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-xs text-white">
                <p>
                    {content}
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <button>
                    <IconMessageCircle className="h-4 w-4" />
                </button>
                <button>
                    <IconRepeat className="h-4 w-4" />
                </button>
                <button>
                    <IconHeart className="h-4 w-4" />
                </button>
            </CardFooter>
        </Card>
    );
}
