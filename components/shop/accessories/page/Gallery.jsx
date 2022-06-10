import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
// import PaddleNav from '@/components/templates/layout/nav/PaddleNav'
// import DotNav from '@/components/templates/layout/nav/DotNav'

import StyledLink from '@/components/templates/layout/styled/StyledLink'

import { Suspense } from 'react'
const PaddleNav = dynamic(
  () => import('@/components/templates/layout/nav/PaddleNav'),
  { ssr: true }
)
const DotNav = dynamic(
  () => import('@/components/templates/layout/nav/DotNav'),
  {
    suspense: true,
    ssr: true,
  }
)

import { useState, useRef } from 'react'

export default function Gallery({ items }) {
  const ref = useRef(null)

  const step = 100
  const width = step * items.length
  const [slide, setSlide] = useState(0)

  const handleArrowClick = (e) => {
    setSlide(slide + -e * step)
  }
  const handleDotClick = (e) => {
    setSlide(-step * e)
  }
  return (
    <>
      <div
        data-react-gallery=''
        data-bootstrap='main2-gallery'
        className='as-navtuck dd-header'
      >
        <div className='rf-dcm-gallery' data-analytics-section='gallery'>
          <div
            className='rc-inline-gallery'
            role='group'
            aria-label='Gallery'
            ref={ref}
          >
            <Suspense>
              <DotNav
                handleDotClick={handleDotClick}
                length={items.length}
                current={-slide / step}
              />
            </Suspense>

            <div
              id='6c145670-e40e-11ec-933f-27ac4d87258a'
              data-core-gallery='true'
              data-core-gallery-fade='false'
              className='rc-gallery-container'
            >
              <div
                data-core-gallery-scroller='true'
                style={{
                  transform: 'translateX(0px)',
                  width: `${width}%`,
                  left: `${slide}%`,
                  transition: 'none 0s ease 0s',
                }}
              >
                <div
                  id='6c145670-e40e-11ec-933f-27ac4d87258a-gallery-item-0'
                  data-core-gallery-item='true'
                  aria-hidden='false'
                  className='rs-dcm-gallery-item rc-inline-gallery-item'
                  role='tabpanel'
                  aria-label='Shop the latest bands'
                >
                  <div>
                    <div>
                      <div>
                        <div className='dd-acc-header dd-fill-tertiary'>
                          <div className='section-content'>
                            <div className='row'>
                              <div className='column large-4 small-12'>
                                <div className='dd-info'>
                                  <h2 className='t-headline dd-compact-right-large-17 dd-compact-small-15'>
                                    {/* {eyebrow && <p className='t-eyebrow'>New</p>} */}
                                    Proud. All&nbsp;year long.
                                    {/* {subtitle && (
                                      <p className='t-intro'>
                                        Snap on a case, wallet, wireless
                                        charger, or battery pack.
                                      </p>
                                    )} */}
                                  </h2>
                                  <p className='t-intro'>
                                    <StyledLink
                                      link={{
                                        href: '/shop/watch/bands',
                                        text: 'Shop the latest bands',
                                      }}
                                    />
                                  </p>
                                </div>
                              </div>
                              <div className='column large-8 small-12'>
                                <div className='dd-background'>
                                  <Image
                                    src='/images/shop/accessories/page/gallery/apple-watch-bands-pride-202205_FMT_WHH.jpeg'
                                    alt=''
                                    layout='fill'
                                    objectFit='cover'
                                    data-scale-params-1='wid=736&amp;hei=440&amp;fmt=jpeg&amp;qlt=95&amp;.v=1651693856352'
                                    data-scale-initial='2'
                                    className='dd-hero ir'
                                    priority
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id='6c145670-e40e-11ec-933f-27ac4d87258a-gallery-item-1'
                  data-core-gallery-item='true'
                  aria-hidden='true'
                  className='rs-dcm-gallery-item rc-inline-gallery-item'
                  role='tabpanel'
                  aria-label='Shop MagSafe'
                >
                  <div>
                    <div>
                      <div>
                        <div className='dd-acc-header dd-fill-tertiary'>
                          <div className='section-content'>
                            <div className='row'>
                              <div className='column large-4 small-12'>
                                <div className='dd-info'>
                                  <h2 className='t-headline'>
                                    Mix. Match. MagSafe.
                                  </h2>
                                  <p className='t-intro'>
                                    Snap on a case, wallet, wireless charger, or
                                    battery pack.
                                  </p>
                                  <p className='t-intro'>
                                    <Link href='/shop/accessories/all/magsafe'>
                                      <a
                                        data-slot-name='main2'
                                        data-feature-name='Astro Link'
                                        data-display-name='AOS: home/shop_accessories/all_accessories/magsafe'
                                        className='more'
                                        data-tabindex=''
                                        tabIndex='-1'
                                        aria-disabled='true'
                                      >
                                        Shop MagSafe
                                      </a>
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className='column large-8 small-12'>
                                <div className='dd-background'>
                                  <Image
                                    src='/images/shop/accessories/page/gallery/magsafe-202203_FMT_WHH.jpeg'
                                    alt=''
                                    layout='fill'
                                    objectFit='cover'
                                    data-scale-params-1='wid=736&amp;hei=440&amp;fmt=jpeg&amp;qlt=95&amp;.v=1651693856352'
                                    data-scale-initial='2'
                                    className='dd-hero ir'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id='6c145670-e40e-11ec-933f-27ac4d87258a-gallery-item-2'
                  data-core-gallery-item='true'
                  aria-hidden='true'
                  className='rs-dcm-gallery-item rc-inline-gallery-item'
                  role='tabpanel'
                  aria-label='Buy AirPods'
                >
                  <div>
                    <div>
                      <div>
                        <div className='dd-acc-header dd-fill-backgroundfooter'>
                          <div className='section-content'>
                            <div className='row'>
                              <div className='column large-4 small-12'>
                                <div className='dd-info dd-fill-backgroundfooter'>
                                  <p className='t-eyebrow'>New</p>
                                  <h2 className='t-headline'>
                                    It’s magic, remastered.
                                  </h2>
                                  <p className='t-intro'>
                                    Spatial audio with dynamic head tracking in
                                    an all-new design.
                                  </p>
                                  <p className='t-intro'>
                                    <Link href='/shop/product/MME73AM/A/airpods-3rd-generation'>
                                      <a
                                        data-slot-name='main2'
                                        data-feature-name='Astro Link'
                                        data-display-name='AOS: '
                                        data-part-number='APPLE_AIRPODS_3GEN_WITH_MAGSAFE_MAIN-1000147220'
                                        className='more'
                                        data-tabindex=''
                                        tabIndex='-1'
                                        aria-disabled='true'
                                      >
                                        Buy AirPods
                                      </a>
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className='column large-7 small-12'>
                                <div className='dd-background'>
                                  <Image
                                    src='/images/shop/accessories/page/gallery/airpods-header-accessories-202110_FMT_WHH.jpeg'
                                    alt=''
                                    layout='fill'
                                    objectFit='cover'
                                    data-scale-params-1='wid=736&amp;hei=440&amp;fmt=jpeg&amp;qlt=95&amp;.v=1651693856352'
                                    data-scale-initial='2'
                                    className='dd-hero ir'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PaddleNav
              disablePrevious={slide === 0}
              disableNext={slide === -width + step}
              handleArrowClick={handleArrowClick}
              parentClass='rc-inline-gallery'
            />
          </div>
        </div>
      </div>

      <style global jsx>{`
        .as-navtuck {
          margin-top: -97px;
          display: inline-block;
          vertical-align: bottom;
          width: 100%;
        }

        .as-navtuck .section-content,
        .dd-acc-header .dd-background,
        .dd-acc-header .dd-info,
        .rc-inline-gallery {
          position: relative;
        }

        .dd-fill-tertiary {
          background-color: #f5f5f7;
        }
        .dd-fill-backgroundfooter {
          background-color: #f2f2f2;
        }

        /* section-content */
        .as-navtuck .section-content::after,
        .as-navtuck .section-content::before {
          content: ' ';
          display: table;
        }
        .as-navtuck .section-content::after {
          clear: both;
        }

        .dd-acc-header .column:first-child {
          display: flex;
          align-items: center;
        }

        .dd-acc-header .dd-info {
          z-index: 2;
          margin-top: 97px;
          padding: 30px 0;
        }

        .t-eyebrow {
          font-size: 24px;
          line-height: 1.16667;
          font-weight: 600;
          letter-spacing: 0.009em;
          font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
            Helvetica, Arial, sans-serif;
          display: block;
          margin-bottom: 0.4em;
        }
        .dd-acc-header .t-eyebrow {
          color: #bf4800;
        }
        [class*='t-eyebrow'] + * {
          margin-top: 0;
        }

        /* t-intro */
        .t-intro {
          font-size: 21px;
          line-height: 1.381;
          font-weight: 400;
          letter-spacing: 0.011em;
          font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
            Helvetica, Arial, sans-serif;
        }
        .t-headline + .t-intro {
          margin-top: 1.2em;
        }
        .dd-acc-header .t-headline + .t-intro {
          margin-top: 0.8em;
        }

        .dd-acc-header .column:last-child {
          display: flex;
          align-items: flex-end;
          height: 440px;
        }

        .dd-acc-header .dd-background {
          z-index: 1;
          margin-left: -160px;
          height: 440px;
          width: 736px;
          position: absolute;
        }

        .dd-hero {
          vertical-align: bottom;
          position: absolute;
        }

        /* desktop */
        @media only screen and (min-width: 1069px) {
          .t-headline {
            font-size: 48px;
            line-height: 1.08349;
            letter-spacing: -0.003em;
          }

          .dd-compact-right-large-17 {
            margin-right: 16%;
          }
        }
        /* tablet */
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .t-headline {
            font-size: 40px;
            line-height: 1.1;
            letter-spacing: 0;
          }

          .dd-compact-right-large-17 {
            margin-right: 0%;
          }
        }
        /* mobile */
        @media only screen and (max-width: 734px) {
          .rs-dcm-gallery-item {
            background-color: transparent;
            border: none;
          }

          .dd-acc-header .row {
            height: 540px;
          }

          .dd-acc-header .column:first-child {
            align-items: normal;
          }

          .dd-acc-header .dd-info {
            text-align: center;
            max-width: 328px;
            margin-left: auto;
            margin-right: auto;
          }

          .dd-compact-small-15 {
            margin-left: 15% !important;
            margin-right: 15% !important;
          }

          .t-headline {
            font-size: 32px;
            line-height: 1.125;
            letter-spacing: 0.004em;
          }

          .t-intro {
            font-size: 19px;
            line-height: 1.4211;
            letter-spacing: 0.012em;
          }

          .dd-acc-header .column:last-child {
            justify-content: center;
            height: auto;
          }

          .dd-acc-header .dd-background {
            margin-left: auto;
            margin-top: -261px;
          }

          .dd-hero {
            position: relative;
          }
        }
      `}</style>
      <style global jsx>{`
        /* PaddleNav */
        .as-navtuck .paddlenav-arrow {
          margin-top: 0.47rem;
        }

        /* DotNav */
        .as-navtuck .dotnav {
          position: absolute;
          bottom: 18px;
          left: 0;
          right: 0;
          margin: auto;
          list-style: none;
          display: inline-block;
          z-index: 1;
        }
        .as-navtuck .rf-dcm-gallery .dotnav {
          bottom: -31px;
          z-index: 2;
        }
      `}</style>
    </>
  )
}
