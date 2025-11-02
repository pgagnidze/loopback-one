import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  SubstackIcon,
  XIcon,
} from '@/components/SocialIcons'

// Project logos
import logoOwloops from '@/images/logos/owloops.jpg'
import logoEna from '@/images/logos/ena.svg'
import logoBolbo from '@/images/logos/bolbo.svg'
import logoAIPrintedArt from '@/images/logos/ai-printed-art.svg'
import logoFalseKin from '@/images/logos/falsekin.jpg'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300" />
    </Link>
  )
}

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

const primaryProject = {
  name: 'Owloops',
  description:
    'Open source CLI tools for DevOps automation, website monitoring, cloud deployments, and AWS infrastructure orchestration. Previously offered cloud SaaS version.',
  link: { href: 'https://owloops.com', label: 'owloops.com' },
  logo: logoOwloops,
}

const additionalProjects = [
  {
    name: 'Ena',
    description:
      'A programming language for Georgians, making coding more accessible by allowing developers to write code in their native language with familiar syntax.',
    link: { href: 'https://ena-lang.org/', label: 'ena-lang.org' },
    logo: logoEna,
  },
  {
    name: 'Bolbo',
    description:
      'Online multiplayer 2D football game using peer-to-peer technology for seamless gameplay experience.',
    link: { href: 'https://bolbo.live/', label: 'bolbo.live' },
    logo: logoBolbo,
  },
  {
    name: 'False Kin',
    description:
      'A comprehensive guide that breaks down the complexity of Caves of Qud into digestible knowledge for new players.',
    link: { href: 'https://falsekin.notion.site/qud-survival-guide', label: 'falsekin.notion.site' },
    logo: logoFalseKin,
  },
  {
    name: 'AI Printed Art',
    description:
      'One of the first text-to-product AI generator platforms, transforming text descriptions into physical art pieces.',
    link: { href: 'https://youtube.com/shorts/dmbboR47-c4', label: 'Short Demo' },
    logo: logoAIPrintedArt,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Building Open Source Tools for DevOps and Automation
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            I&apos;m Papuna, solo founder building Owloops (DevOps automation tools) and various side projects. Some solve real problems, others are just fun to make.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/papungag"
              aria-label="Follow on Twitter"
              icon={XIcon}
            />
            <SocialLink
              href="https://github.com/pgagnidze"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/papuna-gagnidze"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://papu.substack.com"
              aria-label="Read on Substack"
              icon={SubstackIcon}
            />
          </div>
        </div>
      </Container>

      {/* Projects Section */}
      <Container className="mt-16 md:mt-20">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-12">
            Projects
          </h2>

          {/* Featured Project */}
          <Card className="mb-16 p-8">
            <div className="flex items-start gap-6">
              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 border border-zinc-700/50 overflow-hidden">
                <Image src={primaryProject.logo} alt="" className="h-12 w-12 object-contain" unoptimized />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-100">
                  <Card.Link href={primaryProject.link.href} target="_blank" rel="noopener noreferrer">
                    {primaryProject.name}
                  </Card.Link>
                </h3>
                <Card.Description className="mt-3">{primaryProject.description}</Card.Description>
                <p className="relative z-10 mt-4 flex text-sm font-medium text-zinc-200 transition group-hover:text-teal-500">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{primaryProject.link.label}</span>
                </p>
              </div>
            </div>
          </Card>

          {/* Other Projects Grid */}
          <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
            {additionalProjects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 border border-zinc-700/50">
                  <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-200 transition group-hover:text-teal-500">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
