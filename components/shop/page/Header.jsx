import StyledLink from '@/components/templates/layout/styled/StyledLink'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='section-content shop-header-container'>
      <div className='row'>
        <div className='column large-8 small-12 shop-header-section'>
          <h1 className='header'>Store.</h1>{' '}
          <div className='subhead'>
            The best way to buy the products you love.
          </div>
        </div>
        <div className='column large-4 small-12 shop-chatstore-section'>
          <div id='generic-2'>
            <div aria-describedby='chat with specialist container'>
              <div className='chaticon-container'>
                <Image
                  src='/images/shop/overview/header/store-chat-specialist-icon_AV1.jpeg'
                  layout='fill'
                  objectFit='contain'
                  alt='Chat Specialist Icon'
                />
              </div>
              <div>
                <div className='shop-chat-title'>Need shopping help?</div>
                <StyledLink
                  link={{
                    href: 'https://contactretail.apple.com/Solutions',
                    text: 'Ask a Specialist',
                  }}
                />
              </div>
            </div>
            <div aria-describedby='find nearest store container'>
              <div className='chaticon-container'>
                <svg
                  viewBox='0 0 35 35'
                  className='as-svgicon as-svgicon-applestore as-svgicon-base as-svgicon-applestorebase'
                  role='img'
                  aria-hidden='true'
                  width='35px'
                  height='35px'
                >
                  <path fill='none' d='M0 0h35v35H0z'></path>
                  <path d='M17.5 32.217a1.136 1.136 0 01-1-.576l-1.812-2.525c-.053-.087-.1-.116-.156-.116H10.5A4.5 4.5 0 016 24.5V10.518a4.5 4.5 0 014.5-4.5h14a4.5 4.5 0 014.5 4.5V24.5a4.5 4.5 0 01-4.5 4.5h-4.036a.149.149 0 00-.129.074l-1.867 2.609a1.108 1.108 0 01-.968.534zM10.5 7A3.519 3.519 0 007 10.518V24.5a3.5 3.5 0 003.5 3.5h4.036a1.151 1.151 0 011 .576l1.808 2.524c.128.213.211.17.284.042l1.868-2.61a1.125 1.125 0 01.968-.532H24.5a3.5 3.5 0 003.5-3.5V10.518A3.519 3.519 0 0024.5 7z'></path>
                  <path d='M21.35 14.635a2.326 2.326 0 00-1.078 1.94 2.215 2.215 0 001.353 2.051 4.733 4.733 0 01-.693 1.444c-.429.617-.9 1.246-1.584 1.246s-.858-.408-1.661-.408c-.77 0-1.045.419-1.672.419s-1.078-.573-1.584-1.29a6.312 6.312 0 01-1.056-3.363 2.719 2.719 0 012.541-3.021c.682 0 1.232.441 1.65.441s1.023-.463 1.782-.463a2.348 2.348 0 012.002 1.004zm-3.729-1.114c-.055 0-.1-.011-.143-.011 0-.033-.011-.11-.011-.187a2.26 2.26 0 01.561-1.378 2.19 2.19 0 011.485-.772 1.074 1.074 0 01.011.2A2.329 2.329 0 0119 12.794a1.967 1.967 0 01-1.379.727z'></path>
                </svg>
              </div>
              <div>
                <div className='shop-chat-title'>Visit an Apple Store</div>
                <StyledLink
                  link={{
                    href: '/retail',
                    text: 'Find one near you',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .shop-header-container {
          position: relative;
          min-height: 228px;
        }

        /* .header */
        .header,
        .subhead {
          font-weight: 600;
          font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          display: inline;
        } /* .subhead */
        .subhead {
          color: #6e6e73;
        }

        /* shop-chatstore-section */
        .shop-chatstore-section {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          right: 0;
        }

        /* #generic-2 > */
        #generic-2 > * {
          font-size: 14px;
          line-height: 1.42859;
          letter-spacing: -0.016em;
          display: flex;
          flex-direction: row;
        }

        /* .chaticon-container */
        .chaticon-container {
          width: 36px;
          height: 36px;
          margin-right: 8px;
          position: relative;
        }

        /* rf-shop-chat-title */
        .shop-chat-title {
          font-weight: 600;
        }

        /* desktop & tablet */
        @media only screen and (min-width: 735px) {
          /* .shop-header-section */
          .shop-header-section {
            max-width: 640px;
            padding: 80px 0 64px;
          }

          /* .subhead */
          .header,
          .subhead {
            font-size: 48px;
            line-height: 1.08349;
            letter-spacing: -0.003em;
          }

          /* shop-chatstore-section */
          .shop-chatstore-section {
            align-content: flex-end;
            padding: 90px 0 54px;
            position: absolute;
          }

          /* #generic-2 > */
          #generic-2 > * {
            padding-bottom: 16px;
          }
        }
        /* mobile */
        @media only screen and (max-width: 734px) {
          .shop-header-container {
            min-height: auto;
          }
          /* .shop-header-section */
          .shop-header-section {
            max-width: auto;
            padding: 56px 0 24px;
          }

          /* .header, .subhead */
          .header,
          .subhead {
            font-size: 32px;
            line-height: 1.125;
            letter-spacing: 0.004em;
          }

          /* shop-chatstore-section */
          .shop-chatstore-section {
            align-content: flex-start;
            position: relative;
            padding: 0 0 28px;
          }

          /* #generic-2 > */
          #generic-2 > * {
            padding: 7px;
          }
        }
      `}</style>
    </div>
  )
}
