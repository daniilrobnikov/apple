import BillBoard from '@/components/shop/accessories/[category]/page/BillBoard'
import SearchResults from '@/components/shop/accessories/[category]/page/search/SearchResults'
import LocalNav from '@/components/templates/layout/nav/LocalNav'

export default function Category() {
  return (
    <>
      <LocalNav />

      <BillBoard />

      <SearchResults />

      <style global jsx>{`
        :is(h1, h2, h3, h4, h5, h6, p, ul, ol) + * {
          margin-top: 0.8em;
        }
      `}</style>
    </>
  )
}
