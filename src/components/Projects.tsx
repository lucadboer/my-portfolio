import Image from 'next/image'
import Link from 'next/link'
import { GithubLogo, RocketLaunch } from 'phosphor-react'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <div id="projects" className="max-w-6xl mx-auto mt-40">
      <h2 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 leading-relaxed">
        Meus trabalhos
      </h2>
      <main className="grid grid-cols-3 gap-8 text-gray-100 mt-10">
        {projects.map((project) => {
          return (
            <article
              key={project.id}
              className="w-max border-2 border-zinc-800 pb-4 rounded flex flex-col shadow-projects items-center gap-4 bg-zinc-900 transition duration-300 hover:scale-105 hover:border-2 hover:border-cyan-300"
            >
              <Image
                className="max-h-36"
                src={`/projects/${project.image}.png`}
                width={300}
                height={300}
                alt=""
              />
              <footer className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-bold text-cyan-100">
                  {project.name}
                </h3>
                <div className="flex items-center justify-between gap-4 text-lg">
                  <Link
                    className="flex items-center gap-2 border-2 border-cyan-500 rounded-md px-4 py-2 duration-[0.25s] hover:bg-cyan-500 hover:-translate-y-1"
                    href={project.deploy}
                    target="_blank"
                  >
                    <RocketLaunch size={22} />
                    Deploy
                  </Link>
                  <Link
                    className="flex items-center gap-2 border-2 border-cyan-500 rounded-md px-4 py-2 transition hover:bg-cyan-500 hover:-translate-y-1"
                    href={project.github}
                    target="_blank"
                  >
                    <GithubLogo size={22} />
                    Code
                  </Link>
                </div>
              </footer>
            </article>
          )
        })}
      </main>
    </div>
  )
}
