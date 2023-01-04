import Link from 'next/link'
import { List } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  console.log(openMenu)

  return (
    <>
      <h1 className="absolute flex items-center font-ubuntu pt-5 text-3xl text-cyan-50 before:content-['<'] before:text-cyan-400 before:text-3xl after:content-['/>'] after:text-cyan-400 after:text-3xl">
        <Link href="/">DevLuca</Link>
      </h1>
      <header className="w-full flex justify-center max-lg:justify-end max-lg:pr-4 pt-6">
        <button
          className="md:hidden mr-5 text-white border-2 p-1 mt-[-10px] rounded-md border-cyan-400 transition hover:bg-cyan-400"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <List size={32} />
        </button>
        <nav className="flex items-center max-md:hidden lg:gap-12 md:gap-6 md:items-end text-cyan-50 text-xl">
          <a
            href="#aboutme"
            className="border-b-[2.5px] border-cyan-400 tracking-wide hover:text-cyan-400 transition hover:border-b-[2.5px] hover:-translate-y-1"
          >
            Sobre mim
          </a>
          <a
            href="#technologies"
            className="border-b-[2.5px] border-cyan-400 tracking-wide hover:text-cyan-400 transition hover:border-b-[2.5px] hover:-translate-y-1"
          >
            Tecnologias
          </a>
          <a
            href="#projects"
            className="border-b-[2.5px] border-cyan-400 tracking-wide hover:text-cyan-400 transition hover:border-b-[2.5px] hover:-translate-y-1"
          >
            Projetos
          </a>
          <a
            href="#contactMe"
            className="border-b-[2.5px] border-cyan-400 tracking-wide hover:text-cyan-400 transition hover:border-b-[2.5px] hover:-translate-y-1"
          >
            Contato
          </a>
        </nav>
      </header>
    </>
  )
}
