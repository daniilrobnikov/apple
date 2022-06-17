import { useWhileInView, useKeyframe } from '@/components/hooks/useScroll'

export default function PerformanceAirIntro() {
  const keyframe = useKeyframe(
    '.section-performance .subsection-intro .section-headline'
  )

  return (
    <>
      <div
        className='subsection-intro small-10 small-offset-1'
        data-analytics-section-engagement='name:performance intro'
      >
        <picture
          id='overview-performance-performance-m2-1'
          className='overview-performance-performance-m2 image-performance-chip loaded'
          data-lazy=''
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_m2__xr4q9vo9ltuy_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_m2__xr4q9vo9ltuy_small_2x.jpg 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_m2__xr4q9vo9ltuy_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_m2__xr4q9vo9ltuy_medium_2x.jpg 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_m2__xr4q9vo9ltuy_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_m2__xr4q9vo9ltuy_large_2x.jpg 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_m2__xr4q9vo9ltuy_large.jpg'
            alt=''
          />
        </picture>
        <h2 className='typography-section-eyebrow section-eyebrow'>
          Performance
        </h2>
        <div className='typography-headline-standalone section-headline'>
          <p
            className='headline-gradient'
            data-anim-keyframe='{"start":"t - 80vh", "end":"t - 10vh", "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"]}'
            style={{
              '--gradient-position': `${useWhileInView([140, -40], keyframe)}%`,
            }}
          >
            Prepare for takeoff.
          </p>
        </div>
        <div className='typography-section-copy section-copy large-9 large-centered medium-11 small-12'>
          <p>
            The M2 chip starts the next generation of Apple silicon, with even
            more of the speed and power efficiency of M1. So you can get more
            done faster with a more powerful 8‑core CPU. Create captivating
            images and animations with up to a 10-core GPU. Work with more
            streams of 4K and 8K ProRes video with the high‑performance media
            engine. And keep working — or playing — all day and into the night
            with up to 18 hours of battery&nbsp;life.
            <sup className='footnote footnote-number'>
              <a href='#footnote-4' aria-label='Footnote 2' data-modal-close=''>
                2
              </a>
            </sup>
          </p>
        </div>
      </div>

      <style global jsx>{`
        .section-performance .subsection-intro {
          position: relative;
          z-index: 3;
        }

        .section-performance .image-performance-chip {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          left: 50%;
        }

        .typography-section-eyebrow,
        .typography-section-copy {
          font-size: 19px;
          line-height: 1.2105263158;
          font-weight: 400;
          letter-spacing: 0.012em;
          font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }
        .typography-section-eyebrow {
          font-weight: 600;
        }
        @media only screen and (min-width: 1068px) {
          .section-performance .image-performance-chip {
            --p-width: 150px;
            --p-height: 150px;
            margin-bottom: 70px;
            margin-left: -75px;
          }

          .section-headline + .section-copy {
            margin-top: 30px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-performance .image-performance-chip {
            --p-width: 129px;
            --p-height: 129px;
            margin-bottom: 60px;
            margin-left: -64.5px;
          }

          .section-headline + .section-copy {
            margin-top: 26px;
          }
        }
        @media only screen and (min-width: 734px) {
          .section-performance .subsection-intro {
            text-align: center;
          }

          .section-performance .image-performance-chip {
            position: relative;
          }
        }
      `}</style>
    </>
  )
}
