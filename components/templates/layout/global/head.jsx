import Head from 'next/head'

export default function PageHead({
  title = 'Apple',
  description = 'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.',
  keywords = 'apple, iphone, mac, ipad, apple watch, apple tv, accessories, entertainment, expert device support',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=1, viewport-fit=cover'
      />
    </Head>
  )
}
