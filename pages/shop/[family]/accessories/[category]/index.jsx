import BillBoard from '@/components/shop/accessories/[category]/page/BillBoard'
import SearchResults from '@/components/shop/accessories/[category]/page/search/SearchResults'
import Layout from '@/components/templates/layout/global/layout'
import LocalNav from '@/components/templates/layout/nav/LocalNav'

export default function Category() {
  return (
    <>
      <LocalNav />

      <BillBoard />

      <SearchResults />

      <style global jsx>{`
        h1 + *,
        h2 + *,
        h3 + *,
        h4 + *,
        h5 + *,
        h6 + * {
          margin-top: 0.8em;
        }
        ol + *,
        p + *,
        ul + * {
          margin-top: 0.8em;
        }
      `}</style>
    </>
  )
}

Category.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
