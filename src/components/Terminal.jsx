'use client'

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
} from 'react'
import { TerminalContext } from '@/app/providers'
import { motion, AnimatePresence } from 'framer-motion'

export function TerminalComponent() {
  const { isOpen, setIsOpen } = useContext(TerminalContext)
  const [output, setOutput] = useState([])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [gameActive, setGameActive] = useState(false)
  const [secretNumber, setSecretNumber] = useState(null)
  const [terminalHeight, setTerminalHeight] = useState('40vh')
  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const containerRef = useRef(null)
  const isResizing = useRef(false)

  const asciiArt = `
 _________________________________________
/ Welcome to Papu's Terminal!              \\
\\ Type 'help' to see available commands.   /
 -----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
  `

  const commands = useMemo(
    () => ({
      help: () =>
        'Available commands: help, about, skills, projects, clear, history, whoami, pwd, date, echo, game',
      about: () =>
        'Solo founder building Loopback and its portfolio of open source projects.\n' +
        'Primary focus: Owloops - CLI tools for DevOps automation and cloud infrastructure.\n' +
        'Also creating projects at the intersection of education, gaming, and accessibility.',
      skills: () =>
        'Main Skills:\n' +
        '• DevOps & Cloud: AWS, IaC, Kubernetes, Docker\n' +
        '• Testing: QA Automation, Load Testing (k6), E2E Testing\n' +
        '• Languages: JavaScript/TypeScript, Python, Bash, Lua, Go\n' +
        '• Core: Linux Administration, Network Engineering, Full Stack Development',
      projects: () =>
        'Loopback Projects:\n' +
        '• Owloops [CORE]: CLI tools for DevOps automation, monitoring, and AWS infrastructure\n' +
        '• Ena: Georgian programming language making coding accessible\n' +
        '• Bolbo: P2P multiplayer football game\n' +
        '• False Kin: Comprehensive guide for Caves of Qud\n' +
        '• AI Printed Art: Text-to-product AI platform',
      clear: () => {
        setOutput([{ type: 'output', content: asciiArt }])
        return ''
      },
      history: () => commandHistory.join('\n'),
      whoami: () => 'guest',
      pwd: () => '/home/guest',
      date: () => new Date().toString(),
      echo: (args) => args.join(' '),
      game: () => {
        setGameActive(true)
        setSecretNumber(Math.floor(Math.random() * 100) + 1)
        return "I'm thinking of a number between 1 and 100. Can you guess it? (Type 'quit' to end the game)"
      },
    }),
    [commandHistory, asciiArt],
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        !event.target.closest('.terminal-toggle')
      ) {
        if (!isResizing.current) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setIsOpen])

  const startResize = useCallback((e) => {
    e.preventDefault()
    isResizing.current = true
    const startY = e.clientY
    const startHeight = containerRef.current.offsetHeight

    const handleMouseMove = (e) => {
      const delta = e.clientY - startY
      const newHeight = Math.max(
        200,
        Math.min(window.innerHeight * 0.9, startHeight + delta),
      )
      setTerminalHeight(`${newHeight}px`)
    }

    const handleMouseUp = () => {
      isResizing.current = false
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }, [])

  const handleCommand = useCallback(
    (fullCommand) => {
      if (!fullCommand) return

      const newHistory = [...commandHistory, fullCommand]
      setCommandHistory(newHistory)
      setHistoryIndex(newHistory.length)

      if (gameActive) {
        if (fullCommand.toLowerCase() === 'quit') {
          setGameActive(false)
          return `Game over. The number was ${secretNumber}.`
        }
        const guess = parseInt(fullCommand)
        if (isNaN(guess)) {
          return "Please enter a valid number or 'quit' to end the game."
        }
        if (guess === secretNumber) {
          setGameActive(false)
          return `Congratulations! You guessed the number ${secretNumber}!`
        }
        return guess < secretNumber
          ? 'Too low! Try again.'
          : 'Too high! Try again.'
      }

      const [command, ...args] = fullCommand.split(' ')
      const lowerCommand = command.toLowerCase()

      if (commands[lowerCommand]) {
        return commands[lowerCommand](args)
      }
      return `Command not found: ${command}`
    },
    [gameActive, secretNumber, commandHistory, commands],
  )

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        const result = handleCommand(input)
        setOutput((prev) => [
          ...prev,
          { type: 'input', content: input },
          { type: 'output', content: result },
        ])
        setInput('')
        setTimeout(() => {
          outputRef.current?.scrollTo(0, outputRef.current.scrollHeight)
        }, 0)
      } else if (e.key === 'Tab') {
        e.preventDefault()
        const availableCommands = Object.keys(commands)
        const currentInput = input.toLowerCase()

        const possibilities = availableCommands.filter((cmd) =>
          cmd.startsWith(currentInput),
        )

        if (possibilities.length === 1) {
          setInput(possibilities[0])
        } else if (possibilities.length > 1) {
          const result = possibilities.join(' ')
          setOutput((prev) => [
            ...prev,
            { type: 'input', content: input },
            { type: 'output', content: result },
          ])
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (historyIndex > 0) {
          setHistoryIndex((prev) => prev - 1)
          setInput(commandHistory[historyIndex - 1])
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (historyIndex < commandHistory.length) {
          setHistoryIndex((prev) => prev + 1)
          setInput(commandHistory[historyIndex + 1] || '')
        }
      } else if (e.key === 'c' && e.ctrlKey) {
        if (gameActive) {
          setGameActive(false)
          setOutput((prev) => [
            ...prev,
            { type: 'output', content: 'Game aborted.' },
          ])
        }
        setInput('')
      }
    },
    [input, historyIndex, commandHistory, handleCommand, gameActive, commands],
  )

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      if (output.length === 0) {
        setOutput([{ type: 'output', content: asciiArt }])
      }
    }
  }, [isOpen, output.length, asciiArt])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          style={{ height: terminalHeight }}
          className="fixed left-0 top-0 z-[100] min-h-[200px] w-full bg-zinc-900/90 font-mono text-sm text-zinc-200 backdrop-blur-md"
          ref={containerRef}
        >
          <div
            ref={outputRef}
            className="h-[calc(100%-40px)] overflow-y-auto whitespace-pre p-4"
          >
            {output.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === 'input' ? 'text-teal-400' : 'text-zinc-200'
                }
              >
                {line.type === 'input' ? `> ${line.content}` : line.content}
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-700/50 bg-zinc-800/50 p-2">
            <div className="flex items-center">
              <span className="mr-2 text-teal-400">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 border-none bg-transparent font-mono text-zinc-200 outline-none"
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          </div>

          <div
            className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 cursor-ns-resize rounded-t bg-zinc-700"
            onMouseDown={startResize}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
