'use client'

import { useEffect } from 'react'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

export function Newsletter() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://substackapi.com/widget.js'
    script.async = true

    window.CustomSubstackWidget = {
      substackUrl: 'papu.substack.com',
      placeholder: 'Email Address',
      buttonText: 'Subscribe',
      theme: 'custom',
      colors: {
        primary: '#4b5563',
        input: '#f8fafc',
        email: '#4b5563',
        text: '#ffffff',
      },
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      delete window.CustomSubstackWidget
    }
  }, [])

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6">
        <div id="custom-substack-embed" />
      </div>
    </div>
  )
}
