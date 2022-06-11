import StyledLink from '../styled/StyledLink'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// TODO: Add children for change tray variations

export default function LocalNav({ eyebrow, title, menu, actions }) {
  const router = useRouter()

  const { asPath } = router

  if (menu) {
    var delay = ''
    for (let i = 0; i < 20; i++) {
      delay += `
      #ac-localnav .ac-ln-menu-item:nth-child(${i + 1}) .ac-ln-menu-link {
        transition-delay: ${0.07 + i * 0.07}s;
      }
   #ac-ln-menustate:checked
   ~ #ac-localnav
   .ac-ln-menu-item:nth-child(${i + 1})
   .ac-ln-menu-link,
 #ac-ln-menustate:target
   ~ #ac-localnav
   .ac-ln-menu-item:nth-child(${i + 1})
   .ac-ln-menu-link {
   transition-delay: ${0.56 - i * 0.07}s;
 }
   `
    }
  }
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function closeMenu() {
      setIsOpen(false)
    }
    window.addEventListener('scroll', closeMenu)
    return () => {
      window.removeEventListener('scroll', closeMenu)
    }
  }, [])

  return (
    <>
      <input
        type='checkbox'
        id='ac-ln-menustate'
        className='ac-ln-menustate'
        tabIndex='-1'
        aria-hidden='true'
        checked={isOpen}
        readOnly
      />

      <nav
        id='ac-localnav'
        className={`${
          eyebrow && 'ac-localnav-stacked'
        } js touch css-sticky ac-localnav-scrim ac-localnav-light`} //ac-localnav-dark
        lang='en-US'
        dir='ltr'
        data-sticky=''
        data-analytics-region='local nav'
        role='navigation'
        aria-label='Local'
        data-component-list=' LocalNav'
      >
        <div className='ac-ln-wrapper'>
          <div className='ac-ln-background'></div>
          <div className='ac-ln-content'>
            <div className='ac-ln-title'>
              <a
                href='/macbook-pro-14-and-16/'
                data-analytics-title='product index'
              >
                {title}
                <span className='ac-ln-title-comingsoon'>{eyebrow}</span>
              </a>
            </div>
            <div className='ac-ln-menu'>
              {menu && (
                <div className='ac-ln-menu-tray'>
                  {menu.map((list, i) => (
                    <ul className='ac-ln-menu-items' key={i}>
                      {list.title && (
                        <li className='ac-ln-menu-item as-localnav-listtitle'>
                          <span className='ac-ln-menu-link'>{list.title}</span>
                        </li>
                      )}
                      {list.pages?.map((link, i) => (
                        <li className='ac-ln-menu-item' key={i}>
                          <a
                            href={link.href}
                            className={`ac-ln-menu-link ${
                              link.href === asPath && 'current'
                            }`}
                            aria-disabled={
                              link.href === asPath ? 'true' : 'false'
                            }
                            aria-current={link.href === asPath && 'page'}
                            role='link'
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
              <div className='ac-ln-actions'>
                {menu && (
                  <div
                    className='ac-ln-action ac-ln-action-menucta'
                    aria-hidden='true'
                  >
                    <label htmlFor='ac-ln-menustate' className='ac-ln-menucta'>
                      <span
                        className='ac-ln-menucta-chevron'
                        onClick={() => setIsOpen(!isOpen)}
                      />
                    </label>
                  </div>
                )}
                {actions?.map((link, i) => (
                  <div className='ac-ln-action ac-ln-action-button' key={i}>
                    <StyledLink link={link} styles='button-reduced' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <label
        id='ac-ln-curtain'
        htmlFor='ac-ln-menustate'
        aria-hidden='true'
        onClick={() => setIsOpen(false)}
      />

      <style global jsx>{`
        #ac-ln-menustate {
          display: none;
        }

        #ac-localnav {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--r-localnav-height);
          min-width: 320px;
          z-index: 9997;
        }
        #ac-localnav.ac-localnav-stacked {
          height: var(--r-localnav-stacked-height);
        }
        .ac-nav-overlap #ac-localnav {
          margin-top: var(--globalnav-height);
          margin-bottom: calc(
            - (var(--r-localnav-height) + var(--r-localnav-height))
          );
        }
        .ac-nav-overlap #ac-localnav.ac-localnav-stacked {
          margin-bottom: calc(
            - (var(--r-localnav-height) + var(--r-localnav-stacked-height))
          );
        }
        #ac-localnav.css-sticky {
          position: sticky;
        }

        /* ac-ln-wrapper */
        #ac-localnav .ac-ln-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          min-height: 100%;
          z-index: 1;
        }

        #ac-localnav .ac-ln-background {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);

          /* CUSTOM: background blinks on scroll */
          top: -10px;
          height: calc(100% + 10px);
        }
        #ac-localnav.ac-localnav-scrim .ac-ln-background {
          backdrop-filter: saturate(180%) blur(20px);
          background-color: rgba(255, 255, 255, 0.72);
        }
        /* :checked */
        #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-background,
        #ac-ln-menustate:target ~ #ac-localnav .ac-ln-background {
          background-color: #fff;
          max-height: none;
          transition: background-color 0.5s ease;
          transition-property: background-color, backdrop-filter;
        }
        #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-background,
        #ac-ln-menustate:target ~ #ac-localnav .ac-ln-background {
          backdrop-filter: saturate(180%) blur(20px);
          background-color: rgba(255, 255, 255, 0.9);
        }

        #ac-localnav .ac-ln-background:after {
          display: block;
          position: absolute;
          width: 980px;
          height: 1px;
          top: 100%;
          left: 50%;
          content: '';
          margin-left: -490px;
          background-color: rgba(0, 0, 0, 0.16);
          z-index: 1;
        }
        #ac-localnav.ac-localnav-scrim .ac-ln-background:after {
          margin-left: 0;
          left: 0;
          width: 100%;
        }

        /* ac-ln-content */
        #ac-localnav .ac-ln-content {
          position: relative;
          max-width: 980px;
          margin: 0 auto;
          z-index: 2;
        }
        #ac-localnav .ac-ln-content::before,
        #ac-localnav .ac-ln-content::after {
          content: ' ';
          display: table;
        }
        #ac-localnav .ac-ln-content::after {
          clear: both;
        }

        /* ac-ln-title */
        #ac-localnav .ac-ln-title {
          font-weight: 600;
          font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          cursor: default;
          height: var(--r-localnav-height);
          float: left;
          white-space: nowrap;
        }
        #ac-localnav .ac-ln-title,
        #ac-localnav .ac-ln-title a {
          color: #000;
          transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
        }
        #ac-localnav.ac-localnav-stacked .ac-ln-title {
          height: var(--r-localnav-stacked-height);
        }

        #ac-localnav .ac-ln-title a {
          display: flex;
          flex-direction: column-reverse;
          text-decoration: none;
          white-space: nowrap;
          opacity: 0.88;
        }

        #ac-localnav .ac-ln-title-subhead,
        #ac-localnav .ac-ln-title-comingsoon {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          position: relative;
          top: -1px;
          color: #000;
          opacity: 0.56;
        }
        #ac-localnav.ac-localnav-stacked .ac-ln-title-subhead,
        #ac-localnav.ac-localnav-stacked .ac-ln-title-comingsoon {
          opacity: 0.64;
        }

        /* ac-ln-menu */
        #ac-localnav .ac-ln-menu {
          line-height: 1;
          font-weight: 400;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          float: right;
        }

        /* ac-ln-menucta-anchor */
        #ac-localnav .ac-ln-menucta-anchor {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;
          z-index: 10;
        }
        #ac-localnav .ac-ln-menucta-anchor-label {
          position: absolute;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(0px 0px 99.9% 99.9%);
          overflow: hidden;
          height: 1px;
          width: 1px;
          padding: 0;
          border: 0;
        }
        #ac-localnav .ac-ln-menucta-anchor-close {
          display: none;
        }

        #ac-localnav .ac-ln-menu-tray,
        #ac-localnav .ac-ln-actions {
          float: left;
          padding-top: 18px;
        }
        #ac-localnav.ac-localnav-stacked .ac-ln-menu-tray,
        #ac-localnav.ac-localnav-stacked .ac-ln-actions {
          padding-top: 34px;
        }

        .as-localnav-listtitle {
          font-size: 15px;
          line-height: 1.26667;
          font-weight: 600;
          letter-spacing: 0.0135em;
          font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        /* ac-ln-menu-item */
        #ac-localnav .ac-ln-menu-item,
        #ac-localnav .ac-ln-action {
          margin-left: 24px;
          float: left;
        }

        #ac-localnav .ac-ln-menu-link {
          color: #000;
          display: inline-block;
          line-height: 22px;
          white-space: nowrap;
          opacity: 0.88;
        }
        #ac-localnav .ac-ln-menu-link.current {
          opacity: 0.56;
          cursor: default;
        }
        #ac-localnav .ac-ln-menu-link:hover {
          color: #06c;
          opacity: 1;
          text-decoration: none;
        }

        #ac-localnav .ac-ln-actions {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
        }

        /* ac-ln-action-menucta */
        #ac-localnav .ac-ln-action-menucta {
          display: none;
          position: relative;
          margin-top: -2px;
          z-index: 1;
        }

        #ac-localnav .ac-ln-menucta {
          margin-right: -11px;
          cursor: pointer;
          display: block;
          overflow: hidden;
          width: 40px;
          height: 30px;
          -webkit-tap-highlight-color: transparent;
        }

        #ac-localnav .ac-ln-menucta-chevron {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1),
            transform-origin 1s cubic-bezier(0.86, 0, 0.07, 1);
          transform: translateY(0);
          opacity: 0.8;
        }
        #ac-localnav .ac-ln-menucta-chevron:hover {
          opacity: 1;
        }
        #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-menucta-chevron,
        #ac-ln-menustate:target ~ #ac-localnav .ac-ln-menucta-chevron {
          transform: translateY(-8px);
        }

        #ac-localnav .ac-ln-menucta-chevron::before,
        #ac-localnav .ac-ln-menucta-chevron::after {
          content: '';
          display: block;
          position: absolute;
          top: 13px;
          width: 11px;
          height: 1px;
          z-index: 1;
          transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1),
            transform-origin 1s cubic-bezier(0.86, 0, 0.07, 1);
        }
        #ac-localnav .ac-ln-menucta-chevron::before,
        #ac-localnav .ac-ln-menucta-chevron::after {
          background: #000;
        }
        #ac-localnav .ac-ln-menucta-chevron::before {
          right: 50%;
          border-radius: 0.5px 0 0 0.5px;
          transform-origin: 100% 100%;
          transform: rotate(40deg) scaleY(1.1);
        }
        #ac-localnav .ac-ln-menucta-chevron::after {
          left: 50%;
          border-radius: 0 0.5px 0.5px 0;
          transform-origin: 0% 100%;
          transform: rotate(-40deg) scaleY(1.1);
        }
        /* :checked */
        #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-menucta-chevron::before,
        #ac-ln-menustate:target ~ #ac-localnav .ac-ln-menucta-chevron::before {
          transform-origin: 100% 0%;
          transform: rotate(-40deg) scaleY(1.1);
        }
        #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-menucta-chevron::after,
        #ac-ln-menustate:target ~ #ac-localnav .ac-ln-menucta-chevron::after {
          transform-origin: 0% 0%;
          transform: rotate(40deg) scaleY(1.1);
        }

        /* #ac-ln-curtain */
        #ac-ln-curtain {
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          position: fixed;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          z-index: 9996;
          transition: opacity 0.2s ease;
        }
        #ac-ln-menustate:checked ~ #ac-ln-curtain,
        #ac-ln-menustate:target ~ #ac-ln-curtain {
          transition: opacity 1s ease 0.1s;
        }
        #ac-ln-menustate:checked ~ #ac-ln-curtain,
        #ac-ln-menustate:target ~ #ac-ln-curtain {
          opacity: 1;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
        }

        #ac-ln-curtain {
          transition: opacity 1s ease 0.2s, width 0s ease 1.2s,
            height 0s ease 1.2s;
        }

        /* desktop & tablet */
        @media only screen and (min-width: 834px) {
          #ac-localnav .ac-ln-content,
          #ac-localnav .ac-ln-actions {
            padding-left: calc(max(22px, env(safe-area-inset-left)));
            padding-right: calc(max(22px, env(safe-area-inset-right)));
          }

          /* ac-ln-title */
          #ac-localnav .ac-ln-title {
            font-size: 21px;
            line-height: 1.14286;
            letter-spacing: 0.011em;
            margin: 14px 0 -14px;
          }

          #ac-localnav .ac-ln-menu {
            font-size: 12px;
            letter-spacing: -0.01em;
            margin-top: -3px;
          }
        }
        /* mobile */
        @media only screen and (max-width: 833px) {
          #ac-localnav .ac-ln-content,
          #ac-localnav .ac-ln-actions {
            padding-left: calc(max(16px, env(safe-area-inset-left)));
            padding-right: calc(max(16px, env(safe-area-inset-right)));
          }

          /* ac-ln-title */
          #ac-localnav .ac-ln-title {
            font-size: 19px;
            line-height: 1.26316;
            letter-spacing: 0.012em;

            /* delete */
            display: inline-block;
            margin: 12px 0 -12px;
          }

          #ac-localnav .ac-ln-menu {
            font-size: 14px;
            letter-spacing: -0.02em;
            margin-top: 0;
            width: 100%;
          }

          #ac-localnav .ac-ln-menu-tray {
            float: none;
            overflow: hidden;
            pointer-events: none;
            visibility: hidden;
            width: 100%;
            padding-top: 0;
            max-height: 0;
            transition: max-height 0.5s cubic-bezier(0.28, 0.11, 0.32, 1) 0.4s,
              visibility 0s linear 1s;
          }
          #ac-localnav.ac-localnav-stacked .ac-ln-menu-tray {
            padding-top: 0;
          }
          /* :checked */
          #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-menu-tray,
          #ac-ln-menustate:target ~ #ac-localnav .ac-ln-menu-tray {
            max-height: calc(100vh - 48px - 48px);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            pointer-events: auto;
            visibility: visible;
            transition-delay: 0.2s, 0s;
          }

          #ac-localnav .ac-ln-menu-items {
            opacity: 0;
            padding: 4px 24px 24px;
            transform: translate3d(0, -150px, 0);
            transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0.5s,
              opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s;
          }
          /* :checked */
          #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-menu-items,
          #ac-ln-menustate:target ~ #ac-localnav .ac-ln-menu-items {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition-delay: 0.2s, 0.4s;
          }

          #ac-localnav .ac-ln-menu-item {
            margin-left: 0;
            display: inline-block;
            float: none;
            width: 100%;
            height: 44px;
          }

          /* ac-ln-menu-link */
          #ac-localnav .ac-ln-menu-link {
            border-top: 1px solid rgba(0, 0, 0, 0.181818);
            display: flex;
            align-items: center;
            height: 100%;
            line-height: 1.3;
            opacity: 0;
            transform: translate3d(0, -25px, 0);
            transition: 0.5s ease;
            transition-property: transform, opacity;
          }
          #ac-localnav .ac-ln-menu-item:first-child .ac-ln-menu-link {
            border-top: 0;
          }
          /* :checked */
          #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-menu-link,
          #ac-ln-menustate:target ~ #ac-localnav .ac-ln-menu-link {
            opacity: 0.88;
            transform: translate3d(0, 0, 0);
          }
          #ac-ln-menustate:checked ~ #ac-localnav .ac-ln-menu-link.current,
          #ac-ln-menustate:target ~ #ac-localnav .ac-ln-menu-link.current {
            opacity: 0.56;
            border-color: rgba(0, 0, 0, 0.285714);
          }
          ${delay}

          #ac-localnav .ac-ln-actions {
            padding-top: 16px;
          }
          #ac-localnav.ac-localnav-stacked .ac-ln-actions {
            padding-top: 32px;
          }

          #ac-localnav .ac-ln-action-menucta {
            display: block;
            float: left;
          }

          #ac-localnav .ac-ln-action-button,
          #ac-localnav .ac-ln-action-violator {
            margin-left: 17px;
            margin-top: -3px;
          }
        }
      `}</style>
      <style jsx>{`
        .ac-theme-dark #ac-localnav.ac-ln-sticking .ac-ln-background,
        .ac-ln-sticking#ac-localnav.ac-localnav-dark .ac-ln-background {
          background-color: rgba(29, 29, 31, 0.72);
        }
        .ac-theme-dark
          #ac-ln-menustate:checked
          ~ #ac-localnav
          .ac-ln-background,
        .ac-theme-dark #ac-ln-menustate:target ~ #ac-localnav .ac-ln-background,
        #ac-ln-menustate:checked
          ~ .ac-localnav-dark#ac-localnav
          .ac-ln-background,
        #ac-ln-menustate:target
          ~ .ac-localnav-dark#ac-localnav
          .ac-ln-background {
          background-color: rgba(29, 29, 31, 0.9);
        }
        .ac-theme-dark #ac-localnav .ac-ln-background:after,
        #ac-localnav.ac-localnav-dark .ac-ln-background:after {
          background-color: rgba(255, 255, 255, 0.24);
        }

        /* ac-ln-title */
        .ac-theme-dark #ac-localnav .ac-ln-title,
        .ac-theme-dark #ac-localnav .ac-ln-title a,
        #ac-localnav.ac-localnav-dark .ac-ln-title,
        #ac-localnav.ac-localnav-dark .ac-ln-title a,
        .ac-theme-dark #ac-localnav .ac-ln-title-comingsoon,
        .ac-localnav-dark#ac-localnav .ac-ln-title-comingsoon {
          color: #fff;
        }
        .ac-theme-dark #ac-localnav .ac-ln-title a,
        #ac-localnav.ac-localnav-dark .ac-ln-title a {
          opacity: 0.92;
        }
        .ac-theme-dark #ac-localnav.ac-localnav-stacked .ac-ln-title-subhead,
        .ac-theme-dark #ac-localnav.ac-localnav-stacked .ac-ln-title-comingsoon,
        .ac-localnav-dark#ac-localnav.ac-localnav-stacked .ac-ln-title-subhead,
        .ac-localnav-dark#ac-localnav.ac-localnav-stacked
          .ac-ln-title-comingsoon {
          opacity: 0.61;
        }

        .ac-theme-dark #ac-localnav .ac-ln-menu-item,
        #ac-localnav.ac-localnav-dark .ac-ln-menu-item {
          border-color: rgba(255, 255, 255, 0.24);
        }

        .ac-theme-dark #ac-localnav .ac-ln-menu-link,
        #ac-localnav.ac-localnav-dark .ac-ln-menu-link {
          border-color: rgba(255, 255, 255, 0.26087);
        }
        .ac-theme-dark #ac-localnav .ac-ln-menu-link,
        #ac-localnav.ac-localnav-dark .ac-ln-menu-link {
          color: #fff;
          opacity: 0.92;
        }
        .ac-theme-dark #ac-localnav .ac-ln-menu-link.current,
        #ac-localnav.ac-localnav-dark .ac-ln-menu-link.current {
          opacity: 0.56;
        }
        .ac-theme-dark
          #ac-ln-menustate:checked
          ~ #ac-localnav
          .ac-ln-menu-link.current,
        .ac-theme-dark
          #ac-ln-menustate:target
          ~ #ac-localnav
          .ac-ln-menu-link.current,
        #ac-ln-menustate:checked
          ~ .ac-localnav-dark#ac-localnav
          .ac-ln-menu-link.current,
        #ac-ln-menustate:target
          ~ .ac-localnav-dark#ac-localnav
          .ac-ln-menu-link.current {
          border-color: rgba(255, 255, 255, 0.428571);
        }

        .ac-theme-dark
          #ac-ln-menustate:checked
          ~ #ac-localnav
          .ac-ln-menucta-chevron::before,
        .ac-theme-dark
          #ac-ln-menustate:checked
          ~ #ac-localnav
          .ac-ln-menucta-chevron::after,
        .ac-theme-dark
          #ac-ln-menustate:target
          ~ #ac-localnav
          .ac-ln-menucta-chevron::before,
        .ac-theme-dark
          #ac-ln-menustate:target
          ~ #ac-localnav
          .ac-ln-menucta-chevron::after,
        #ac-ln-menustate:checked
          ~ .ac-localnav-dark#ac-localnav
          .ac-ln-menucta-chevron::before,
        #ac-ln-menustate:checked
          ~ .ac-localnav-dark#ac-localnav
          .ac-ln-menucta-chevron::after,
        #ac-ln-menustate:target
          ~ .ac-localnav-dark#ac-localnav
          .ac-ln-menucta-chevron::before,
        #ac-ln-menustate:target
          ~ .ac-localnav-dark#ac-localnav
          .ac-ln-menucta-chevron::after,
        .ac-theme-dark #ac-localnav .ac-ln-menucta-chevron::before,
        .ac-theme-dark #ac-localnav .ac-ln-menucta-chevron::after,
        .ac-localnav-dark#ac-localnav .ac-ln-menucta-chevron::before,
        .ac-localnav-dark#ac-localnav .ac-ln-menucta-chevron::after {
          background: #fff;
        }
      `}</style>
    </>
  )
}
