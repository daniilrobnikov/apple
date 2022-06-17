import Link from 'next/link'

export default function ChapterNav() {
  return (
    <>
      <nav
        id='chapternav'
        className='chapternav with-paddles'
        data-analytics-region='family browser'
        data-analytics-activitymap-region-id='chapternav'
        aria-label='Mac Family of products'
      >
        <div className='chapternav-wrapper'>
          <ul className='chapternav-items'>
            <li className='chapternav-item chapternav-item-macbook-air'>
              <Link href='/macbook-air/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    MacBook Air
                  </span>
                  <span className='chapternav-new'>New</span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-macbook-pro'>
              <Link href='/macbook-pro/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    MacBook Pro
                  </span>
                  <span className='chapternav-new'>New</span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-imac-24'>
              <Link href='/imac-24/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    iMac 24”
                  </span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-mac-mini'>
              <Link href='/mac-mini/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    Mac mini
                  </span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-mac-studio'>
              <Link href='/mac-studio/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    Mac Studio
                  </span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-mac-pro'>
              <Link href='/mac-pro/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    Mac Pro
                  </span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-compare'>
              <Link href='/mac/compare/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    Compare<span className='visuallyhidden'>Mac models</span>
                  </span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-displays'>
              <Link href='/displays/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    Displays
                  </span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-accessories'>
              <Link href='/shop/mac/accessories'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    Accessories<span className='visuallyhidden'>for Mac</span>
                  </span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-macos'>
              <Link href='/macos/monterey/'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    Monterey
                  </span>
                </a>
              </Link>
            </li>
            <li className='chapternav-item chapternav-item-shop'>
              <Link href='/us/shop/goto/buy_mac'>
                <a className='chapternav-link'>
                  <figure className='chapternav-icon'></figure>
                  <span className='chapternav-label' role='text'>
                    Shop Mac
                  </span>
                </a>
              </Link>
            </li>{' '}
          </ul>
          <div className='chapternav-paddles'>
            <button
              className='chapternav-paddle chapternav-paddle-left'
              aria-hidden='true'
              disabled=''
            ></button>
            <button
              className='chapternav-paddle chapternav-paddle-right'
              aria-hidden='true'
              disabled=''
            ></button>
          </div>
        </div>
      </nav>
    </>
  )
}
