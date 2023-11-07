import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AuthButtonServer } from './components/auth-button-server'
import { PostList } from './components/posts-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'
import { UserComponent } from './components/user-component'


export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false })

  return (
    <main className="flex flex-row min-h-screen justify-between items-start">
      <section className='flex flex-col'>
        <div className='pl-4 pt-4 mr-2'>
          <UserComponent 
            name={session?.user?.user_metadata?.name}
            user_name={session?.user?.user_metadata?.user_name}
            avatarUrl={session?.user?.user_metadata?.avatar_url}
          />
          <AuthButtonServer />
        </div>
      </section>
      <section className='flex flex-col max-w-[600px] w-full mx-auto border-l border-r border-white/30 min-h-screen'>
        <ComposePost userAvatarUrl={session?.user?.user_metadata?.avatar_url} />
        <PostList posts={posts} />
      </section>
      <section>

      </section>
    </main>
  )
}
