import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <h1 className="absolute flex items-center font-ubuntu pt-5 text-3xl text-cyan-50 before:content-['<'] before:text-cyan-400 before:text-3xl after:content-['/>'] after:text-cyan-400 after:text-3xl">
        <Link href="/">DevLuca</Link>
      </h1>
      <header
        id="menu"
        onClick={() => {
          if (openMenu) {
            setOpenMenu(false)
          }
        }}
        className="w-full md:flex justify-center max-lg:justify-end max-lg:pr-4 pt-6"
      >
        <button
          className="md:hidden z-50 fixed right-0 mr-5 text-white border-2 p-1 mt-[-10px] rounded-md border-cyan-400 transition hover:bg-cyan-400"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X size={32} /> : <List size={32} />}
        </button>
        <nav
          className={`text-xl z-10 bg-bgNavbarMobile md:bg-transparent text-cyan-50 md:flex md:items-center md:gap-10 md:pb-0 fixed md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            openMenu ? 'top-0' : 'top-[-490px]'
          }`}
        >
          <a
            href="#aboutme"
            className="block w-max max-md:mt-4 md:border-b-2 border-b-[1px] border-cyan-400 tracking-wide hover:text-cyan-400 transition hover:-translate-y-1 max-my-4"
          >
            Sobre mim
          </a>
          <a
            href="#technologies"
            className="block w-max max-md:mt-4 md:border-b-2 border-b-[1px] border-cyan-400 tracking-wide hover:text-cyan-400 transition hover:border-b-[1px] hover:-translate-y-1 max-my-4"
          >
            Tecnologias
          </a>
          <a
            href="#projects"
            className="block w-max max-md:mt-4 md:border-b-2 border-b-[1px] border-cyan-400 tracking-wide hover:text-cyan-400 transition hover:border-b-[1px] hover:-translate-y-1 max-my-4"
          >
            Projetos
          </a>
          <a
            href="#contactMe"
            className="block w-max max-md:mt-4 md:border-b-2 max-md:mb-4 border-b-[1px] border-cyan-400 tracking-wide hover:text-cyan-400 transition hover:border-b-[1px] hover:-translate-y-1 max-my-4"
          >
            Contato
          </a>
        </nav>
      </header>
    </>
  )
}
