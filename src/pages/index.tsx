import { AboutMe } from '../components/AboutMe'
import { Homes } from '../components/Homes'
import { Technologies } from '../components/Technologies'

export default function Home() {
  return (
    <div className="pb-12">
      <div className="bg-home bg-no-repeat bg-cover h-screen shadow-home">
        <Homes />
      </div>
      <AboutMe />
      <Technologies />
    </div>
  )
}
