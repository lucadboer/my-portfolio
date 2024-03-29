/* eslint-disable react/no-unescaped-entities */

export function AboutMe() {
  return (
    <main
      id="aboutme"
      className="max-w-6xl mx-auto pt-12 flex items-center justify-between max-lg:flex-col max-lg:px-3"
    >
      <div className="flex flex-col gap-12 max-w-xl">
        <h2 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 max-lg:text-4xl">
          Um pouco sobre mim
        </h2>
        <p className="text-gray-100 text-xl leading-relaxed max-lg:text-lg">
          Olá pessoa, robô ou IA, que sorte a minha ter você por aqui! Então
          vamos lá, me chamo Luca e tenho 20 anos, sou formado em Análise e
          Desenvolvimento de Sistemas. Atuo como Desenvolvedor Fullstack com
          foco nas stacks do Javascript com proeficiência nas seguintes
          tecnologias: React Native e Next.js (React), também possuo
          conhecimento em Node.js. Sempre fui apaixonado por tecnologia desde
          pequenino, e o que me fez brilhar os olhos mais ainda em programação
          foi entender que consigo solucionar alguns dos problemas do mundo
          através dos códigos e da tecnologia, tornando ele um lugar melhor. Sou
          movido pela curiosidade e constantemente busco me aprofundar nesse
          universo, sempre em busca de aprender mais e me atualizar sobre as
          últimas tendências e avanços na área pelo qual tenho muito carinho.
          Afinal, provavelmente serei uma das pessoas mais curiosas que você
          pode encontrar.
        </p>
        {/*
        <button className="border-4 border-cyan-400 w-max text-2xl text-gray-100 rounded-lg transition hover:shadow-button hover:shadow-cyan-200 hover:-translate-y-2 shadow-xl shadow-black">
          <a
            className="flex items-center gap-4 py-3 px-4"
            download="Currículo-Luca Destefano Boer"
            href="Curriculo-Luca.pdf"
          >
            {' '}
            <DownloadSimple size={28} /> Baixar CV
          </a>
        </button>
      */}
      </div>
      <div className="max-md:hidden">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets7.lottiefiles.com/private_files/lf30_WdTEui.json"
          // eslint-disable-next-line prettier/prettier
          style={{ width: "450px" }}
        ></lottie-player>
      </div>
    </main>
  )
}
