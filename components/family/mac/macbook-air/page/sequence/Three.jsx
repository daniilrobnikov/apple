import { useKeyframe } from '@/hooks/useScroll'
export default function Three({ breakpoint }) {
  const keyframe = useKeyframe('.section-hero')
  return (
    <>
      <div
        className={`sequence three ${
          keyframe >= breakpoint[0] && keyframe < breakpoint[1] ? 'show' : ''
        }`}
        data-anim-keyframe='{"start": "lerp(0.4, a0t, a0b - 200vh)", "end": "lerp(0.602, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"],"cssClass":"show","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
      >
        <div
          className='section-content'
          data-anim-keyframe='{"start": "lerp(0.54, a0t, a0b - 200vh)","end": "lerp(0.6, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "scale": ["css(--supercharged-wrapper-scale-start)", "css(--supercharged-wrapper-scale-end)"], "ease": 0.8, "easeFunction": "easeInQuart", "disabledWhen": ["no-enhance-xp"]}'
          style={{
            transform: `scale(${1 - Math.max(0, (keyframe - 0.5) * 2) * 0.4})`,
          }}
        >
          <div
            className='typography-hero-supercharged copy js-will-change'
            data-anim-keyframe='{"start": "lerp(0.4, a0t, a0b - 200vh)", "end": "lerp(0.55, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "scale": ["css(--supercharged-scale-start)", "css(--supercharged-scale-end)"], "ease": 0.8, "disabledWhen": ["no-enhance-xp"]}'
            data-anim-keyframe-2='{"start": "lerp(0.2, a0t, a0b - 200vh)", "end": "lerp(0.75, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
            data-vo=''
            data-ax-attribute='scale'
            data-ax-scroll-anchor='.sequence.three .section-content'
            data-ax-attribute-end=''
            data-ax-offset='-10vh'
            tabIndex='-1'
            style={{
              transform: `scale(${1.5 - 2 * Math.min(0.5, keyframe) * 0.5})`,
            }}
          >
            <p
              className='headline-gradient js-will-change'
              data-anim-keyframe='{"start": "lerp(0.52, a0t, a0b - 200vh)","end": "lerp(0.56, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"]}'
              data-anim-keyframe-2='{"start": "lerp(0.42, a0t, a0b - 200vh)","end": "lerp(0.66, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
              style={{
                '--gradient-position': `${
                  140 - 180 * Math.max(0, (keyframe - 0.5) * 2)
                }%`,
              }}
            >
              Supercharged.
            </p>
          </div>
          <div className='chip'>
            <div
              className='chip-wrapper'
              data-anim-keyframe='{"start": "lerp(0.4, a0t, a0b - 200vh)", "end": "lerp(0.55, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "scale": ["max(150vw/w,150vh/w)",1], "ease": 0.8, "disabledWhen": ["no-enhance-xp"]}'
              style={{
                transform: `scale(${
                  6.18333 - Math.min(0.5, keyframe) * 2 * 5.18333
                })`,
              }}
            >
              <picture
                id='overview-hero-hero-chip-start-1'
                className='overview-hero-hero-chip-start loaded'
                data-lazy=''
                data-download-area-keyframe='{"disabledWhen":"no-enhance-xp", "start": "lerp(0.4, a0t, a0b - 200vh) - 200vh", "end": "lerp(0.55, a0t, a0b - 200vh) + 100vh", "anchors": [".hero-sticky-wrapper"]}'
                data-picture-loaded=''
              >
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chip_start__dy2qtrm9clw2_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chip_start__dy2qtrm9clw2_small_2x.jpg 2x'
                  media='(max-width:734px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chip_start__dy2qtrm9clw2_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chip_start__dy2qtrm9clw2_medium_2x.jpg 2x'
                  media='(max-width:1068px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chip_start__dy2qtrm9clw2_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chip_start__dy2qtrm9clw2_large_2x.jpg 2x'
                  media='(min-width:0px)'
                />
                <img
                  src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chip_start__dy2qtrm9clw2_large.jpg'
                  alt=''
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .section-hero .hero-sticky-container .sequence.three {
          --chip-size: 245px;
          --chip-margin: 50px;
          --supercharged-scale-start: 1.5;
          --supercharged-scale-end: 1;
          --supercharged-wrapper-scale-start: 1;
          --supercharged-wrapper-scale-end: 0.6;
        }

        .section-hero .hero-sticky-container .sequence.three .section-content {
          display: flex;
          flex-flow: column-reverse;
          text-align: center;
        }

        .section-hero
          .hero-sticky-container
          .sequence.three
          .section-content
          .copy {
          transform-origin: center
            calc(var(--chip-size) * -1 - var(--chip-margin));
        }

        .section-hero
          .hero-sticky-container
          .sequence.three
          .section-content
          .copy
          p {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          padding-left: 30px;
          padding-right: 30px;
        }

        .section-hero
          .hero-sticky-container
          .sequence.three
          .section-content
          .chip {
          display: flex;
          justify-content: center;
          margin-bottom: var(--chip-margin);
          grid-row: 1;
          will-change: transform, opacity;
        }

        .section-hero
          .hero-sticky-container
          .sequence.three
          .section-content
          .chip-wrapper {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          --p-width: 245px;
          --p-height: 245px;
          transform-origin: center 106px;
        }

        .section-hero
          .hero-sticky-container
          .sequence.three
          .section-content
          .chip-wrapper
          picture {
          width: 100%;
          height: 100%;
          display: flex;
        }

        .section-hero
          .hero-sticky-container
          .sequence.three
          .section-content
          .chip-wrapper
          picture
          img {
          object-fit: cover;
          height: auto;
          width: 100%;
        }

        @media only screen and (min-width: 1069px) {
          .typography-hero-supercharged {
            font-size: 170px;
            line-height: 1.1765705882;
            font-weight: 600;
            letter-spacing: -0.025em;
            font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
              Arial, sans-serif;
          }

          .section-hero
            .hero-sticky-container
            .sequence.three
            .section-content
            .chip-wrapper {
            --p-width: 245px;
            --p-height: 245px;
            transform-origin: center 106px;
          }
        }
        @media only screen and (max-width: 1068px) {
          .section-hero .hero-sticky-container .sequence.three {
            --chip-size: 180px;
          }

          .typography-hero-supercharged {
            font-size: 126px;
            line-height: 1.1750031746;
            font-weight: 600;
            letter-spacing: -0.018em;
            font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
              Arial, sans-serif;
          }

          .section-hero
            .hero-sticky-container
            .sequence.three
            .section-content
            .chip-wrapper {
            --p-width: 180px;
            --p-height: 180px;
            transform-origin: center 67px;
          }
        }
      `}</style>
    </>
  )
}
