import { useRef } from 'react'
import {
  useStickyKeyframe,
  useStickyAnimation,
  useStickyVideo,
} from '@/components/hooks/useScroll'
import DesignAirGallery from './DesignAirGallery'
import DesignSubSection from './DesignSubSection'
import MBAFinishesSub from './MBAFinishesSub'

export default function DesignAir() {
  const videoEl = useRef(null)
  const keyframe = useStickyKeyframe('.design-hero-intro.sticky-container')
  useStickyVideo(videoEl, keyframe)

  const stitch = [0, 0.56, 0.7, 1]

  const heartBubble = {
    transform: `scale(${useStickyAnimation(
      [0, 1],
      [stitch[-2], stitch[-1]],
      keyframe,
      'easeInExpo'
    )})`,
  }
  return (
    <>
      <article
        className='section section-design'
        aria-label='Design Article'
        data-anim-scroll-group='Section - Design'
      >
        <div className='section-content-full'>
          <section
            className='subsection-design-hero video-scroll-container loaded'
            data-component-list='VideoScroll DesignHero'
            data-bubble-wrapper='.heart-bubble-wrapper'
            data-bubble-selector='[data-custom-primary-kf]'
            data-headline='.section-headline'
            data-headline-gradient='.headline-gradient'
            data-eyebrow='.section-eyebrow'
            data-anchors='[".subsection-design-hero", ".video-container", ".sticky-content", ".design-hero-overlay-outer"]'
            data-video-container='.video-container'
            data-analytics-section-engagement='name:design hero'
          >
            <div className='design-hero-intro sticky-container'>
              <div className='sticky-content'>
                <div className='design-media-container-clip sticky-container-alternate'>
                  <div className='design-media-container-outer design-media-alternate-clip sticky-content-alternate'>
                    <div className='hero-container-small design-media-container-alternate'>
                      <div className='design-media-container-inner'>
                        <div className='video-container enhanced-only'>
                          <video
                            ref={videoEl}
                            muted
                            playsInline
                            className='in-perspective'
                            id='design-hero-video'
                            data-video-basepath='/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/rotate/'
                            data-video-progress-kf='{"start":"a0t - css(--scroll-offset, a0)", "end":"a0t - css(--scroll-offset, a0) + css(--media-scroll-duration, a0)"}'
                            data-anim-keyframe='{"start": "a0t - 50vh", "end": "a0b + 50vh","anchors": [".subsection-design-hero"], "cssClass": "in-perspective", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
                            aria-hidden='true'
                          >
                            <source
                              src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/rotate/small.mp4'
                              type='video/mp4'
                              media='(max-width:734px)'
                            />
                            <source
                              src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/rotate/medium.mp4'
                              type='video/mp4'
                              media='(max-width:1068px)'
                            />
                            <source
                              src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/rotate/large.mp4'
                              type='video/mp4'
                              media='(min-width:1068px)'
                            />
                          </video>
                          <picture
                            id='overview-design-rotate-endframe-1'
                            className='overview-design-rotate-endframe loaded'
                            data-lazy=''
                            data-download-area-keyframe='{"start":"a0t - 200vh", "end":"a0b + 100vh", "anchors":[".subsection-design-hero"], "disabledWhen":"no-enhance-xp"}'
                            data-picture-loaded=''
                          >
                            <source
                              srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/rotate_endframe__b6cuamyhkraq_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/rotate_endframe__b6cuamyhkraq_small_2x.jpg 2x'
                              media='(max-width:734px)'
                            />
                            <source
                              srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/rotate_endframe__b6cuamyhkraq_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/rotate_endframe__b6cuamyhkraq_medium_2x.jpg 2x'
                              media='(max-width:1068px)'
                            />
                            <source
                              srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/rotate_endframe__b6cuamyhkraq_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/rotate_endframe__b6cuamyhkraq_large_2x.jpg 2x'
                              media='(min-width:0px)'
                            />
                            <img
                              src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/rotate_endframe__b6cuamyhkraq_large.jpg'
                              alt=''
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='design-hero-overlay-outer'>
                  <div className='design-hero-overlay-middle hero-container-small'>
                    <div className='design-hero-overlay-inner'>
                      <h2
                        className='typography-section-eyebrow section-eyebrow typography-intro'
                        data-vo=''
                        data-ax-attribute='opacity'
                        data-ax-scroll-anchor='.subsection-design-hero'
                        data-ax-offset='200vh'
                        tabIndex='-1'
                        style={{
                          opacity: useStickyAnimation(
                            [0, 1],
                            [stitch[1], stitch[2]],
                            keyframe
                          ),
                        }}
                      >
                        Design
                      </h2>
                      <div
                        className='typography-headline-standalone section-headline'
                        data-vo=''
                        data-ax-attribute='opacity'
                        data-ax-scroll-anchor='.subsection-design-hero'
                        data-ax-offset='200vh'
                        tabIndex='-1'
                        style={{
                          opacity: useStickyAnimation(
                            [0, 1],
                            [stitch[1], stitch[2]],
                            keyframe
                          ),
                        }}
                      >
                        <p
                          className='headline-gradient'
                          data-anim-keyframe='{"start":"css(--headline-anchor, a0) - css(--headline-offset, a0) + css(--gradient-start, a0)", "end":"css(--headline-anchor, a0) - css(--headline-offset, a0) + css(--gradient-start, a0) + css(--gradient-duration, a0)", "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"], "anchors": [".subsection-design-hero", ".video-container", ".sticky-content", ".design-hero-overlay-outer"] }'
                          style={{
                            '--gradient-position': `${useStickyAnimation(
                              [140, -40],
                              [stitch[1], stitch[-2]],
                              keyframe
                            )}%`,
                          }}
                        >
                          Less <br />
                          to carry.
                          <br />
                          More to
                          <span
                            className='heart-bubble-wrapper'
                            aria-label=' love'
                            role='text'
                          >
                            <span
                              className='heart-bubble-primary'
                              data-custom-primary-kf='{"start":"0.0", "end":"0.5", "scale":[0,1.15]}'
                              data-custom-secondary-kf='{"start":"0.5", "end":"0.8", "scale":[null,1], "easeFunction": "spring(1, 100, 10, 0)"}'
                              aria-hidden='true'
                              style={heartBubble}
                            >
                              <picture
                                id='overview-design-design-heart-1'
                                className='overview-design-design-heart heart-bubble-icon loaded'
                                data-lazy=''
                                data-custom-primary-kf='{"start":"0.25", "end":"0.5"}'
                                data-picture-loaded=''
                                style={heartBubble}
                              >
                                <source
                                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/design_heart__eqf67408fk4m_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/design_heart__eqf67408fk4m_small_2x.png 2x'
                                  media='(max-width:734px)'
                                />
                                <source
                                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/design_heart__eqf67408fk4m_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/design_heart__eqf67408fk4m_medium_2x.png 2x'
                                  media='(max-width:1068px)'
                                />
                                <source
                                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/design_heart__eqf67408fk4m_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/design_heart__eqf67408fk4m_large_2x.png 2x'
                                  media='(min-width:0px)'
                                />
                                <img
                                  src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/design_heart__eqf67408fk4m_large.png'
                                  alt=''
                                />
                              </picture>
                            </span>
                            <span
                              className='heart-bubble-secondary'
                              data-custom-primary-kf='{"start":"0.05", "end":"0.5", "scale":[0,1.15]}'
                              data-custom-secondary-kf='{"start":"0.5", "end":"0.8", "scale":[null,1], "easeFunction": "spring(1, 100, 10, 0)"}'
                              aria-hidden='true'
                              style={heartBubble}
                            />
                            <span
                              className='heart-bubble-tertiary'
                              data-custom-primary-kf='{"start":"0.0", "end":"0.5"}'
                              aria-hidden='true'
                              style={heartBubble}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='design-hero-badges section-content'>
              <div className='small-10 small-offset-1'>
                <div className='typography-section-copy typography-intro section-copy design-hero-copy large-6 medium-8 small-12'>
                  <p>
                    Redesigned around the next-generation M2&nbsp;chip,
                    MacBook&nbsp;Air is strikingly thin and brings exceptional
                    speed and power efficiency within its durable all‑aluminum
                    enclosure. It’s the ultrafast, ultracapable laptop that lets
                    you work, play, or create just about
                    anything&nbsp;—&nbsp;anywhere.
                  </p>
                </div>
                <div className='subsection-badges row large-justify-content-center small-justify-content-start large-5 medium-6 small-12 large-centered'>
                  <figure className='badge'>
                    <div className='badge-content'>
                      <span className='badge-value typography-headline-elevated'>
                        2.7
                      </span>
                      <span className='badge-caption typography-body-reduced'>
                        pounds
                      </span>
                    </div>
                  </figure>
                  <figure className='badge'>
                    <div className='badge-content'>
                      <span className='badge-value typography-headline-elevated'>
                        0.44”
                      </span>
                      <span className='badge-caption typography-body-reduced'>
                        thin
                      </span>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <MBAFinishesSub />
        </div>
        <DesignAirGallery />
        <DesignSubSection />
      </article>

      <style global jsx>{`
        .section-design .subsection-design-hero {
          --clip-nav-height: 0px;
          --clip-adjustment: 0px;
          --clip-offset: calc(var(--clip-nav-height) + var(--clip-adjustment));
          --scroll-duration: 200;
          --scroll-offset: 0;
          --media-scroll-duration: 100vh;
          --hero-offset: 0px;
          --badges-item-spacing: 0;
          --gradient-start: calc(var(--media-scroll-duration) - 25vh);
          --gradient-duration: 35vh;
          --headline-anchor: a0t;
          --feature-alternate: design-hero-full-headline;
          --headline-offset: var(--scroll-offset);
          margin-top: calc(
            var(--hero-margin-top) - var(--hero-offset) - var(--clip-offset)
          );
          opacity: 1;
        }

        .section-design .subsection-design-hero .sticky-container {
          position: relative;
          min-height: calc(var(--scroll-duration) * 1vh);
          margin-bottom: calc(var(--hero-offset) * -1);
        }

        .section-design
          .subsection-design-hero
          .sticky-container
          .sticky-content {
          height: 100vh;
          position: sticky;
          top: 0;
          display: flex;
          flex-direction: column;
          padding-top: var(--clip-offset);
        }

        .section-design
          .subsection-design-hero
          .design-hero-intro
          .design-media-container-clip {
          overflow: hidden;
          margin: auto 0;
        }

        .section-design
          .subsection-design-hero
          .design-hero-intro
          .design-hero-picture,
        .section-design
          .subsection-design-hero
          .design-hero-intro
          .picture-container {
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-design
          .subsection-design-hero
          .design-hero-intro
          .design-hero-picture {
          display: block;
        }

        .section-design
          .subsection-design-hero
          .sticky-container
          .video-container,
        .section-design
          .subsection-design-hero
          .sticky-container
          .video-container
          picture,
        .section-design
          .subsection-design-hero
          .sticky-container
          .video-container
          video {
          width: var(--hero-video-width);
          height: var(--hero-video-height);
        }

        /* video */
        .section-design
          .subsection-design-hero
          .sticky-container
          .video-container
          video {
          position: relative;
          z-index: 1;
          display: block;
        }
        .section-design
          .subsection-design-hero
          .sticky-container
          .video-container
          video.in-perspective {
          perspective: 1000px;
        }

        .section-design
          .subsection-design-hero
          .sticky-container
          .video-container
          picture {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: none;
        }

        .section-design
          .subsection-design-hero
          .design-hero-intro
          .design-hero-overlay-outer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--hero-video-height);
          z-index: 2;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          padding-bottom: 9px;
        }

        .section-design
          .subsection-design-hero
          .design-hero-intro
          .design-hero-overlay-outer
          .design-hero-overlay-middle {
          margin: auto;
        }

        .section-design
          .subsection-design-hero
          .design-hero-intro
          .design-hero-overlay-outer
          .design-hero-overlay-inner {
          width: var(--hero-overlay-width);
          position: relative;
        }

        .section-design
          .subsection-design-hero
          .design-hero-intro
          .design-hero-overlay-outer
          .typography-section-eyebrow {
          text-indent: 3px;
          font-weight: 600;
        }

        .section-headline {
          margin-top: 18px;
        }

        .section-design .subsection-design-hero .heart-bubble-wrapper {
          display: block;
          position: absolute;
          bottom: var(--heart-bubble-wrapper-bottom);
          right: var(--heart-bubble-wrapper-right);
          --heart-bubble-secondary-bottom: -1px;
          --heart-bubble-secondary-right: -1px;
          --heart-bubble-tertiary-size: 9px;
        }

        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-primary,
        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-secondary,
        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-tertiary {
          background: #1a89fe;
          border-radius: 999px;
          transform-origin: bottom right;
        }
        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-primary {
          width: var(--heart-bubble-primary-size);
          height: var(--heart-bubble-primary-size);
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-icon {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          margin-left: auto;
          margin-right: auto;
          margin-top: 3px;
          position: relative;
          z-index: 1;
          transform-origin: bottom center;
        }

        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-icon
          img {
          display: block;
        }

        /* heart-bubble-secondary */
        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-secondary,
        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-tertiary {
          position: absolute;
          display: block;
        }
        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-secondary {
          width: var(--heart-bubble-secondary-size);
          height: var(--heart-bubble-secondary-size);
          bottom: var(--heart-bubble-secondary-bottom);
          right: var(--heart-bubble-secondary-right);
        }
        .section-design
          .subsection-design-hero
          .heart-bubble-wrapper
          .heart-bubble-tertiary {
          width: var(--heart-bubble-tertiary-size);
          height: var(--heart-bubble-tertiary-size);
          bottom: var(--heart-bubble-tertiary-bottom);
          right: var(--heart-bubble-tertiary-right);
        }

        .section-design .subsection-design-hero .design-hero-badges {
          padding-top: var(--badges-spacing);
        }

        .section-design
          .subsection-design-hero
          .design-hero-badges
          .design-hero-copy {
          margin-left: auto;
          margin-right: auto;
        }

        /* subsection-badges */
        .large-justify-content-center {
          justify-content: center;
        }
        .subsection-badges {
          margin-top: 0;
        }
        .section-design
          .subsection-design-hero
          .design-hero-badges
          .subsection-badges {
          margin-top: var(--badges-subsection-spacing);
        }

        /* badge */
        .badge {
          margin: 0 1em;
          box-sizing: border-box;
          display: inline-block;
          font-size: 20px;
          min-width: 5em;
          position: relative;
          z-index: 1;
          color: #1d1d1f;
        }
        .subsection-badges .badge {
          max-height: 104px;
        }
        .section-design
          .subsection-design-hero
          .design-hero-badges
          .subsection-badges
          .badge {
          margin-top: var(--badges-item-spacing);
        }

        .badge .badge-content {
          margin: 1em 0;
          padding-top: 4px;
          padding-bottom: 2px;
          position: relative;
          z-index: 1;
        }

        /* badge-value */
        .badge-value {
          color: #009de4;
        }
        .badge .badge-value {
          left: -2px;
          display: block;
          white-space: nowrap;
          position: relative;
          z-index: 1;
        }

        .badge .badge-caption {
          left: 0;
          box-sizing: border-box;
          display: block;
          position: absolute;
          top: 100%;
          width: 100%;
          z-index: 1;
        }
        .badge .badge-caption:first-child {
          top: auto;
          bottom: 100%;
        }
        @media only screen and (min-width: 1068px) {
          .section-design .subsection-design-hero {
            --hero-image-width: 2182px;
            --hero-image-height: 484px;
            --hero-video-width: 2566px;
            --hero-video-height: 484px;
            --hero-margin-top: 191px;
            --hero-overlay-width: 410px;
            --badges-spacing: 70px;
            --badges-subsection-spacing: 6px;

            --hero-offset: 258.5px;
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .picture-container {
            left: 50%;
            margin-left: -1091px;
            position: relative;
          }
          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-hero-picture,
          .section-design
            .subsection-design-hero
            .design-hero-intro
            .picture-container {
            --p-width: 2182px;
            --p-height: 484px;
          }
          .section-design
            .subsection-design-hero
            .sticky-container
            .video-container {
            left: 50%;
            margin-left: -1283px;
            position: relative;
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-hero-overlay-outer {
            padding-bottom: 9px;
          }

          .section-design .subsection-design-hero .heart-bubble-wrapper {
            --heart-bubble-wrapper-bottom: 52px;
            --heart-bubble-wrapper-right: 35px;
            --heart-bubble-primary-size: 62px;
            --heart-bubble-secondary-size: 18px;
            --heart-bubble-tertiary-bottom: -8px;
            --heart-bubble-tertiary-right: -9px;
          }

          .section-design
            .subsection-design-hero
            .heart-bubble-wrapper
            .heart-bubble-icon {
            --p-width: 33px;
            --p-height: 29px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-design .subsection-design-hero {
            --hero-image-width: 1742px;
            --hero-image-height: 388px;
            --hero-video-width: 2048px;
            --hero-video-height: 388px;
            --hero-margin-top: 176px;
            --hero-overlay-width: 360px;
            --badges-spacing: 60px;
            --badges-subsection-spacing: 8px;

            --hero-offset: 166.5px;
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .picture-container {
            left: 50%;
            margin-left: -871px;
            position: relative;
          }
          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-hero-picture,
          .section-design
            .subsection-design-hero
            .design-hero-intro
            .picture-container {
            --p-width: 1742px;
            --p-height: 388px;
          }

          .section-design
            .subsection-design-hero
            .sticky-container
            .video-container {
            left: 50%;
            margin-left: -1024px;
            position: relative;
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-hero-overlay-outer {
            padding-bottom: 7px;
          }

          .section-design .subsection-design-hero .heart-bubble-wrapper {
            --heart-bubble-wrapper-bottom: 47px;
            --heart-bubble-wrapper-right: 42px;
            --heart-bubble-primary-size: 52px;
            --heart-bubble-secondary-size: 15px;
            --heart-bubble-tertiary-bottom: -7px;
            --heart-bubble-tertiary-right: -8px;
          }

          .section-design
            .subsection-design-hero
            .heart-bubble-wrapper
            .heart-bubble-icon {
            --p-width: 28px;
            --p-height: 25px;
          }
        }
        @media only screen and (min-width: 734px) {
          .section-design .subsection-design-hero .design-hero-intro {
            width: 100%;
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-hero-overlay-outer {
            top: 50%;
            transform: translateY(-50%);
          }

          .section-design
            .subsection-design-hero
            .design-hero-badges
            .design-hero-copy {
            text-align: center;
          }
        }

        @media only screen and (max-width: 734px) {
          .section-design .subsection-design-hero {
            --hero-image-width: 412px;
            --hero-image-height: 546px;
            --hero-video-width: 460px;
            --hero-video-height: 546px;
            --scroll-offset: 50vh;
            --scroll-duration: 150;
            --media-adjustment: -32px;
            --media-scroll-duration: 75vh;
            --hero-margin-top: 131px;
            --hero-overlay-width: 250px;
            --badges-subsection-spacing: 1px;
            --badges-item-spacing: 5px;
            --badges-spacing: 60px;
            --hero-offset: 0px !important;
            --clip-adjustment: 20px;
            --clip-nav-height: var(--r-localnav-stacked-height);
          }

          .section-design .subsection-design-hero .sticky-container {
            margin-bottom: 0;
          }
          .section-design
            .subsection-design-hero
            .sticky-container
            .sticky-content {
            height: var(--hero-video-height);
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .hero-container-small {
            margin-left: auto;
            margin-right: auto;
            width: 87.5%;
          }
          .section-design
            .subsection-design-hero
            .design-hero-intro
            .hero-container-small {
            max-width: 374px;
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-media-container-clip {
            margin: unset;
            min-height: var(--hero-video-height);
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-media-container-inner {
            display: flex;
            flex-direction: column;
            width: 83.3333333333%;
            padding-left: 8.3333333333%;
          }

          .section-design
            .subsection-design-hero
            .sticky-container
            .video-container {
            align-self: flex-start;
            transform: translateX(-58px);
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-hero-overlay-outer {
            top: var(--clip-offset);
            padding-bottom: 301px;
          }

          .section-design
            .subsection-design-hero
            .design-hero-intro
            .design-hero-overlay-outer
            .design-hero-overlay-inner {
            padding-left: 8.3333333333%;
          }

          .section-headline {
            margin-top: 10px;
          }

          .section-design .subsection-design-hero .heart-bubble-wrapper {
            --heart-bubble-wrapper-bottom: 12px;
            --heart-bubble-wrapper-right: 34px;
            --heart-bubble-primary-size: 47px;

            --heart-bubble-secondary-bottom: -1px;
            --heart-bubble-secondary-right: 0px;
            --heart-bubble-secondary-size: 15px;

            --heart-bubble-tertiary-bottom: -6px;
            --heart-bubble-tertiary-right: -7px;
            --heart-bubble-tertiary-size: 7px;
          }

          .section-design
            .subsection-design-hero
            .heart-bubble-wrapper
            .heart-bubble-icon {
            --p-width: 25px;
            --p-height: 22px;
          }

          .small-justify-content-start {
            justify-content: flex-start;
          }
          .badge {
            margin: 0 1em 0 0;
          }
        }
      `}</style>
    </>
  )
}
