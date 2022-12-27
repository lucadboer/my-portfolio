import { AboutMe } from '../components/AboutMe'
import { Homer } from '../components/Homer'

export default function Home() {
  return (
    <>
      <div className="bg-home bg-no-repeat bg-cover h-screen shadow-home">
        <Homer />
      </div>
      <AboutMe />
    </>
  )
}
