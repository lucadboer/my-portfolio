import { BackEnd } from './Backend'
import { FrontEnd } from './FrontEnd'

export function Technologies() {
  return (
    <main id="technologies" className="max-w-6xl mx-auto">
      <header className="flex items-center">
        {/* <span className="border-l-4 border-l-cyan-400 h-6 rounded"></span>{' '} */}
        <h2 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 leading-relaxed">
          Tecnologias que utilizo
        </h2>
      </header>
      <section className="grid grid-cols-2 items-center justify-center gap-16 mt-8">
        <article className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <header className="flex items-center justify-between">
              <h3 className="text-cyan-100 text-4xl">Front-end</h3>
            </header>
            <FrontEnd />
          </div>
          <div className="flex flex-col gap-6">
            <header className="flex items-center justify-between">
              <h3 className="text-cyan-100 text-4xl">Back-end</h3>
            </header>
            <BackEnd />
          </div>
        </article>
        <article>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets7.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
            style={{ width: '30rem' }}
          ></lottie-player>
        </article>
      </section>
    </main>
  )
}
