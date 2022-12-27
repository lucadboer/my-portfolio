export function Header() {
  return (
    <div>
      <h1 className="absolute flex items-center font-ubuntu pt-5 text-3xl text-cyan-50 before:content-['<'] before:text-cyan-400 before:text-3xl after:content-['/>'] after:text-cyan-400 after:text-3xl">LucaDestefano</h1>
      <header className="w-full flex justify-center pt-6">
        <nav className="flex items-center gap-12 text-cyan-50 text-xl">
          <a href="" className="border-b-[2.5px] border-transparent hover:text-cyan-400 hover:border-b-[2.5px] hover:translate-x-2 hover:border-cyan-300 transition" >Sobre mim</a>
          <a href="" className="border-b-[2.5px] border-transparent hover:text-cyan-400 hover:border-b-[2.5px] hover:translate-x-2 hover:border-cyan-300 transition" >Projetos</a>
          <a href="" className="border-b-[2.5px] border-transparent hover:text-cyan-400 hover:border-b-[2.5px] hover:translate-x-2 hover:border-cyan-300 transition" >Contato</a>
        </nav>
      </header>
    </div>
  )
}