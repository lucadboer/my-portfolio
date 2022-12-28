import { Header } from './Header'

export function Homes() {
  return (
    <div className="max-w-6xl mx-auto">
      <header>
        <Header />
      </header>
      <main className="flex justify-center items-center h-[35rem]">
        <p className="border-l-[6px] pl-3 border-cyan-400 text-white text-3xl leading-relaxed font-ubuntu">
          Hey, eu sou o
          <strong className="block text-5xl text-cyan-300">
            Luca Destefano Boer
          </strong>
          sou um
          <strong className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">
            {' '}
            Desenvolvedor Front-end
          </strong>
        </p>
      </main>
    </div>
  )
}
