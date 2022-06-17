import { useWhileInView, useAnimation } from '@/components/hooks/useScroll'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function KeyboadAir() {
  const whileInView = useWhileInView('.section-keyboard .section-headline')

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <article
        className='section section-keyboard'
        aria-label='Keyboard Article'
        data-anim-scroll-group='Section - Keyboard'
        data-analytics-section-engagement='name:magic keyboard'
      >
        <div className='section-content'>
          <div className='row'>
            <div className='keyboard-header large-centered small-10'>
              <h2 className='typography-section-eyebrow section-eyebrow'>
                Magic Keyboard
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
                  Let your fingers fly.
                </p>
              </div>
              <div className='typography-section-copy section-copy column large-centered large-9 medium-10 small-12 small-uncentered keyboard-copy'>
                <p>
                  Comfortable and quiet, Magic&nbsp;Keyboard now has a
                  full‑height function key row for quick access to favorite
                  controls and shortcuts. Touch&nbsp;ID makes it easy to unlock
                  your Mac, enter passwords, and make secure purchases or
                  payments — all at the touch of a finger. And with the larger
                  Force&nbsp;Touch trackpad, there’s even more space to work
                  with&nbsp;precision.
                </p>
              </div>
            </div>
          </div>
          <div className='row keyboard-wrapper'>
            <figure
              className='column large-7 small-12 keyboard-hero large-uncentered small-centered'
              role='presentation'
            >
              <figcaption
                role='img'
                aria-label='Magic Keyboard'
                className='visuallyhidden'
                data-component-list='AXFocusManager'
                data-vo=''
                data-ax-scroll-anchor='.keyboard-img'
                data-ax-attribute='.show'
                data-ax-offset='5vh'
                tabIndex='-1'
              >
                Magic Keyboard
              </figcaption>
              <picture
                id='overview-keyboard-magic-keyboard-1'
                className='overview-keyboard-magic-keyboard keyboard-img loaded'
                data-lazy=''
                data-anim-keyframe-1='{"start":"t - 100vh", "end":"t - css(--slide-end)", "x":[-50, 0], "easeFunction":"easeOutSin", "breakpointMask":"MLX", "disabledWhen":["no-enhance-xp"]}'
                data-anim-keyframe-2='{"start":"t - 80vh", "cssClass":"fadein", "breakpointMask":"S", "disabledWhen":["no-enhance-xp"]}'
                data-picture-loaded=''
                data-aos='fade-right'
                data-aos-easing='ease-out-sine'
                data-aos-duration='1000'
              >
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/keyboard/magic_keyboard__csw6rvvnci2q_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/keyboard/magic_keyboard__csw6rvvnci2q_small_2x.jpg 2x'
                  media='(max-width:734px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/keyboard/magic_keyboard__csw6rvvnci2q_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/keyboard/magic_keyboard__csw6rvvnci2q_medium_2x.jpg 2x'
                  media='(max-width:1068px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/keyboard/magic_keyboard__csw6rvvnci2q_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/keyboard/magic_keyboard__csw6rvvnci2q_large_2x.jpg 2x'
                  media='(min-width:0px)'
                />
                <img
                  src='https://www.apple.com/v/macbook-air-m2/b/images/overview/keyboard/magic_keyboard__csw6rvvnci2q_large.jpg'
                  alt=''
                />
              </picture>
            </figure>
            <div
              className='column large-4 small-10 features large-uncentered small-centered'
              data-aos='fade-left'
              data-aos-easing='ease-out-sine'
              data-aos-duration='1000'
            >
              <div className='smart-pin pin-wrapper'>
                <div
                  className='pin pin-horizontal pin-horizontal-left pin-touchid'
                  data-anim-keyframe='{"start":"a0t - 100vh", "end":"a0t - css(--slide-end)", "--pin-scroll-scale":[0,1], "anchors":[".overview-keyboard-magic-keyboard"], "disabledWhen":["no-enhance-xp"]}'
                >
                  <div className='feature feature-subhead pin-caption'>
                    <div className='feature-icon-wrapper subhead'>
                      <picture
                        id='overview-icons-icon-touchid-1'
                        className='overview-icons-icon-touchid feature-image feature-image-subhead loaded'
                        data-lazy=''
                        data-picture-loaded=''
                      >
                        <source
                          srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid__f5f0yevi07au_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid__f5f0yevi07au_medium_2x.png 2x'
                          media='(max-width:1068px)'
                        />
                        <source
                          srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid__f5f0yevi07au_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid__f5f0yevi07au_large_2x.png 2x'
                          media='(min-width:0px)'
                        />
                        <img
                          src='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid__f5f0yevi07au_large.png'
                          alt='Icon of a fingerprint'
                        />
                      </picture>
                    </div>
                    <p className='feature-copy feature-copy-subhead typography-keyboard-subhead feature-subhead'>
                      Touch ID
                    </p>
                  </div>
                </div>
              </div>
              <ul className='feature-list'>
                <li className='feature feature-lock-unlock'>
                  <div className='feature-icon-wrapper lock-unlock'>
                    <picture
                      id='overview-icons-icon-touchid-lock-1'
                      className='overview-icons-icon-touchid-lock feature-image feature-image-lock-unlock loaded'
                      data-lazy=''
                      data-picture-loaded=''
                    >
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_lock__8cpuaqedtuae_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_lock__8cpuaqedtuae_large_2x.png 2x'
                        media='(min-width:0px)'
                      />
                      <img
                        src='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_lock__8cpuaqedtuae_large.png'
                        alt='Icon of a lock'
                      />
                    </picture>
                  </div>
                  <p className='feature-copy feature-copy-lock-unlock'>
                    Unlock your&nbsp;Mac
                  </p>
                </li>
                <li className='feature feature-apple-pay'>
                  <div className='feature-icon-wrapper apple-pay'>
                    <picture
                      id='overview-icons-icon-touchid-applepay-1'
                      className='overview-icons-icon-touchid-applepay feature-image feature-image-apple-pay loaded'
                      data-lazy=''
                      data-picture-loaded=''
                    >
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_applepay__ctxmi5j8ygeq_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_applepay__ctxmi5j8ygeq_large_2x.png 2x'
                        media='(min-width:0px)'
                      />
                      <img
                        src='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_applepay__ctxmi5j8ygeq_large.png'
                        alt='Apple Pay Icon'
                      />
                    </picture>
                  </div>
                  <p className='feature-copy feature-copy-apple-pay'>
                    Use Apple Pay for payments
                  </p>
                </li>
                <li className='feature feature-password-protected'>
                  <div className='feature-icon-wrapper password-protected'>
                    <picture
                      id='overview-icons-icon-touchid-protected-1'
                      className='overview-icons-icon-touchid-protected feature-image feature-image-password-protected loaded'
                      data-lazy=''
                      data-picture-loaded=''
                    >
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_protected__b7824i7teq3m_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_protected__b7824i7teq3m_large_2x.png 2x'
                        media='(min-width:0px)'
                      />
                      <img
                        src='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_protected__b7824i7teq3m_large.png'
                        alt='Icon of a protected document'
                      />
                    </picture>
                  </div>
                  <p className='feature-copy feature-copy-password-protected'>
                    Open password-protected documents
                  </p>
                </li>
                <li className='feature feature-apple-tv'>
                  <div className='feature-icon-wrapper apple-tv'>
                    <picture
                      id='overview-icons-icon-touchid-appletv-1'
                      className='overview-icons-icon-touchid-appletv feature-image feature-image-apple-tv loaded'
                      data-lazy=''
                      data-picture-loaded=''
                    >
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_appletv__dtm64vxhpqye_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_appletv__dtm64vxhpqye_large_2x.png 2x'
                        media='(min-width:0px)'
                      />
                      <img
                        src='https://www.apple.com/v/macbook-air-m2/b/images/overview/icons/icon_touchid_appletv__dtm64vxhpqye_large.png'
                        alt='Apple TV Icon'
                      />
                    </picture>
                  </div>
                  <p className='feature-copy feature-copy-apple-tv'>
                    Make purchases on <br />
                    the Apple TV app
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <style global jsx>{`
        .section-keyboard {
          margin-top: 140px;
          margin-left: auto;
          margin-right: auto;
          overflow: hidden;
          --slide-end: 50vh;
        }

        .section-keyboard .keyboard-hero {
          display: flex;
          justify-content: flex-end;
        }

        .section-keyboard .overview-keyboard-magic-keyboard {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-keyboard .features {
          text-align: left;
          position: relative;
        }

        body .smart-pin {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }
        .section-keyboard .features .pin-wrapper {
          position: absolute;
          height: 100px;
        }

        .pin {
          display: flex;
        }
        .pin,
        .pin:before {
          box-sizing: border-box;
          position: absolute;
          z-index: 1;
        }
        .pin-horizontal {
          left: 0;
          right: 0;
        }
        .pin-horizontal,
        .pin-horizontal:after {
          height: 1px;
        }
        .pin-horizontal-left {
          flex-direction: row-reverse;
        }
        body .smart-pin .pin {
          opacity: 0;
        }
        .section-keyboard .features .pin {
          --pin-scroll-scale: 1;
          opacity: 1;
        }
        .section-keyboard .features .pin-wrapper .pin-touchid {
          opacity: 1;
        }
        .section-keyboard .features .pin {
          --pin-scroll-scale: 0;
        }

        /* feature */
        .pin .pin-caption {
          font-size: 17px;
          line-height: 1.2353641176;
          font-weight: 600;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }
        .pin .pin-caption {
          color: #6e6e73;
        }
        .pin-horizontal .pin-caption {
          margin-top: -0.6666866667em;
          max-width: 200px;
          white-space: nowrap;
        }
        .pin-horizontal-left .pin-caption {
          padding-left: 16px;
        }
        .pin-wrapper .pin-caption {
          color: #1d1d1f;
        }
        .section-keyboard .features .feature {
          display: flex;
          margin-bottom: 26px;
          justify-content: flex-start;
        }
        .section-keyboard .features .pin-wrapper .pin-touchid .pin-caption {
          position: absolute;
          margin-left: 60px;
        }

        .section-keyboard .features .feature .feature-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .section-keyboard .features .overview-icons-icon-touchid {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .typography-keyboard-subhead {
          font-size: 24px;
          line-height: 1.1666666667;
          font-weight: 600;
          letter-spacing: 0.009em;
          font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }
        .section-keyboard .features .feature .feature-copy {
          align-self: auto;
          max-width: 74%;
        }

        .pin:after,
        .pin:before {
          content: '';
          display: block;
          background-color: #d2d2d7;
        }
        .pin-horizontal:after {
          overflow: hidden;
          width: 100%;
        }

        .section-keyboard .features .feature-list {
          margin-left: 0;
          position: absolute;
        }
        @media only screen and (min-width: 1068px) {
          .section-keyboard .keyboard-hero {
            margin-top: 80px;
          }

          .section-keyboard .overview-keyboard-magic-keyboard {
            --p-width: 1134px;
            --p-height: 688px;
            margin-right: -11px;
          }

          .section-keyboard .features {
            margin-top: 154px;
            margin-left: 33px;
          }

          .section-keyboard .features .pin-wrapper {
            left: -95px;
            top: 18px;
            max-width: 94px;
          }

          .section-keyboard .features .pin-wrapper .pin-touchid .pin-caption {
            left: 38px;
            top: -11px;
          }

          .section-keyboard .features .feature .feature-icon-wrapper {
            flex-basis: 25%;
          }
          .section-keyboard .features .overview-icons-icon-touchid {
            --p-width: 42px;
            --p-height: 42px;
          }

          .section-keyboard .features .feature .feature-copy-subhead {
            margin-top: 6px;
            padding-left: 20px;
          }

          .section-keyboard .features .feature-list {
            top: 63px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-keyboard .keyboard-header .section-headline {
            max-width: 70%;
            margin-left: auto;
            margin-right: auto;
          }

          .section-keyboard .keyboard-hero {
            margin-top: 70px;
          }

          .section-keyboard .overview-keyboard-magic-keyboard {
            --p-width: 1134px;
            --p-height: 688px;
            margin-right: 20px;
          }

          .section-keyboard .features {
            margin-top: 145px;
            margin-left: 0;
          }

          .section-keyboard .features .pin-wrapper {
            top: 15px;
            left: -100px;
            max-width: 90px;
          }

          .section-keyboard .features .pin-wrapper .pin-touchid .pin-caption {
            left: 26px;
            top: -5px;
          }

          .section-keyboard .features .feature .feature-icon-wrapper {
            flex-basis: 17%;
          }
          .section-keyboard .features .overview-icons-icon-touchid {
            --p-width: 35px;
            --p-height: 35px;
          }

          .section-keyboard .features .feature .feature-copy {
            flex-basis: 100%;
            padding-left: 19px;
          }
          .section-keyboard .features .feature .feature-copy-subhead {
            margin-top: 7px;
            padding-left: 22px;
          }

          .section-keyboard .features .feature-list {
            top: 58px;
          }
        }

        @media only screen and (min-width: 734px) {
          .section-keyboard .section-eyebrow,
          .section-keyboard .keyboard-copy {
            text-align: center;
          }

          .section-keyboard .section-headline {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
