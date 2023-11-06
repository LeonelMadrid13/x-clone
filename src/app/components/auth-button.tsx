'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GithubIcon, GoogleIcon } from './icons'

export default function AuthButton() {
  const baseUrl = 'https://localhost:3000'
  const supabase = createClientComponentClient()
  const handleGithubSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${baseUrl}/auth/callback`
      }
    })
  }
  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${baseUrl}/auth/callback`
      }
    })
  }
  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header>

      <button onClick={handleGithubSignIn} type="button" className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
        <GithubIcon />
        Sign in with Github
      </button>

      <button onClick={handleGoogleSignIn} type="button" className="text-white bg-[#4285F4] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#4285F4]/55 mr-2 mb-2">
        <GoogleIcon />
        Sign in with Google
      </button>
      <button onClick={handleSignOut}> Sign Out</button>
    </header>
  )
}
