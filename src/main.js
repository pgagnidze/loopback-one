const FEATURED_PROJECTS = [
  {
    name: 'Owloops',
    description:
      'Open source CLI tools for DevOps automation, website monitoring, cloud deployments, and AWS infrastructure orchestration.',
    url: 'https://github.com/owloops',
    label: 'github.com/owloops',
    logo: '/owloops.svg',
    tags: ['Go', 'TypeScript', 'DevOps', 'AWS']
  },
  {
    name: 'Luanvil',
    description:
      'Production-ready Lua libraries and tools for HTTP servers, cross-platform binary compilation, and dotfile management.',
    url: 'https://github.com/luanvil',
    label: 'github.com/luanvil',
    logo: '/luanvil.svg',
    tags: ['Lua', 'HTTP', 'Cross-platform']
  }
]

const PROJECTS = [
  {
    name: 'Ena',
    description: 'A programming language for Georgians, making coding accessible in their native language.',
    url: 'https://ena-lang.org/',
    label: 'ena-lang.org',
    logo: '/ena.svg',
    tags: ['Language', 'Education']
  },
  {
    name: 'Bolbo',
    description: 'Online multiplayer 2D football game using peer-to-peer technology.',
    url: 'https://bolbo.live/',
    label: 'bolbo.live',
    logo: '/bolbo.svg',
    tags: ['Game', 'P2P']
  },
  {
    name: 'False Kin',
    description: 'A comprehensive guide that breaks down the complexity of Caves of Qud.',
    url: 'https://falsekin.notion.site/qud-survival-guide',
    label: 'falsekin.notion.site',
    logo: '/falsekin.png',
    tags: ['Guide', 'Gaming']
  },
  {
    name: 'AI Printed Art',
    description: 'One of the first text-to-product AI generator platforms.',
    url: 'https://youtube.com/shorts/dmbboR47-c4',
    label: 'youtube.com',
    logo: '/ai-printed-art.svg',
    tags: ['AI', 'E-commerce']
  }
]

const MOTD = ` _________________________________________
/ Welcome to Papu's Terminal!            \\
\\ Type 'help' to see available commands. /
 -----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`

const COMMANDS = {
  help: () => `Available commands:
  help      Show this help message
  about     About me
  skills    Technical skills
  projects  List projects
  clear     Clear terminal
  whoami    Who am I?
  history   Command history
  date      Current date`,

  about: () => `Papuna Gagnidze
Solo founder building Loopback and its portfolio of open source projects.

Primary focus: Owloops - CLI tools for DevOps automation and cloud infrastructure.
Also creating projects at the intersection of education, gaming, and accessibility.`,

  skills: () => `Main Skills:
• DevOps & Cloud: AWS, IaC, Kubernetes, Docker
• Testing: QA Automation, Load Testing (k6), E2E Testing
• Languages: JavaScript/TypeScript, Python, Bash, Lua, Go
• Core: Linux Administration, Network Engineering, Full Stack Development`,

  projects: () => `Loopback Projects:
• Owloops [CORE]: CLI tools for DevOps automation, monitoring, and AWS infrastructure
• Luanvil: Production-ready Lua tools and libraries
• Ena: Georgian programming language making coding accessible
• Bolbo: P2P multiplayer football game
• False Kin: Comprehensive guide for Caves of Qud
• AI Printed Art: Text-to-product AI platform`,

  whoami: () => 'guest@loopback.one',

  date: () => new Date().toString(),

  clear: () => null
}

function initContent() {
  const container = document.getElementById('content')
  if (!container) return

  const html = `
    <div class="container">
      <div class="featured-grid">
        ${FEATURED_PROJECTS.map(
    (project) => `
          <a href="${project.url}" class="featured-card" target="_blank" rel="noopener noreferrer">
            <div class="featured-header">
              <img src="${project.logo}" alt="${project.name}" class="featured-logo" loading="lazy" />
              <div class="featured-info">
                <h3>${project.name}</h3>
                <span>${project.label}</span>
              </div>
            </div>
            <p class="featured-description">${project.description}</p>
            ${project.tags ? `<div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
          </a>
        `
  ).join('')}
      </div>

      <div class="projects-grid">
        ${PROJECTS.map(
    (project) => `
          <a href="${project.url}" class="project-card" target="_blank" rel="noopener noreferrer">
            <div class="project-header">
              <img src="${project.logo}" alt="${project.name}" class="project-logo" loading="lazy" />
              <div class="project-info">
                <span class="project-name">${project.name}</span>
                <span class="project-label">${project.label}</span>
              </div>
            </div>
            <p class="project-description">${project.description}</p>
            ${project.tags ? `<div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
          </a>
        `
  ).join('')}
      </div>
    </div>
  `
  container.innerHTML = html
}

async function fetchGitHubStats() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/pgagnidze/pgagnidze/main/README.md')
    if (!response.ok) return

    const text = await response.text()
    const match = text.match(/received \*\*([0-9,]+) stars?\*\*/)
    if (match) {
      const stars = match[1].replace(',', '')
      const starsEl = document.getElementById('github-stars')
      if (starsEl) {
        starsEl.textContent = `${stars}+ stars on GitHub`
        starsEl.style.display = 'inline-flex'
      }
    }
  } catch { }
}

