import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Header } from './Header'

export function Homes() {
  const el: any = useRef()

  useEffect(() => {
    const options = {
      strings: ['Desenvolvedor Front-end'],
      typeSpeed: 50,
    }

    const typed = new Typed(el.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <header>
        <Header />
      </header>
      <main className="flex justify-center items-center h-[35rem]">
        <p className="border-l-[6px] pl-3 border-cyan-400 text-white text-3xl max-sm:text-2xl leading-relaxed font-ubuntu">
          Hey, eu sou o
          <strong className="block text-5xl max-sm:text-4xl text-cyan-300">
            Luca Destefano Boer
          </strong>
          sou um{' '}
          <strong
            ref={el}
            className="text-4xl max-sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100"
          />
        </p>
      </main>
    </div>
  )
}
