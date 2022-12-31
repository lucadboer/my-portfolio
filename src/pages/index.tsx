import { useEffect } from 'react'
import { AboutMe } from '../components/AboutMe'
import { Homes } from '../components/Homes'
import { Projects } from '../components/Projects'
import { Technologies } from '../components/Technologies'

export default function Home() {
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  }, [])

  return (
    <div className="pb-12">
      <div className="bg-home bg-no-repeat bg-cover h-screen shadow-home">
        <Homes />
      </div>
      <AboutMe />
      <div className="w-full flex justify-center">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_rj4titti.json"
          style={{ width: '400px' }}
        ></lottie-player>
      </div>
      <Technologies />
      <Projects />
    </div>
  )
}
