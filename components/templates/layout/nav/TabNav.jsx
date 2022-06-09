export default function TabNav({ parentClass, tabs, tab, handleTabChange }) {
  return (
    <div className='rf-browser-navbar section-content'>
      <div className='tabnav as-l-container-mobileoverflow'>
        <ul data-core-tabs-tablist='' role='tablist' className='tabnav-items'>
          {tabs?.map((section, i) => (
            <li key={i} className='tabnav-item' role='none'>
              <button
                type='button'
                data-core-tabs-tab=''
                data-core-tabs-tab-selected=''
                role='tab'
                tabIndex={i === tab ? 0 : -1}
                aria-selected={i === tab}
                className={`tabnav-link ${i === tab ? 'current' : ''}`}
                data-autom='Browse by Product'
                onClick={() => handleTabChange(i)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <style global jsx>{`
        .tabnav {
          --scroll-container-paddle-width: 34px;
          --scroll-container-paddle-chevron-color: #1d1d1f;
          --scroll-container-border-color: #d2d2d7;
          --scroll-container-paddle-opacity: 0.8;
          --scroll-container-paddle-hover-opacity: 1;
          --scroll-container-paddle-hover-duration: 200ms;
          --scroll-container-paddle-fade-duration: 150ms;
          --scroll-container-paddle-horizontal-offset: -0.5px;
          --scroll-container-border-width: 1px;
          --scroll-container-safearea-offset: -10px;
          width: 100%;
          position: relative;
          overflow: hidden;
          height: 3.17647em;
          font-size: 17px;
          text-align: center;
          z-index: 1;
        }

        /* tabnav-items */
        .tabnav-items {
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          padding: 0 0 3.17647em;
          margin: 0
            calc(
              max(
                env(safe-area-inset-left) + var(--scroll-container-paddle-width) +
                  var(--scroll-container-safearea-offset),
                var(--scroll-container-paddle-width)
              )
            );
        }
        .rf-browser-navbar .tabnav-items {
          border-bottom: 1px solid #d2d2d7;
          padding: 0;
          overflow: visible;
          min-width: fit-content;
        }

        .tabnav-item {
          display: inline-block;
          border-bottom: 1px solid #d2d2d7;
          list-style: none;
          outline: none;
        }
        .tabnav-item:first-child {
          padding-left: 0;
        }
        .rf-browser-navbar .tabnav-item {
          border-bottom: none;
        }

        .tabnav-link {
          font-size: 17px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.021em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          padding: 9px 0 11px;
          margin-top: 2px;
          margin-bottom: 4px;
          color: #6e6e73;
          text-align: left;
          text-decoration: none;
          display: block;
          position: relative;
          z-index: 0;
        }
        .tabnav-link.current {
          pointer-events: none;
          color: #1d1d1f;
          text-decoration: none;
          cursor: default;
          z-index: 10;
        }
        .rf-browser-container .tabnav-link.current {
          pointer-events: auto;
        }

        .tabnav-link:after {
          left: 0;
          position: absolute;
          bottom: -5px;
          width: 100%;
          border-bottom: 1px solid transparent;
          content: '';
        }
        .tabnav-link.current:after {
          border-bottom-color: #1d1d1f;
        }

        @media only screen and (min-width: 1069px) {
          .tabnav-item {
            padding-left: 60px;
          }
        }
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .tabnav-item {
            padding-left: 50px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-browser-navbar {
            overflow-x: scroll;
            width: auto;
          }

          /* as-l-container-mobileoverflow */
          .as-l-container-mobileoverflow {
            -webkit-overflow-scrolling: touch;
            overflow-x: auto;
            white-space: nowrap;
            width: auto;
          }
          .rf-browser-navbar .as-l-container-mobileoverflow {
            width: auto;
            padding-left: 6.25%;
            padding-right: 6.25%;
            box-sizing: border-box;
            min-width: 100%;
          }

          .rf-browser-navbar .tabnav-items {
            overflow: initial;
            margin: 0;
            text-align: left;
          }
          .tabnav-item {
            padding-left: 30px;
          }
        }

        .${parentClass} > * {
          display: none;
        }
        .${parentClass} > .current {
          display: block;
        }
      `}</style>
    </div>
  )
}
