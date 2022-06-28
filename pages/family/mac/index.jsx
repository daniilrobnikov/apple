import Metadata from '@/layout/global/head.jsx'

import CompareGrid from '@/components/templates/family/layout/compare/CompareGrid'
import RouterGrid from '@/components/templates/family/layout/grid/RouterGrid'
import ChapterNav from '@/components/templates/layout/nav/ChapterNav'
import Grid from '@/layout/components/router/Grid'

export default function Mac({ page, promos }) {
  return (
    <>
      <Metadata page={page} />
      <ChapterNav />
      <main>
        <Grid tiles={promos} />
        <RouterGrid />
        <CompareGrid />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const pageRes = await fetch(`${process.env.API_URL}/pages?url=/mac`)
  const page = await pageRes.json().then((page) => page.data[0])

  const promosRes = await fetch(`${process.env.API_URL}/router?family=mac`)
  const promos = await promosRes.json().then((router) => router.data)
  return {
    props: {
      page,
      promos,
    },
  }
}
