export function Header() {
  return (
    <>
      <h1 className="absolute flex items-center font-ubuntu pt-5 text-3xl text-cyan-50 before:content-['<'] before:text-cyan-400 before:text-3xl after:content-['/>'] after:text-cyan-400 after:text-3xl">
        DevLuca
      </h1>
      <header className="w-full flex justify-center pt-6">
        <nav className="flex items-center gap-12 text-cyan-50 text-xl">
          <a
            href="#aboutme"
            className="border-b-[2.5px] border-transparent tracking-wide hover:text-cyan-400 transition hover:border-b-[2.5px] hover:translate-x-2 "
          >
            Sobre mim
          </a>
          <a
            href="#technologies"
            className="border-b-[2.5px] border-transparent tracking-wide hover:text-cyan-400 transition hover:border-b-[2.5px] hover:translate-x-2 "
          >
            Tecnologias
          </a>
          <a
            href="#projects"
            className="border-b-[2.5px] border-transparent tracking-wide hover:text-cyan-400 transition hover:border-b-[2.5px] hover:translate-x-2 "
          >
            Projetos
          </a>
          <a
            href=""
            className="border-b-[2.5px] border-transparent tracking-wide hover:text-cyan-400 transition hover:border-b-[2.5px] hover:translate-x-2 "
          >
            Contacte-me
          </a>
        </nav>
      </header>
    </>
  )
}
