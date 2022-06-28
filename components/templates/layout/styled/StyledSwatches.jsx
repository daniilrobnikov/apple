export default function StyledSwatches({ colors }) {
  return (
    <>
      <ul
        className='swatchescontainer'
        aria-label='Magic Keyboard with Touch ID and Numeric Keypad for Mac models with Apple silicon - US English - Black KeysAvailable colors'
        role='list'
      >
        {colors.map((color) => (
          <li className='colorimage' key={color._id}>
            <Swatch color={color} />
          </li>
        ))}
      </ul>

      <style global jsx>{`
        .swatchescontainer {
          list-style-type: none;
          margin: 0 auto;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
        }

        .colorimage {
          --swatch-size: 12px;

          display: inline-block;
          margin: 0 calc(var(--swatch-size) / 4);
        }

        .colorimage svg {
          width: var(--swatch-size);
          height: var(--swatch-size);
        }
      `}</style>
    </>
  )
}

function Swatch({ color }) {
  // width='600' height='600'
  if (color.hex.includes('/')) {
    var colors = color.hex.split('/')
    var coordinates = [50, 0, 50, 100]
    if (color.direction === 'horizontal') {
      coordinates = [0, 50, 100, 50]
    }
    return (
      <svg width='600' height='600'>
        <filter id='inset-shadow' x='-50%' y='-50%' width='200%' height='200%'>
          <feComponentTransfer in='SourceAlpha'>
            <feFuncA type='table' tableValues='0.5 0' />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation='1' />
          <feOffset dx='0' dy='0.75' result='offsetblur' />
          <feFlood floodColor='rgb(0, 0, 0)' result='color' />
          <feComposite in2='offsetblur' operator='in' />
          <feComposite in2='SourceAlpha' operator='in' />
          <feMerge>
            <feMergeNode in='SourceGraphic' />
            <feMergeNode />
          </feMerge>
        </filter>
        <linearGradient
          id={`gradient-${colorize}`}
          x1={`${coordinates[0]}%`}
          y1={`${coordinates[1]}%`}
          x2={`${coordinates[2]}%`}
          y2={`${coordinates[3]}%`}
        >
          <stop stopColor={colors[0]} offset='0%' />
          <stop stopColor={colors[0]} offset='47%' />
          <stop stopColor={colors[1]} offset='53%' />
          <stop stopColor={colors[1]} offset='100%' />
        </linearGradient>
        <circle
          cx='50%'
          cy='50%'
          r='50%'
          fill={`url(#gradient-${colorize})`}
          filter='url(#inset-shadow)'
        />
      </svg>
    )
  } else {
    return (
      <svg>
        <filter id='inset-shadow' x='-50%' y='-50%' width='200%' height='200%'>
          <feComponentTransfer in='SourceAlpha'>
            <feFuncA type='table' tableValues='0.5 0' />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation='1' />
          <feOffset dx='0' dy='0.75' result='offsetblur' />
          <feFlood floodColor='rgb(0, 0, 0)' result='color' />
          <feComposite in2='offsetblur' operator='in' />
          <feComposite in2='SourceAlpha' operator='in' />
          <feMerge>
            <feMergeNode in='SourceGraphic' />
            <feMergeNode />
          </feMerge>
        </filter>
        <circle
          cx='50%'
          cy='50%'
          r='50%'
          fill={color.hex}
          filter='url(#inset-shadow)'
        />
      </svg>
    )
  }
}
