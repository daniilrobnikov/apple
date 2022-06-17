import { useEffect } from 'react'
import StyledLink from '@/components/templates/layout/styled/StyledLink'
import AOS from 'aos'
import 'aos/dist/aos.css'

import MBALogo from './MBALogo'

export default function HeroStatic() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <div className='hero-static'>
        <MBALogo />
        <div className='section-content intro-text'>
          <header>
            <h2
              className='typography-headline-reduced text-fade-in'
              //   style='opacity: 0;'
              data-aos='fade-up'
              data-aos-easing='ease-out-sine'
              data-aos-duration='1000'
            >
              MacBook Air
            </h2>
            <p
              className='typography-headline-standalone subhead text-fade-in'
              data-aos='fade-up'
              data-aos-easing='ease-out-sine'
              data-aos-duration='1000'
              //   style='opacity: 0;'
            >
              Don’t take it&nbsp;lightly.
            </p>
            <div
              className='chip-wrapper text-fade-in'
              data-aos='fade-up'
              data-aos-easing='ease-out-sine'
              data-aos-duration='1000'
              // style='opacity: 0;'
            >
              <p
                className='typography-headline-reduced'
                role='text'
                aria-label='Supercharged by the M2 Chip'
              >
                Supercharged by
              </p>
              <picture
                id='overview-hero-icon-m2-1'
                className='overview-hero-icon-m2 chip loaded'
                data-lazy=''
                data-picture-loaded=''
              >
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/icon_m2__emqzosmjwvue_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/icon_m2__emqzosmjwvue_small_2x.png 2x'
                  media='(max-width:734px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/icon_m2__emqzosmjwvue_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/icon_m2__emqzosmjwvue_medium_2x.png 2x'
                  media='(max-width:1068px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/icon_m2__emqzosmjwvue_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/icon_m2__emqzosmjwvue_large_2x.png 2x'
                  media='(min-width:0px)'
                />
                <img
                  src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/icon_m2__emqzosmjwvue_large.png'
                  alt=''
                />
              </picture>
            </div>
          </header>
          <div
            className='links-wrapper text-fade-in-w-parallax'
            data-vo=''
            data-ax-attribute='opacity'
            data-ax-attribute-end=''
            tabIndex='-1'
            data-aos='fade-up'
            data-aos-easing='ease-out-sine'
            data-aos-duration='1000'
            // style='transform: matrix(1, 0, 0, 1, 0, 20); opacity: 0;'
          >
            <p className='typography-hero-copy hero-pricing has-dynamic-content'>
              <span
                data-pricing-product='macbook-air-m2'
                data-product-template='${price.display.from}'
                data-pricing-loaded=''
              >
                From $1199
              </span>
            </p>
            <p className='typography-hero-copy availability'>
              Available next month
            </p>
            <ul className='cta-wrapper links-inline'>
              <li className='typography-hero-copy'>
                <StyledLink
                  link={{
                    href: 'https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/films/product/macbook-air-m2-product-tpl-us-2022_16x9.m3u8',
                    text: 'Watch the film',
                  }}
                />

                {/* // <a
                //   href='/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/films/product/macbook-air-m2-product-tpl-us-2022_16x9.m3u8'
                //   data-analytics-intrapage-link=''
                //   aria-label='Watch the film for Macbook Air M2'
                //   id='film-macbook-air-m2'
                //   className='icon-wrapper'
                //   data-films-modal-link=''
                //   role='button'
                //   data-analytics-id='film-macbook-air-m2'
                // >
                //   <span className='icon-copy'>Watch the film</span>
                //   <span className='icon icon-after icon icon-playcircle'></span>
                // </a> */}
              </li>
              <li className='typography-hero-copy'>
                <StyledLink
                  link={{
                    href: '/apple-events',
                    text: 'Watch the event',
                    styles: 'icon-playcircle',
                  }}
                />
                {/* <a
                  href='/apple-events/'
                  data-analytics-title='watch the event'
                  aria-label='Watch the WWDC 2022 event'
                  className='icon-wrapper'
                >
                  <span className='icon-copy'>Watch the event</span>
                  <span className='icon icon-after more'></span>
                </a> */}
              </li>
              {/* <li className='typography-hero-copy ar-quicklook-link'>
                <span className='ar-link'>
                  <a
                    rel='ar'
                    href='/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/ar/macbook_air_m2_chip_silver_ios15.usdz'
                    data-analytics-title='view macbook air m2 in ar'
                    data-analytics-click='prop3:view macbook air m2 in ar'
                    aria-label='View MacBook Air M2 in augmented reality'
                    data-analytics-intrapage-link=''
                  >
                    <img src='https://www.apple.com/v/macbook-air-m2/b/images/overview/routers/quicklook_placeholder__b92n95g5llci_large.jpg' />
                    <span>View in AR</span>
                  </a>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .section-hero .hero-static {
          margin-top: -200vh;
        }

        .section-hero .hero-static {
          --mba-wrapper-padding-top: 200px;
          --mba-wrapper-padding-bottom: 140px;
          --mba-column-width: 8px;
          --mba-rotation: -45deg;
          --mba-chevron-padding: 80px;
          --mba-separation: 0%;
          --mba-separation-start: 20;
          --mba-separation-end: 0;
          --chevron-sticky-wrapper-height: 140vh;
          text-align: center;
        }

        /* intro-text */
        .section-hero .hero-static .intro-text {
          --spacing: 50px;
          margin-top: calc(
            -50vh + var(--r-localnav-stacked-height) / 2 + var(
                --mba-chevron-height
              ) / 2 + var(--mba-chevron-padding) + var(--spacing)
          );
        }
        .section-hero .hero-static .intro-text {
          --spacing: 130px;
          --viewport-height: -878px;
          margin-top: calc(
            var(--viewport-height) + var(--mba-chevron-height) +
              var(--mba-chevron-padding) + var(--spacing)
          );
        }
        .section-hero .hero-static .intro-text {
          --spacing: 137px;
        }

        .section-hero .hero-static .intro-text header .subhead {
          --margin-top: 18px;
          --max-width: 400px;
          margin-top: var(--margin-top);
        }

        .section-hero .hero-static .intro-text header .chip-wrapper {
          --margin-top: 34px;
          margin-top: var(--margin-top);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .section-hero .hero-static .intro-text header .chip {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-hero .hero-static .intro-text .links-wrapper {
          padding-bottom: 40px;
        }
        .section-hero .hero-static .intro-text .links-wrapper .availability {
          color: #86868b;
        }

        @media only screen and (min-width: 1068px) {
          .section-hero .hero-static {
            --mba-chevron-height: 721px;
            --mba-gap: 107px;
            --mba-offset-x: 164px;
          }
          .section-hero .hero-static .intro-text header {
            margin-bottom: 128px;
          }

          .typography-headline-standalone {
            font-size: 96px;
            line-height: 1.0416666667;
            font-weight: 600;
            letter-spacing: -0.015em;
            font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
              Arial, sans-serif;
          }

          .section-hero .hero-static .intro-text header .chip {
            margin-top: 0;
            margin-left: 11px;
            --p-width: 60px;
            --p-height: 60px;
          }

          .typography-hero-copy {
            font-size: 24px;
            line-height: 1.1666666667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
              Arial, sans-serif;
          }
          .section-hero .hero-static .intro-text .links-wrapper .availability {
            margin-top: 10px;
          }

          .section-hero .hero-static .intro-text .links-wrapper .cta-wrapper {
            margin-top: 29px;
          }
        }

        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-hero .hero-static {
            --mba-chevron-height: 657px;
            --mba-gap: 98px;
            --mba-offset-x: 148px;
            --mba-chevron-gap-start: 220;
            --mba-chevron-gap-end: 98;
          }
          .section-hero .hero-static .intro-text header {
            margin-bottom: 82px;
          }

          .section-hero .hero-static .intro-text header .subhead {
            --margin-top: 14px;
            margin-left: auto;
            margin-right: auto;
            max-width: var(--max-width);
          }

          .typography-headline-standalone {
            font-size: 80px;
            line-height: 1.05;
            font-weight: 600;
            letter-spacing: -0.015em;
            font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
              Arial, sans-serif;
          }

          .section-hero .hero-static .intro-text header .chip-wrapper {
            margin-left: 0;
            flex-flow: column;
          }

          .section-hero .hero-static .intro-text header .chip {
            margin-left: 0;
            margin-top: 8px;
            --p-width: 50px;
            --p-height: 50px;
          }

          .typography-hero-copy {
            font-size: 21px;
            line-height: 1.1904761905;
            font-weight: 600;
            letter-spacing: 0.011em;
            font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
              Arial, sans-serif;
          }
          .section-hero .hero-static .intro-text .links-wrapper .availability {
            margin-top: 5px;
          }

          .section-hero .hero-static .intro-text .links-wrapper .cta-wrapper {
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  )
}
