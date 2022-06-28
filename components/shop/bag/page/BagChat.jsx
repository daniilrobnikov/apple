import React from 'react'

export default function BagChat() {
  return (
    <>
      <div>
        <div className='rs-bag-chat-wrapper rs-bag-chat-hidekeyline'>
          <div className='as-chat rs-chat'>
            <div className='section-content rs-chat-content'>
              <div>
                Need some help?{' '}
                <a
                  href='#'
                  target='_blank'
                  className='as-chat-button as-buttonlink'
                >
                  Chat now
                  <span className='a11y'>(Opens in a new window)</span>
                </a>{' '}
                or call{' '}
                <span>
                  <a className='tel-link-mobile' href='tel:1‑800‑MY‑APPLE'>
                    1‑800‑MY‑APPLE
                  </a>
                </span>
                .
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .as-chat {
          padding: 27px 0;
          text-align: center;
          color: #1d1d1f;
        }
        .rs-chat {
          border-top: 1px solid #d2d2d7;
          padding: 0;
          text-align: left;
        }
        .rs-bag-chat-wrapper .rs-chat,
        .rs-bag .rs-faq .rs-chat {
          border-bottom: 1px solid #d2d2d7;
        }

        .rs-chat-content {
          padding: 21px 0;
        }

        @media only screen and (min-width: 734px) {
          .rs-bag-chat-wrapper,
          .rs-bag .rs-faq {
            margin-top: 48px;
          }
        }

        @media only screen and (max-width: 734px) {
          .rs-bag-chat-wrapper,
          .rs-bag .rs-faq {
            margin-top: 53px;
          }
        }
      `}</style>
    </>
  )
}
