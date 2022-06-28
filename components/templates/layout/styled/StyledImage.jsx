import Image from 'next/image'

export default function StyledImage({ image }) {
  const imagePath = image.imagePath
  const imagePosition = image.imagePosition || 'center'
  return (
    <>
      <style global jsx>{`
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
      <picture
        id='overview-routers-accessories-1'
        className='overview-routers-accessories loaded'
      >
        <Image
          className='desktop-image'
          src={`${imagePath}large.webp`}
          alt=''
          layout='fill'
          objectFit='contain'
          objectPosition={imagePosition}
        />
        <Image
          className='tablet-image'
          src={`${imagePath}medium.webp`}
          alt=''
          layout='fill'
          objectFit='contain'
          objectPosition={imagePosition}
        />
        <Image
          className='mobile-image'
          src={`${imagePath}small.webp`}
          alt=''
          layout='fill'
          objectFit='contain'
          objectPosition={imagePosition}
        />
      </picture>
    </>
  )
}
