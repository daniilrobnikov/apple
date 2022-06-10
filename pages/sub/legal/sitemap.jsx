export default function Sitemap() {
  const localnav = {
    title: 'Apple Site Map',
    eyebrow: '14” and 16” models',
    menu: [
      {
        href: '/macbook-pro-14-and-16/',
        title: 'Overview',
      },
      {
        href: '/macbook-pro-14-and-16/why-mac/',
        title: 'Why Mac',
      },
      {
        href: '/macbook-pro-14-and-16/specs/',
        title: 'Tech Specs',
      },
    ],
    actions: [
      {
        href: '/macbook-pro-14-and-16/',
        type: 'button',
      },
    ],
  }
  return (
    <>
      {/* <LocalNav localnav={localnav} /> */}
      None
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
