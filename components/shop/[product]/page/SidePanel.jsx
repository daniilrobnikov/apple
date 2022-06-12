import StyledLink from '@/components/templates/layout/styled/StyledLink'

export default function SidePanel() {
  return (
    <>
      <div className='column large-6 small-12 rs-cto-side-panel'>
        <div className='rf-configuration-sticky'>
          <img
            width='627'
            height='566'
            alt=''
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-cto-hero-202104?wid=1254&amp;hei=1132&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617479508000'
            srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-cto-hero-202104?wid=627&amp;hei=566&amp;fmt=jpeg&amp;qlt=95&amp;.v=1617479508000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-cto-hero-202104?wid=1254&amp;hei=1132&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617479508000 2x'
            className='rf-configuration-hero-image'
          />
          <div className='rf-configuration-viewgallery typography-body-reduced'>
            <button
              type='button'
              className='as-buttonlink rf-configuration-viewgallerybtn'
              data-autom='viewGalleryLink'
            >
              View gallery
            </button>
          </div>
          <div className='rf-flagship-buystrip'>
            <ul className='row as-buystrip'>
              <li className='column small-12 as-buystrip-item'>
                <div className='as-svgicon-container'>
                  <svg
                    viewBox='0 0 35 35'
                    className='as-svgicon as-svgicon-shipping as-svgicon-base as-svgicon-shippingbase'
                    role='img'
                    aria-hidden='true'
                    width='35px'
                    height='35px'
                  >
                    <path fill='none' d='M0 0h35v35H0z'></path>
                    <path d='M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z'></path>
                  </svg>
                </div>
                <p className='as-buystrip-title'>
                  <span>
                    Get free delivery, or pick up available items at an
                    Apple&nbsp;Store
                  </span>
                </p>
              </li>
              <li className='column small-12 as-buystrip-item'>
                <div className='as-svgicon-container'>
                  <svg
                    viewBox='0 0 35 35'
                    className='as-svgicon as-svgicon-return as-svgicon-base as-svgicon-returnbase'
                    role='img'
                    aria-hidden='true'
                    width='35px'
                    height='35px'
                  >
                    <path fill='none' d='M0 0h35v35H0z'></path>
                    <path
                      d='M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z'
                      fill='none'
                    ></path>
                    <path d='M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z'></path>
                    <path d='M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z'></path>
                  </svg>
                </div>
                <p className='as-buystrip-title'>
                  <span>Free and easy returns</span>
                </p>
              </li>
            </ul>
          </div>
          <div className='rf-flagship-chatcontent'>
            <div className='as-chat as-chat-buyflow'>
              <div className='as-svgicon-container'>
                <svg
                  viewBox='0 0 35 35'
                  className='as-svgicon as-svgicon-chat as-svgicon-base as-svgicon-chatbase'
                  role='img'
                  aria-hidden='true'
                  width='35px'
                  height='35px'
                >
                  <path fill='none' d='M0 .213h35v35H0z'></path>
                  <path d='M14.4 21.048a13.284 13.284 0 01-1.344.076q-.411 0-.829-.025l-.334-.02-.279.185a15.461 15.461 0 01-4.388 2.109 16.182 16.182 0 001.365-2.054l.484-.923-.941-.446a7.127 7.127 0 01-4.384-6.276c0-4.114 4.274-7.461 9.529-7.461s9.529 3.347 9.529 7.461c0 .059-.009.116-.011.174.33-.029.664-.046 1-.046 0-.043.008-.085.008-.128 0-4.677-4.67-8.461-10.529-8.461S2.75 9 2.75 13.674a8.1 8.1 0 004.95 7.181 18.048 18.048 0 01-1.573 2.305c-.481.6-.236 1.28.613 1.28 1.17 0 3.557-1.1 5.425-2.343q.448.027.888.027c.455 0 .9-.028 1.34-.069-.011-.157-.029-.312-.029-.472 0-.183.018-.357.036-.535z'></path>
                  <path d='M32.25 21.583c0-3.749-3.745-6.782-8.443-6.782h-.1c-.351 0-.694.027-1.032.063-3.876.413-6.886 2.906-7.269 6.036a5.584 5.584 0 00-.042.678c0 .117.015.23.021.345.222 3.737 3.994 6.428 8.6 6.428.235 0 .473-.007.712-.021a10.723 10.723 0 004.35 1.878c.681 0 .878-.543.492-1.026a14.459 14.459 0 01-1.263-1.848 6.5 6.5 0 003.974-5.751zm-4.4 4.852l-.942.446.484.923a10.673 10.673 0 00.759 1.2 14.28 14.28 0 01-2.9-1.5l-.279-.185-.334.02c-.219.013-.437.019-.653.019-4.21 0-7.515-2.462-7.614-5.629 0-.048-.009-.1-.009-.144a4.521 4.521 0 01.1-.922c.5-2.386 2.87-4.288 5.908-4.75a9.506 9.506 0 011.092-.1c.113 0 .225-.013.339-.013 4.1 0 7.443 2.594 7.443 5.782a5.517 5.517 0 01-3.394 4.853z'></path>
                </svg>
              </div>
              <div className='as-chat-buyflow-container'>
                <div className='as-chat-buyflow-title'>
                  Have questions about buying a Mac?
                </div>
                <div className='as-chat-buyflow-content'>
                  <StyledLink
                    link={{
                      href: 'https://contactretail.apple.com/Help',
                      text: 'Chat with a Mac Specialist',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .rs-cto-side-panel {
          height: auto;
        }

        .rf-configuration-sticky {
          position: sticky;
          text-align: center;
          top: 0;
        }

        .rf-configuration-hero-image {
          width: 410px;
          height: auto;
          margin-top: 25px;
          cursor: pointer;
        }

        .rf-configuration-viewgallery {
          width: 100%;
          text-align: center;
          padding: 22px 0;
        }

        .rf-configuration-viewgallery .rf-configuration-viewgallerybtn {
          margin-bottom: 35px;
        }

        .as-buystrip {
          display: flex;
          text-align: center;
          margin: 14px 0 26px;
          width: 100%;
        }

        .as-buystrip-item {
          flex: 1;
          color: #1d1d1f;
        }

        .as-buystrip .as-svgicon {
          display: inline-block;
        }
        .as-svgicon-container .as-svgicon-base {
          margin: -6px;
        }

        .as-buystrip-title {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 600;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          margin: 6px 0 0;
        }

        .as-chat-buyflow {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          padding-left: 0;
          padding-top: 19px;
          text-align: left;
        }
        .rf-flagship-chatcontent .as-actiontray-chatonline,
        .rf-flagship-chatcontent .as-chat {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          /* text-align: center; */
        }
        .rf-configuration-sticky .rf-flagship-chatcontent .as-chat-buyflow {
          border-top: 1px solid #d2d2d7;
        }

        .as-chat-buyflow-container {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          padding: 6px 12px 0;
        }

        .as-chat-buyflow .as-svgicon {
          display: inline-block;
        }

        .as-chat-buyflow-title {
          font-weight: 600;
          color: #1d1d1f;
        }

        @media only screen and (min-width: 735px) {
          .rf-configuration-sticky {
            margin-right: 60px;
            margin-bottom: 50px;
          }

          .rf-configuration-hero-image {
            width: 87.5%;
          }

          .as-chat-buyflow .as-svgicon-container {
            margin-top: 12px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-configuration-hero-image {
            width: 224px;
          }

          .rf-configuration-viewgallery {
            padding-bottom: 0;
          }

          /* as-chat */
          .as-chat-buyflow {
            flex-direction: column;
            text-align: center;
          }
          .rf-flagship-chatcontent .as-actiontray-chatonline,
          .rf-flagship-chatcontent .as-chat {
            margin-top: 12px;
          }
          .rf-flagship-chatcontent .as-chat {
            border-top: 1px solid #d2d2d7;
          }

          .as-chat-buyflow .as-svgicon-container {
            margin-top: 0;
          }

          .as-buystrip {
            display: block;
          }
          .as-buystrip-title {
            margin-bottom: 22px;
          }
        }
      `}</style>
    </>
  )
}
