import { useWhileInView, useKeyframe } from '@/components/hooks/useScroll'
export default function PerformanceAirHero() {
  const keyframe = useKeyframe('.section-performance .subsection-hero')
  return (
    <>
      <div
        className='subsection-hero'
        data-analytics-section-engagement='name:performance hero'
      >
        <picture
          id='overview-performance-performance-hero-hw-1'
          className='overview-performance-performance-hero-hw image-performance image-hardware image-screen loaded'
          data-lazy=''
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_hw__eoi01ffdtkmu_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_hw__eoi01ffdtkmu_small_2x.jpg 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_hw__eoi01ffdtkmu_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_hw__eoi01ffdtkmu_medium_2x.jpg 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_hw__eoi01ffdtkmu_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_hw__eoi01ffdtkmu_large_2x.jpg 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_hw__eoi01ffdtkmu_large.jpg'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-xcode-1'
          className='overview-performance-performance-hero-screen-xcode image-xcode image-screen loaded js-will-change'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["50px","-50px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["50px","-50px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [50, -50],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_xcode__xfggqdrtfaqq_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_xcode__xfggqdrtfaqq_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_xcode__xfggqdrtfaqq_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_xcode__xfggqdrtfaqq_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_xcode__xfggqdrtfaqq_large.png'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-affinity-1'
          className='overview-performance-performance-hero-screen-affinity image-affinity image-screen loaded js-will-change'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["120px","-120px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["50px","-50px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [120, -120],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_affinity__b0acuwlqkmfm_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_affinity__b0acuwlqkmfm_small_2x.png 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_affinity__b0acuwlqkmfm_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_affinity__b0acuwlqkmfm_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_affinity__b0acuwlqkmfm_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_affinity__b0acuwlqkmfm_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_affinity__b0acuwlqkmfm_large.png'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-keynote-1'
          className='overview-performance-performance-hero-screen-keynote image-keynote image-screen loaded'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["50px","-50px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["20px","-20px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [50, -50],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_keynote__cxz3s3tyfxm6_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_keynote__cxz3s3tyfxm6_small_2x.png 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_keynote__cxz3s3tyfxm6_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_keynote__cxz3s3tyfxm6_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_keynote__cxz3s3tyfxm6_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_keynote__cxz3s3tyfxm6_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_keynote__cxz3s3tyfxm6_large.png'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-powerpoint-1'
          className='overview-performance-performance-hero-screen-powerpoint image-powerpoint image-screen loaded js-will-change'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["60px","-60px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["30px","-30px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [60, -60],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_powerpoint__e40saovyopw2_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_powerpoint__e40saovyopw2_small_2x.png 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_powerpoint__e40saovyopw2_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_powerpoint__e40saovyopw2_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_powerpoint__e40saovyopw2_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_powerpoint__e40saovyopw2_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_powerpoint__e40saovyopw2_large.png'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-project-1'
          className='overview-performance-performance-hero-screen-project image-project image-screen loaded js-will-change'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["80px","-80px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["50px","-50px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [80, -80],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_project__cb9qi2oq3tyq_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_project__cb9qi2oq3tyq_small_2x.png 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_project__cb9qi2oq3tyq_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_project__cb9qi2oq3tyq_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_project__cb9qi2oq3tyq_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_project__cb9qi2oq3tyq_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_project__cb9qi2oq3tyq_large.png'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-teams-1'
          className='overview-performance-performance-hero-screen-teams image-teams image-screen loaded js-will-change'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["60px","-60px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["30px","-30px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [60, -60],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_teams__gavoj5z24guy_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_teams__gavoj5z24guy_small_2x.png 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_teams__gavoj5z24guy_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_teams__gavoj5z24guy_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_teams__gavoj5z24guy_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_teams__gavoj5z24guy_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_teams__gavoj5z24guy_large.png'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-aftereffects-1'
          className='overview-performance-performance-hero-screen-aftereffects image-aftereffects image-screen loaded'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["130px","-130px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["100px","-100px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [130, -130],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_aftereffects__b6piah1h1wuq_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_aftereffects__b6piah1h1wuq_small_2x.png 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_aftereffects__b6piah1h1wuq_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_aftereffects__b6piah1h1wuq_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_aftereffects__b6piah1h1wuq_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_aftereffects__b6piah1h1wuq_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_aftereffects__b6piah1h1wuq_large.png'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-safari-1'
          className='overview-performance-performance-hero-screen-safari image-safari image-screen loaded js-will-change'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["100px","-100px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["70px","-70px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [100, -100],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_safari__eqf7qma3id8i_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_safari__eqf7qma3id8i_small_2x.png 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_safari__eqf7qma3id8i_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_safari__eqf7qma3id8i_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_safari__eqf7qma3id8i_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_safari__eqf7qma3id8i_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_safari__eqf7qma3id8i_large.png'
            alt=''
          />
        </picture>
        <picture
          id='overview-performance-performance-hero-screen-music-1'
          className='overview-performance-performance-hero-screen-music image-music image-screen loaded js-will-change'
          data-lazy=''
          data-anim-keyframe-1='{"start":"t - 150vh", "end":"b + 50vh", "cssClass":"js-will-change", "toggle": "true", "disabledWhen":["no-enhance-xp"]}'
          data-anim-keyframe-2='{"start":"t - 100vh", "end":"b", "y":["130px","-130px"], "disabledWhen":["no-enhance-xp"], "breakpointMask": "LM"}'
          data-anim-keyframe-3='{"start":"t - 100vh", "end":"b", "y":["100px","-100px"], "disabledWhen":["no-enhance-xp"],"breakpointMask": "S"}'
          style={{
            transform: `translateY(${useWhileInView(
              [130, -130],
              keyframe,
              'easeInOutCubic'
            )}px)`,
          }}
          data-picture-loaded=''
        >
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_music__fgaff379lmq2_small.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_music__fgaff379lmq2_small_2x.png 2x'
            media='(max-width:734px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_music__fgaff379lmq2_medium.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_music__fgaff379lmq2_medium_2x.png 2x'
            media='(max-width:1068px)'
          />
          <source
            srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_music__fgaff379lmq2_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_music__fgaff379lmq2_large_2x.png 2x'
            media='(min-width:0px)'
          />
          <img
            src='https://www.apple.com/v/macbook-air-m2/b/images/overview/performance/performance_hero_screen_music__fgaff379lmq2_large.png'
            alt=''
          />
        </picture>
      </div>

      <style global jsx>{`
        .section-performance .subsection-hero {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }

        .section-performance .image-screen {
          display: block;
          position: absolute;
          width: var(--p-width);
          height: var(--p-height);
        }

        .section-performance .image-hardware {
          top: 0;
          left: 0;
        }

        @media only screen and (min-width: 1068px) {
          .section-performance .subsection-hero {
            margin-top: -44px;
            width: 2034px;
            height: 1110px;
          }

          .section-performance .image-hardware {
            --p-width: 2034px;
            --p-height: 1110px;
          }

          .section-performance .image-xcode {
            --p-width: 464px;
            --p-height: 332px;
            top: 93px;
            right: auto;
            bottom: auto;
            left: 174px;
          }

          .section-performance .image-affinity {
            --p-width: 470px;
            --p-height: 332px;
            top: 150px;
            right: auto;
            bottom: auto;
            left: 360px;
          }

          .section-performance .image-keynote {
            --p-width: 532px;
            --p-height: 316px;
            top: 694px;
            right: auto;
            bottom: auto;
            left: 123px;
          }

          .section-performance .image-powerpoint {
            --p-width: 464px;
            --p-height: 320px;
            top: 507px;
            right: auto;
            bottom: auto;
            left: 1084px;
          }

          .section-performance .image-project {
            --p-width: 356px;
            --p-height: 270px;
            top: 550px;
            right: auto;
            bottom: auto;
            left: 533px;
          }

          .section-performance .image-teams {
            --p-width: 362px;
            --p-height: 238px;
            top: 247px;
            right: auto;
            bottom: auto;
            left: 1137px;
          }

          .section-performance .image-aftereffects {
            --p-width: 638px;
            --p-height: 442px;
            top: 665px;
            right: auto;
            bottom: auto;
            left: 1395px;
          }

          .section-performance .image-safari {
            --p-width: 542px;
            --p-height: 416px;
            top: 154px;
            right: auto;
            bottom: auto;
            left: 1347px;
          }

          .section-performance .image-music {
            --p-width: 224px;
            --p-height: 268px;
            top: 130px;
            right: auto;
            bottom: auto;
            left: 889px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-performance .subsection-hero {
            margin-top: 24px;
            width: 1669px;
            height: 912px;
          }

          .section-performance .image-hardware {
            --p-width: 1669px;
            --p-height: 912px;
          }

          .section-performance .image-xcode {
            --p-width: 376px;
            --p-height: 269px;
            top: 70px;
            right: auto;
            bottom: auto;
            left: 90px;
          }

          .section-performance .image-affinity {
            --p-width: 441px;
            --p-height: 329px;
            top: 96px;
            right: auto;
            bottom: auto;
            left: 290px;
          }

          .section-performance .image-keynote {
            --p-width: 430px;
            --p-height: 257px;
            top: 572px;
            right: auto;
            bottom: auto;
            left: 97px;
          }

          .section-performance .image-powerpoint {
            --p-width: 374px;
            --p-height: 258px;
            top: 417px;
            right: auto;
            bottom: auto;
            left: 810px;
          }

          .section-performance .image-project {
            --p-width: 290px;
            --p-height: 221px;
            top: 456px;
            right: auto;
            bottom: auto;
            left: 437px;
          }

          .section-performance .image-teams {
            --p-width: 293px;
            --p-height: 192px;
            top: 157px;
            right: auto;
            bottom: auto;
            left: 892px;
          }

          .section-performance .image-aftereffects {
            --p-width: 516px;
            --p-height: 358px;
            top: 550px;
            right: auto;
            bottom: auto;
            left: 996px;
          }

          .section-performance .image-safari {
            --p-width: 440px;
            --p-height: 338px;
            top: 76px;
            right: auto;
            bottom: auto;
            left: 1006px;
          }

          .section-performance .image-music {
            --p-width: 181px;
            --p-height: 217px;
            top: 295px;
            right: auto;
            bottom: auto;
            left: 711px;
          }
        }
      `}</style>
    </>
  )
}
