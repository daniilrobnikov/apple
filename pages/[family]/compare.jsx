import Hero from '@/components/[family]/compare/page/Hero'
import ProductSelector from '@/components/[family]/compare/page/ProductSelector'
import React from 'react'

export default function Compare() {
  return (
    <>
      <main>
        <Hero />

        <section id='compare' data-app-component=''>
          <div className='section section-compare-table'>
            <div className='compare-wrapper'>
              <div
                id='compare-accordion'
                role='table'
                data-viewport='xlarge'
                aria-labelledby='page-title'
                data-accordion=''
                className='compare compare-table accordion'
              >
                <ProductSelector />
              </div>
            </div>
          </div>
        </section>
      </main>

      <style global jsx>{`
        body,
        .typography-intro {
          color: #000;
        }

        .section-compare-table .compare-wrapper {
          position: relative;
        }

        @media only screen and (min-width: 1069px) {
          .compare-table {
            margin-bottom: 507px;
          }
        }
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .compare-table {
            margin-bottom: 455px;
          }
        }
        @media only screen and (max-width: 734px) {
          .compare-table {
            margin-bottom: 666px;
          }
        }
      `}</style>
    </>
  )
}
