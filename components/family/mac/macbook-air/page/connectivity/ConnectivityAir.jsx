import { useWhileInView, useAnimation } from '@/components/hooks/useScroll'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ConnectivityAir() {
  const whileInView = useWhileInView('.section-connectivity .section-headline')

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <article
        className='section section-connectivity'
        aria-label='Connectivity Article'
        data-anim-scroll-group='Section - Connectivity'
        data-analytics-section-engagement='name:connectivity'
      >
        <div className='section-content'>
          <div className='small-10 small-offset-1'>
            <h2 className='typography-section-eyebrow section-eyebrow'>
              Connectivity
            </h2>
            <div className='typography-headline-standalone section-headline'>
              <p
                className='headline-gradient'
                data-anim-keyframe='{"start":"t - 80vh", "end":"t - 10vh", "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"]}'
                style={{
                  '--gradient-position': `${useAnimation(
                    [140, -40],
                    [0, 1],
                    whileInView
                  )}%`,
                }}
              >
                Keep plugging away.
              </p>
            </div>
            <div className='typography-section-copy section-copy large-centered large-8 medium-10 small-12'>
              <p>
                The quick-release MagSafe power connector easily attaches — and
                detaches — with magnets, preventing any unintended flights. Two
                Thunderbolt&nbsp;ports let you connect and power high-speed
                accessories. You can also connect up to a 6K display. And the
                headphone jack supports high‑impedance headphones.
              </p>
            </div>
          </div>
          <div className='hardware-wrap' data-component-list='AnimatePins'>
            <div className='hardware hardware-headphone-side'>
              <div className='picture-wrap'>
                <picture
                  id='overview-connectivity-connectivity-1-1'
                  className='overview-connectivity-connectivity-1 picture-headphone-side picture-hardware loaded js-will-change'
                  data-lazy=''
                  data-aos='fade-right'
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='1000'
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_1__ee848h4p06y6_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_1__ee848h4p06y6_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_1__ee848h4p06y6_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_1__ee848h4p06y6_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_1__ee848h4p06y6_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_1__ee848h4p06y6_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_1__ee848h4p06y6_large.jpg'
                    alt=''
                  />
                </picture>
                <div
                  className='smart-pin pin-wrapper'
                  data-aos='fade-down'
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='1000'
                >
                  <div className='pin pin-headphone'>
                    <span className='pin-caption typography-pin-caption'>
                      3.5 mm headphone&nbsp;jack
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hardware hardware-magsafe-side'>
              <div className='picture-wrap'>
                <picture
                  id='overview-connectivity-connectivity-2-1'
                  className='overview-connectivity-connectivity-2 picture-magsafe-side picture-hardware loaded js-will-change'
                  data-lazy=''
                  data-aos='fade-left'
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='1000'
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_2__f7k40a39fm2q_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_2__f7k40a39fm2q_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_2__f7k40a39fm2q_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_2__f7k40a39fm2q_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_2__f7k40a39fm2q_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_2__f7k40a39fm2q_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/connectivity/connectivity_2__f7k40a39fm2q_large.jpg'
                    alt=''
                  />
                </picture>
                <div
                  className='smart-pin pin-wrapper'
                  data-aos='fade-up'
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='1000'
                >
                  <div
                    className='pin pin-magsafe'
                    //style='--pin-scroll-scale:1;'
                  >
                    <span
                      className='pin-caption typography-pin-caption'
                      //   style='opacity: 1;'
                    >
                      MagSafe
                    </span>
                  </div>
                  <div
                    className='pin pin-thunderbolt'
                    // style='--pin-scroll-scale:1;'
                  >
                    <span
                      className='pin-prongs'
                      //   style='--pin-prong-base-scroll-scale:1; --pin-prong-scroll-scale:1;'
                    ></span>
                    <span
                      className='pin-caption typography-pin-caption'
                      //   style='opacity: 1;'
                    >
                      Two Thunderbolt ports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <style global jsx>{`
        .section-connectivity {
          --tween-offset-start: 0px;
          --tween-offset-end: 0px;
          --tween-line-offset-start: calc(-5vh + 20px);
          --tween-line-offset-end: 5vh;
          padding-top: 120px;
          overflow-x: hidden;
        }

        .section-connectivity .hardware-wrap {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .section-connectivity .hardware-wrap .hardware {
          width: 50%;
          overflow: visible;
          position: relative;
        }
        .section-connectivity .hardware-wrap .hardware-headphone-side {
          direction: rtl;
        }

        /* picture-wrap */
        .section-connectivity .hardware-wrap .picture-wrap {
          position: relative;
        }
        .section-connectivity .hardware-wrap .hardware-headphone-side * {
          direction: ltr;
        }
        .section-connectivity
          .hardware-wrap
          .hardware-headphone-side
          .picture-wrap,
        .section-connectivity
          .hardware-wrap
          .hardware-headphone-side
          .picture-wrap
          picture {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-connectivity .hardware-wrap .hardware .pin-headphone {
          --smart-pin-pos-x: 914px;
          --smart-pin-pos-y: -100px;
          --smart-pin-length: var(--pin-length);
          top: 0;
          bottom: 0;
          padding-top: 19.00048px;
          left: var(--smart-pin-pos-x);
          transform: translateY(var(--smart-pin-pos-y));
          bottom: var(--smart-pin-length);
        }
        body .section-connectivity .hardware-wrap .hardware .pin {
          --pin-scroll-scale: 1;
          opacity: 1;
        }

        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-headphone
          .pin-caption {
          padding: 0 0 6px;
        }

        .section-connectivity
          .hardware-wrap
          .hardware-magsafe-side
          .picture-wrap,
        .section-connectivity
          .hardware-wrap
          .hardware-magsafe-side
          .picture-wrap
          picture {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-magsafe
          .pin-caption {
          width: 110px;
          margin-left: -55px;
        }

        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs {
          --pin-prong-base-scroll-scale: 1;
          --pin-prong-scroll-scale: 1;
          --prong-width: 92px;
          width: var(--prong-width);
          height: 1px;
          top: 0;
          left: calc(var(--prong-width) / 2 * -1);
          transform: translateY(-50%) scaleX(var(--pin-prong-base-scroll-scale));
        }
        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs,
        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs:after,
        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs:before {
          background-color: #d2d2d7;
          position: absolute;
        }
        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs {
          --pin-prong-base-scroll-scale: 1;
          --pin-prong-scroll-scale: 1;
        }

        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs:before {
          left: 0;
        }
        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs:after {
          right: 0;
        }
        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs:after,
        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-prongs:before {
          content: '';
          width: 1px;
          height: var(--prong-height);
          bottom: 0;
          transform: scaleY(var(--pin-prong-scroll-scale));
          transform-origin: bottom;
        }

        .section-connectivity
          .hardware-wrap
          .hardware
          .pin-thunderbolt
          .pin-caption {
          padding: 6px 0 0;
        }
        @media only screen and (min-width: 1068px) {
          .section-connectivity.section {
            padding-bottom: 218px;
          }

          .section-connectivity .hardware-wrap {
            padding-top: 96px;
          }

          .section-connectivity .hardware-wrap .hardware {
            --pin-length: 2px;
          }

          .section-connectivity
            .hardware-wrap
            .hardware-headphone-side
            .picture-wrap,
          .section-connectivity
            .hardware-wrap
            .hardware-headphone-side
            .picture-wrap
            picture {
            --p-width: 1332px;
            --p-height: 80px;
          }
          .section-connectivity
            .hardware-wrap
            .hardware-headphone-side
            .picture-wrap {
            margin: 208px 34px 0;
          }

          .section-connectivity
            .hardware-wrap
            .hardware-magsafe-side
            .picture-wrap {
            margin: 0 0 0 44px;
          }

          .section-connectivity
            .hardware-wrap
            .hardware-magsafe-side
            .picture-wrap,
          .section-connectivity
            .hardware-wrap
            .hardware-magsafe-side
            .picture-wrap
            picture {
            --p-width: 1332px;
            --p-height: 80px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-connectivity.section {
            padding-bottom: 200px;
          }

          .section-connectivity .hardware-wrap {
            padding-top: 100px;
          }

          .section-connectivity .hardware-wrap .hardware {
            --pin-length: -20px;
          }

          .section-connectivity
            .hardware-wrap
            .hardware-headphone-side
            .picture-wrap,
          .section-connectivity
            .hardware-wrap
            .hardware-headphone-side
            .picture-wrap
            picture {
            --p-width: 1024px;
            --p-height: 62px;
          }
          .section-connectivity
            .hardware-wrap
            .hardware-headphone-side
            .picture-wrap {
            margin: 155px 58px 0;
          }

          .section-connectivity .hardware-wrap .hardware .pin-headphone,
          .section-connectivity .hardware-wrap .hardware .pin-headphone:after {
            width: 1px;
          }

          /* .pin-caption */
          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-headphone
            .pin-caption {
            margin-left: -100px;
            position: absolute;
            left: 0;
            width: 200px;
            text-align: center;
            z-index: 1;
          }
          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-headphone
            .pin-caption {
            bottom: 100%;
            margin-bottom: -16.00048px;
          }
          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-headphone
            .pin-caption {
            padding: 0 0 6px;
          }

          .section-connectivity .hardware-wrap .hardware .pin-headphone:after {
            height: 100%;
          }

          .section-connectivity
            .hardware-wrap
            .hardware-magsafe-side
            .picture-wrap {
            margin: 0 0 0 -2px;
          }

          .section-connectivity
            .hardware-wrap
            .hardware-magsafe-side
            .picture-wrap,
          .section-connectivity
            .hardware-wrap
            .hardware-magsafe-side
            .picture-wrap
            picture {
            --p-width: 1024px;
            --p-height: 62px;
          }

          .section-connectivity .hardware-wrap .hardware .pin-magsafe {
            --smart-pin-pos-x: 115px;
            --smart-pin-pos-y: 93px;
            --smart-pin-length: var(--pin-length);
            top: 0;
            bottom: 0;
            padding-bottom: 19.00048px;
            left: var(--smart-pin-pos-x);
            transform: translateY(var(--smart-pin-pos-y));
            top: var(--smart-pin-length);
          }
          .section-connectivity .hardware-wrap .hardware .pin-magsafe,
          .section-connectivity .hardware-wrap .hardware .pin-magsafe:after {
            width: 1px;
          }

          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-magsafe
            .pin-caption {
            position: absolute;
            left: 0;
            text-align: center;
            z-index: 1;
          }
          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-magsafe
            .pin-caption {
            top: 100%;
            margin-top: -16.00048px;
          }
          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-magsafe
            .pin-caption {
            padding: 6px 0 0;
          }
          .section-connectivity .hardware-wrap .hardware .pin-magsafe:after {
            height: 100%;
          }

          /* pin-thunderbolt */
          .section-connectivity .hardware-wrap .hardware .pin-thunderbolt {
            --height-offset: 0px;
            --prong-height: 20px;
            --adjusted-pin-height: calc(
              var(--pin-length) + var(--prong-height) - var(--height-offset)
            );
          }
          .section-connectivity .hardware-wrap .hardware .pin-thunderbolt {
            --smart-pin-pos-x: 234px;
            --smart-pin-pos-y: 93px;
            --smart-pin-length: var(--adjusted-pin-height);
            bottom: 0;
            padding-bottom: 19.00048px;
            left: var(--smart-pin-pos-x);
            transform: translateY(var(--smart-pin-pos-y));
            top: var(--smart-pin-length);
          }
          .section-connectivity .hardware-wrap .hardware .pin-thunderbolt,
          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-thunderbolt:after {
            width: 1px;
          }

          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-thunderbolt
            .pin-prongs {
            --prong-width: 72px;
          }

          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-thunderbolt
            .pin-caption {
            margin-left: -100px;
            position: absolute;
            left: 0;
            width: 200px;
            text-align: center;
            z-index: 1;
          }
          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-thunderbolt
            .pin-caption {
            top: 100%;
            margin-top: -16.00048px;
          }
          .section-connectivity
            .hardware-wrap
            .hardware
            .pin-thunderbolt
            .pin-caption {
            width: 110px;
            margin-left: -55px;
          }
        }
        @media only screen and (min-width: 734px) {
          .section-connectivity .section-content {
            text-align: center;
          }

          .section-connectivity .section-headline {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
