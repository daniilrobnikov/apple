import Ribbon from '@/components/templates/layout/components/Ribbon'
import Header from '@/components/shop/page/Header'

import FamilyNav from '@/components/shop/page/FamilyNav'
import NavBar from '@/components/shop/page/NavBar'

import CardShelf from '@/components/shop/page/CardShelf'
import ProductCard from '@/components/shop/page/cards/ProductCard'
import Card from '@/components/shop/page/cards/Card'
import SmallCard from '@/components/shop/page/cards/SmallCard'

import Portal from '@/components/shop/page/portals/Portal'
import ProductPortal from '@/components/shop/page/portals/ProductPortal'
import RecomCard from '@/components/shop/page/cards/RecomCard'

export default function Store({ family, accessories }) {
  const cards = [0, 0, 0, 0, 0, 0, 0]
  const firstStack = Math.floor(cards.length / 2)

  return (
    <main className='main'>
      <Ribbon />
      <Header />

      {family === 'all' ? (
        <FamilyNav />
      ) : (
        <>
          <NavBar />
          <CardShelf>
            <ProductCard />
            {/* TODO: family accessories page */}
          </CardShelf>
        </>
      )}

      {cards.slice(0, firstStack).map((card, i) => (
        <CardShelf key={i}>
          <Card />
        </CardShelf>
      ))}

      {family === 'all' && (
        <CardShelf type='halfsize-cardshelf'>
          {cards.map((_, i) => (
            <SmallCard key={i} />
          ))}
        </CardShelf>
      )}

      <CardShelf type='cards-recommendation'>
        {/* TODO: accessories children page */}
        {accessories.map((product) => (
          <RecomCard product={product} key={product._id} />
        ))}
        {/* TODO: accessories page */}
      </CardShelf>

      {cards.slice(firstStack).map((card, i) => (
        <CardShelf key={i}>
          <Card />
        </CardShelf>
      ))}

      {/* TODO: MOBILE & TABLET */}
      {/* <Portal />
      <ProductPortal /> */}

      <style global jsx>{`
        body {
          background-color: #f5f5f7;
        }

        :is(h1, h2, h3, h4, h5, h6, p, ul, ol) + * {
          margin-top: 0.8em;
        }
      `}</style>
    </main>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { family: 'all' } },
      { params: { family: 'buy-mac' } },
      { params: { family: 'buy-ipad' } },
      { params: { family: 'buy-watch' } },
      { params: { family: 'buy-iphone' } },
    ],
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const accessoriesRes = await fetch(
    `${process.env.API_URL}/accessories?brand=Apple&limit=30`
  )
  const accessories = await accessoriesRes.json().then((res) => res.data)
  return {
    props: {
      family: params.family.replace('buy-', ''),
      accessories,
    },
    revalidate: 60,
  }
}
