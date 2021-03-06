import BillBoard from '@/components/shop/accessories/[category]/page/BillBoard'
import SearchResults from '@/components/shop/accessories/[category]/page/search/SearchResults'
import LocalNav from '@/components/templates/layout/nav/LocalNav'

export default function Category({ family, category, products }) {
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

  categories.find((page) => page.href.includes(category)).active = true
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
      <LocalNav
        page={{
          title: 'Accessories',
          href: `/shop/${family}/accessories`,
        }}
        menu={accessories}
      />

      <main>
        <BillBoard
          title={categories.find((page) => page.href.includes(category)).title}
        />
        <SearchResults products={products} />
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
  const families = ['all', 'mac', 'ipad', 'watch', 'iphone', 'smart-home']
  const categories = [
    'made-by-apple',
    'whats-new',
    'cases-protection',
    'headphones-speakers',
    'bands',
    'accessibility',
    'airtag',
    'creativity',
    'displays-mounts',
    'drones',
    'toys-games',
    'health-fitness',
    'homekit',
    'magsafe',
    'mesh-wifi-networking',
    'mice-keyboards',
    'only-at-apple',
    'photography',
    'point-of-sale',
    'power-cables',
    'printers-scanners',
    'software',
    'storage',
    'wireless-chargers',
  ]

  let paths = []
  families.forEach((family) => {
    categories.forEach((category) => {
      paths.push({
        params: {
          family,
          category,
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const productsRes = await fetch(
    `${process.env.API_URL}/accessories?brand=Apple&limit=30`
  )
  const products = await productsRes.json()
  return {
    props: {
      family: params.family,
      category: params.category,
      products,
    },
    revalidate: 1,
  }
}
