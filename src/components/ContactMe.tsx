import { SmileySticker } from 'phosphor-react'
import { SocialMedias } from './SocialMedias'

export function ContactMe() {
  return (
    <div id="contactMe" className="max-w-6xl mx-auto mt-40 p-2">
      <h2 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 max-md:text-4xl">
        Entre em contato
      </h2>
      <main className="grid grid-cols-2 max-md:flex max-md:flex-col gap-4 items-center">
        <form
          className="mt-10 max-w-lg max-lg:w-full flex flex-col gap-6 p-5 bg-[#202024] rounded-lg"
          action="https://formsubmit.co/luca.boer@outlook.com"
          method="POST"
        >
          <input
            className="w-full bg-transparent border-b-2 border-cyan-400 py-3 px-2 text-base text-gray-100 transition-all duration-150 focus:border-l-2 hover:placeholder:text-cyan-200 focus-within:outline-none"
            type="text"
            placeholder="Digite seu nome"
            name="Nome"
            autoComplete="none"
            required
          />
          <input
            className="w-full bg-transparent border-b-2 border-cyan-400 py-3 px-2 text-base text-gray-100 transition-all duration-150 focus:border-l-2 hover:placeholder:text-cyan-200 focus-within:outline-none"
            type="email"
            placeholder="Digite seu e-mail"
            name="E-mail"
            required
          />
          <input
            className="w-full bg-transparent border-b-2 border-cyan-400 py-3 px-2 text-base text-gray-100 transition-all duration-150 focus:border-l-2 hover:placeholder:text-cyan-200 focus-within:outline-none"
            type="text"
            placeholder="Qual o assunto?"
            name="Assunto"
          />
          <textarea
            className="bg-[#121214] resize-y text-gray-200 py-3 px-2 h-28 max-h-64 rounded"
            name="Mensagem"
            placeholder="Deixe sua mensagem aqui..."
          />
          <button
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xl bg-cyan-500 rounded text-gray-100 font-bold transition hover:bg-cyan-600"
            type="submit"
          >
            Me contate
            <SmileySticker size={24} />
          </button>
        </form>
        <SocialMedias />
      </main>
    </div>
  )
}
