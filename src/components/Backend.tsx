import Image from 'next/image'
import { backEnd } from '../data/stacks'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function BackEnd() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    mode: 'free-snap',
    loop: true,
    slides: {
      perView: 2.6,
      spacing: 10,
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

  function handlePassSlide(e: any) {
    e.stopPropagation() || instanceRef.current?.next()
  }

  return (
    <div className="flex items-center gap-4 text-gray-800">
      <div ref={sliderRef} className="keen-slider flex">
        {backEnd.map((tech) => {
          return (
            <div
              key={tech.id}
              className="keen-slider__slide bg-gray-200 flex flex-col justify-center items-center gap-4 h-[10.5rem] px-6 py-4 rounded"
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
      <button
        className="transition hover:saturate-200 hover:scale-110"
        onClick={handlePassSlide}
      >
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_A2xUJoCwKm.json"
          style={{ width: '50px', height: '50px' }}
        ></lottie-player>
      </button>
    </div>
  )
}
