import { useWhileInView, useKeyframe } from '@/components/hooks/useScroll'

export default function DisplayAir() {
  const keyframe = useKeyframe('.section-display .section-headline')
  return (
    <>
      <article
        className='section section-display'
        aria-label='Display Article'
        data-anim-scroll-group='Section - Display'
        data-analytics-section-engagement='name:display'
      >
        <div className='section-content'>
          <div className='small-10 small-offset-1'>
            <h2 className='typography-section-eyebrow section-eyebrow'>
              Liquid Retina display
            </h2>
            <div className='typography-headline-standalone section-headline'>
              <p
                className='headline-gradient'
                data-anim-keyframe='{"start":"t - 80vh", "end":"t - 10vh", "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"]}'
                style={{
                  '--gradient-position': `${useWhileInView(
                    [140, -40],
                    keyframe
                  )}%`,
                }}
              >
                To be clear, it’s gorgeous.
              </p>
            </div>
            <div className='masked-lockup'>
              <picture
                id='overview-display-display-hw-1'
                className='overview-display-display-hw masked-image-hardware loaded'
                data-lazy=''
                data-picture-loaded=''
              >
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_hw__fgrzs4i9aaum_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_hw__fgrzs4i9aaum_small_2x.jpg 2x'
                  media='(max-width:734px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_hw__fgrzs4i9aaum_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_hw__fgrzs4i9aaum_medium_2x.jpg 2x'
                  media='(max-width:1068px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_hw__fgrzs4i9aaum_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_hw__fgrzs4i9aaum_large_2x.jpg 2x'
                  media='(min-width:0px)'
                />
                <img
                  src='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_hw__fgrzs4i9aaum_large.jpg'
                  alt=''
                />
              </picture>
              <figure
                className='masked-lockup-figure fadein'
                data-anim-keyframe='{"start": "t - 80vh", "cssClass": "fadein", "disabledWhen": "no-enhance-xp"}'
              >
                <div className='masked-lockup-media'>
                  <picture
                    id='overview-display-display-screen-1'
                    className='overview-display-display-screen fallback-image loaded'
                    data-lazy=''
                    data-picture-loaded=''
                  >
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_screen__gao00g1nd3u6_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_screen__gao00g1nd3u6_small_2x.jpg 2x'
                      media='(max-width:734px)'
                    />
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_screen__gao00g1nd3u6_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_screen__gao00g1nd3u6_medium_2x.jpg 2x'
                      media='(max-width:1068px)'
                    />
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_screen__gao00g1nd3u6_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_screen__gao00g1nd3u6_large_2x.jpg 2x'
                      media='(min-width:0px)'
                    />
                    <img
                      src='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/display_screen__gao00g1nd3u6_large.jpg'
                      alt=''
                    />
                  </picture>
                </div>
              </figure>
            </div>
            <div className='typography-section-copy section-copy display-copy large-9 large-centered medium-10 small-12'>
              <p>
                The breathtaking 13.6-inch Liquid&nbsp;Retina display is the
                biggest — and brightest — ever on MacBook&nbsp;Air, with support
                for 1 billion colors. Text is supercrisp, and photos and movies
                more brilliant and vivid, with rich contrast and
                sharp&nbsp;detail.
              </p>
            </div>
            <div className='display-tout-row row large-justify-content-spacebetween large-centered'>
              <div className='tout column'>
                <picture
                  id='overview-display-icon-brightness-1'
                  className='overview-display-icon-brightness tout-icon loaded'
                  data-lazy=''
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_brightness__e9m43zicn1qy_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_brightness__e9m43zicn1qy_large_2x.png 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_brightness__e9m43zicn1qy_large.png'
                    alt=''
                  />
                </picture>
                <p className='typography-section-touts'>
                  500 nits of brightness
                </p>
              </div>
              <div className='tout column'>
                <picture
                  id='overview-display-icon-color-1'
                  className='overview-display-icon-color tout-icon loaded'
                  data-lazy=''
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_color__bmzcl918ihqu_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_color__bmzcl918ihqu_large_2x.png 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_color__bmzcl918ihqu_large.png'
                    alt=''
                  />
                </picture>
                <p className='typography-section-touts'>P3&nbsp;wide color</p>
              </div>
              <div className='tout column'>
                <picture
                  id='overview-display-icon-truetone-1'
                  className='overview-display-icon-truetone tout-icon loaded'
                  data-lazy=''
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_truetone__9k3mbew1zk2y_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_truetone__9k3mbew1zk2y_large_2x.png 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/display/icon_truetone__9k3mbew1zk2y_large.png'
                    alt=''
                  />
                </picture>
                <p className='typography-section-touts'>True Tone technology</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <style global jsx>{`
        .section-display {
          margin-top: 140px;
          overflow: hidden;
        }

        .section-headline {
          margin-top: 18px;
        }
        .section-display .section-headline {
          max-width: 6em;
        }

        .masked-lockup {
          align-items: center;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .section-display .overview-display-display-hw,
        .section-display .masked-lockup-media {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .masked-lockup-figure {
          position: absolute;
        }

        .section-display .masked-lockup-media {
          -webkit-mask-size: contain;
          -webkit-mask-position: center;
        }

        .section-display .display-tout-row {
          margin-bottom: 80px;
          justify-content: space-between;
        }

        .section-display .display-tout-row .tout {
          max-width: 145px;
        }

        .section-display .overview-display-icon-brightness,
        .section-display .overview-display-icon-color,
        .section-display .overview-display-icon-truetone {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          --p-width: 44px;
          --p-height: 44px;
        }

        .typography-section-touts {
          font-size: 24px;
          line-height: 1.1666666667;
          font-weight: 600;
          letter-spacing: 0.009em;
          font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }
        @media only screen and (min-width: 1068px) {
          .masked-lockup {
            margin-bottom: 70px;
            margin-top: 80px;
          }

          .section-display .overview-display-display-hw {
            --p-width: 940px;
            --p-height: 570px;
          }

          .masked-lockup-figure {
            top: 17px;
          }

          .section-display .masked-lockup-media {
            --p-width: 750px;
            --p-height: 488px;
          }

          .section-display .display-tout-row {
            margin-top: 50px;
            max-width: 530px;
          }

          .section-display .display-tout-row .tout .tout-icon {
            margin: 0 auto 8px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .masked-lockup {
            margin-bottom: 62px;
            margin-top: 70px;
          }
          .section-display .masked-lockup {
            margin-bottom: 67px;
          }

          .section-display .overview-display-display-hw {
            --p-width: 696px;
            --p-height: 422px;
          }

          .masked-lockup-figure {
            top: 14px;
          }

          .section-display .masked-lockup-media {
            --p-width: 555px;
            --p-height: 361px;
          }

          .section-display .display-tout-row {
            margin-top: 46px;
            max-width: 500px;
          }

          .section-display .display-tout-row .tout .tout-icon {
            margin: 0 auto 25px;
          }
        }
        @media only screen and (min-width: 734px) {
          .section-display .section-eyebrow,
          .section-display .display-copy,
          .section-display .display-tout-row .tout {
            text-align: center;
          }

          .section-display .section-headline {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
