import { BackEnd } from './Backend'
import { FrontEnd } from './FrontEnd'

export function Technologies() {
  return (
    <main
      id="technologies"
      className="max-w-6xl mx-auto max-lg:px-4 max-md:mt-40"
    >
      <header className="flex items-center">
        <h2 className="font-bold text-5xl max-lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
          Meus conhecimentos
        </h2>
      </header>
      <section className="grid grid-cols-2 max-lg:grid-cols-1 items-center justify-center gap-12 mt-12">
        <article className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <header className="flex items-center justify-between">
              <h3 className="text-cyan-100 text-4xl max-lg:text-3xl">
                Front-end
              </h3>
            </header>
            <FrontEnd />
          </div>
          <div className="flex flex-col gap-6">
            <header className="flex items-center justify-between">
              <h3 className="text-cyan-100 text-4xl max-lg:text-3xl">
                Back-end
              </h3>
            </header>
            <BackEnd />
          </div>
        </article>
        <article className="flex justify-center max-md:hidden">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/private_files/lf30_obidsi0t.json"
            style={{ width: '27rem' }}
          ></lottie-player>
        </article>
      </section>
    </main>
  )
}
