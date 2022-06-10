import Link from 'next/link'

export default function StyledLink({ link, styles }) {
  link.href = link.href || '#'
  styles = styles || ''

  if (link.type === 'button') {
    link.text = link.text || 'Buy'
    styles += ' button'
  } else {
    link.text = link.text || 'Learn more'
    styles += ' icon-after'
    if (!link.href.startsWith('/')) {
      styles += ' icon-external'
    }
  }
  return (
    <>
      <Link href={link.href}>
        <a
          className={`icon ${styles}`}
          target={
            link.target || styles.includes('external') ? '_blank' : '_self'
          }
          rel={
            link.target || styles.includes('external')
              ? 'noopener noreferrer'
              : 'nofollow'
          }
          data-analytics-title={link.text}
          aria-label={link.text.toLowerCase()}
        >
          {link.text}
          {styles.includes('external') && (
            <span className='a11y'>(Opens in a new window)</span>
          )}
        </a>
      </Link>

      <style global jsx>{`
        a,
        .link {
          color: #06c;
          letter-spacing: inherit;
        }
        a:link,
        a:visited,
        .link:link,
        .link:visited {
          text-decoration: none;
        }
        a:hover,
        .link:hover {
          text-decoration: underline;
        }

        /* .icon-after::after */
        .icon::before,
        .icon::after,
        .more::before,
        .more::after {
          font-family: 'SF Pro Icons';

          color: inherit;
          font-style: normal;
          font-weight: inherit;
          font-size: inherit;
          line-height: 1;
          text-decoration: none;

          display: inline-block;
          position: relative;
          z-index: 1;

          background-color: currentColor;
          -webkit-mask-repeat: no-repeat;
          margin-right: 0.3em;
          height: 1em;
          width: 1em;
          top: unset;
        }
        .icon-after::after,
        .icon-before:before {
          content: '';
        }
        .icon-after::after {
          position: absolute;
        }

        .icon-after[target='_self']::after {
          -webkit-mask-image: url(data:image/svg+xml;base64,${btoa(
            `<svg
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0.75'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
            ></path>
          </svg>`
          )});
          transform: scale(0.7);
          margin-top: 0.3em;
        }

        /* icon-external */
        .icon-external::after {
          -webkit-mask-image: url(data:image/svg+xml;base64,${btoa(
            `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>`
          )});
          transform: rotate(45deg);
          margin-top: 4.5px;
          margin-left: 0.1em;
        }

        .icon-pluscircle::after {
          -webkit-mask-image: url(data:image/svg+xml;base64,${btoa(
            `
  <svg
    stroke='currentColor'
    fill='currentColor'
    stroke-width='0.3'
    viewBox='-2 -2 20 20'
    height='1em'
    width='1em'
    overflow='visible'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'></path>
    <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'></path>
  </svg>
            `
          )});
          -webkit-mask-position: center;
          margin-left: 0.3em;
          transform: scale(1.3);
          transition: transform 0.56s ease;
          transform-origin: center;
          stroke: currentColor;
          stroke-width: 0.5;
          overflow: visible;
        }

        .icon-filter::before {
          -webkit-mask-image: url(data:image/svg+xml;base64,${btoa(
            `
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
            `
          )});
          -webkit-mask-size: contain;
          vertical-align: middle;
          transform: scale(1.2);
          margin-bottom: 0.1em;
          transform-origin: center right;
        }
      `}</style>
      <style global jsx>{`
        .button {
          cursor: pointer;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          font-size: 17px;
          line-height: 1.1764805882;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          min-width: 28px;
          padding: 8px 16px;
          border-radius: 980px;
          background: #0071e3;
          color: #fff;
        }
        .button-neutral {
          background: #1d1d1f;
          color: #fff;
        }
        .button-secondary {
          background: #e8e8ed;
          color: #000;
        }
        .button-reduced {
          font-size: 12px;
          line-height: 1.33337;
          letter-spacing: -0.01em;
          min-width: 23px;
          padding: 4px 11px;
        }

        .button:hover {
          background: #0077ed;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}
