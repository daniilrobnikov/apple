import StyledLink from '../styled/StyledLink'

export default function QuickLinks({ links }) {
  return (
    <>
      <div className='quicklinks'>
        <h2 className='quicklinks-title'>Quick Links</h2>
        <div className='quicklinks-items'>
          <ul
            className='quicklinks-list'
            role='navigation'
            data-autom='quickLinks'
            aria-label='Quicklinks'
          >
            {links.map((link, i) => (
              <li className='quicklinks-item' key={i}>
                <StyledLink link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .quicklinks {
          position: relative;
          max-width: 980px;
          padding: 0 22px 27px;
          margin-left: auto;
          margin-right: auto;
        }

        .quicklinks-title {
          padding-top: 0;
          padding-bottom: 20px;
        }

        .quicklinks-items,
        .quicklinks-list {
          margin: 0;
        }
        .quicklinks-item {
          display: inline-block;
          padding-right: 8px;
          padding-bottom: 10px;
        }

        .quicklinks-button {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        @media only screen and (min-width: 735px) {
          .quicklinks-title {
            font-size: 28px;
            line-height: 1.14286;
            letter-spacing: 0.007em;
          }
        }
        @media only screen and (max-width: 734px) {
          .quicklinks-title {
            font-size: 21px;
            line-height: 1.19048;
            letter-spacing: 0.011em;
          }
          .quicklinks-items {
            overflow: hidden;
            height: 40px;
            padding-bottom: 18px;
          }
          .rs-quicklinks-list {
            width: 100%;
            vertical-align: top;
            display: inline-flex;
            overflow-x: auto;
          }
        }
      `}</style>
    </>
  )
}
