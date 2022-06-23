import LocalNav from '@/components/templates/layout/nav/LocalNav'
import Hero from '@/components/family/mac/macbook-air/page/hero/Hero'
import DesignAir from '@/components/family/mac/macbook-air/page/design/DesignAir'
import PerformanceAir from '@/components/family/mac/macbook-air/page/performance/PerformanceAir'
import DisplayAir from '@/components/family/mac/macbook-air/page/display/DisplayAir'
import CameraAudioAir from '@/components/family/mac/macbook-air/page/camera-audio/CameraAudioAir'
import KeyboadAir from '@/components/family/mac/macbook-air/page/keyboard/KeyboadAir'
import ConnectivityAir from '@/components/family/mac/macbook-air/page/connectivity/ConnectivityAir'

export default function MacBookAir() {
  return (
    <>
      <LocalNav
        page={{
          title: 'MacBook Air',
          eyebrow: 'M2 chip model',
          href: '/macbook-air/',
        }}
        menu={[
          {
            pages: [
              {
                title: 'Overview',
                href: '/macbook-air/',
              },
              {
                title: 'Why Mac',
                href: '/macbook-air/why-mac/',
              },
              {
                title: 'Tech Specs',
                href: '/macbook-air/specs/',
              },
            ],
          },
        ]}
        actions={[
          {
            href: '/shop/buy-mac/macbook-air/',
            type: 'button',
            text: 'View pricing',
          },
        ]}
      />

      <main>
        <Hero />
        <DesignAir />
        <PerformanceAir />
        <DisplayAir />
        <CameraAudioAir />
        <KeyboadAir />
        <ConnectivityAir />
      </main>

      <style global jsx>{`
        html {
          --enhanced-xp-css-token: 'enhance-xp';
          --enhanced-media-query: '(min-height: 500px) and (max-height: 1500px)';
          --headline-gradient-start: #194bb5;
          --headline-gradient-end: #009de4;
          --headline-gradient-shimmer: #5ac8fa;
        }

        body {
          position: relative;
        }
        details,
        main,
        summary {
          display: block;
        }
        audio,
        canvas,
        progress,
        video {
          vertical-align: initial;
        }

        @media only screen and (min-width: 1068px) {
          article.section {
            padding-bottom: 80px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          article.section {
            padding-bottom: 100px;
          }
        }
        @media only screen and (max-width: 734px) {
          .section-content {
            width: 374px;
            min-width: 374px;
          }
          article.section {
            padding-bottom: 60px;
          }
        }
      `}</style>
    </>
  )
}
