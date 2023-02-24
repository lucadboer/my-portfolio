import Link from 'next/link'
import { DownloadSimple } from 'phosphor-react'

export function AboutMe() {
  return (
    <main
      id="aboutme"
      className="max-w-6xl mx-auto pt-12 flex items-center justify-between max-lg:flex-col max-lg:px-3"
    >
      <div className="flex flex-col gap-12 max-w-xl">
        <h2 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 max-lg:text-4xl">
          Um pouco sobre mim
        </h2>
        <p className="text-gray-100 text-xl leading-relaxed max-lg:text-lg">
          Que bom ter você por aqui! Então vamos lá, me chamo Luca e tenho 20
          anos. Sou um Programador Fullstack com foco no Front-end, me
          especializando em Next.js, React Native e Node.js na plataforma{' '}
          <Link
            className="text-purple-600 transition hover:text-purple-500"
            href="https://rocketseat.com.br"
            target="_blank"
          >
            Rocketseat
          </Link>{' '}
          . Também estou cursando o último semestre de Análise e Desenvolvimento
          de Sistemas. Sempre fui apaixonado por tecnologia desde pequenino, e o
          que me fez brilhar os olhos mais ainda em programação foi conhecer o
          mundo do Front-end e suas tecnologias React, Next.js, TailwindCSS
          (inclusive este portifólio foi construído com essas tecnologias) e por
          solucionar os problemas desse meio de forma criativa e responsiva. E
          hoje busco uma oportunidade para poder atuar nesse universo pelo qual
          tenho muito carinho e não canso de estudar sobre.
        </p>
        <button className="border-4 border-cyan-400 w-max text-2xl text-gray-100 rounded-lg transition hover:shadow-button hover:shadow-cyan-200 hover:-translate-y-2 shadow-xl shadow-black">
          <a
            className="flex items-center gap-4 py-3 px-4"
            download="Currículo Dev - Luca Destefano Boer"
            href="Curriculo Dev-Luca.pdf"
          >
            {' '}
            <DownloadSimple size={28} /> Baixar CV
          </a>
        </button>
      </div>
      <div className="max-md:hidden">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets7.lottiefiles.com/private_files/lf30_WdTEui.json"
          style={{ width: '450px' }}
        ></lottie-player>
      </div>
    </main>
  )
}
