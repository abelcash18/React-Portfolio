import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Typewriter = ({ words, delay = 0.1, pauseTime = 1000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = words[currentWordIndex]

  useEffect(() => {
    let typingInterval

    if (!isDeleting && displayedText.length < currentWord.length) {
      typingInterval = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))
      }, delay * 1000)
    } else if (isDeleting && displayedText.length > 0) {
      typingInterval = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1))
      }, delay * 1000)
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      typingInterval = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }

    return () => clearTimeout(typingInterval)
  }, [displayedText, isDeleting, currentWord, delay, pauseTime, words])

  return (
    <span className='inline-flex items-center'>
      <AnimatePresence>
        {displayedText.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -1.25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
      <span className='blinking-cursor inline-block ml-0.5 font-light animate-blink'>|</span>

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </span>
  )
}

export default Typewriter
