import MainPanel from '@/components/shop/[product]/page/MainPanel'
import SidePanel from '@/components/shop/[product]/page/SidePanel'
import Summary from '@/components/shop/[product]/page/Summary'
import LocalNav from '@/components/templates/layout/nav/LocalNav'
import Ribbon from '@/components/templates/layout/components/Ribbon'

export default function Product({ family, product }) {
  return (
    <>
      <LocalNav
        page={{ title: 'iMac', href: 'imac' }}
        menu={[
          {
            pages: [
              {
                title: 'macOS',
                href: '/imac/osx',
              },
              {
                title: 'Tech Specs',
                href: '/imac/specs/',
              },
            ],
          },
        ]}
      />

      <main>
        <Ribbon />

        <div className='row section-content configuration-container'>
          <SidePanel />
          <MainPanel />
        </div>

        <Summary />
      </main>

      <style global jsx>{`
        html {
          background-color: #f5f5f7;
        }

        #ac-localnav.css-sticky {
          position: relative;
        }

        .ribbon-blue-to-default {
          --ribbon-background-color: #f5f5f7 !important;
        }

        .as-buttonlink {
          background: transparent;
          border: 0;
          color: #06c;
          font-size: inherit;
          line-height: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
          padding: 0;
          vertical-align: inherit;
          cursor: pointer;
        }

        @media only screen and (min-width: 735px) {
          .configuration-container {
            margin-top: 52px;
          }
        }
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .configuration-container {
            width: 87.5%;
          }
        }
        @media only screen and (max-width: 734px) {
          .configuration-container {
            margin-top: 43px;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  const families = ['all', 'mac', 'ipad', 'watch', 'iphone', 'smart-home']
  const products = ['imac']

  let paths = []
  families.forEach((family) => {
    products.forEach((product) => {
      paths.push({
        params: {
          family,
          product,
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
  return {
    props: {
      family: params.family,
      product: params.product,
    },
    revalidate: 1,
  }
}
