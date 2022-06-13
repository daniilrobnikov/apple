import StyledLink from '@/components/templates/layout/styled/StyledLink'
import React from 'react'

export default function Hero() {
  return (
    <>
      <section className='section-hero'>
        <h1 id='page-title' className='typography-headline-elevated'>
          Compare Mac models
        </h1>
        <p className='typography-intro intro-cta'>
          <a
            data-analytics-click='prop3:see all models'
            data-analytics-title='see all models'
            className='modal-trigger icon'
          >
            See all models
          </a>
          <StyledLink link={{ href: '/shop/buy-mac', text: 'Shop Mac' }} />
        </p>
        <div className='typography-intro ac-gf-buystrip'>
          <span>Get help choosing. </span>
          <StyledLink
            link={{
              href: 'https://contactretail.apple.com/Help',
              text: 'Chat with a Specialist',
            }}
          />
        </div>
      </section>

      <style global jsx>{`
        .section-hero {
          text-align: center;
        }

        .section-hero .typography-intro.intro-cta {
          margin-top: 17px;
        }

        .section-hero .typography-intro.intro-cta .icon {
          padding: 0 0.5em;
        }

        @media only screen and (min-width: 1069px) {
          .section-hero {
            margin: 84px 0 64px;
          }
          .section-hero .typography-intro {
            margin-top: 29px;
          }
        }
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .section-hero {
            margin: 82px 0 63px;
          }
          .section-hero .typography-intro {
            margin-top: 25px;
          }
        }
        @media only screen and (max-width: 734px) {
          .section-hero {
            margin: 66px 0 26px;
          }

          .section-hero h1 {
            max-width: 230px;
            margin: 0 auto;
          }

          .section-hero .typography-intro {
            margin-top: 15px;
          }
          .section-hero .typography-intro.intro-cta {
            margin-top: 14px;
          }

          .section-hero .typography-intro.ac-gf-buystrip .icon {
            display: block;
          }
        }
      `}</style>
    </>
  )
}
