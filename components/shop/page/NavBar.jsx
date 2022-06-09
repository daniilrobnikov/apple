export default function NavBar() {
  return (
    <div className='rf-navbar' id='rf-navbar'>
      <div className='rf-navbar-content-wrapper'>
        <div className='rf-navbar-content'>
          <div className='rf-navbar-item'>
            <a
              href='#shelf-1_section'
              className='rf-navbar-item-link rf-navbar-item-link-active active'
            >
              <span className='visuallyhidden'>Skip to </span>All Models
            </a>
          </div>
          <div className='rf-navbar-item'>
            <a href='#shelf-2_section' className='rf-navbar-item-link'>
              <span className='visuallyhidden'>Skip to </span>Shopping Guides
            </a>
          </div>
          <div className='rf-navbar-item'>
            <a href='#shelf-3_section' className='rf-navbar-item-link'>
              <span className='visuallyhidden'>Skip to </span>Ways to Save
            </a>
          </div>
          <div className='rf-navbar-item'>
            <a href='#shelf-4_section' className='rf-navbar-item-link'>
              <span className='visuallyhidden'>Skip to </span>The Apple
              Difference
            </a>
          </div>
          <div className='rf-navbar-item'>
            <a href='#shelf-5_section' className='rf-navbar-item-link'>
              <span className='visuallyhidden'>Skip to </span>Accessories
            </a>
          </div>
          <div className='rf-navbar-item'>
            <a href='#shelf-6_section' className='rf-navbar-item-link'>
              <span className='visuallyhidden'>Skip to </span>Setup and Support
            </a>
          </div>
          <div className='rf-navbar-item'>
            <a href='#shelf-7_section' className='rf-navbar-item-link'>
              <span className='visuallyhidden'>Skip to </span>Do More
            </a>
          </div>
          <div className='rf-navbar-item'>
            <a href='#shelf-8_section' className='rf-navbar-item-link'>
              <span className='visuallyhidden'>Skip to </span>Shop by Group
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rf-navbar {
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          background-color: transparent;
          height: 61px;
          margin: 0 0 41px;
        }

        .rf-navbar-content-wrapper {
          background-color: #f5f5f7;
          border-bottom: 1px solid transparent;
          height: 60px;
          transition-duration: 0.5s;
          transition-property: height, border-bottom;
          width: 100%;
          overflow: hidden;
        }

        .rf-navbar-content {
          justify-content: start;
          margin: 0;
          max-width: none;
          overflow-y: scroll;
        }

        .rf-navbar-content {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: start;
          margin: 0 auto;
          max-width: 946px;
          position: relative;
        }

        .rf-navbar-item {
          color: #f5f5f7;
          margin: 5px 35px 5px 5px;
        }
        .rf-navbar-item:first-child {
          padding-left: calc(max(22px, env(safe-area-inset-left)));
          margin-left: 0;
        }
        .rf-navbar-item:last-child {
          padding-right: calc(max(22px, env(safe-area-inset-right)));
          margin-right: 0;
        }

        .rf-navbar-item-link {
          color: #1d1d1f;
          white-space: nowrap;
          border-bottom: 1px solid transparent;
        }
        .rf-navbar-item-link.rf-navbar-item-link-active {
          border-bottom: 1px solid #1d1d1f;
          font-weight: 600;
          padding-bottom: 1px;
        }
      `}</style>
    </div>
  )
}
