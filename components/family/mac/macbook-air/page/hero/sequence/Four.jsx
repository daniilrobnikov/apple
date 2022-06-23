import { useStickyKeyframe, useStickyAnimation } from '@/hooks/useScroll'
export default function Four({ breakpoint }) {
  const keyframe = useStickyKeyframe('.section-hero')

  var step = breakpoint[1] - breakpoint[0]
  var stitch = [0, 0.4, 0.75, 1]
  stitch.forEach(function (item, index) {
    stitch[index] = stitch[index] * step + breakpoint[0]
  })

  return (
    <>
      <div
        className={`sequence four ${
          keyframe >= breakpoint[0] && keyframe < breakpoint[1] ? 'show' : ''
        }`}
        data-anim-keyframe='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(0.802, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"],"cssClass":"show","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
      >
        <div className='content-wrapper'>
          <div
            className='typography-hero-key-feature copy copy-sfour js-will-change'
            data-anim-keyframe='{"start": "lerp(0.68, a0t, a0b - 200vh)", "end": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "y": ["h",0], "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"]}'
            data-anim-keyframe-2='{"start": "lerp(0.51, a0t, a0b - 200vh)","end": "lerp(0.97, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
            data-vo=''
            data-ax-attribute='y'
            data-ax-attribute-end=''
            tabIndex='-1'
            style={{
              transform: `translateY(${useStickyAnimation(
                [212, 0],
                [stitch.at(1), stitch.at(2)],
                keyframe
              )}px)`,
            }}
          >
            <p
              className='headline-gradient'
              data-anim-keyframe='{"start": "lerp(0.74, a0t, a0b - 200vh)", "end": "lerp(0.78, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "--gradient-position":["css(--gradient-position-start)", "css(--gradient-position-end)","%"], "disabledWhen":["no-enhance-xp"]}'
              style={{
                '--gradient-position': `${useStickyAnimation(
                  [140, -40],
                  [stitch.at(-2), stitch.at(-1)],
                  keyframe
                )}%`,
              }}
            >
              Up to 18 hours of&nbsp;battery life.
            </p>
          </div>
          <div
            className='hardware-container js-will-change'
            data-anim-keyframe='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(0.68, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper", ".animation-frame"], "--hardware-container-scale": ["max(200vw/a1w,200vh/a1h)","max(120vw/a1w,120vh/a1h)*0.40"],  "--hardware-offset-lerp": [1,0], "ease": 0.8, "easeFunction": "easeInOutQuart", "disabledWhen": ["no-enhance-xp"]}'
            data-anim-keyframe-2='{"start": "lerp(0.68, a0t, a0b - 200vh)","end": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper", ".animation-frame"], "--hardware-container-lerp": [1,0], "--hardware-container-scale": ["max(120vw/a1w,120vh/a1h)*0.40",1], "ease": 0.8, "easeFunction": "easeOutQuart", "disabledWhen": ["no-enhance-xp"]}'
            data-anim-keyframe-3='{"start": "lerp(0.598, a0t, a0b - 200vh)", "end": "lerp(0.802, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper", ".copy-sfour" ], "--copy-height": ["a1h","a1h","px"], "disabledWhen": ["no-enhance-xp"]}'
            data-anim-keyframe-4='{"start": "lerp(0.55, a0t, a0b - 200vh)", "end": "lerp(0.9, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
            style={{
              '--hardware-container-scale': `${useStickyAnimation(
                [4.66667, 1],
                [stitch.at(0), stitch.at(1)],
                keyframe
              )}`,
              '--hardware-offset-lerp': `${useStickyAnimation(
                [1, 0],
                [stitch.at(0), stitch.at(1)],
                keyframe
              )}`,
              '--hardware-container-lerp': `${useStickyAnimation(
                [1, 0],
                [stitch.at(1), stitch.at(2)],
                keyframe
              )}`,
            }}
          >
            <div className='screen'></div>
            <picture
              id='overview-hero-battery-hw-starlight-1'
              className='overview-hero-battery-hw-starlight loaded'
              data-lazy=''
              data-download-area-keyframe='{"start": "lerp(0.6, a0t, a0b - 200vh) - 200vh", "end": "lerp(0.68, a0t, a0b - 200vh) + 100vh", "anchors": [".hero-sticky-wrapper"], "disabledWhen":"no-enhance-xp"}'
              data-picture-loaded=''
            >
              <source
                srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_starlight__b3mdfqc7uzua_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_starlight__b3mdfqc7uzua_small_2x.jpg 2x'
                media='(max-width:734px)'
              />
              <source
                srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_starlight__b3mdfqc7uzua_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_starlight__b3mdfqc7uzua_medium_2x.jpg 2x'
                media='(max-width:1068px)'
              />
              <source
                srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_starlight__b3mdfqc7uzua_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_starlight__b3mdfqc7uzua_large_2x.jpg 2x'
                media='(min-width:0px)'
              />
              <img
                src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_starlight__b3mdfqc7uzua_large.jpg'
                alt=''
              />
            </picture>
            <div className='screens-container'>
              <picture
                id='overview-hero-battery-hw-midnight-1'
                className='overview-hero-battery-hw-midnight loaded js-will-change reveal'
                data-lazy=''
                data-anim-keyframe='{"start": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass":"reveal","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
                data-anim-keyframe-2='{"start": "lerp(0.4, a0t, a0b - 200vh)", "end": "lerp(0.85, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
                data-download-area-keyframe='{"disabledWhen":"no-enhance-xp", "start": "lerp(0.76, a0t, a0b - 200vh) - 200vh", "end": "lerp(0.76, a0t, a0b - 200vh) + 100vh", "anchors": [".hero-sticky-wrapper"]}'
                data-picture-loaded=''
              >
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_small_2x.jpg 2x'
                  media='(max-width:734px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_medium_2x.jpg 2x'
                  media='(max-width:1068px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_large_2x.jpg 2x'
                  media='(min-width:0px)'
                />
                <img
                  src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_large.jpg'
                  alt=''
                />
              </picture>
              <div className='light'>
                <picture
                  id='overview-hero-battery-screen-light-music-1'
                  className='overview-hero-battery-screen-light-music loaded js-will-change'
                  data-lazy=''
                  data-anim-keyframe='{"start": "lerp(0.68, a0t, a0b - 200vh)", "end": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "x": [-10,0,"%"], "y": [10,0,"%"], "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"]}'
                  data-anim-keyframe-2='{"start": "lerp(0.55, a0t, a0b - 200vh)", "end": "lerp(0.85, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
                  data-download-area-keyframe='{"disabledWhen":"no-enhance-xp", "start": "lerp(0.68, a0t, a0b - 200vh) - 200vh", "end": "lerp(0.76, a0t, a0b - 200vh) + 100vh", "anchors": [".hero-sticky-wrapper"]}'
                  data-picture-loaded=''
                  style={{
                    transform: `
                    translateX(${useStickyAnimation(
                      [-10, 0],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )}px)
                    translateY(${useStickyAnimation(
                      [10, 0],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )}px)`,
                  }}
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_music__fbxc268edjiq_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_music__fbxc268edjiq_small_2x.png 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_music__fbxc268edjiq_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_music__fbxc268edjiq_medium_2x.png 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_music__fbxc268edjiq_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_music__fbxc268edjiq_large_2x.png 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_music__fbxc268edjiq_large.png'
                    alt=''
                  />
                </picture>
                <picture
                  id='overview-hero-battery-screen-light-powerpoint-1'
                  className='overview-hero-battery-screen-light-powerpoint loaded js-will-change'
                  data-lazy=''
                  data-anim-keyframe='{"start": "lerp(0.68, a0t, a0b - 200vh)", "end": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "x": [10,0,"%"], "y": [10,0,"%"], "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"]}'
                  data-anim-keyframe-2='{"start": "lerp(0.55, a0t, a0b - 200vh)", "end": "lerp(0.85, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
                  data-download-area-keyframe='{"disabledWhen":"no-enhance-xp", "start": "lerp(0.68, a0t, a0b - 200vh) - 200vh", "end": "lerp(0.76, a0t, a0b - 200vh) + 100vh", "anchors": [".hero-sticky-wrapper"]}'
                  data-picture-loaded=''
                  style={{
                    transform: `
                    translateX(${useStickyAnimation(
                      [10, 0],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )}px)
                    translateY(${useStickyAnimation(
                      [10, 0],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )}px)`,
                  }}
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_powerpoint__f5g12h5lf9ui_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_powerpoint__f5g12h5lf9ui_small_2x.png 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_powerpoint__f5g12h5lf9ui_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_powerpoint__f5g12h5lf9ui_medium_2x.png 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_powerpoint__f5g12h5lf9ui_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_powerpoint__f5g12h5lf9ui_large_2x.png 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_light_powerpoint__f5g12h5lf9ui_large.png'
                    alt=''
                  />
                </picture>
              </div>
              <div
                className='dark js-will-change reveal'
                data-anim-keyframe='{"start": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass":"reveal","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
                data-anim-keyframe-2='{"start": "lerp(0.4, a0t, a0b - 200vh)", "end": "lerp(0.85, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
              >
                <picture
                  id='overview-hero-battery-screen-dark-powerpoint-1'
                  className='overview-hero-battery-screen-dark-powerpoint js-will-change loaded'
                  data-lazy=''
                  data-anim-keyframe='{"start": "lerp(0.68, a0t, a0b - 200vh)", "end": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "x": [10,0,"%"], "y": [10,0,"%"], "ease": 0.8, "easeFunction": "easeOutQuad", "disabledWhen": ["no-enhance-xp"]}'
                  data-anim-keyframe-2='{"start": "lerp(0.55, a0t, a0b - 200vh)", "end": "lerp(0.85, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
                  data-download-area-keyframe='{"disabledWhen":"no-enhance-xp", "start": "lerp(0.68, a0t, a0b - 200vh)", "end": "lerp(0.76, a0t, a0b - 200vh) + 100vh", "anchors": [".hero-sticky-wrapper"]}'
                  style={{
                    transform: `
                    translateX(${useStickyAnimation(
                      [10, 0],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )}px)
                    translateY(${useStickyAnimation(
                      [10, 0],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )}px)`,
                  }}
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_dark_powerpoint__ei556xyqls02_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_dark_powerpoint__ei556xyqls02_small_2x.png 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_dark_powerpoint__ei556xyqls02_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_dark_powerpoint__ei556xyqls02_medium_2x.png 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_dark_powerpoint__ei556xyqls02_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_dark_powerpoint__ei556xyqls02_large_2x.png 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_dark_powerpoint__ei556xyqls02_large.png'
                    alt=''
                  />
                </picture>
              </div>
            </div>
            <picture
              id='overview-hero-battery-screen-shadow-1'
              className='overview-hero-battery-screen-shadow loaded reveal'
              data-lazy=''
              data-anim-keyframe='{"start": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper",".screen"], "cssClass": "reveal", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
              data-download-area-keyframe='{"disabledWhen":"no-enhance-xp", "start": "lerp(0.7, a0t, a0b - 200vh) - 200vh", "end": "lerp(0.75, a0t, a0b - 200vh) + 100vh", "anchors": [".hero-sticky-wrapper"]}'
              data-picture-loaded=''
            >
              <source
                srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_shadow__dtrfahiinlaq_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_shadow__dtrfahiinlaq_small_2x.png 2x'
                media='(max-width:734px)'
              />
              <source
                srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_shadow__dtrfahiinlaq_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_shadow__dtrfahiinlaq_medium_2x.png 2x'
                media='(max-width:1068px)'
              />
              <source
                srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_shadow__dtrfahiinlaq_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_shadow__dtrfahiinlaq_large_2x.png 2x'
                media='(min-width:0px)'
              />
              <img
                src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_screen_shadow__dtrfahiinlaq_large.png'
                alt=''
              />
            </picture>
            <div className='animation-frame'>
              <div
                className='inline-container js-will-change'
                data-anim-keyframe='{"start": "lerp(0.68, a0t, a0b - 200vh)","end": "lerp(0.76, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper",".screen"], "scale": ["css(--scale-start)","css(--scale-end)"], "y": [0,"css(--inline-y-end)","px"], "x": [0,"css(--inline-x-end)","px"], "easeFunction": "easeOutQuart", "ease": 0.8, "disabledWhen": ["no-enhance-xp"]}'
                data-anim-keyframe-2='{"start": "lerp(0.4, a0t, a0b - 200vh)", "end": "lerp(0.9, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
                style={{
                  transform: `
                    scale(${useStickyAnimation(
                      [1, 0.723],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )})
                    translateX(${useStickyAnimation(
                      [0, 74],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )}px)
                    translateY(${useStickyAnimation(
                      [0, 37],
                      [stitch[1], stitch[-1]],
                      keyframe
                    )}px)`,
                }}
              >
                <div
                  className='inline-media with-controls audio-video loaded playing'
                  data-component-list='InlineMedia'
                >
                  <picture
                    id='overview-hero-battery-hero-startframe-1'
                    className='overview-hero-battery-hero-startframe start-frame loaded'
                    data-lazy=''
                    data-download-area-keyframe='{"start":"lerp(0.4, a0t, a0b - 200vh)","end":"lerp(0.99, a0t, a0b - 200vh)","anchors":[".hero-sticky-wrapper"],"disabledWhen":"no-enhance-xp"}'
                    aria-hidden='true'
                    data-picture-loaded=''
                  >
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_startframe__ctrwuy4jpkia_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_startframe__ctrwuy4jpkia_small_2x.jpg 2x'
                      media='(max-width:734px)'
                    />
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_startframe__ctrwuy4jpkia_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_startframe__ctrwuy4jpkia_medium_2x.jpg 2x'
                      media='(max-width:1068px)'
                    />
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_startframe__ctrwuy4jpkia_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_startframe__ctrwuy4jpkia_large_2x.jpg 2x'
                      media='(min-width:0px)'
                    />
                    <img
                      src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_startframe__ctrwuy4jpkia_large.jpg'
                      alt=''
                    />
                  </picture>
                  <video
                    className='video'
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload='none'
                    role='presentation'
                    data-inline-media=''
                    id='afterEffectsVideo'
                    data-inline-media-load-keyframe='{"start": "lerp(0.4, a0t, a0b - 200vh)", "end": "lerp(0.99, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"]}'
                    data-inline-media-play-keyframe='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(0.8, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"]}'
                    data-inline-media-visible-keyframe='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(0.8, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"]}'
                    data-inline-media-basepath='/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/battery-hero/'
                    data-inline-media-plugins='AnimLoad, ViewportSource, LoadTimeout, PlayPauseButton, AnimPlay'
                    data-inline-media-reset-on-exit=''
                    data-inline-media-pause-on-exit='true'
                    src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/battery-hero/medium_2x.mp4'
                  />
                  <picture
                    id='overview-hero-battery-hero-endframe-1'
                    className='overview-hero-battery-hero-endframe static-frame loaded'
                    data-lazy=''
                    data-download-area-keyframe='{"start": "lerp(0.4, a0t, a0b - 200vh)", "end": "lerp(0.99, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"]}'
                    aria-hidden='true'
                    data-picture-loaded=''
                  >
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_endframe__bokgcg8gmpbm_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_endframe__bokgcg8gmpbm_small_2x.jpg 2x'
                      media='(max-width:734px)'
                    />
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_endframe__bokgcg8gmpbm_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_endframe__bokgcg8gmpbm_medium_2x.jpg 2x'
                      media='(max-width:1068px)'
                    />
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_endframe__bokgcg8gmpbm_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_endframe__bokgcg8gmpbm_large_2x.jpg 2x'
                      media='(min-width:0px)'
                    />
                    <img
                      src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/battery_hero_endframe__bokgcg8gmpbm_large.jpg'
                      alt=''
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='play-container js-will-change show pointer-all'
          data-anim-keyframe='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(0.8, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"],"cssClass":"show","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start": "lerp(0.6, a0t, a0b - 200vh)", "end": "lerp(0.8, a0t, a0b - 200vh)","anchors": [".hero-sticky-wrapper"],"cssClass":"pointer-all","toggle": true, "disabledWhen": ["no-enhance-xp"]}'
          data-anim-keyframe-3='{"start": "lerp(0.5, a0t, a0b - 200vh)", "end": "lerp(0.9, a0t, a0b - 200vh)", "anchors": [".hero-sticky-wrapper"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
        >
          <button
            className='play-pause-button loaded playing'
            data-inline-media-control='PlayPause'
            data-inline-media-controller='afterEffectsVideo'
            data-aria-playing='pause after effects video'
            data-aria-paused='play after effects video'
            aria-label='pause after effects video'
            data-analytics-title-pause='pause audio video'
            data-analytics-click-pause='prop3:pause audio video'
            data-analytics-title-play='play audio video'
            data-analytics-click-play='prop3:play audio video'
            data-analytics-intrapage-link=''
            data-vo=''
            data-ax-attribute='.show'
            data-ax-attribute-end=''
            data-ax-offset='-17vh'
            data-ax-scroll-anchor='.section-hero .play-container'
            data-ax-tabindex='0'
            tabIndex='0'
            data-analytics-click='prop3:pause audio video'
            data-analytics-title='pause audio video'
          >
            <svg
              className='svg-icon loading-icon'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 85 85'
            >
              <path
                className='control-path circle-transparent'
                d='M42.5,2.5a40,40,0,1,1-40,40A40,40,0,0,1,42.5,2.5Z'
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeWidth='4px'
                strokeLinejoin='round'
                opacity='0.2'
              ></path>
              <path
                className='control-path circle-segment'
                d='M42.5,2.5a40,40,0,0,1,40,40'
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeWidth='4px'
                strokeLinejoin='bevel'
              ></path>
            </svg>
            <svg
              className='svg-icon pause-icon'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 85 85'
            >
              <path
                className='control-path circle-opaque'
                d='M42.5,2.5a40,40,0,1,1-40,40A40,40,0,0,1,42.5,2.5Z'
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeWidth='4px'
                strokeLinejoin='round'
              ></path>
              <path
                className='control-fill pause-line'
                d='M50,28.25a2,2,0,0,1,2,2v24a2,2,0,1,1-4,0v-24A2,2,0,0,1,50,28.25Z'
              ></path>
              <path
                className='control-fill pause-line'
                d='M35,28.25a2,2,0,0,1,2,2v24a2,2,0,1,1-4,0v-24A2,2,0,0,1,35,28.25Z'
              ></path>
            </svg>
            <svg
              className='svg-icon play-icon'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 85 85'
            >
              <path
                className='control-path circle-opaque'
                d='M42.5,2.5a40,40,0,1,1-40,40A40,40,0,0,1,42.5,2.5Z'
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeWidth='4px'
                strokeLinejoin='round'
              ></path>
              <path
                className='control-fill play-shape'
                d='M55.73,41.55a1.34,1.34,0,0,1,0,1.48,1.16,1.16,0,0,1-.52.52L35.27,56.1a1.33,1.33,0,0,1-.74.15,1.54,1.54,0,0,1-1.48-1.48v-25a1.25,1.25,0,0,1,.22-.74,1.16,1.16,0,0,1,.52-.52,1.25,1.25,0,0,1,.74-.22,2.19,2.19,0,0,1,.74.15L55.21,41a2,2,0,0,1,.52.59'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <style global jsx>{`
        .section-hero .hero-sticky-container .sequence.four .content-wrapper {
          position: relative;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          padding: 80px 0;
          --small-breakpoint-offsetY: 40px;
          width: var(--p-width);
          text-align: center;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .copy {
          text-align: center;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          --copy-height: 0px;
          --hardware-container-lerp: 1;
          --hardware-container-scale: 1;
          --half-copy-height: calc(var(--copy-height) / 2);
          --hardware-offset-lerp: 1;
          transform: translateY(
              calc(
                var(--hardware-container-pos-y) * var(--hardware-container-lerp)
              )
            )
            scale(var(--hardware-container-scale));
          transform-origin: center var(--hardware-transform-origin-y);
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .screen {
          position: absolute;
          z-index: 999;
          box-sizing: border-box;
          pointer-events: none;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .overview-hero-battery-hw-starlight {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .overview-hero-battery-hw-starlight
          img {
          width: 100%;
          height: 100%;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .screens-container {
          position: absolute;
          top: 0;
          left: 0;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .overview-hero-battery-hw-midnight {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .screens-container
          .overview-hero-battery-screen-light-music {
          position: absolute;
          top: var(--picture-music-top);
          left: var(--picture-music-left);
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          --p-width: 194px;
          --p-height: 238px;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .screens-container
          .overview-hero-battery-screen-dark-powerpoint,
        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .screens-container
          .overview-hero-battery-screen-light-powerpoint {
          position: absolute;
          top: var(--picture-powerpoint-top);
          left: var(--picture-powerpoint-left);
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .screens-container
          .dark {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .overview-hero-battery-screen-shadow {
          position: absolute;
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          opacity: 0;
          transition: opacity 0.2s ease-out;
        }
        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .animation-frame {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .content-wrapper
          .hardware-container
          .animation-frame
          .inline-container {
          overflow: hidden;
          --scale-end: 0.723;
          --scale-start: 1;
        }

        .inline-media {
          --media-button-size: 34px;
          position: relative;
        }

        .inline-media .end-frame,
        .inline-media .start-frame,
        .inline-media .static-frame {
          position: absolute;
          top: 0;
          opacity: 0;
          display: flex;
        }
        .inline-media .start-frame {
          position: relative;
          opacity: 1;
        }
        .inline-media.loaded .start-frame {
          opacity: 0;
        }

        .inline-media picture img {
          width: 100%;
          height: 100%;
        }

        .inline-media .inline-media-ui,
        .inline-media .video {
          display: none;
        }
        .inline-media .end-frame,
        .inline-media .static-frame,
        .inline-media .video {
          position: absolute;
          top: 0;
          width: 100%;
        }
        .inline-media .video {
          z-index: 1;
          display: block;
          left: 0;
          height: 100%;
          opacity: 0;
        }
        .inline-media.ended .end-frame,
        .inline-media.ended .video,
        .inline-media.loaded .video,
        .inline-media.playing .video,
        .inline-media.with-controls.paused .video {
          opacity: 1;
        }

        /* .play-container */
        .pointer-all {
          pointer-events: all;
        }
        .section-hero .hero-sticky-container .sequence.four .play-container {
          --media-button-position-right: 30px;
          --media-button-position-bottom: 50px;
          position: absolute;
          bottom: var(--media-button-position-bottom);
          right: var(--media-button-position-right);
          opacity: 0;
          transition: opacity 0.2s ease-out;
        }
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-container.show {
          opacity: 1;
        }

        .section-hero .hero-sticky-container .sequence.four .play-pause-button {
          --media-button-size: 50px;
          width: var(--media-button-size);
          height: var(--media-button-size);
          z-index: 0;
        }

        /* loading-icon */
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .loading-icon,
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .svg-icon {
          position: absolute;
          top: 0;
          width: var(--media-button-size);
          height: var(--media-button-size);
        }
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .loading-icon {
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-duration: 1s;
          animation-name: clockwise;
        }
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .svg-icon {
          opacity: 0;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .svg-icon
          .control-path {
          stroke: none;
          fill: rgba(210, 210, 215, 0.64);
          transition: stroke 0.25s ease-out;
        }
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .svg-icon
          .control-path.circle-segment {
          fill: transparent;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .loading-icon,
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .svg-icon {
          position: absolute;
          top: 0;
          width: var(--media-button-size);
          height: var(--media-button-size);
        }
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .svg-icon {
          opacity: 0;
        }
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button.ended
          .play-icon,
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button.paused
          .play-icon,
        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button.playing
          .pause-icon {
          opacity: 1;
          z-index: 2;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .svg-icon
          .control-fill {
          fill: rgba(0, 0, 0, 0.54);
          transition: fill 0.25s ease-out;
        }

        .section-hero
          .hero-sticky-container
          .sequence.four
          .play-pause-button
          .svg-icon
          .control-path {
          stroke: none;
          fill: rgba(210, 210, 215, 0.64);
          transition: stroke 0.25s ease-out;
        }
        @media only screen and (min-width: 1068px) {
          .section-hero .hero-sticky-container .sequence.four .content-wrapper {
            --p-width: 928px;
            --p-height: 562px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .copy {
            text-align: center;
            padding: 0px 80px 50px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container {
            --hardware-container-pos-y: calc(var(--half-copy-height) * -1);
            --hardware-transform-origin-y: 188px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screen {
            top: 19px;
            left: 95px;
            width: 738px;
            height: 480px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-hw-starlight {
            --p-width: 928px;
            --p-height: 562px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container {
            --picture-powerpoint-top: 43px;
            --picture-powerpoint-left: 109px;
            --picture-music-top: 37px;
            --picture-music-left: 619px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-hw-midnight {
            --p-width: 928px;
            --p-height: 562px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-light-music {
            --p-width: 194px;
            --p-height: 238px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-dark-powerpoint,
          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-light-powerpoint {
            --p-width: 480px;
            --p-height: 334px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-screen-shadow {
            top: 140px;
            left: 311px;
            --p-width: 512px;
            --p-height: 332px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .animation-frame {
            top: 44px;
            left: 134px;
            width: 662px;
            height: 412px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .animation-frame
            .inline-container {
            border-radius: 6px;
            --inline-x-end: 102px;
            --inline-y-end: 48px;
            --inline-y-start: 26px;
          }

          .section-hero .hero-sticky-container .sequence.four .play-container {
            --media-button-position-bottom: 50px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-hero .hero-sticky-container .sequence.four .content-wrapper {
            --p-width: 696px;
            --p-height: 422px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .copy {
            padding: 0 60px 60px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container {
            --hardware-container-pos-y: calc(var(--copy-height) * -1 + 20px);
            --hardware-transform-origin-y: 134px;
            --copy-height: 212px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screen {
            top: 13px;
            left: 69px;
            width: 555px;
            height: 361px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-hw-starlight {
            --p-width: 696px;
            --p-height: 422px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container {
            --picture-powerpoint-top: 32px;
            --picture-powerpoint-left: 82px;
            --picture-music-top: 27px;
            --picture-music-left: 463px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-hw-midnight {
            --p-width: 696px;
            --p-height: 422px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-light-music {
            --p-width: 146px;
            --p-height: 180px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-dark-powerpoint,
          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-light-powerpoint {
            --p-width: 360px;
            --p-height: 252px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-screen-shadow {
            top: 104px;
            left: 227px;
            --p-width: 392px;
            --p-height: 256px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .animation-frame {
            top: 32px;
            left: 100px;
            width: 497px;
            height: 309px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .animation-frame
            .inline-container {
            --inline-x-end: 74px;
            --inline-y-end: 37px;
            --inline-y-start: 12px;
            border-radius: 5px;
          }

          /* .play-container */
          .section-hero .hero-sticky-container .sequence.four .play-container {
            --media-button-position-bottom: 75px;
          }
        }
        @media only screen and (min-width: 734px) {
          .section-hero .hero-sticky-container .sequence.four {
            align-items: start;
          }
        }
        @media only screen and (max-width: 734px) {
          .section-hero .hero-sticky-container .sequence.four {
            align-items: center;
          }

          .section-hero .hero-sticky-container .sequence.four .content-wrapper {
            --p-width: 302px;
            --p-height: 186px;
            margin-top: calc(var(--small-breakpoint-offsetY) * -1);
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container {
            --hardware-container-pos-y: calc(var(--copy-height) * -1);
            --hardware-transform-origin-y: 164px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .copy {
            padding: 0 9px 41px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container {
            --hardware-container-pos-y: calc(var(--copy-height) * -1 + 20px);
            --hardware-transform-origin-y: 57px;
            --copy-height: 129px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screen {
            top: 8px;
            left: 31px;
            width: 240px;
            height: 156px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-hw-starlight {
            --p-width: 302px;
            --p-height: 186px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container {
            --picture-powerpoint-top: 14px;
            --picture-powerpoint-left: 35px;
            --picture-music-top: 12px;
            --picture-music-left: 200px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-hw-midnight {
            --p-width: 302px;
            --p-height: 186px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-light-music {
            --p-width: 64px;
            --p-height: 80px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-dark-powerpoint,
          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .screens-container
            .overview-hero-battery-screen-light-powerpoint {
            --p-width: 158px;
            --p-height: 110px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .overview-hero-battery-screen-shadow {
            top: 41px;
            left: 89px;
            --p-width: 188px;
            --p-height: 130px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .animation-frame {
            top: 21px;
            left: 44px;
            width: 215px;
            height: 125px;
          }

          .section-hero
            .hero-sticky-container
            .sequence.four
            .content-wrapper
            .hardware-container
            .animation-frame
            .inline-container {
            --inline-x-end: 32px;
            --inline-y-end: 14px;
            --inline-y-start: 14px;
            border-radius: 0.19ch;
          }

          .inline-media {
            --media-button-size: 26px;
          }
        }
      `}</style>
    </>
  )
}
