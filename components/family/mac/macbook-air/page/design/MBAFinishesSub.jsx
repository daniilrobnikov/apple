import {
  useStickyKeyframe,
  useStickyAnimation,
} from '@/components/hooks/useScroll'
export default function MBAFinishesSub() {
  const keyframe = useStickyKeyframe(
    '.section-design .subsection-design-finishes'
  )

  const stitch = [0, 0.25, 0.5, 0.75, 1]

  return (
    <>
      <div
        className='subsection-design-finishes'
        data-component-list='Finishes'
        data-anim-scroll-group='Section - Finishes'
        data-analytics-section-engagement='name:design finishes'
      >
        <div className='sticky-content-copy'>
          <div className='section-content'>
            <div className='small-10 small-offset-1'>
              <h4
                className='large-8 medium-11 small-12 subsection-headline  typography-headline-elevated'
                // typography-subsection-headline
              >
                Midnight to Starlight.
                <br />
                Four stellar finishes.
              </h4>
              <div
                className='typography-intro section-copy large-6 medium-8 small-12 subsection-copy'
                // typography-section-copy
              >
                <p>
                  MacBook&nbsp;Air comes in four gorgeous finishes — each with
                  its own matching MagSafe charging&nbsp;cable.
                </p>
              </div>
            </div>
          </div>
          <div className='sticky-content-figures enhanced-only'>
            <div className='figures-container'>
              <figure
                className={`section-content design-finishes-figure design-finishes-figure-midnight ${
                  keyframe >= stitch[0] && keyframe <= stitch[1] ? 'show' : ''
                }`}
                role='presentation'
              >
                <div className='screen-mask screen-mask-media'>
                  <div
                    className='inline-media paused loaded'
                    data-component-list='InlineMedia'
                  >
                    <picture
                      id='overview-design-finish-screen-midnight-startframe-1'
                      className='overview-design-finish-screen-midnight-startframe start-frame loaded'
                      data-lazy=''
                      data-download-area-keyframe='{"start":"a0t - 230vh","end":"a0t + 220vh","anchors":[".subsection-design-finishes"],"disabledWhen":"no-enhance-xp"}'
                      aria-hidden='true'
                      data-picture-loaded=''
                    >
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_startframe__cq9woffhovqu_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_startframe__cq9woffhovqu_small_2x.jpg 2x'
                        media='(max-width:734px)'
                      />
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_startframe__cq9woffhovqu_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_startframe__cq9woffhovqu_medium_2x.jpg 2x'
                        media='(max-width:1068px)'
                      />
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_startframe__cq9woffhovqu_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_startframe__cq9woffhovqu_large_2x.jpg 2x'
                        media='(min-width:0px)'
                      />
                      <img
                        src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_startframe__cq9woffhovqu_large.jpg'
                        alt=''
                      />
                    </picture>
                    <video
                      loop
                      muted
                      autoPlay
                      playsInline
                      preload='none'
                      className='video'
                      role='presentation'
                      data-inline-media=''
                      data-inline-media-load-keyframe='{"start": "a0t - 230vh", "end": "a0t + 220vh", "anchors": [".subsection-design-finishes"]}'
                      data-inline-media-play-keyframe='{"start": "a0t - 80vh", "end": "a0t + 70vh", "anchors": [".subsection-design-finishes"]}'
                      data-inline-media-basepath='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/finish-screen-midnight/'
                      data-inline-media-plugins='AnimLoad, ViewportSource, LoadTimeout, AnimPlay'
                      data-inline-media-reset-on-exit=''
                      data-inline-media-pause-on-exit=''
                      src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/finish-screen-midnight/medium_2x.mp4'
                    />
                    <picture
                      id='overview-design-finish-screen-midnight-endframe-1'
                      className='overview-design-finish-screen-midnight-endframe static-frame loaded'
                      data-lazy=''
                      data-download-area-keyframe='{"start": "a0t - 230vh", "end": "a0t + 220vh", "anchors": [".subsection-design-finishes"]}'
                      aria-hidden='true'
                      data-picture-loaded=''
                    >
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_endframe__dw5f3vx8fi0y_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_endframe__dw5f3vx8fi0y_small_2x.jpg 2x'
                        media='(max-width:734px)'
                      />
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_endframe__dw5f3vx8fi0y_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_endframe__dw5f3vx8fi0y_medium_2x.jpg 2x'
                        media='(max-width:1068px)'
                      />
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_endframe__dw5f3vx8fi0y_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_endframe__dw5f3vx8fi0y_large_2x.jpg 2x'
                        media='(min-width:0px)'
                      />
                      <img
                        src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_midnight_endframe__dw5f3vx8fi0y_large.jpg'
                        alt=''
                      />
                    </picture>
                  </div>
                </div>
                <picture
                  id='overview-design-finish-hw-midnight-1'
                  className='overview-design-finish-hw-midnight design-finishes-img design-finishes-img-midnight enhanced-only'
                  data-lazy=''
                  data-download-area-keyframe='{"disabledWhen":"no-enhance-xp"}'
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_midnight__cdyrlcmjtceq_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_midnight__cdyrlcmjtceq_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_midnight__cdyrlcmjtceq_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_midnight__cdyrlcmjtceq_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_midnight__cdyrlcmjtceq_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_midnight__cdyrlcmjtceq_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_midnight__cdyrlcmjtceq_large.jpg'
                    alt=''
                  />
                </picture>
                <figcaption
                  className='design-finishes-figcaption design-finishes-figcaption-midnight typography-design-figures-figcaption'
                  data-vo=''
                  data-ax-scroll-anchor='.design-finishes-figure-midnight'
                  data-ax-attribute='.show'
                  data-ax-offset='5vh'
                  tabIndex='-1'
                  style={{
                    transform: `
                    translateY(${useStickyAnimation(
                      [20, 0],
                      [stitch[0], stitch[1]],
                      keyframe,
                      'easeInOutQuad'
                    )}px)`,
                  }}
                >
                  Midnight
                </figcaption>
              </figure>
              <figure
                className={`section-content design-finishes-figure design-finishes-figure-spacegray ${
                  keyframe >= stitch[1] && keyframe <= stitch[2] ? 'show' : ''
                }`}
                role='presentation'
              >
                <picture
                  id='overview-design-finish-spacegray-1'
                  className='overview-design-finish-spacegray design-finishes-img design-finishes-img-spacegray enhanced-only'
                  data-lazy=''
                  data-download-area-keyframe='{"disabledWhen":"no-enhance-xp"}'
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_spacegray__bewoj5o9pcaa_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_spacegray__bewoj5o9pcaa_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_spacegray__bewoj5o9pcaa_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_spacegray__bewoj5o9pcaa_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_spacegray__bewoj5o9pcaa_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_spacegray__bewoj5o9pcaa_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_spacegray__bewoj5o9pcaa_large.jpg'
                    alt=''
                  />
                </picture>
                <figcaption
                  className='design-finishes-figcaption design-finishes-figcaption-spacegray typography-design-figures-figcaption'
                  data-vo=''
                  data-ax-scroll-anchor='.design-finishes-figure-spacegray'
                  data-ax-attribute='.show'
                  data-ax-offset='5vh'
                  tabIndex='-1'
                  style={{
                    transform: `
                    translateY(${useStickyAnimation(
                      [20, 0],
                      [stitch[1], stitch[2]],
                      keyframe,
                      'easeInOutQuad'
                    )}px)`,
                  }}
                >
                  Space Gray
                </figcaption>
              </figure>
              <figure
                className={`section-content design-finishes-figure design-finishes-figure-silver ${
                  keyframe >= stitch[2] && keyframe <= stitch[3] ? 'show' : ''
                }`}
                role='presentation'
              >
                <picture
                  id='overview-design-finish-silver-1'
                  className='overview-design-finish-silver design-finishes-img design-finishes-img-silver enhanced-only'
                  data-lazy=''
                  data-download-area-keyframe='{"disabledWhen":"no-enhance-xp"}'
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_silver__fl868a6lcs2u_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_silver__fl868a6lcs2u_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_silver__fl868a6lcs2u_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_silver__fl868a6lcs2u_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_silver__fl868a6lcs2u_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_silver__fl868a6lcs2u_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_silver__fl868a6lcs2u_large.jpg'
                    alt=''
                  />
                </picture>
                <figcaption
                  className='design-finishes-figcaption design-finishes-figcaption-silver typography-design-figures-figcaption'
                  data-vo=''
                  data-ax-scroll-anchor='.design-finishes-figure-silver'
                  data-ax-attribute='.show'
                  data-ax-offset='5vh'
                  tabIndex='-1'
                  style={{
                    transform: `
                    translateY(${useStickyAnimation(
                      [20, 0],
                      [stitch[2], stitch[3]],
                      keyframe,
                      'easeInOutQuad'
                    )}px)`,
                  }}
                >
                  Silver
                </figcaption>
              </figure>
              <figure
                className={`section-content design-finishes-figure design-finishes-figure-starlight ${
                  keyframe >= stitch[3] && keyframe <= stitch[4] ? 'show' : ''
                }`}
                role='presentation'
              >
                <div className='screen-mask screen-mask-media'>
                  <div
                    className='inline-media idle loaded'
                    data-component-list='InlineMedia'
                  >
                    <picture
                      id='overview-design-finish-screen-starlight-startframe-1'
                      className='overview-design-finish-screen-starlight-startframe start-frame'
                      data-lazy=''
                      data-download-area-keyframe='{"start":"a0t + 120vh","end":"a0t + 620vh","anchors":[".subsection-design-finishes"],"disabledWhen":"no-enhance-xp"}'
                      aria-hidden='true'
                    >
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_startframe__ch4ce7520n0i_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_startframe__ch4ce7520n0i_small_2x.jpg 2x'
                        media='(max-width:734px)'
                      />
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_startframe__ch4ce7520n0i_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_startframe__ch4ce7520n0i_medium_2x.jpg 2x'
                        media='(max-width:1068px)'
                      />
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_startframe__ch4ce7520n0i_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_startframe__ch4ce7520n0i_large_2x.jpg 2x'
                        media='(min-width:0px)'
                      />
                      <img
                        src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_startframe__ch4ce7520n0i_large.jpg'
                        alt=''
                      />
                    </picture>
                    <video
                      loop
                      muted
                      autoPlay
                      playsInline
                      preload='none'
                      className='video'
                      role='presentation'
                      data-inline-media=''
                      data-inline-media-load-keyframe='{"start": "a0t + 120vh", "end": "a0t + 620vh", "anchors": [".subsection-design-finishes"]}'
                      data-inline-media-play-keyframe='{"start": "a0t + 270vh", "end": "a0t + 470vh", "anchors": [".subsection-design-finishes"]}'
                      data-inline-media-basepath='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/finish-screen-starlight/'
                      data-inline-media-plugins='AnimLoad, ViewportSource, LoadTimeout, AnimPlay'
                      data-inline-media-reset-on-exit=''
                      data-inline-media-pause-on-exit=''
                      src='https://www.apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/anim/finish-screen-starlight/medium_2x.mp4'
                    />
                    <picture
                      id='overview-design-finish-screen-starlight-endframe-1'
                      className='overview-design-finish-screen-starlight-endframe static-frame'
                      data-lazy=''
                      data-download-area-keyframe='{"start": "a0t + 120vh", "end": "a0t + 620vh", "anchors": [".subsection-design-finishes"]}'
                      aria-hidden='true'
                    >
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_endframe__gf137q2sj9iu_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_endframe__gf137q2sj9iu_small_2x.jpg 2x'
                        media='(max-width:734px)'
                      />
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_endframe__gf137q2sj9iu_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_endframe__gf137q2sj9iu_medium_2x.jpg 2x'
                        media='(max-width:1068px)'
                      />
                      <source
                        srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_endframe__gf137q2sj9iu_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_endframe__gf137q2sj9iu_large_2x.jpg 2x'
                        media='(min-width:0px)'
                      />
                      <img
                        src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_screen_starlight_endframe__gf137q2sj9iu_large.jpg'
                        alt=''
                      />
                    </picture>
                  </div>
                </div>
                <picture
                  id='overview-design-finish-hw-starlight-1'
                  className='overview-design-finish-hw-starlight design-finishes-img design-finishes-img-starlight enhanced-only'
                  data-lazy=''
                  data-download-area-keyframe='{"disabledWhen":"no-enhance-xp"}'
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_starlight__c747yiby7kqe_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_starlight__c747yiby7kqe_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_starlight__c747yiby7kqe_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_starlight__c747yiby7kqe_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_starlight__c747yiby7kqe_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_starlight__c747yiby7kqe_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_hw_starlight__c747yiby7kqe_large.jpg'
                    alt=''
                  />
                </picture>
                <figcaption
                  className='design-finishes-figcaption design-finishes-figcaption-starlight typography-design-figures-figcaption'
                  data-vo=''
                  data-ax-scroll-anchor='.design-finishes-figure-starlight'
                  data-ax-attribute='.show'
                  data-ax-offset='5vh'
                  tabIndex='-1'
                  style={{
                    transform: `
                    translateY(${useStickyAnimation(
                      [20, 0],
                      [stitch[3], stitch[4]],
                      keyframe,
                      'easeInOutQuad'
                    )}px)`,
                  }}
                >
                  Starlight
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .section-design .subsection-design-finishes {
          height: 500vh;
          overflow: unset;
        }

        .section-design .subsection-design-finishes .sticky-content-copy {
          position: sticky;
          top: 96px;
          overflow: hidden;
        }

        .section-design .subsection-design-finishes .sticky-content-figures {
          position: sticky;
          top: 96px;
          overflow: hidden;
        }
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          // and (max-height: 680px)
          .section-design .subsection-design-finishes .sticky-content-copy {
            position: relative;
            overflow: visible;
            top: unset;
            height: 100%;
          }
          .section-design .subsection-design-finishes .sticky-content-figures {
            top: 120px;
          }
        }
        .section-design .subsection-design-finishes .figures-container {
          display: flex;
          justify-content: center;
        }

        .section-design .subsection-design-finishes .design-finishes-figure {
          position: absolute;
          background-color: #fff;
          opacity: 0;
          z-index: 0;
        }
        .section-design
          .subsection-design-finishes
          .design-finishes-figure.show {
          opacity: 1;
          z-index: 1;
        }
        .screen-mask-media .inline-media {
          height: 100%;
        }

        .section-design .subsection-design-finishes .start-frame,
        .section-design .subsection-design-finishes .static-frame {
          /* display: block; */
          width: var(--p-width);
          height: var(--p-height);
          position: relative;
          left: 50%;
        }
        .section-design .subsection-design-finishes .design-finishes-img {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          position: relative;
          left: 50%;
        }
        .section-design
          .subsection-design-finishes
          .design-finishes-figure
          .design-finishes-img {
          z-index: 0;
        }

        /* design-finishes-figcaption */
        .typography-design-figures-figcaption {
          font-size: 14px;
          line-height: 1.2857742857;
          font-weight: 600;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }
        .section-design
          .subsection-design-finishes
          .design-finishes-figcaption {
          right: 0;
          position: absolute;
        }
        @media only screen and (min-width: 1068px) {
          .section-design .subsection-design-finishes {
            margin-top: 225px;
          }
          .section-design .subsection-design-finishes .subsection-copy {
            margin-top: 20px;
            margin-bottom: 52px;
          }

          .section-design .subsection-design-finishes .figures-container {
            height: 830px;
          }

          .section-design .subsection-design-finishes .start-frame,
          .section-design .subsection-design-finishes .static-frame {
            --p-width: 834px;
            --p-height: 262px;
            margin-left: -417px;
          }
          .section-design .subsection-design-finishes .design-finishes-img {
            --p-width: 868px;
            --p-height: 830px;
            margin-left: -434px;
          }

          /* design-finishes-figcaption */
          .section-design
            .subsection-design-finishes
            .design-finishes-figcaption {
            top: 345px;
            width: 82px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-design .subsection-design-finishes {
            margin-top: 152px;
          }
          .section-design .subsection-design-finishes .subsection-copy {
            margin-top: 38px;
            margin-bottom: 68px;
          }

          .section-design .subsection-design-finishes .figures-container {
            height: 557px;
          }

          .section-design .subsection-design-finishes .start-frame,
          .section-design .subsection-design-finishes .static-frame {
            --p-width: 560px;
            --p-height: 176px;
            margin-left: -280px;
          }
          .section-design .subsection-design-finishes .design-finishes-img {
            --p-width: 582px;
            --p-height: 557px;
            margin-left: -291px;
          }

          /* design-finishes-figcaption */
          .section-design
            .subsection-design-finishes
            .design-finishes-figcaption {
            top: 223px;
            width: 78px;
          }
        }
        @media only screen and (min-width: 734px) {
          .section-design .subsection-design-finishes .subsection-copy,
          .section-design .subsection-design-finishes .subsection-headline {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        }

        @media only screen and (max-width: 734px) {
          .section-design .subsection-design-finishes {
            height: 400vh;
            margin-top: 78px;
          }

          .section-design .subsection-design-finishes .sticky-content-copy {
            position: relative;
            overflow: visible;
            top: unset;
            height: 100%;
          }

          .section-design .subsection-design-finishes .subsection-copy {
            margin-top: 38px;
            margin-bottom: 51px;
          }

          .section-design .subsection-design-finishes .sticky-content-figures {
            top: 63px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 63px);
            margin-top: calc(var(--figures-margin-top-bottom) * -1);
            margin-bottom: calc(var(--figures-margin-top-bottom) * -1);
          }

          .section-design .subsection-design-finishes .figures-container {
            height: 262px;
            margin-bottom: 42px;
          }
          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            --p-width: 262px;
            --p-height: 82px;
          }

          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            top: 7px;
          }

          .section-design .subsection-design-finishes .start-frame {
            margin-left: -131px;
          }

          .section-design .subsection-design-finishes .design-finishes-img {
            --p-width: 274px;
            --p-height: 262px;
            margin-left: -137px;
          }

          .section-design
            .subsection-design-finishes
            .design-finishes-figcaption {
            right: unset;
            position: relative;
            top: unset;
            margin-top: 21px;
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
      <style global jsx>{`
        .section-design
          .subsection-design-finishes
          .design-finishes-figure
          .screen-mask {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          position: absolute;
          top: 19px;
          width: 100%;
          z-index: 1;
          overflow: hidden;
        }
        @media only screen and (min-width: 1068px) {
          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            --p-width: 834px;
            --p-height: 262px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            --p-width: 560px;
            --p-height: 176px;
          }
          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            top: 13px;
          }
        }

        .section-design
          .subsection-design-finishes
          .design-finishes-figure
          .screen-mask {
          -webkit-mask-size: contain;
          -webkit-mask-position: center;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-image: url(https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_mask__ew2v0s6p4qeu_large.png);
        }
        @media (-webkit-min-device-pixel-ratio: 1.5),
          (min-resolution: 144dpi),
          only screen and (-webkit-min-device-pixel-ratio: 1.5),
          only screen and (min-resolution: 1.5dppx) {
          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            -webkit-mask-image: url(/images/family/mac/mac-book-air/finish_mask__ew2v0s6p4qeu_large_2x.png);
          }
        }
        @media only screen and (max-width: 1068px) {
          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-image: url(https://www.apple.com/v/macbook-air-m2/b/images/overview/design/finish_mask__ew2v0s6p4qeu_medium.png);
          }
        }
        @media only screen and (max-width: 1068px) and (-webkit-min-device-pixel-ratio: 1.5),
          only screen and (max-width: 1068px) and (min-resolution: 1.5dppx),
          only screen and (max-width: 1068px) and (min-resolution: 144dpi) {
          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            -webkit-mask-image: url(/images/family/mac/mac-book-air/finish_mask__ew2v0s6p4qeu_medium_2x.png);
          }
        }

        @media only screen and (max-width: 734px) and (-webkit-min-device-pixel-ratio: 1.5),
          only screen and (max-width: 734px) and (min-resolution: 1.5dppx),
          only screen and (max-width: 734px) and (min-resolution: 144dpi) {
          .section-design
            .subsection-design-finishes
            .design-finishes-figure
            .screen-mask {
            -webkit-mask-image: url(/images/family/mac/mac-book-air/finish_mask__ew2v0s6p4qeu_small_2x.png);
          }
        }
      `}</style>
    </>
  )
}
