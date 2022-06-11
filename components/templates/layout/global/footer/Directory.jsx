import Link from 'next/link'
import { useState } from 'react'

export default function Directory({ section, index }) {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <div className='as-globalfooter-directory-column'>
        <input
          className='as-globalfooter-directory-column-section-state'
          type='checkbox'
          id={`as-globalfooter-state-section-${index}`}
          checked={checked}
          readOnly
        />
        <div className='as-globalfooter-directory-column-section'>
          <label
            onClick={() => setChecked(!checked)}
            htmlFor={`as-globalfooter-state-section-${index}`}
            className='as-globalfooter-directory-column-section-label'
            data-asext-evar='eVar6'
            data-asext-feature='footer'
            data-asext-part={section.title}
            data-asext-action='expand'
            data-asext-action-toggle='collapse'
          >
            <h3 className='as-globalfooter-directory-column-section-title'>
              {section.title}
            </h3>
          </label>
          <a
            href={`#as-globalfooter-state-section-${index}`}
            className='as-globalfooter-directory-column-section-anchor as-globalfooter-directory-column-section-anchor-open'
          >
            <span className='a11y'>Open Menusection {index}</span>
          </a>
          <a
            href='#'
            className='as-globalfooter-direcotry-column-section-anchor as-globalfooter-directory-column-section-anchor-close'
          >
            <span className='a11y'>Close Menusection {index}</span>
          </a>
          <ul className='as-globalfooter-directory-column-section-list'>
            {section.pages.map((page, i) => (
              <li
                className='as-globalfooter-directory-column-section-item'
                key={i}
              >
                <Link href={page.url}>
                  <a
                    data-feature-name='Footer Navigation'
                    data-display-name={page.title}
                    className='as-globalfooter-directory-column-section-link'
                    data-autom={`${page.title}-footer-link`}
                  >
                    {page.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style global jsx>{`
        .as-globalfooter
          .as-globalfooter-breadcrumbs
          + .as-globalfooter-directory {
          padding-top: 0;
        }
        .as-globalfooter .as-globalfooter-directory,
        .as-globalfooter .as-globalfooter-directory-column-section-title {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
        }
        .as-globalfooter .as-globalfooter-directory {
          padding-top: 20px;
        }

        .as-globalfooter .as-globalfooter-directory-column-section-state,
        .as-globalfooter .as-globalfooter-directory-column-section-anchor {
          display: none;
        }

        @media only screen and (min-width: 834px) {
          .as-globalfooter .as-globalfooter-directory {
            columns: 5 auto;
          }

          .as-globalfooter .as-globalfooter-directory-column-section {
            display: inline-block;
            vertical-align: top;
            margin-bottom: 26px;
            pointer-events: none;
          }

          .as-globalfooter .as-globalfooter-directory-column-section-title {
            font-weight: 600;
            margin-right: 20px;
            margin-bottom: 0.8em;
          }

          .as-globalfooter .as-globalfooter-directory-column-section-list {
            margin-right: 20px;
            padding: 0;
          }

          .as-globalfooter .as-globalfooter-directory-column-section-item {
            display: block;
            pointer-events: auto;
            margin-bottom: 0.8em;
          }
        }

        @media only screen and (max-width: 833px) {
          .as-globalfooter .as-globalfooter-directory {
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
          }

          .as-globalfooter .as-globalfooter-directory-column {
            flex-basis: auto;
          }

          .as-globalfooter .as-globalfooter-directory-column-section {
            position: relative;
            z-index: 1;
            border-bottom: 1px solid var(--footer-border-color);
            overflow: hidden;
            pointer-events: auto;
          }

          .as-globalfooter .as-globalfooter-directory-column-section-title {
            margin: 0;
            padding-top: 10px;
            padding-bottom: 10px;
            color: var(--footer-text-color);
            background: var(--footer-background);
            cursor: pointer;
            position: relative;
            user-select: none;
            z-index: 2;
          }
          .as-globalfooter
            .as-globalfooter-directory-column-section-title:hover {
            color: var(--footer-directory-title-color-hover);
          }
          .as-globalfooter
            .as-globalfooter-directory-column-section-state:is(:target, :checked)
            + .as-globalfooter-directory-column-section
            .as-globalfooter-directory-column-section-title {
            color: var(--footer-directory-title-color-hover);
          }

          .as-globalfooter
            .as-globalfooter-directory-column-section-title:after {
            content: '+';
            float: right;
            font-size: 14px;
            font-weight: normal;
            margin-top: -2px;
            margin-right: 8px;
            transition: transform 0.3s ease;
          }
          .as-globalfooter
            .as-globalfooter-directory-column-section-state:is(:checked, :target)
            + .as-globalfooter-directory-column-section
            .as-globalfooter-directory-column-section-title:after {
            transform: rotate(45deg) scale(1.08);
          }

          .as-globalfooter .as-globalfooter-directory-column-section-list {
            margin: 0;
            overflow: hidden;
            padding: 5px 0 16px;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            visibility: hidden;
            z-index: -1;
            transform: translateY(-100px);
          }
          .as-globalfooter
            .as-globalfooter-directory-column-section-state:is(:checked, :target)
            + .as-globalfooter-directory-column-section
            .as-globalfooter-directory-column-section-list {
            position: static;
            visibility: visible;
            z-index: 1;
            transform: none;
            transition: transform 300ms ease;
          }

          .as-globalfooter .as-globalfooter-directory-column-section-link {
            padding: 6px 14px;
            display: block;
          }
        }
      `}</style>
    </>
  )
}