function initTerminal() {
  const toggle = document.getElementById('terminal-toggle')
  const terminal = document.getElementById('terminal')
  const input = document.getElementById('terminal-input')
  const output = document.getElementById('terminal-output')
  const body = document.getElementById('terminal-body')
  const resize = document.getElementById('terminal-resize')

  if (!toggle || !terminal || !input || !output) return

  const history = []
  let historyIndex = -1
  let initialized = false

  function openTerminal() {
    terminal.classList.add('open')
    terminal.setAttribute('aria-hidden', 'false')
    input.focus()

    if (!initialized) {
      appendOutput(MOTD)
      initialized = true
    }
  }

  function closeTerminal() {
    terminal.classList.remove('open')
    terminal.setAttribute('aria-hidden', 'true')
  }

  function appendOutput(text, isCommand = false) {
    if (text == null) {
      output.innerHTML = ''
      return
    }
    const line = document.createElement('div')
    line.className = 'terminal-line ' + (isCommand ? 'command' : 'output')
    line.textContent = text
    output.appendChild(line)
    body.scrollTop = body.scrollHeight
  }

  function executeCommand(cmd) {
    const trimmed = cmd.trim()
    const lower = trimmed.toLowerCase()
    if (!trimmed) return

    history.push(trimmed)
    historyIndex = history.length

    appendOutput(trimmed, true)

    if (lower === 'history') {
      appendOutput(history.slice(0, -1).join('\n') || 'No commands in history')
      return
    }

    const handler = COMMANDS[lower]
    if (handler) {
      const result = handler()
      if (result !== null) {
        appendOutput(result)
      } else if (lower === 'clear') {
        output.innerHTML = ''
      }
    } else if (lower.startsWith('echo ')) {
      appendOutput(trimmed.slice(5))
    } else {
      appendOutput(`command not found: ${trimmed}. Type 'help' for available commands.`)
    }
  }

  function handleResize(e) {
    e.preventDefault()
    const startY = e.clientY
    const startHeight = terminal.offsetHeight

    function onMouseMove(e) {
      const delta = e.clientY - startY
      const newHeight = Math.max(200, Math.min(window.innerHeight * 0.9, startHeight + delta))
      terminal.style.height = newHeight + 'px'
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  toggle.addEventListener('click', openTerminal)
  resize?.addEventListener('mousedown', handleResize)

  document.addEventListener('mousedown', (e) => {
    if (terminal.classList.contains('open') && !terminal.contains(e.target) && !toggle.contains(e.target)) {
      closeTerminal()
    }
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.value)
      input.value = ''
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex > 0) {
        historyIndex--
        input.value = history[historyIndex]
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        historyIndex++
        input.value = history[historyIndex]
      } else {
        historyIndex = history.length
        input.value = ''
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const partial = input.value.toLowerCase()
      const matches = Object.keys(COMMANDS).filter((cmd) => cmd.startsWith(partial))
      if (matches.length === 1) {
        input.value = matches[0]
      } else if (matches.length > 1) {
        appendOutput(input.value, true)
        appendOutput(matches.join('  '))
      }
    } else if (e.key === 'Escape') {
      closeTerminal()
    } else if (e.key === 'c' && e.ctrlKey) {
      input.value = ''
    }
  })

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      if (terminal.classList.contains('open')) {
        closeTerminal()
      } else {
        openTerminal()
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initContent()
  initTerminal()
  fetchGitHubStats()
  document.getElementById('copyright-year').textContent = `© ${new Date().getFullYear()}`
})
