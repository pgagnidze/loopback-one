import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { TerminalComponent } from '@/components/Terminal'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Loopback',
    default: 'Loopback - DevOps Engineer, QA Expert and Open-Source Maintainer',
  },
  description:
    'DevOps engineer based in Georgia with deep roots in Linux and network engineering. Building scalable infrastructure and open source tools that make development and testing more accessible.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
            <TerminalComponent />
          </div>
        </Providers>
      </body>
    </html>
  )
}
