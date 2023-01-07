import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Luca Destefano</title>
      </Head>
      <body className="bg-[#121214] scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-zinc-900">
        <NextScript />
        <Main />
      </body>
    </Html>
  )
}
