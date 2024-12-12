import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'DevOps engineer and open source enthusiast, building tools that make testing and automation more accessible.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Building tools that make testing and automation accessible for
            everyone.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey started with Linux system administration and network
              engineering. At 16, I earned my CCNA, followed by CCNP, building a
              strong technical foundation that continues to shape my approach to
              infrastructure and systems.
            </p>
            <p>
              Through years of working in QA and interviewing hundreds of
              engineers, I noticed common patterns in testing challenges. This
              led to creating Owloops, a browser automation tool that simplifies
              test creation. I believe in making complex processes simpler and
              more accessible.
            </p>
            <p>
              One project I’m particularly proud of is Ena, a programming
              language I created for Georgians. Having experienced the barriers
              to learning programming firsthand, I wanted to make it more
              approachable for people in my country, especially those just
              starting their journey in tech.
            </p>
            <p>
              Today, I work as a DevOps engineer, building reliable, scalable
              systems, while also maintaining deep involvement in QA through
              consultations and my role in GeoSTQB. Whether it’s infrastructure,
              testing, or community initiatives, I focus on creating practical
              solutions that make a real difference.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/papungag" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://github.com/pgagnidze"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/papunagagnidze"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:pgagnidze@loopback.one"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              pgagnidze@loopback.one
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
