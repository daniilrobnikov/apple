import LocalNav from '@/components/templates/layout/nav/LocalNav'

export default function Sitemap({ page }) {
  return (
    <>
      <LocalNav page={page} />
    </>
  )
}

export async function getStaticProps() {
  const pageRes = await fetch(`${process.env.API_URL}/pages?url=/sitemap`)
  const page = await pageRes.json().then((page) => page.data[0])
  return {
    props: {
      page,
    },
  }
}
