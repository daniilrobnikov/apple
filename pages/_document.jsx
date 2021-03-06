import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='js touch'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/manifest.json' />

        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#000000'
        />

        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
