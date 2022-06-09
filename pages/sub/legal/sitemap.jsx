import Layout from '@/components/templates/layout/global/layout'
import LocalNav from '@/components/templates/layout/nav/LocalNav'

export default function Sitemap() {
  return <>{/* <LocalNav localnav={localnav} /> */}</>
}

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

Sitemap.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
