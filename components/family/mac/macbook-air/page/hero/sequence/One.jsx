import { useRef } from 'react'
import { useStickyKeyframe, useStickyVideo } from '@/hooks/useScroll'
export default function One({ breakpoint }) {
  const keyframe = useStickyKeyframe('.section-hero')

  const videoEl = useRef(null)
  useStickyVideo(videoEl, keyframe * 5)

  return (
    <>
      <div
        className={`sequence one ${
          keyframe >= breakpoint[0] && keyframe < breakpoint[1] ? 'show' : ''
        }`}
        data-anim-keyframe='{"start": "a0t-50vh", "end": "lerp(0.2, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"],"cssClass":"show","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
      >
        <div
          className='video-container loaded'
          data-component-list='VideoScroll'
        >
          <h1
            data-vo=''
            data-ax-attribute='.show'
            data-ax-scroll-anchor='.sequence.one'
            tabIndex='-1'
          >
            <span className='visuallyhidden'>Macbook Air M2</span>
          </h1>
          <picture
            id='overview-hero-hero-startframe-1'
            className='overview-hero-hero-startframe hero-startframe loaded'
            data-lazy=''
            aria-hidden='true'
            data-download-area-keyframe='{"disabledWhen":"no-enhance-xp"}'
            data-picture-loaded=''
          >
            <source
              srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_startframe__enflv6qixhci_small.jpg'
              media='(max-width:734px)'
            />
            <source
              srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_startframe__enflv6qixhci_medium.jpg'
              media='(max-width:1068px)'
            />
            <source
              srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_startframe__enflv6qixhci_large.jpg'
              media='(min-width:0px)'
            />
            <img
              src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_startframe__enflv6qixhci_large.jpg'
              alt=''
            />
          </picture>
          <video
            id='hero-hero-video'
            data-video-progress-kf='{"start": "a0t", "end": "lerp(0.2, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"]}'
            data-video-load-kf='{"start": "a0t-100vh", "end": "lerp(0.4, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"]}'
            data-video-basepath='/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/hero/'
            data-anim-keyframe='{"start": "a0t-100vh", "end": "lerp(0.4, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
            aria-hidden='true'
            src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/hero/small.mp4'
            className='js-will-change'
            playsInline
            // autoPlay
            muted
            // loop
            ref={videoEl}
            //   style=''
          ></video>
        </div>
      </div>

      <style global jsx>{`
        .section-hero .hero-sticky-container .sequence.one .video-container {
          position: relative;
        }

        .section-hero
          .hero-sticky-container
          .sequence.one
          .video-container
          > h1,
        .section-hero
          .hero-sticky-container
          .sequence.one
          .video-container
          > picture,
        .section-hero
          .hero-sticky-container
          .sequence.one
          .video-container
          > video {
          margin: 0;
        }
        .section-hero .hero-sticky-container .sequence.one .video-container h1 {
          position: absolute;
          --vo-static-offset: 72px;
          width: 601px;
          height: 306px;
          margin-top: calc(var(--vo-static-offset) * -1);
        }

        /* hero-startframe */
        .section-hero
          .hero-sticky-container
          .sequence.one
          .video-container
          .hero-startframe {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-hero
          .hero-sticky-container
          .sequence.one
          .video-container
          > video {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        @media only screen and (min-width: 1068px) {
          .section-hero
            .hero-sticky-container
            .sequence.one
            .video-container
            h1 {
            --vo-static-offset: 72px;
            width: 601px;
            height: 306px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.one
            .video-container
            .hero-startframe {
            --p-width: 1680px;
            --p-height: 944px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-hero
            .hero-sticky-container
            .sequence.one
            .video-container
            h1 {
            --vo-static-offset: 50px;
            width: 412px;
            height: 206px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.one
            .video-container
            .hero-startframe {
            --p-width: 1068px;
            --p-height: 600px;
          }
        }

        @media only screen and (max-width: 734px) {
          .section-hero
            .hero-sticky-container
            .sequence.one
            .video-container
            h1 {
            --vo-static-offset: 33px;
            width: 285px;
            height: 142px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.one
            .video-container
            .hero-startframe {
            --p-width: 734px;
            --p-height: 412px;
          }
        }
      `}</style>
    </>
  )
}
