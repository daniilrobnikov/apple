import { useRef } from 'react'
import {
  useStickyKeyframe,
  useStickyVideo,
  useStickyAnimation,
} from '@/hooks/useScroll'
export default function Two({ breakpoint }) {
  const keyframe = useStickyKeyframe('.section-hero')

  const videoEl = useRef(null)
  useStickyVideo(videoEl, keyframe)

  var step = breakpoint[1] - breakpoint[0]
  var stitch = [0, 1]
  stitch.forEach(function (item, index) {
    stitch[index] = stitch[index] * step + breakpoint[0]
  })

  return (
    <>
      <div
        className={`sequence two ${
          keyframe >= breakpoint[0] && keyframe < breakpoint[1] ? 'show' : ''
        }`}
        data-anim-keyframe='{"start": "lerp(0.2, a0t, a0b - 200vh)", "end": "lerp(0.402, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"],"cssClass":"show","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
      >
        <div
          className='video-container loaded'
          data-component-list='VideoScroll'
        >
          <video
            id='hero-design-video'
            data-video-progress-kf='{"start": "lerp(0.2, a0t, a0b - 200vh)", "end": "lerp(0.4, a0t, a0b - 200vh)", "progress": [0, 1], "anchors": [".hero-sticky-wrapper"]}'
            data-video-load-kf='{"start": "a0t", "end": "lerp(0.6, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"]}'
            data-video-basepath='/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/design/'
            data-anim-keyframe='{"start": "a0t", "end": "lerp(0.6, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
            playsInline
            loop
            muted
            aria-hidden='true'
            className='js-will-change'
            ref={videoEl}
          >
            <source
              src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/design/medium.mp4'
              type='video/mp4'
              media='(max-width:1068px)'
            />
            <source
              src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/design/large.mp4'
              type='video/mp4'
              media='(min-width:1068px)'
            />
            <source
              src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/design/small.mp4'
              type='video/mp4'
              media='(max-width:734px)'
            />
          </video>
        </div>
        <div className='section-content'>
          <div
            className='typography-hero-key-feature copy js-will-change'
            data-anim-keyframe='{"start": "lerp(0.2, a0t, a0b - 200vh)", "end": "lerp(0.39, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "x": ["-w/10", "w/10"], "easeFunction": "easeOutQuad", "ease": 0.8, "disabledWhen": ["no-enhance-xp"], "breakpointMask": "L"}'
            data-anim-keyframe-2='{"start": "lerp(0.2, a0t, a0b - 200vh)", "end": "lerp(0.39, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "x": ["-w/10", 0], "easeFunction": "easeOutQuad", "ease": 0.8, "disabledWhen": ["no-enhance-xp"], "breakpointMask": "MS"}'
            data-anim-keyframe-3='{"start":"a0t","end": "lerp(0.59, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
            data-vo=''
            data-ax-attribute='x'
            data-ax-offset='50vh'
            tabIndex='-1'
            style={{
              transform: `translateX(${useStickyAnimation(
                [-69.2, 0],
                [stitch[0], stitch[1]],
                keyframe
              )}px)`,
            }}
          >
            <p
              className='headline-gradient'
              data-anim-keyframe='{"start": "lerp(0.2, a0t, a0b - 200vh)", "end": "lerp(0.37, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"]}'
              style={{
                '--gradient-position': `${useStickyAnimation(
                  [140, -40],
                  [stitch[0], stitch[1]],
                  keyframe
                )}%`,
              }}
            >
              All-new design.
            </p>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .section-hero .hero-sticky-container .sequence.two .video-container {
          position: absolute;
        }

        .section-hero .hero-sticky-container .sequence.two .section-content {
          text-align: center;
        }

        .section-hero
          .hero-sticky-container
          .sequence.two
          .section-content
          .copy
          p {
          padding-right: 0.05em;
        }
      `}</style>
    </>
  )
}
