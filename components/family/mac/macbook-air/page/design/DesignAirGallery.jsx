import ColorNav from '@/components/templates/layout/nav/ColorNav'
import FinishesGallery from './FinishesGallery'

export default function DesignAirGallery() {
  return (
    <>
      <div className='subsection-design-gallery'>
        <div
          id='finishes-gallery'
          role='group'
          aria-label='finishes gallery'
          className='colornav-gallery gallery'
          data-component-list='ColornavGallery'
          data-analytics-section-engagement='name:finishes gallery'
          data-component-support='enhance-xp'
        >
          <ColorNav />
          <FinishesGallery />
        </div>
      </div>

      <style global jsx>{`
        .section-design .subsection-design-gallery {
          position: relative;
        }

        .section-design .subsection-design-gallery .colornav-gallery {
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .section-design
          .subsection-design-gallery
          .colornav-gallery
          .colornav-wrapper {
          left: 0;
          position: absolute;
          bottom: 41px;
          z-index: 2;
          width: 100%;
        }
        .section-design
          .subsection-design-gallery
          .colornav-gallery
          .colornav-wrapper
          .colornav-items {
          display: flex;
          justify-content: center;
          width: calc(50% - 10px);
        }

        .section-design
          .subsection-design-gallery
          .colornav-gallery
          .colornav-wrapper
          .colornav-item {
          padding-left: 8px;
          padding-right: 8px;
        }

        .colornav-item .colornav-swatch-midnight {
          background-color: #2e3642;
        }
        .colornav-item .colornav-swatch-starlight {
          background-color: #f0e4d3;
        }
        .colornav-item .colornav-swatch-spacegray {
          background-color: #7d7e80;
        }
        .colornav-item .colornav-swatch-silver {
          background-color: #e3e4e6;
        }
        @media only screen and (min-width: 1068px) {
          .section-design .subsection-design-gallery .colornav-gallery {
            margin-top: 140px;
          }
          .section-design
            .subsection-design-gallery
            .colornav-gallery
            .colornav-wrapper {
            bottom: 41px;
          }
          .section-design
            .subsection-design-gallery
            .colornav-gallery
            .colornav-wrapper
            .colornav {
            margin-left: auto;
            margin-right: auto;
            width: 980px;
            display: block;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-design .subsection-design-gallery .colornav-gallery {
            margin-top: 116px;
          }
          .section-design
            .subsection-design-gallery
            .colornav-gallery
            .colornav-wrapper {
            bottom: 28px;
          }
          .section-design
            .subsection-design-gallery
            .colornav-gallery
            .colornav-wrapper
            .colornav {
            margin-left: auto;
            margin-right: auto;
            width: 692px;
          }
        }
      `}</style>
    </>
  )
}
