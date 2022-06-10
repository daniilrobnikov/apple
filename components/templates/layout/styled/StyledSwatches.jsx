function StyledSwatches() {
  return (
    <>
      <ul
        className='recommcard-content-swatchescontainer'
        aria-label='Magic Keyboard with Touch ID and Numeric Keypad for Mac models with Apple silicon - US English - Black KeysAvailable colors'
        role='list'
      >
        <li className='recommcard-content-colorimage'>
          <img
            width='32'
            height='32'
            alt='White Keys'
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2C3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645887771257'
            srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2C3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645887771257, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2C3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645887771257 2x'
          />
        </li>
        <li className='recommcard-content-colorimage'>
          <img
            width='32'
            height='32'
            alt='Black Keys'
            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645573245727'
            srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645573245727, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645573245727 2x'
          />
        </li>
      </ul>
      <style jsx>{`
        .recommcard-content-swatchescontainer {
          list-style-type: none;
          margin: 0 auto;
          padding-top: 19px;
          padding-bottom: 14px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
        }
        .recommcard-content-colorimage {
          display: inline-block;
          margin: 0 3px;
        }
        .recommcard-content-colorimage img {
          height: 12px;
          width: 12px;
        }
      `}</style>
    </>
  )
}

export default StyledSwatches
