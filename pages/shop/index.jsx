import { useRouter } from 'next/router'

import Ribbon from '@/components/templates/layout/Ribbon'
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
import Layout from '@/components/templates/layout/global/layout'

export default function Store() {
  const router = useRouter()
  const { pathname } = router

  const cards = [0, 0, 0, 0, 0, 0, 0]
  const firstStack = Math.floor(cards.length / 2)

  return (
    <main className='main'>
      <Ribbon />
      <Header />

      {/* {pathname === '/shop' ? ( */}
      <CardShelf type='family-cardshelf'>
        {cards.map((_, i) => (
          <FamilyNav key={i} />
        ))}
      </CardShelf>
      {/* ) : ( */}
      <>
        <NavBar />
        <CardShelf>
          <ProductCard />
          {/* TODO: family accessories page */}
        </CardShelf>
      </>
      {/* )} */}

      {cards.slice(0, firstStack).map((card, i) => (
        <CardShelf key={i}>
          <Card />
        </CardShelf>
      ))}

      {pathname === '/shop' && (
        <CardShelf type='halfsize-cardshelf'>
          {cards.map((_, i) => (
            <SmallCard key={i} />
          ))}
        </CardShelf>
      )}

      <CardShelf type='cards-recommendation'>
        {/* TODO: accessories children page */}
        <RecomCard />
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
