import { useRef, useEffect } from 'react'
import {
  useKeyframe,
  useAnimation,
  useDuration,
} from '@/components/hooks/useScroll'

export default function Five({ breakpoint }) {
  const keyframe = useKeyframe('.section-hero')
  const stitch = [0, 0.3, 0.4, 0.75, 1]

  const videoEl = useRef(null)
  const duration = useDuration(videoEl.current)
  const videoFrame = useAnimation(
    [0, duration],
    [stitch.at(2), stitch.at(-1)],
    keyframe
  )

  useEffect(() => {
    videoEl.current.currentTime = videoFrame
  }, [videoFrame])

  return (
    <>
      <div
        className={`sequence five ${
          keyframe >= breakpoint[0] && keyframe < breakpoint[1] ? 'show' : ''
        }`}
        data-anim-keyframe='{"start": "lerp(0.8, a0t, a0b - 200vh)", "end": "lerp(0.99, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"],"cssClass":"show","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
      >
        <div
          className='content-wrapper clip'
          data-anim-keyframe='{"start": "lerp(0.8, a0t, a0b - 200vh)", "end": "lerp(0.9, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass":"clip", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
        >
          <div
            className='typography-hero-key-feature copy js-will-change'
            data-anim-keyframe='{"start": "lerp(0.8, a0t, a0b - 200vh)", "end": "lerp(0.84, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "y": ["h/10",0,"px"],  "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "ML"}'
            data-anim-keyframe-2='{"start": "lerp(0.902, a0t, a0b - 200vh)","end": "lerp(0.902, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "opacity": [1,0], "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "ML"}'
            data-anim-keyframe-3='{"start":"lerp(0.8, a0t, a0b - 200vh)","end": "lerp(0.83, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "opacity": [0,1], "y": ["h/10",0,"px"],  "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "S"}'
            data-anim-keyframe-4='{"start": "lerp(0.86, a0t, a0b - 200vh)","end": "lerp(0.89, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "opacity": [1,0], "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "S"}'
            data-anim-keyframe-5='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(1.04, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
            data-vo=''
            data-ax-attribute='y'
            data-ax-attribute-end=''
            tabIndex='-1'
            style={{
              transform: `translateY(${useAnimation(
                [15.2, 0],
                [stitch.at(0), stitch.at(2)],
                keyframe
              )}px)`,
              opacity: keyframe <= stitch.at(2) ? 1 : 0,
            }}
          >
            <p
              className='headline-gradient'
              data-anim-keyframe='{"start": "lerp(0.81, a0t, a0b - 200vh)","end": "lerp(0.85, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "ML"}'
              data-anim-keyframe-2='{"start": "lerp(0.81, a0t, a0b - 200vh)","end": "lerp(0.86, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "S"}'
              style={{
                '--gradient-position': `${useAnimation(
                  [140, -40],
                  [stitch.at(0), stitch.at(1)],
                  keyframe
                )}%`,
              }}
            >
              Big, beautiful Liquid&nbsp;Retina display.
            </p>
          </div>
          <div
            className='video-container loaded'
            data-component-list='VideoScroll'
            data-anim-keyframe='{"start": "lerp(0.8, a0t, a0b - 200vh)","end": "lerp(0.845, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "y": [600,300,"px"], "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "ML"}'
            data-anim-keyframe-2='{"start":"lerp(0.845, a0t, a0b - 200vh)","end": "lerp(0.9, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "y": [300,0,"px"], "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "ML"}'
            data-anim-keyframe-3='{"start":"lerp(0.8, a0t, a0b - 200vh)","end": "lerp(0.88, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "y": [600,0,"px"], "ease": 0.8, "easeFunction": "easeOutQuart", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "S"}'
            style={{
              transform: `translateY(${useAnimation(
                [600, 0],
                [stitch.at(0), stitch.at(2)],
                keyframe
              )}px)`,
            }}
          >
            <video
              ref={videoEl}
              muted
              playsInline
              aria-hidden='true'
              id='hero-facetime-video'
              className='js-will-change'
              data-video-progress-kf='{"start": "lerp(0.88, a0t, a0b - 200vh)", "end": "lerp(1.0, a0t, a0b - 200vh)", "progress": [0, 1], "anchors": [".hero-sticky-wrapper"]}'
              data-video-load-kf='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(1.2, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"]}'
              data-video-basepath='/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/facetime/'
              data-anim-keyframe='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(1.2, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
              src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/facetime/medium.mp4'
            ></video>
          </div>
          <div
            className='typography-hero-key-feature copy-2 js-will-change'
            data-anim-keyframe='{"start": "lerp(0.939, a0t, a0b - 200vh)","end": "lerp(0.98, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "y": ["h/10",0,"px"], "opacity": [0,1], "ease": 0.8, "easeFunction": "easeOutQuart", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "ML"}'
            data-anim-keyframe-2='{"start": "lerp(0.936, a0t, a0b - 200vh)","end": "lerp(0.98, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "y": ["h/10",0,"px"], "opacity": [0,1], "ease": 0.8, "easeFunction": "easeOutQuart", "disabledWhen": ["no-enhance-xp"], "breakpointMask": "S"}'
            data-anim-keyframe-3='{"start": "lerp(0.7, a0t, a0b - 200vh)","end": "lerp(1.16, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
            data-vo=''
            data-ax-attribute='y'
            data-ax-attribute-end=''
            tabIndex='-1'
            style={{
              transform: `translateY(${useAnimation(
                [22.8, 0],
                [stitch.at(-2) - 0.1, stitch.at(-2)],
                keyframe
              )}px)`,
              opacity: useAnimation(
                [0, 1],
                [stitch.at(-2) - 0.1, stitch.at(-2)],
                keyframe
              ),
            }}
          >
            <p
              className='headline-gradient'
              data-anim-keyframe='{"start": "lerp(0.944, a0t, a0b - 200vh)","end": "lerp(0.99, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"]}'
              style={{
                '--gradient-position': `${useAnimation(
                  [140, -40],
                  [stitch.at(-2), stitch.at(-1)],
                  keyframe
                )}%`,
              }}
            >
              Advanced camera and audio.
            </p>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .section-hero .hero-sticky-container .sequence.five {
          align-items: start;
        }

        .section-hero .hero-sticky-container .sequence.five .content-wrapper {
          --video-clip-inset: 0;
          display: flex;
          justify-content: center;
          max-width: 1440px;
        }

        .section-hero
          .hero-sticky-container
          .sequence.five
          .content-wrapper
          .copy {
          position: absolute;
          max-width: 770px;
          margin-top: 66px;
          opacity: 0;
        }

        .section-hero
          .hero-sticky-container
          .sequence.five
          .content-wrapper
          .video-container {
          align-items: start;
        }

        .section-hero
          .hero-sticky-container
          .sequence.five
          .content-wrapper
          .video-container
          video {
          margin-top: calc(var(--video-margin-top) * -1);
          clip-path: inset(var(--video-clip-inset) 0 0 0);
        }

        .section-hero
          .hero-sticky-container
          .sequence.five
          .content-wrapper
          .copy-2 {
          position: absolute;
          opacity: 0;
        }
        @media only screen and (min-width: 1068px) {
          .section-hero .hero-sticky-container .sequence.five .content-wrapper {
            --video-margin-top: 0;
            padding: 80px 0;
          }

          .section-hero
            .hero-sticky-container
            .sequence.five
            .content-wrapper.clip {
            --video-clip-inset: 48px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.five
            .content-wrapper
            .copy {
            max-width: 770px;
            margin-top: 66px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.five
            .content-wrapper
            .video-container {
            max-height: 800px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.five
            .content-wrapper
            .copy-2 {
            max-width: 520px;
            margin-top: -10px;
            left: 55%;
          }
        }

        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-hero .hero-sticky-container .sequence.five .content-wrapper {
            --video-margin-top: 16px;
            padding: 110px 0;
          }

          .section-hero
            .hero-sticky-container
            .sequence.five
            .content-wrapper.clip {
            --video-clip-inset: 19px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.five
            .content-wrapper
            .copy {
            max-width: 650px;
            margin-top: 0;
          }

          .section-hero
            .hero-sticky-container
            .sequence.five
            .content-wrapper
            .video-container {
            max-height: 600px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.five
            .content-wrapper
            .copy-2 {
            max-width: 420px;
            margin-top: -75px;
            left: 45%;
          }
        }
      `}</style>
    </>
  )
}
