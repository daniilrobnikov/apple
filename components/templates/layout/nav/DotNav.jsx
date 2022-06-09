export default function DotNav({ current, length, handleDotClick }) {
  return (
    <div className='dotnav'>
      {/* TODO: import title */}
      <ul role='tablist' aria-label='MacBook&nbsp;Pro 14-inch'>
        {[...Array(length)].map((_, i) => (
          <li role='presentation' key={i}>
            <button
              type='button'
              role='tab'
              aria-controls={`97439d60-e0c6-11ec-bb44-35cae391b59c-gallery-item-${i}`}
              aria-selected={i === current}
              aria-label={`Item ${i + 1}`}
              tabIndex={i === current ? 0 : -1}
              className={`dotnav-item ${current === i ? 'current' : ''}`}
              data-autom={`gallery-dot-nav-${i}`}
              onClick={() => handleDotClick(i)}
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        .dotnav {
          text-align: center;
          box-sizing: border-box;
        }
        .dotnav ul {
          margin: 0;
          list-style: none;
          display: inline-flex;
          justify-content: center;
        }
        .dotnav li {
          list-style: none;
          margin: 0 7px;
          width: 8px;
          height: 8px;
          position: relative;
        }

        .dotnav-item {
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          outline: none;
          position: absolute;
          border-radius: 50%;
          box-sizing: border-box;
          padding: 0;
        }
        .dotnav-item.current {
          cursor: default;
        }
        .dotnav .dotnav-item {
          background-color: rgba(134, 134, 139, 0.4);
        }
        .dotnav .dotnav-item.current {
          background-color: #86868b;
        }
      `}</style>
    </div>
  )
}
