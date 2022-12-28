import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import javascript from '../assets/technologies/javascript.svg'
import nodejs from '../assets/technologies/nodejs.svg'

export function Technologies() {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: 2.8,
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
    <main id="technologies" className="max-w-6xl mx-auto mt-20">
      <header className="flex items-center">
        {/* <span className="border-l-4 border-l-cyan-400 h-6 rounded"></span>{' '} */}
        <h2 className="text-5xl text-cyan-400">Tecnologias que utilizo</h2>
      </header>
      <section className="grid grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-cyan-100 text-4xl">Front-end</h3>
          <article
            ref={sliderRef}
            className="bg-[#202024] rounded-lg mt-3 keen-slider px-8 py-4"
          >
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={javascript}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={javascript}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={javascript}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={javascript}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={javascript}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={javascript}
                alt=""
                width={300}
                height={300}
              />
            </div>
          </article>
        </div>
        <div>
          <h3 className="text-cyan-100 text-4xl">Back-end</h3>
          <article
            ref={sliderRef}
            className="bg-[#202024] rounded-lg mt-3 keen-slider px-8 py-4"
          >
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={nodejs}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={nodejs}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={nodejs}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="keen-slider__slide flex justify-center items-center h-[10rem] px-6 py-4 rounded bg-[#121214]">
              <Image
                className="max-h-28"
                src={nodejs}
                alt=""
                width={300}
                height={300}
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
