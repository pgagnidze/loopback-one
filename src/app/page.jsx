import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  SubstackIcon,
  XIcon,
} from '@/components/SocialIcons'

// Work history logos
import logoKlipy from '@/images/logos/klipy.jpg'
import logoOpenreel from '@/images/logos/openreel.jpg'
import logoOctoAI from '@/images/logos/octoai.jpg'
import logoGeoSTQB from '@/images/logos/geostqb.jpg'
import logoCastingNetworks from '@/images/logos/casting-networks.jpg'
import logoTbcBank from '@/images/logos/tbc-bank.jpg'

// Project logos
import logoOwloops from '@/images/logos/owloops.jpg'
import logoEna from '@/images/logos/ena.jpg'
import logoBolbo from '@/images/logos/bolbo.jpg'
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

const workProjects = [
  {
    name: 'Klipy',
    description:
      'Architected multi-region infrastructure for the world\'s largest short-form media content hub, serving billions of GIF and sticker API requests with 95% latency reduction and 20x performance improvements globally.',
    logo: logoKlipy,
    link: { href: 'https://klipy.com/en-US', label: 'klipy.com' },
  },
  {
    name: 'OpenReel',
    description:
      'Leading remote video creation platform for enterprises. Achieved 25% overall cost savings and 75% S3 cost reduction, enhanced database security through AWS CDK, and improved disaster recovery by migrating infrastructure to IaC. Acquired by Banzai in 2024.',
    logo: logoOpenreel,
    link: { href: 'https://www.openreel.com', label: 'openreel.com' },
  },
  {
    name: 'OctoAI',
    description:
      'Machine learning platform spun out of the University of Washington by the creators of Apache TVM. Developed custom endpoints and conducted usability tests, identifying critical bugs that led to important system fixes. Acquired by Nvidia in 2024.',
    logo: logoOctoAI,
    link: { href: 'https://octo.ai/', label: 'octo.ai' },
  },
  {
    name: 'GeoSTQB',
    description:
      'As co-founder, helped establish the Georgian Software Testing Qualifications Board, administering ISTQB certification and accrediting training providers. Certified over 100 IT professionals within the first two years.',
    logo: logoGeoSTQB,
    link: { href: 'https://geostqb.org/', label: 'geostqb.org' },
  },
  {
    name: 'Casting Networks',
    description:
      'Leading casting and audition management software provider facilitating over a million auditions annually. Managed a team of 5 Senior QA Automation Engineers, maintained testing frameworks for a 3-million-user application, and implemented optimized tests for datasets up to 4 million records.',
    logo: logoCastingNetworks,
    link: { href: 'https://www.castingnetworks.com/', label: 'castingnetworks.com' },
  },
  {
    name: 'TBC',
    description:
      'Global award-winning mobile banking app serving customers in Georgia. Managed a team of 10 QA engineers, created JMeter load testing scenarios, and developed UI and API automation scripts using Selenium WebDriver and Java.',
    logo: logoTbcBank,
    link: { href: 'https://tbcbank.ge/en-US', label: 'tbcbank.ge' },
  }
]

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
      'A programming language for Georgians, making coding more accessible by allowing developers to write code in their native language with familiar syntax.',
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            DevOps Engineer, QA Expert, and Open Source Maintainer
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            I&apos;m Papuna, founder of Loopback - a professional services company based in Georgia. With a strong foundation in Linux and network engineering,
            I build scalable infrastructure and open source tools that make development and testing more accessible.
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
          <div className="mt-6">
            <Button href="/Papuna-Gagnidze.pdf" variant="secondary" className="group">
              Download Resume
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-2 h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50">
                <path
                  d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Container>

      {/* Projects Section */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="space-y-20">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-8">
                Notable Work Projects
              </h2>
              <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {workProjects.map((project) => (
                  <Card as="li" key={project.name}>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 border border-zinc-700/50">
                      <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-100">
                      <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Link>
                    </h2>
                    <Card.Description>{project.description}</Card.Description>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-200 transition group-hover:text-teal-500">
                      <LinkIcon className="h-6 w-6 flex-none" />
                      <span className="ml-2">{project.link.label}</span>
                    </p>
                  </Card>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-8">
                Personal & Open Source
              </h2>
              <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {personalProjects.map((project) => (
                  <Card as="li" key={project.name}>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 border border-zinc-700/50">
                      <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-100">
                      <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Link>
                    </h2>
                    <Card.Description>{project.description}</Card.Description>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-200 transition group-hover:text-teal-500">
                      <LinkIcon className="h-6 w-6 flex-none" />
                      <span className="ml-2">{project.link.label}</span>
                    </p>
                  </Card>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </>
  )
}
