import HeroStatic from './HeroStatic'
import Five from './sequence/Five'
import Four from './sequence/Four'
import One from './sequence/One'
import Three from './sequence/Three'
import Two from './sequence/Two'

export default function Hero() {
  const stitch = [0, 0.15, 0.25, 0.45, 0.6, 0.83]

  return (
    <>
      <style global jsx>{`
        .section-hero .hero-sticky-container .sequence {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          padding: 4px 0;
          margin-top: -2px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;

          display: none;
        }
        .section-hero .hero-sticky-container .sequence,
        .section-hero .hero-sticky-container .sequence .content-wrapper,
        .section-hero .hero-sticky-container .sequence [data-vo] {
          pointer-events: none;
        }
        .section-hero .hero-sticky-container .sequence.show {
          opacity: 1;
          display: flex;
        }

        .section-hero .hero-sticky-container .sequence .video-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* .video-container h1 */
        .section-hero .hero-sticky-container .sequence.show [data-vo] {
          pointer-events: all;
        }

        /* video-container
          > video */
        .js-will-change {
          will-change: transform, opacity;
        }
        .section-hero .hero-sticky-container .sequence .video-container video {
          opacity: 0;
        }
        .section-hero
          .hero-sticky-container
          .sequence
          .video-container.loaded
          video {
          opacity: 1;
        }
      `}</style>
      <section
        className='section section-hero'
        data-anim-scroll-group='Section - Hero'
        data-component-list='Hero'
        data-analytics-section-engagement='name:hero'
      >
        <div className='hero-sticky-wrapper enhanced-only'>
          <div className='hero-sticky-container'>
            <One breakpoint={stitch.slice(0, 2)} />
            <Two breakpoint={stitch.slice(1, 3)} />
            <Three breakpoint={stitch.slice(2, 4)} />
            <Four breakpoint={stitch.slice(3, 5)} />
            <Five breakpoint={stitch.slice(4, 6)} />
          </div>
        </div>
        <HeroStatic />
      </section>

      <style global jsx>{`
        .section-hero {
          position: relative;
          z-index: 1;
        }

        .enhanced-only {
          display: block;
        }
        .section-hero .hero-sticky-wrapper {
          height: 760vh;
          position: relative;
          z-index: 1;
          pointer-events: none;
        }

        .section-hero .hero-sticky-container {
          position: sticky;
          height: calc(100vh - var(--r-localnav-stacked-height));
          top: var(--r-localnav-stacked-height);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .headline-gradient {
          display: inline-block;
          --headline-gradient-direction: 90deg;
          background-image: linear-gradient(
            var(--headline-gradient-direction),
            var(--headline-gradient-start),
            var(--headline-gradient-end)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-bottom: 0.1em;
          margin-bottom: -0.1em;
        }
        .headline-gradient {
          --gradient-highlight-spread: 20%;
          --gradient-shimmer-angle: 100deg;
          --gradient-position: 140%;
          --gradient-position-start: 140;
          --gradient-position-end: -40;
          background-image: linear-gradient(
              var(--gradient-shimmer-angle),
              transparent calc(50% - var(--gradient-highlight-spread)),
              var(--headline-gradient-shimmer),
              transparent calc(50% + var(--gradient-highlight-spread))
            ),
            linear-gradient(
              var(--headline-gradient-direction),
              var(--headline-gradient-start),
              var(--headline-gradient-end)
            );
          background-repeat: no-repeat;
          background-size: 200% 100%, 100% 100%;
          background-position: var(--gradient-position) 50%, 50% 50%;
        }

        @media only screen and (min-width: 1069px) {
          .typography-hero-key-feature {
            font-size: 80px;
            line-height: 1.05;
            font-weight: 600;
            letter-spacing: -0.015em;
            font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
              Arial, sans-serif;
          }
        }
        @media only screen and (max-width: 1068px) {
          .typography-hero-key-feature {
            font-size: 72px;
            line-height: 1.0555555556;
            font-weight: 600;
            letter-spacing: -0.012em;
            font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
              Arial, sans-serif;
          }
        }
      `}</style>
    </>
  )
}
