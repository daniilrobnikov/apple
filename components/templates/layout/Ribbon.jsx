import StyledLink from './styled/StyledLink'

export default function Ribbon() {
  var link
  return (
    <div
      className='ribbon ribbon-blue-to-default'
      data-analytics-activitymap-region-id='ribbon'
    >
      <style global jsx>{`
        .ribbon {
          z-index: 2;
          width: 100%;
        }
        .ribbon {
          overflow: hidden;
          --ribbon-background-color: white;
          --ribbon-text-color: #1d1d1f;
          --ribbon-link-color: #0066cc;
          --ribbon-focus-color: rgba(0, 125, 250, 0.6);
        }
        .ribbon-blue-to-default {
          --ribbon-background-color-initial: #0071e3;
          --ribbon-text-color-initial: white;
          --ribbon-link-color-initial: white;
        }

        /* .ribbon-drop-wrapper */
        .ribbon-drop-wrapper {
          animation: ribbon-drop 0.8s ease-in-out forwards;
        }
        @keyframes ribbon-drop {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* .ribbon-content-wrapper */
        .ribbon-content-wrapper {
          text-align: center;
        }
        .ribbon .ribbon-content-wrapper {
          padding-top: 0.9411764706em;
          padding-bottom: 0.9411764706em;
        }
        .ribbon .ribbon-content-wrapper {
          background-color: var(--ribbon-background-color);
        }
        .ribbon-blue-to-default .ribbon-content-wrapper {
          background-color: var(--ribbon-background-color-initial);
          animation: animate-background-0071e3-f5f5f7 1s ease-in-out 1.8s
            forwards;
        }
        @keyframes animate-background-0071e3-f5f5f7 {
          0% {
            background-color: var(--ribbon-background-color-initial);
          }
          100% {
            background-color: var(--ribbon-background-color);
          }
        }

        /* .ribbon-copy */
        .ribbon .ribbon-copy {
          color: var(--ribbon-text-color);
        }
        .ribbon-blue-to-default .ribbon-copy {
          color: var(--ribbon-text-color-initial);
          animation: animate-color-white-1d1d1f 1s ease-in-out 1.8s forwards;
        }
        @keyframes animate-color-white-1d1d1f {
          0% {
            color: var(--ribbon-text-color-initial);
          }
          100% {
            color: var(--ribbon-text-color);
          }
        }
        .ribbon-copy {
          font-size: 12px;
          line-height: 1.3333733333;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }

        .ribbon-link {
          color: var(--ribbon-link-color);
          white-space: nowrap;
        }
        .ribbon-blue-to-default .ribbon-link {
          color: var(--ribbon-link-color-initial);
          animation: animate-color-white-0066cc 1s ease-in-out 1.8s forwards;
        }
        @keyframes animate-color-white-0066cc {
          0% {
            color: var(--ribbon-link-color-initial);
          }
          100% {
            color: var(--ribbon-link-color);
          }
        }
      `}</style>
      <div className='ribbon-drop-wrapper'>
        <div className='ribbon-content-wrapper'>
          <div className='section-content row'>
            <div className='column large-12 large-centered'>
              <p className='ribbon-copy'>
                Save on your new iPhone with special carrier deals at Apple.
                {link && (
                  <StyledLink
                    link={{
                      href: 'https://www.apple.com/us/shop/gift-cards/',
                      text: 'Find your deal',
                    }}
                  />
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
