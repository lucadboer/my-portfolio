import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { backEnd, frontEnd } from '../data/stacks'

export function Technologies() {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    loop: true,
    slides: {
      perView: 2.6,
      spacing: 32,
    },
    // breakpoints: {
    //   '(max-width: 768px)': {
    //     slides: {
    //       perView: 1.1,
    //       spacing: 20,
    //     },
    //   },
    // },
  })

  return (
    <main id="technologies" className="max-w-6xl mx-auto">
      <header className="flex items-center">
        {/* <span className="border-l-4 border-l-cyan-400 h-6 rounded"></span>{' '} */}
        <h2 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 leading-relaxed">
          Tecnologias que utilizo
        </h2>
      </header>
      <section className="grid grid-cols-2 items-center mt-4 gap-12">
        <article className="flex flex-col gap-6">
          <div>
            <header className="flex items-center justify-between">
              <h3 className="text-cyan-100 text-4xl">Front-end</h3>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets8.lottiefiles.com/packages/lf20_KAAgSJPJxq.json"
                style={{ width: '150px', height: '90px' }}
              ></lottie-player>
            </header>
            <div className="bg-[#202024] rounded-lg px-4 py-4">
              <div ref={sliderRef} className="keen-slider flex">
                {frontEnd.map((tech) => {
                  return (
                    <div
                      key={tech.id}
                      className="keen-slider__slide text-gray-100 flex flex-col justify-center items-center gap-2 h-[10rem] px-6 py-4 rounded bg-[#121214]"
                    >
                      <Image
                        className="max-h-28"
                        src={`techs/${tech.image}.svg`}
                        alt=""
                        width={300}
                        height={300}
                      />
                      <strong>{tech.name}</strong>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div>
            <header className="flex items-center justify-between">
              <h3 className="text-cyan-100 text-4xl">Back-end</h3>
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets8.lottiefiles.com/packages/lf20_KAAgSJPJxq.json"
                style={{ width: '150px', height: '90px' }}
              ></lottie-player>
            </header>
            <div className="bg-[#202024] rounded-lg px-4 py-4">
              <div ref={sliderRef} className="keen-slider flex">
                {backEnd.map((tech) => {
                  return (
                    <div
                      key={tech.id}
                      className="keen-slider__slide text-gray-100 flex flex-col justify-center items-center gap-2 h-[10rem] px-6 py-4 rounded bg-[#121214]"
                    >
                      <Image
                        className="max-h-28"
                        src={`techs/${tech.image}.svg`}
                        alt=""
                        width={300}
                        height={300}
                      />
                      <strong>{tech.name}</strong>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </article>
        <article>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets7.lottiefiles.com/private_files/lf30_igfaivqx.json"
            style={{ width: '600px' }}
          ></lottie-player>
        </article>
      </section>
    </main>
  )
}
