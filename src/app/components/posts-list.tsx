import { PostCard } from '@/app/components/post-card'
import { type PostsType } from '@/app/types/posts'

export function PostList({ posts }: { posts: PostsType[] | null }) {
    return (
        <>
            {
                posts?.map((post) => {
                    const {
                        id,
                        content,
                        user } = post
                    const {
                        user_name: userName,
                        name: userFullName,
                        avatar_url: avatarUrl
                    } = user
                    return (
                        <PostCard
                            avatarUrl={avatarUrl}
                            content={content}
                            key={id}
                            userfullName={userFullName}
                            username={userName}
                        />
                    )
                })
            }
        </>
    )
}
