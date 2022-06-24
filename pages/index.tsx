import Image from 'next/image'
import StyledLink from '@/components/templates/layout/styled/StyledLink'
import Metadata from '@/components/templates/layout/global/head'

export default function Home() {
  const page = {
    _id: '62b09bee330e790433e42d9e',
    title: 'Apple',
    description:
      'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.',
    keywords:
      'apple, iphone, mac, ipad, apple watch, apple tv, accessories, entertainment, expert device support',
    url: '/',
    createdAt: '2022-06-20T16:10:22.821Z',
    updatedAt: '2022-06-20T16:10:22.821Z',
  }
  return (
    <>
      <Metadata page={page} />
      <main className='main'>
        <h1 className='visuallyhidden'>{page.title}</h1>
        <section
          className='homepage-section collection-module'
          data-module-template='ribbon'
        >
          <div
            data-unit-id='unicef-relief-fund'
            data-analytics-activitymap-region-id='ribbon-unicef-relief-fund'
          >
            <div className='section-content'>
              <figure
                className='logo-image logo-image-unicef-relief-fund-unicef-logo-dark'
                role='text'
              >
                <Image
                  src='/images/general/home/unicef_logo_dark__ejvlglygb3ee_large_2x.png'
                  alt='Unicef'
                  layout='fill'
                  objectFit='contain'
                />
              </figure>
              <StyledLink
                link={{
                  href: 'itmss://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/buyCharityGiftWizard?charity=10220',
                  text: 'Donate to support families affected by the war in Ukraine',
                }}
              />
            </div>
          </div>
        </section>

        <style global jsx>{`
          /* icon */
          @media only screen and (min-width: 735px) {
            .main
              [data-module-template='ribbon']
              [data-unit-id='unicef-relief-fund']
              .icon {
              margin-left: 14px;
            }
          }
          @media only screen and (max-width: 734px) {
            .main
              [data-module-template='ribbon']
              [data-unit-id='unicef-relief-fund']
              .icon {
              margin-top: 4px;
              max-width: 215px;
            }
          }
        `}</style>
        <style jsx>{`
          /* [data-module-template] */
          .main [data-module-template],
          .main [data-unit-id] {
            position: relative;
          }

          .main [data-module-template]:nth-child(1),
          .main [data-unit-id]:nth-child(1) {
            z-index: 42;
          }

          /* [data-unit-id] */
          .main [data-module-template='ribbon'] [data-unit-id],
          .main [data-module-template='ribbon'] .module-content {
            width: 100%;
            height: auto;
          }
          .main
            [data-module-template='ribbon']
            [data-unit-id='unicef-relief-fund'] {
            background-color: #f5f5f7;
          }
          .main [data-module-template].collection-module [data-unit-id] {
            box-sizing: border-box;
            padding-top: 0px;
            border-style: none;
            overflow: visible;
            border-left-width: 0px;
            border-right-width: 0px;
          }

          /* section-content */
          .main
            [data-module-template='ribbon']
            [data-unit-id='unicef-relief-fund']
            .section-content {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            padding: 20px 0;
            text-align: center;
          }

          /* .logo-image */
          .logo-image-unicef-relief-fund-unicef-logo-dark {
            width: 122px;
            height: 32px;
            position: relative;
          }

          /* mobile ////////////////////////// */
          @media only screen and (max-width: 734px) {
            /* section-content */
            .main
              [data-module-template='ribbon']
              [data-unit-id='unicef-relief-fund']
              .section-content {
              flex-direction: column;
              padding: 15px 0;
            }

            /* logo-image */
            .logo-image-unicef-relief-fund-unicef-logo-dark {
              width: 106px;
              height: 28px;
            }
          }
        `}</style>
      </main>
    </>
  )
}

export async function getStaticProps() {
  // const pageRes = await fetch(`${process.env.API_URL}/pages?url=/`)
  // const page = await pageRes.json()

  return {
    props: {
      // page: page.data[0],
    },
  }
}
