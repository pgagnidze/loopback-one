import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoOwloops from '@/images/logos/owloops.jpg'
import logoEna from '@/images/logos/ena.jpg'
import logoBolbo from '@/images/logos/bolbo.jpg'
import logoAIPrintedArt from '@/images/logos/ai-printed-art.jpg'
import logoOpenReel from '@/images/logos/openreel.jpg'
import logoWolfPack from '@/images/logos/wolfpack.jpg'
import logoTbcBank from '@/images/logos/tbc-bank.jpg'
import logoCastingNetworks from '@/images/logos/casting-networks.jpg'
import logoOctoAI from '@/images/logos/octoai.jpg'
import logoFalseKin from '@/images/logos/falsekin.jpg'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const personalProjects = [
  {
    name: 'False Kin',
    description:
      'A comprehensive guide that breaks down the complexity of Caves of Qud into digestible knowledge for new players.',
    link: { href: 'https://falsekin.notion.site/qud-survival-guide', label: 'falsekin.notion.site' },
    logo: logoFalseKin,
  },
  {
    name: 'Owloops',
    description:
      'Open source browser automation framework with AI-driven test creation and recorder integration.',
    link: { href: 'https://github.com/owloops', label: 'github.com/owloops' },
    logo: logoOwloops,
  },
  {
    name: 'Bolbo',
    description:
      'Online multiplayer 2D football game using peer-to-peer technology for seamless gameplay experience.',
    link: { href: 'https://bolbo.live/', label: 'bolbo.live' },
    logo: logoBolbo,
  },
  {
    name: 'Ena',
    description:
      'This language aims to make programming more accessible for Georgians by allowing them to write code in their native language. Ena uses the syntax of popular, widely-used languages, modified to use the Georgian alphabet and keywords.',
    link: { href: 'https://ena-lang.org/', label: 'ena-lang.org' },
    logo: logoEna,
  },
  {
    name: 'AI Printed Art',
    description:
      'One of the first text-to-product AI generator platforms, transforming text descriptions into physical art pieces.',
    link: { href: 'https://youtube.com/shorts/dmbboR47-c4', label: 'Short Demo' },
    logo: logoAIPrintedArt,
  },
]

const workProjects = [
  {
    name: 'OpenReel',
    description:
      'As the leading remote video creation platform, OpenReel empowers enterprises, media, and entertainment companies to direct and film up to 4K video content from over 125 countries.',
    logo: logoOpenReel,
    link: { href: 'https://www.openreel.com', label: 'openreel.com' },
  },
  {
    name: 'OctoAI',
    description:
      'OctoAI was spun out of the University of Washington by the original creators of Apache TVM, an open source stack for ML portability and performance. TVM enables ML models to run efficiently on any hardware backend, and has quickly become a key part of the architecture of popular consumer devices like Amazon Alexa.',
    logo: logoOctoAI,
    link: { href: 'https://octo.ai/', label: 'octo.ai' },
  },
  {
    name: 'Casting Networks',
    description:
      'Casting Networks is the leading provider of casting and audition management software to the casting industry. Casting directors and agents worldwide use Casting Networks to source and manage talent across film, television, digital, and commercial projects, facilitating over a million auditions per year.',
    logo: logoCastingNetworks,
    link: { href: 'https://www.castingnetworks.com/', label: 'castingnetworks.com' },
  },
  {
    name: 'TBC',
    description:
      'TBC Mobile is a mobile banking app that offers customers the most innovative and easy way to manage their money on the go. It was a global winner and Global Finance magazine named it the best in the mobile banking category in 2019.',
    logo: logoTbcBank,
    link: { href: 'https://tbcbank.ge/en-US', label: 'tbcbank.ge' },
  },
  {
    name: 'WolfPack',
    description:
      'WolfPack reinvents the group riding experience. It allows users to plan group rides, invite their pack, navigate together, and communicate from Android or iOS devices. For system monitoring and management, a web application is used.',
    logo: logoWolfPack,
    link: { href: 'https://www.wolfpack.run/', label: 'wolfpack.run' },
  }
]

export const metadata = {
  title: 'Projects',
  description:
    'Personal projects and professional work in automation, testing, and development.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Building Software Across Industries"
      intro="From fintech and entertainment to developer tools and AI, my work spans multiple domains while maintaining a focus on scalable infrastructure and automation."
    >
      <div className="space-y-20">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
            Notable Work Projects
          </h2>
          <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {workProjects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0">
                  <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
            Personal & Open Source
          </h2>
          <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0">
                  <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            ))}
          </ul>
        </section>
      </div>
    </SimpleLayout>
  )
}