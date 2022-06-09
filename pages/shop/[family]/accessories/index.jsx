import Browser from '@/components/shop/accessories/page/Browser'
import Gallery from '@/components/shop/accessories/page/Gallery'
import PinWheel from '@/components/shop/accessories/page/pinwheel/PinWheel'
import Layout from '@/components/templates/layout/global/layout'
import LocalNav from '@/components/templates/layout/nav/LocalNav'
import SearchBox from '@/components/templates/layout/SearchBox'

export default function Accessories() {
  return (
    <>
      <LocalNav localnav={localnav} />
      <Gallery items={[0, 0, 0]} />
      <SearchBox
        title='Find the accessories you’re looking for.'
        placeholder='Search accessories'
      />
      <Browser tabs={accessories} />

      <PinWheel />

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

        @media only screen and (min-width: 834px) {
          #ac-localnav .ac-ln-menu-tray {
            display: none;
          }
          #ac-localnav .ac-ln-action-menucta {
            display: block;
          }
          /* :checked */
          #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-menu-tray,
          #ac-ln-menustate:target ~ #ac-localnav .ac-ln-menu-tray {
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

const localnav = {
  title: 'Accessories',
  menu: [
    {
      title: 'Shop by Product',
      links: [
        {
          title: 'Mac',
          href: '/shop/mac/accessories',
        },
        {
          title: 'iPad',
          href: '/shop/ipad/accessories',
        },
        {
          title: 'iPhone',
          href: '/shop/iphone/accessories',
        },
        {
          title: 'Watch',
          href: '/shop/watch/accessories',
        },
        {
          title: 'TV & Home',
          href: '/shop/smart-home/accessories',
        },
        {
          title: 'All products',
          href: '/shop/accessories/all',
        },
      ],
    },
    {
      title: 'Shop by Category',
      links: [
        {
          title: 'Accessibility',
          href: '/shop/accessories/all/accessibility',
        },
        {
          title: 'AirTag and Accessories',
          href: '/shop/accessories/all/airtag',
        },
        {
          title: 'Apple Watch Bands',
          href: '/shop/accessories/all/bands',
        },
        {
          title: 'Cases & Protection',
          href: '/shop/accessories/all/cases-protection',
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
          title: 'Headphones & Speakers',
          href: '/shop/accessories/all/headphones-speakers',
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
          title: 'Made by Apple',
          href: '/shop/accessories/all/made-by-apple',
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
          title: 'What’s New',
          href: '/shop/accessories/all/whats-new',
        },
        {
          title: 'Wireless Chargers',
          href: '/shop/accessories/all/wireless-chargers',
        },
      ],
    },
  ],
}

const accessories = [
  {
    title: 'Shop by Product',
    pages: [
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
    ],
  },
  {
    title: 'Shop by Category',
    pages: [
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
    ],
  },
]

Accessories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
