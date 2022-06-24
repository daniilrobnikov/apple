import Metadata from '@/layout/global/head'
import LocalNav from '@/layout/nav/LocalNav'

import Browser from '@/components/shop/accessories/page/Browser'
import Gallery from '@/components/shop/accessories/page/Gallery'
import PinWheel from '@/components/shop/accessories/page/pinwheel/PinWheel'
import SearchBox from '@/layout/components/SearchBox'

export default function Accessories({ page, family, pinwheels }) {
  var families = [
    {
      title: 'Mac',
      href: '/shop/mac/accessories',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1544482382615',
    },
    {
      title: 'iPad',
      href: '/shop/ipad/accessories',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-ipad?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1544482382704',
    },
    {
      title: 'iPhone',
      href: '/shop/iphone/accessories',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-iphone?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1544482382650',
    },
    {
      title: 'Watch',
      href: '/shop/watch/accessories',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-watch?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1544482383418',
    },
    {
      title: 'TV & Home',
      href: '/shop/smart-home/accessories',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-tv?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1544482382741',
    },
    {
      title: 'All products',
      href: '/shop/accessories/all',
    },
  ]
  var categories = [
    {
      title: 'Made by Apple',
      href: '/shop/accessories/all/made-by-apple',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/category-icon-made-by-apple?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1526595684706',
    },
    {
      title: 'What’s New',
      href: '/shop/accessories/all/whats-new',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/category-icon-whats-new?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1523297510490',
    },
    {
      title: 'Cases & Protection',
      href: '/shop/accessories/all/cases-protection',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-cases-protection?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1523297977190',
    },
    {
      title: 'Headphones & Speakers',
      href: '/shop/accessories/all/headphones-speakers',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-audio-music?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1470069181201',
    },
    {
      title: 'Apple Watch Bands',
      href: '/shop/accessories/all/bands',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-watch-bands?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1523304942327',
    },

    {
      title: 'Accessibility',
      href: '/shop/accessories/all/accessibility',
      icon: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-accessibility?wid=150&amp;hei=150&amp;fmt=png-alpha&amp;.v=1527702785574',
    },
    {
      title: 'AirTag and Accessories',
      href: '/shop/accessories/all/airtag',
    },

    {
      title: 'Creativity',
      href: '/shop/accessories/all/creativity',
    },
    {
      title: 'Displays & Mounts',
      href: '/shop/accessories/all/displays-mounts',
    },
    {
      title: 'Drones',
      href: '/shop/accessories/all/drones',
    },
    {
      title: 'Gaming & Toys',
      href: '/shop/accessories/all/toys-games',
    },

    {
      title: 'Health & Fitness',
      href: '/shop/accessories/all/health-fitness',
    },
    {
      title: 'HomeKit',
      href: '/shop/accessories/all/homekit',
    },
    {
      title: 'MagSafe',
      href: '/shop/accessories/all/magsafe',
    },
    {
      title: 'Mesh Wi-Fi Networking',
      href: '/shop/accessories/all/mesh-wifi-networking',
    },
    {
      title: 'Mice & Keyboards',
      href: '/shop/accessories/all/mice-keyboards',
    },
    {
      title: 'Only at Apple',
      href: '/shop/accessories/all/only-at-apple',
    },
    {
      title: 'Photography',
      href: '/shop/accessories/all/photography',
    },
    {
      title: 'Point of Sale',
      href: '/shop/accessories/all/point-of-sale',
    },
    {
      title: 'Power & Cables',
      href: '/shop/accessories/all/power-cables',
    },
    {
      title: 'Printers & Scanners',
      href: '/shop/accessories/all/printers-scanners',
    },
    {
      title: 'Software',
      href: '/shop/accessories/all/software',
    },
    {
      title: 'Storage',
      href: '/shop/accessories/all/storage',
    },

    {
      title: 'Wireless Chargers',
      href: '/shop/accessories/all/wireless-chargers',
    },
  ]

  families.find((page) => page.href.includes(family)).active = true
  const accessories = [
    {
      title: 'Shop by Product',
      pages: families,
    },
    {
      title: 'Shop by Category',
      pages: categories,
    },
  ]

  return (
    <>
      <Metadata page={page} />

      <LocalNav
        page={{
          title: family === 'all' ? 'Accessories' : page.title,
          href: `/shop/${family}/accessories`,
        }}
        menu={accessories}
      />
      <main>
        <Gallery items={[0, 0, 0]} />
        <SearchBox
          title='Find the accessories you’re looking for.'
          placeholder='Search accessories'
        />
        <Browser tabs={accessories} />
        {pinwheels?.map((pinwheel, index) => (
          <PinWheel pinwheel={pinwheel} key={index} />
        ))}
      </main>

      <style global jsx>{`
        :is(h1, h2, h3, h4, h5, h6, p, ul, ol) + * {
          margin-top: 0.8em;
        }

        @media only screen and (min-width: 834px) {
          #ac-localnav .ac-ln-menu-tray {
            display: none;
          }
          #ac-localnav .ac-ln-action-menucta {
            display: block;
          }
          /* :checked */
          #ac-ln-menustate:is(:checked, :target)
            ~ #ac-localnav
            .ac-ln-menu-tray {
            display: flex;
          }

          .ac-ln-menu-tray {
            margin: 0 auto 54px;
            padding: 26px 0 0;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            width: 100%;
          }

          .ac-ln-menu-tray > ul {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            min-width: 0;
          }
          .ac-ln-menu-tray > ul:first-child {
            flex-basis: 25%;
            max-width: 25%;
            columns: 1 auto;
          }
          .ac-ln-menu-tray > ul:nth-child(2) {
            flex-basis: 75%;
            max-width: 75%;
            columns: 3 auto;
            border-left: 1px solid #d2d2d7;
            margin-left: -3.26%;
            padding-left: 3.26%;
          }

          #ac-localnav .ac-ln-menu-item {
            margin: 34px 0 -34px;
            width: 100%;
            height: 34px;
            display: flex;
            align-items: center;
          }
          #ac-localnav .as-localnav-listtitle.ac-ln-menu-item {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { family: 'all' } },
      { params: { family: 'mac' } },
      { params: { family: 'ipad' } },
      { params: { family: 'watch' } },
      { params: { family: 'iphone' } },
      { params: { family: 'smart-home' } },
    ],
    fallback: 'blocking',
  }
}
export async function getStaticProps({ params }) {
  const pageRes = await fetch(
    `${process.env.API_URL}/pages?url=/shop/${params.family}/accessories`
  )
  const page = await pageRes.json().then((page) => page.data[0])

  var pinwheels = []
  if (page.content) {
    for (let i = 0; i < page.content.length; i++) {
      const sectionRes = await fetch(
        `${process.env.API_URL}/accessories${page.content[i].query}`
      )
      const section = await sectionRes.json()
      pinwheels.push({ ...section, title: page.content[i].title })
    }
  }

  return {
    props: {
      page,
      pinwheels,
      family: params.family,
    },
    revalidate: 60,
  }
}
