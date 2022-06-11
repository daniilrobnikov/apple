import LocalNav from '@/components/templates/layout/nav/LocalNav'

export default function Sitemap() {
  return (
    <>
      <LocalNav
        page={{
          title: 'Apple Site Map',
          eyebrow: '14” and 16” models',
          href: '/macbook-pro-14-and-16/',
        }}
        menu={[
          {
            title: 'Why Mac',
            href: '/macbook-pro-14-and-16/why-mac/',
          },
          {
            title: 'Tech Specs',
            href: '/macbook-pro-14-and-16/specs/',
          },
        ]}
        actions={[
          {
            href: '/macbook-pro-14-and-16/',
            type: 'button',
          },
        ]}
      />
      None
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
