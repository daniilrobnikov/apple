export default function StyledImage() {
  return (
    <>
      <style jsx>{`
        @media only screen and (min-width: 1068px) {
          .desktop-image {
            display: block !important;
          }
          .tablet-image,
          .mobile-image {
            display: none !important;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .tablet-image {
            display: block !important;
          }
          .desktop-image,
          .mobile-image {
            display: none !important;
          }
        }
        @media only screen and (max-width: 734px) {
          .mobile-image {
            display: block !important;
          }
          .desktop-image,
          .tablet-image {
            display: none !important;
          }
        }
      `}</style>
      <picture>
        {/* <Image
          className='desktop-image'
          src={sourceToDesktopImage}
          alt={image.alt}
          layout='fill'
          objectFit='contain'
        />
        <Image
          className='tablet-image'
          src={sourceToTabletImage}
          alt={image.alt}
          layout='fill'
          objectFit='contain'
        />
        <Image
          className='mobile-image'
          src={sourceToMobileImage}
          alt={image.alt}
          layout='fill'
          objectFit='contain'
        /> */}
      </picture>
    </>
  )
}
