import { useEffect } from 'react'
import { AboutMe } from '../components/AboutMe'
import { ContactMe } from '../components/ContactMe'
import { Homes } from '../components/Homes'
import { Projects } from '../components/Projects'
import { Technologies } from '../components/Technologies'

export default function Home() {
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  }, [])

  // 411

  return (
    <div>
      <div className="bg-home bg-no-repeat bg-cover h-screen shadow-home max-sm:bg-right-top">
        <Homes />
      </div>
      <AboutMe />
      <div className="w-full flex justify-center max-md:hidden">
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
      <ContactMe />
      <footer className="text-gray-300 text-sm text-center mt-24 pb-2">
        <span>© Luca Destefano Boer. All rights reserved.</span>
      </footer>
    </div>
  )
}
