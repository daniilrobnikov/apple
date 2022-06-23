import { useWhileInView, useKeyframe } from '@/components/hooks/useScroll'

export default function CameraAudioAir() {
  const keyframe = useKeyframe('.section-camera-audio .section-headline')

  return (
    <>
      <article
        className='section section-camera-audio'
        aria-label='Camera-audio Article'
        data-anim-scroll-group='Section - Camera-audio'
      >
        <div className='section-content'>
          <div
            className='small-10 small-offset-1'
            data-analytics-section-engagement='name:camera and audio hero'
          >
            <h2 className='typography-section-eyebrow section-eyebrow'>
              Camera and audio
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
                Look sharp. <br />
                Sound great.
              </p>
            </div>
            <div className='masked-lockup'>
              <picture
                id='overview-camera-audio-camera-hw-1'
                className='overview-camera-audio-camera-hw masked-image-hardware loaded'
                data-lazy=''
                data-picture-loaded=''
              >
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_hw__ed21e28l1c8y_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_hw__ed21e28l1c8y_small_2x.jpg 2x'
                  media='(max-width:734px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_hw__ed21e28l1c8y_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_hw__ed21e28l1c8y_medium_2x.jpg 2x'
                  media='(max-width:1068px)'
                />
                <source
                  srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_hw__ed21e28l1c8y_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_hw__ed21e28l1c8y_large_2x.jpg 2x'
                  media='(min-width:0px)'
                />
                <img
                  src='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_hw__ed21e28l1c8y_large.jpg'
                  alt=''
                />
              </picture>
              <figure
                className='masked-lockup-figure fadein'
                data-anim-keyframe='{"start": "t - 80vh", "cssClass": "fadein", "disabledWhen": "no-enhance-xp"}'
              >
                <div className='masked-lockup-media'>
                  <picture
                    id='overview-camera-audio-camera-screen-1'
                    className='overview-camera-audio-camera-screen fallback-image loaded'
                    data-lazy=''
                    data-picture-loaded=''
                  >
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_screen__e0y48ei4zrma_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_screen__e0y48ei4zrma_small_2x.jpg 2x'
                      media='(max-width:734px)'
                    />
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_screen__e0y48ei4zrma_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_screen__e0y48ei4zrma_medium_2x.jpg 2x'
                      media='(max-width:1068px)'
                    />
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_screen__e0y48ei4zrma_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_screen__e0y48ei4zrma_large_2x.jpg 2x'
                      media='(min-width:0px)'
                    />
                    <img
                      src='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/camera_screen__e0y48ei4zrma_large.jpg'
                      alt=''
                    />
                  </picture>
                </div>
              </figure>
            </div>
            <div className='typography-section-copy section-copy large-centered large-10 small-12 camera-audio-copy'>
              <p>
                Make your best impression on video calls with the 1080p
                FaceTime&nbsp;HD camera and three‑mic array. Surround yourself
                with an expansive soundstage, compliments of the four‑speaker
                sound system with Spatial&nbsp;Audio. MacBook&nbsp;Air was
                designed to thrill the&nbsp;senses.
              </p>
            </div>
          </div>
        </div>
        <div
          className='subsection-grid margin-top-short'
          data-analytics-section-engagement='name:camera and audio tiles'
        >
          <div className='section-content'>
            <div className='grid'>
              <div className='tile tile-rounded grid-item grid-item-camera large-span-4 medium-span-6 small-span-12 with-icon'>
                <div className='tile-content'>
                  <picture
                    id='overview-camera-audio-icon-facetime-1'
                    className='overview-camera-audio-icon-facetime tile-icons icon-camera loaded'
                    data-lazy=''
                    data-picture-loaded=''
                  >
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_facetime__2f2y7gwbc8iy_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_facetime__2f2y7gwbc8iy_large_2x.png 2x'
                      media='(min-width:0px)'
                    />
                    <img
                      src='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_facetime__2f2y7gwbc8iy_large.png'
                      alt=''
                    />
                  </picture>
                  <p className='tile-headline typography-tile-headline'>
                    1080p FaceTime&nbsp;HD camera
                  </p>
                  <p className='tile-copy'>
                    Look your best with a camera that doubles the resolution and
                    low-light performance of the previous generation.
                  </p>
                </div>
              </div>
              <div className='tile tile-rounded grid-item grid-item-mic large-span-4 medium-span-6 small-span-12 with-icon'>
                <div className='tile-content'>
                  <picture
                    id='overview-camera-audio-icon-mic-1'
                    className='overview-camera-audio-icon-mic tile-icons icon-mic loaded'
                    data-lazy=''
                    data-picture-loaded=''
                  >
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_mic__fq2kgu1ztya2_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_mic__fq2kgu1ztya2_large_2x.png 2x'
                      media='(min-width:0px)'
                    />
                    <img
                      src='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_mic__fq2kgu1ztya2_large.png'
                      alt=''
                    />
                  </picture>
                  <p className='tile-headline typography-tile-headline'>
                    Three-mic array
                  </p>
                  <p className='tile-copy'>
                    Come through loud and clear on calls wherever you are,
                    thanks to the three-mic array with advanced beamforming
                    algorithms to capture clean&nbsp;audio.
                  </p>
                </div>
              </div>
              <div className='tile tile-rounded grid-item grid-item-sound large-span-4 medium-span-12 with-icon'>
                <div className='tile-content'>
                  <picture
                    id='overview-camera-audio-icon-spatial-audio-1'
                    className='overview-camera-audio-icon-spatial-audio tile-icons icon-sound'
                    data-lazy=''
                  >
                    <source
                      srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_spatial_audio__9lmvizbm08i2_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_spatial_audio__9lmvizbm08i2_large_2x.png 2x'
                      media='(min-width:0px)'
                    />
                    <img
                      src='https://www.apple.com/v/macbook-air-m2/b/images/overview/camera-audio/icon_spatial_audio__9lmvizbm08i2_large.png'
                      alt=''
                    />
                  </picture>
                  <p className='tile-headline typography-tile-headline'>
                    Four-speaker sound system with Spatial&nbsp;Audio
                  </p>
                  <p className='tile-copy'>
                    Immerse yourself in movies and music with improved stereo
                    separation and vocal clarity from two tweeters and two
                    ultrathin woofers. Spatial&nbsp;Audio with support for Dolby
                    Atmos places sound all around&nbsp;you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <style global jsx>{`
        .section-camera-audio {
          overflow: hidden;
        }

        .section-camera-audio .overview-camera-audio-camera-hw,
        .section-camera-audio .masked-lockup-media {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-camera-audio .masked-lockup-media {
          -webkit-mask-size: contain;
          -webkit-mask-position: center;
        }
        @media only screen and (min-width: 1068px) {
          .section-camera-audio {
            margin-top: 60px;
          }

          .section-camera-audio .overview-camera-audio-camera-hw {
            --p-width: 940px;
            --p-height: 570px;
          }

          .section-camera-audio .masked-lockup-media {
            --p-width: 750px;
            --p-height: 488px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-camera-audio {
            margin-top: 56px;
          }

          .section-camera-audio .overview-camera-audio-camera-hw {
            --p-width: 696px;
            --p-height: 422px;
          }

          .section-camera-audio .masked-lockup-media {
            --p-width: 555px;
            --p-height: 361px;
          }
        }
        @media only screen and (min-width: 734px) {
          .section-camera-audio .section-eyebrow,
          .section-camera-audio .camera-audio-copy {
            text-align: center;
          }

          .section-camera-audio .section-headline {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        }
      `}</style>

      <style global jsx>{`
        .masked-lockup-figure .masked-lockup-media {
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-image: url(https://www.apple.com/v/macbook-air-m2/b/images/overview/shared/display_camera_mask__lvz11hwkvney_large.png);
        }

        @media (-webkit-min-device-pixel-ratio: 1.5),
          (min-resolution: 144dpi),
          only screen and (-webkit-min-device-pixel-ratio: 1.5),
          only screen and (min-resolution: 1.5dppx) {
          .masked-lockup-figure .masked-lockup-media {
            -webkit-mask-image: url(/images/family/mac/mac-book-air/display_camera_mask__lvz11hwkvney_large_2x.png);
          }
        }

        @media only screen and (max-width: 1068px) {
          .masked-lockup-figure .masked-lockup-media {
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-image: url(https://www.apple.com/v/macbook-air-m2/b/images/overview/shared/display_camera_mask__lvz11hwkvney_medium.png);
          }
        }

        @media only screen and (max-width: 1068px) @media only screen and (max-width: 1068px) and (-webkit-min-device-pixel-ratio: 1.5),
          only screen and (max-width: 1068px) and (min-resolution: 1.5dppx),
          only screen and (max-width: 1068px) and (min-resolution: 144dpi) {
          .masked-lockup-figure .masked-lockup-media {
            -webkit-mask-image: url(/images/family/mac/mac-book-air/display_camera_mask__lvz11hwkvney_medium_2x.png);
          }
        }
      `}</style>
    </>
  )
}
