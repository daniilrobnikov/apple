import Details from '@/components/shop/product/A/page/Details'
import MainPanel from '@/components/shop/product/A/page/MainPanel'
import Recommended from '@/components/shop/product/A/page/Recommended'
import SidePanel from '@/components/shop/product/A/page/SidePanel'
import LocalNav from '@/components/templates/layout/nav/LocalNav'
import Ribbon from '@/components/templates/layout/components/Ribbon'

export default function Product({ product, recommended }) {
  const families = [
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
        page={{ title: 'Accessories', href: '/shop/accessories/all' }}
        menu={accessories}
      />
      <main>
        <Ribbon />

        <div className='row section-content configuration-container'>
          <MainPanel product={product} />
          <SidePanel product={product} />
        </div>

        <Details />
        <Recommended recommended={recommended} />
      </main>

      <style global jsx>{`
        #ac-localnav.css-sticky {
          position: relative;
        }

        .ribbon-blue-to-default {
          --ribbon-background-color: #f5f5f7 !important;
        }

        .configuration-container {
          justify-content: space-between;
        }

        .rf-pdp-acmidisclaimer {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          margin-top: 20px;
        }
        .rf-pdp-engraving + .rf-pdp-acmidisclaimer,
        .rf-pdp-engraving + .rf-pdp-buyflow-form-wrapper,
        .rf-pdp-engraving + .rf-pdp-fulfillment-wrapper {
          margin-top: 0;
          padding-top: 0;
        }

        @media only screen and (min-width: 1069px) {
          .rf-pdp-title,
          .rc-accordion-title {
            font-size: 32px;
            line-height: 1.25;
            font-weight: 600;
            letter-spacing: 0.004em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }
        }
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .rf-pdp-title,
          .rc-accordion-title {
            font-size: 28px;
            line-height: 1.28583;
            font-weight: 600;
            letter-spacing: 0.007em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }
        }
        @media only screen and (min-width: 735px) {
          .configuration-container {
            margin-top: 50px;
            margin-bottom: 50px;
          }
        }
        @media only screen and (max-width: 734px) {
          .configuration-container {
            flex-direction: column-reverse;
            margin-top: 40px;
            margin-bottom: 40px;
          }

          .rf-pdp-title,
          .rc-accordion-title {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }
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
  const accessories = await fetch(`${process.env.API_URL}/accessories`).then(
    (res) => res.json()
  )

  const paths = accessories.data.map((accessory) => ({
    params: {
      slug: accessory.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const product = await fetch(
    `${process.env.API_URL}/accessories?slug=${params.slug}`
  )
    .then((res) => res.json())
    .then((res) => res.data[0])

  const recommended = await fetch(
    `${process.env.API_URL}/accessories?brand=Apple&limit=4`
  ).then((res) => res.json())

  return {
    props: {
      product,
      recommended,
    },
    revalidate: 20,
  }
}
