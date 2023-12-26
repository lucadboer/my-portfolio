import Image from 'next/image'

import githubLogo from '../assets/github-logo.svg'
import linkedinLogo from '../assets/linkedin-logo.svg'

import emailLogo from '../assets/email-logo.svg'

export function SocialMedias() {
  return (
    <div className="flex flex-col">
      <span className="max-md:hidden">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets10.lottiefiles.com/packages/lf20_lt8ter7g.json"
          style={{ width: '20rem' }}
        ></lottie-player>
      </span>
      <div className="grid grid-cols-3 mt-5 gap-7 max-md:px-4 lg:flex lg:items-center lg:justify-center lg:mt-20">
        <a
          className="flex flex-col items-center gap-2 text-sm text-gray-300"
          href="https://github.com/lucadboer"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="max-h-14 transition hover:scale-110"
            src={githubLogo}
            width={50}
            height={50}
            alt="github"
          />
          <span>@lucadboer</span>
        </a>
        <a
          className="flex flex-col items-center gap-2 text-sm text-gray-300"
          href="https://www.linkedin.com/in/luca-destefano-boer/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="max-h-14 transition hover:scale-110"
            src={linkedinLogo}
            width={50}
            height={50}
            alt="linkedin"
          />
          <span>@lucadestefanoboer</span>
        </a>
        <span className="flex flex-col items-center gap-2 text-sm text-gray-300">
          <Image
            className="max-h-14"
            src={emailLogo}
            width={50}
            height={50}
            alt="whatsapp"
          />
          <span>luca.boer@outlook.com</span>
        </span>
      </div>
    </div>
  )
}
