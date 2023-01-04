import Image from 'next/image'

import githubLogo from '../assets/github-logo.svg'
import linkedinLogo from '../assets/linkedin-logo.svg'
import whatsappLogo from '../assets/whatsapp-logo.svg'
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
      <div className="flex items-center justify-around max-h-7 mt-24 max-md:gap-6 max-lg:gap-4">
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

        <a
          className="flex flex-col items-center gap-2 text-sm text-gray-300"
          href="https://whatsa.me/5516981526867"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="max-h-14 transition hover:scale-110"
            src={whatsappLogo}
            width={50}
            height={50}
            alt="whatsapp"
          />
          <span>(16) 98152-6867</span>
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
