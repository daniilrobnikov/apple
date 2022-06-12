import React from 'react'

export default function Details() {
  return (
    <>
      <style jsx>{`
        [data-core-accordion] {
          margin: 0;
          padding: 0;
        }

        [data-core-accordion-item] {
          margin: 0;
          padding: 0;
        }
        .rc-accordion-item {
          border-top: 1px solid #d2d2d7;
        }

        .rc-accordion-button {
          padding: 30px 0 34px;
          cursor: pointer;
          display: flex;
          align-items: center;
          width: 100%;
          -webkit-tap-highlight-color: transparent;
        }

        .rc-accordion-title {
          padding: 8px 0 7px;
          width: 100%;
        }

        .rc-accordion-chevrondown {
          display: flex;
          position: relative;
          justify-content: center;
          align-items: start;
          align-self: baseline;
          margin: 0;

          stroke-width: 2.25;
          color: #86868b;
          transition: transform 0.3s linear;
        }

        [data-core-height-transition-wrapper] {
          transition-property: height;
          transition-timing-function: ease-in-out;
          transition-duration: 0.4s;
          overflow: hidden;
        }
        .r-height-transition-exit-done {
          display: none;
        }
        .rf-pdp-accordionboxtitle + div {
          margin-top: 0;
        }
        .rc-accordion [data-core-height-transition-wrapper] {
          transition: height 0.3s ease-in-out;
        }

        [data-core-height-transition-content] {
          overflow: hidden;
        }

        [data-core-accordion-item] [data-core-accordion-content] {
          transition: height 0.5s ease-in-out;
        }

        /* rc-accordion-content */
        .rc-accordion-content {
          padding-bottom: 25px;
          max-width: 800px;
        }
        .rc-accordion-content-nopadding.rc-accordion-content {
          padding: 0;
          max-width: inherit;
        }

        .rc-pdsection-panel:first-child .rc-pdsection-sidepanel {
          padding-top: 0;
        }

        .rc-pdsection-mainpanel .h4-para-title {
          padding-bottom: 0.4em;
        }

        .rc-pdsection-mainpanel .para-list {
          margin: 0;
          padding-bottom: 0.4em;
        }
        .rc-pdsection-mainpanel .para-list.as-pdp-lastparalist {
          padding-bottom: 1.6em;
        }

        .rc-pdsection-mainpanel.rc-pdsection-mainpanel-nobullets ul,
        .rc-pdsection-mainpanel p {
          margin: 0;
        }

        .rc-pdsection-mainpanel .h4-para-title {
          padding-bottom: 0.4em;
        }

        /* r-height-transition-enter-done */
        .r-height-transition-enter-done:not(.r-height-transition-enter-active)
          [data-core-height-transition-content],
        .r-height-transition-enter-done:not(.r-height-transition-enter-active)[data-core-height-transition-wrapper] {
          overflow: visible;
        }

        .rf-pdp-compatibility-list {
          display: inline-block;
          vertical-align: top;
          width: 105%;
          text-align: left;
          margin-bottom: 32px;
        }

        .rf-pdp-compatibility-list .rf-pdp-compatibility-title {
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .rf-pdp-compatibility-productlistitems {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          padding-bottom: 6px;
        }

        .rf-pdp-compatibility-productlistitems
          .rf-pdp-compatibility-productlistlinks {
          color: #1d1d1f;
          text-decoration: none;
        }

        @media only screen and (min-width: 735px) {
          .rc-accordion-button {
            padding: 30px 0 34px;
          }
          .rc-accordion-chevrondown {
            width: 32px;
            top: 12px;
          }

          .rf-compability-mainpanel {
            columns: 3 auto;
          }

          .rc-pdsection-sidepanel {
            padding: 36px 0;
          }
          .rc-pdsection-sidepanel .rc-pdsection-title {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
            margin-right: 35px;
            word-wrap: break-word;
          }

          .rc-pdsection-mainpanel {
            border-bottom: 1px solid #d2d2d7;
            padding: 40px 0 41px;
          }
          .rc-pdsection-panel:first-child .rc-pdsection-mainpanel {
            padding-top: 4px;
          }

          .rf-pdp-compatibility .rc-accordion-content {
            margin-bottom: 87px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rc-accordion-button {
            padding: 24px 0 25px;
          }
          .rc-accordion-chevrondown {
            width: 24px;
            top: 4px;
          }

          .rf-compability-mainpanel {
            columns: 1 auto;
          }

          .rc-pdsection-sidepanel {
            padding: 0 0 30px;
          }

          .rc-pdsection-sidepanel .rc-pdsection-title {
            font-size: 21px;
            line-height: 1.19048;
            font-weight: 600;
            letter-spacing: 0.011em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
            margin-right: 0;
            padding-bottom: 16px;
            border-bottom: 1px solid #d2d2d7;
          }

          .rc-pdsection-mainpanel {
            border-bottom: none;
            padding: 0 0 30px;
          }
          .rc-pdsection-panel:first-child .rc-pdsection-mainpanel {
            padding-top: 0;
          }

          .rf-pdp-compatibility .rc-accordion-content {
            margin-bottom: 44px;
          }
        }
      `}</style>
      <div id='pdp-accordion-root' aria-label='Product Information'>
        <div
          className='rf-pdp-product-details section-content'
          data-analytics-section='accordion'
        >
          <ul
            data-core-accordion=''
            id='323b3650-ea74-11ec-8f17-9f136c7b88b4'
            className='rc-accordion rf-pdp-accordionlist rc-accordion-hover'
          >
            <li
              data-core-accordion-item=''
              className='rc-accordion-item rf-pdp-accordionbox rf-pdp-productinfosection'
            >
              <h2
                className='rf-pdp-accordionboxtitle'
                data-autom='productInformationTitle'
              >
                <button
                  type='button'
                  data-core-accordion-button=''
                  aria-expanded='false'
                  aria-controls='content-323b3650-ea74-11ec-8f17-9f136c7b88b4-0'
                  id='title-323b3650-ea74-11ec-8f17-9f136c7b88b4-0'
                  className='rc-accordion-button rf-pdp-productinformation-accordion'
                >
                  <span className='rc-accordion-title'>
                    Product Information
                  </span>
                  <span className='icon'></span>
                  <span className='rc-accordion-chevrondown'>
                    <svg
                      viewBox='0 0 17 8.85'
                      className='as-svgicon as-svgicon-chevrondown as-svgicon-base as-svgicon-chevrondownbase'
                      role='img'
                      aria-hidden='true'
                      width='35px'
                      height='35px'
                    >
                      <path fill='none' d='M0 0h35v35H0z'></path>
                      <path
                        fill='none'
                        stroke='#86868b'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.25'
                        d='M15 1.13L8.5 7.72 2 1.13'
                      ></path>
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                data-core-height-transition-wrapper=''
                className='r-height-transition-exit-done'
                style={{ height: '0px' }}
                aria-hidden='true'
              >
                <div data-core-height-transition-content=''>
                  <div
                    data-core-accordion-content=''
                    id='content-323b3650-ea74-11ec-8f17-9f136c7b88b4-0'
                    aria-hidden='true'
                  >
                    <div className='rc-accordion-content rc-accordion-content-nopadding'>
                      <div className=''>
                        <div className='rc-pdsection-panel Overview-panel row'>
                          <div className='rc-pdsection-sidepanel column large-3 small-12'>
                            <h3
                              data-autom='sectionTitle'
                              className='rc-pdsection-title'
                            >
                              Overview
                            </h3>
                          </div>
                          <div className='rc-pdsection-mainpanel column large-9 small-12'>
                            <h4 className='h4-para-title'>
                              Magic like you’ve never heard
                            </h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                AirPods Pro have been designed to deliver Active
                                Noise Cancellation for immersive sound,
                                Transparency mode so you can hear your
                                surroundings, and a customizable fit for all-day
                                comfort. Just like AirPods, AirPods Pro connect
                                magically to your Apple devices. And they’re
                                ready to use right out of the case.
                              </p>
                            </div>

                            <h4 className='h4-para-title'>
                              Active Noise Cancellation
                            </h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                Incredibly light noise-cancelling headphones,
                                AirPods Pro block out your environment so you
                                can focus on what you’re listening to. AirPods
                                Pro use two microphones, an outward-facing
                                microphone and an inward-facing microphone, to
                                create superior noise cancellation. By
                                continuously adapting to the geometry of your
                                ear and the fit of the ear tips, Active Noise
                                Cancellation silences the world to keep you
                                fully tuned in to your music, podcasts, and
                                calls.
                              </p>
                            </div>

                            <h4 className='h4-para-title'>Transparency mode</h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                Switch to Transparency mode and AirPods Pro let
                                the outside sound in, allowing you to hear and
                                connect to your surroundings. Outward- and
                                inward-facing microphones enable AirPods Pro to
                                undo the sound-isolating effect of the silicone
                                tips so things sound and feel natural, like when
                                you’re talking to people around you. And
                                Conversation Boost makes it easier to hear
                                people during face-to-face conversations in
                                noisy environments by focusing your AirPods Pro
                                on the person talking directly in front of you.
                              </p>
                            </div>

                            <h4 className='h4-para-title'>Customizable fit</h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                AirPods Pro offer a more customizable fit with
                                three sizes of flexible silicone tips to choose
                                from. With an internal taper, they conform to
                                the shape of your ear, securing your AirPods Pro
                                in place and creating an exceptional seal for
                                superior noise cancellation.
                              </p>
                            </div>

                            <h4 className='h4-para-title'>
                              MagSafe Charging Case
                            </h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                AirPods Pro with the MagSafe Charging Case
                                deliver more than 24 hours of battery life.¹
                                When it’s time to charge, just set the case down
                                on your MagSafe charger, or a wireless charging
                                mat, and let it charge. And when you’re away
                                from a wireless charger, you can use the
                                Lightning port to charge.
                              </p>
                            </div>

                            <h4 className='h4-para-title'>
                              Amazing audio quality
                            </h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                A custom-built high-excursion, low-distortion
                                driver delivers powerful bass. A superefficient
                                high dynamic range amplifier produces pure,
                                incredibly clear sound while also extending
                                battery life. Spatial audio with dynamic head
                                tracking places sound all around you.² And
                                Adaptive EQ automatically tunes music to suit
                                the shape of your ear for a rich, consistent
                                listening experience.
                              </p>
                            </div>

                            <h4 className='h4-para-title'>Even more magical</h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                The Apple-designed H1 chip delivers incredibly
                                low audio latency. A force sensor on the stem
                                makes it easy to control music and calls and
                                switch between Active Noise Cancellation and
                                Transparency mode. Announce Messages with Siri
                                gives you the option to have Siri read your
                                messages through your AirPods. And with Audio
                                Sharing, you and a friend can share the same
                                audio stream on two sets of AirPods — so you can
                                play a game, watch a movie, or listen to a song
                                together.³
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='rc-pdsection-panel Highlights-panel row'>
                          <div className='rc-pdsection-sidepanel column large-3 small-12'>
                            <h3
                              data-autom='sectionTitle'
                              className='rc-pdsection-title'
                            >
                              Highlights
                            </h3>
                          </div>
                          <div className='rc-pdsection-mainpanel column large-9 small-12'>
                            <div className='para-list'>
                              <p>Designed by Apple</p>
                            </div>
                            <div className='para-list'>
                              <p>Active Noise Cancellation</p>
                            </div>
                            <div className='para-list'>
                              <p>More customizable fit and seal</p>
                            </div>
                            <div className='para-list'>
                              <p>Transparency mode</p>
                            </div>
                            <div className='para-list'>
                              <p>Spatial audio with dynamic head tracking²</p>
                            </div>
                            <div className='para-list'>
                              <p>Amazing sound quality with Adaptive EQ</p>
                            </div>
                            <div className='para-list'>
                              <p>Sweat and water resistant (IPX4)⁴</p>
                            </div>
                            <div className='para-list'>
                              <p>Easy setup for all your Apple devices</p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                Case can be charged either wirelessly using a
                                MagSafe charger or Qi-certified charger, or with
                                the Lightning connector
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='rc-pdsection-panel WhatsInTheBox-panel row'>
                          <div className='rc-pdsection-sidepanel column large-3 small-12'>
                            <h3
                              data-autom='sectionTitle'
                              className='rc-pdsection-title'
                            >
                              What’s in the Box
                            </h3>
                          </div>
                          <div className='rc-pdsection-mainpanel column large-9 small-12'>
                            <div className='para-list'>
                              <p>AirPods Pro</p>
                            </div>
                            <div className='para-list'>
                              <p>MagSafe Charging Case</p>
                            </div>
                            <div className='para-list'>
                              <p>Silicone ear tips (three sizes)</p>
                            </div>
                            <div className='para-list'>
                              <p>Lightning to USB-C Cable</p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>Documentation</p>
                            </div>
                          </div>
                        </div>
                        <div className='rc-pdsection-panel TechSpecs-panel row'>
                          <div className='rc-pdsection-sidepanel column large-3 small-12'>
                            <h3
                              data-autom='sectionTitle'
                              className='rc-pdsection-title'
                            >
                              Tech Specs
                            </h3>
                          </div>
                          <div className='rc-pdsection-mainpanel column large-9 small-12'>
                            <h4 className='h4-para-title'>Audio Technology</h4>
                            <div className='para-list'>
                              <p>Active Noise Cancellation</p>
                            </div>
                            <div className='para-list'>
                              <p>Transparency mode</p>
                            </div>
                            <div className='para-list'>
                              <p>Spatial audio with dynamic head tracking²</p>
                            </div>
                            <div className='para-list'>
                              <p>Adaptive EQ</p>
                            </div>
                            <div className='para-list'>
                              <p>Vent system for pressure equalization</p>
                            </div>
                            <div className='para-list'>
                              <p>Custom high-excursion Apple driver</p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>Custom high dynamic range amplifier</p>
                            </div>

                            <h4 className='h4-para-title'>Sensors</h4>
                            <div className='para-list'>
                              <p>Dual beamforming microphones</p>
                            </div>
                            <div className='para-list'>
                              <p>Inward-facing microphone</p>
                            </div>
                            <div className='para-list'>
                              <p>Dual optical sensors</p>
                            </div>
                            <div className='para-list'>
                              <p>Motion-detecting accelerometer</p>
                            </div>
                            <div className='para-list'>
                              <p>Speech-detecting accelerometer</p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>Force sensor</p>
                            </div>

                            <h4 className='h4-para-title'>Chip</h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>H1-based System in Package</p>
                            </div>

                            <h4 className='h4-para-title'>Controls</h4>
                            <div className='para-list'>
                              <p>
                                Press once to play, pause, or answer a phone
                                call
                              </p>
                            </div>
                            <div className='para-list'>
                              <p>Press twice to skip forward</p>
                            </div>
                            <div className='para-list'>
                              <p>Press three times to skip back</p>
                            </div>
                            <div className='para-list'>
                              <p>
                                Press and hold to switch between Active Noise
                                Cancellation and Transparency mode
                              </p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                Say “Hey Siri” to do things like play a song,
                                make a call, or get directions
                              </p>
                            </div>

                            <div>
                              <ul className='bulleted'>
                                <h4 className='h4-para-title'>
                                  Sweat and Water Resistant
                                </h4>
                                <li>Sweat and water resistant (IPX4)⁴</li>
                              </ul>
                            </div>

                            <h4 className='h4-para-title'>Size and Weight</h4>
                            <div className='para-list'>
                              <p>AirPods Pro (each)⁵</p>
                            </div>
                            <div className='para-list'>
                              <p>Height: 1.22 inches (30.9 mm)</p>
                            </div>
                            <div className='para-list'>
                              <p>Width: 0.86 inch (21.8 mm)</p>
                            </div>
                            <div className='para-list'>
                              <p>Depth: 0.94 inch (24.0 mm)</p>
                            </div>
                            <div className='para-list'>
                              <p>Weight: 0.19 ounce (5.4 grams)</p>
                            </div>
                            <div className='para-list'>
                              <p>MagSafe Charging Case⁵</p>
                            </div>
                            <div className='para-list'>
                              <p>Height: 1.78 inches (45.2 mm)</p>
                            </div>
                            <div className='para-list'>
                              <p>Width: 2.39 inches (60.6 mm)</p>
                            </div>
                            <div className='para-list'>
                              <p>Depth: 0.85 inch (21.7 mm)</p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>Weight: 1.61 ounces (45.6 grams)</p>
                            </div>

                            <h4 className='h4-para-title'>Charging Case</h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                Works with MagSafe charger, Qi-certified
                                chargers, or the Lightning connector
                              </p>
                            </div>

                            <h4 className='h4-para-title'>Battery</h4>
                            <div className='para-list'>
                              <p>AirPods Pro</p>
                            </div>
                            <div className='para-list'>
                              <p>
                                Up to 4.5 hours of listening time with a single
                                charge (up to 5 hours with Active Noise
                                Cancellation and Transparency off)⁶
                              </p>
                            </div>
                            <div className='para-list'>
                              <p>
                                Up to 3.5 hours of talk time with a single
                                charge⁷
                              </p>
                            </div>
                            <div className='para-list'>
                              <p>AirPods Pro with MagSafe Charging Case</p>
                            </div>
                            <div className='para-list'>
                              <p>More than 24 hours of listening time¹</p>
                            </div>
                            <div className='para-list'>
                              <p>More than 18 hours of talk time⁸</p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                5 minutes in the case provides around 1 hour of
                                listening time⁹ or around 1 hour of talk time¹⁰
                              </p>
                            </div>

                            <h4 className='h4-para-title'>Connectivity</h4>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>Bluetooth 5.0</p>
                            </div>

                            <h4 className='h4-para-title'>Accessibility</h4>
                            <div className='para-list'>
                              <p>
                                Accessibility features help people with
                                disabilities get the most out of their new
                                AirPods Pro. Features include:
                              </p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>Live Listen audio¹¹</p>
                            </div>
                          </div>
                        </div>
                        <div className='rc-pdsection-panel SystemRequirements-panel row'>
                          <div className='rc-pdsection-sidepanel column large-3 small-12'>
                            <h3
                              data-autom='sectionTitle'
                              className='rc-pdsection-title'
                            >
                              System Requirements
                            </h3>
                          </div>
                          <div className='rc-pdsection-mainpanel column large-9 small-12 rc-pdsection-mainpanel-nobullets'>
                            <div className='para-list'>
                              <p>
                                iPhone and iPod touch models with the latest
                                version of iOS¹²
                              </p>
                            </div>
                            <div className='para-list'>
                              <p>
                                iPad models with the latest version of iPadOS¹²
                              </p>
                            </div>
                            <div className='para-list'>
                              <p>
                                Apple Watch models with the latest version of
                                watchOS¹²
                              </p>
                            </div>
                            <div className='para-list'>
                              <p>
                                Mac models with the latest version of macOS¹²
                              </p>
                            </div>
                            <div className='para-list as-pdp-lastparalist'>
                              <p>
                                Apple TV models with the latest version of
                                tvOS¹²
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              data-core-accordion-item=''
              className='rc-accordion-item rf-pdp-accordionbox rf-pdp-compatibility'
            >
              <h2
                className='rf-pdp-accordionboxtitle'
                data-autom='compatibilityTitle'
              >
                <button
                  type='button'
                  data-core-accordion-button=''
                  aria-expanded='false'
                  aria-controls='content-323b3650-ea74-11ec-8f17-9f136c7b88b4-1'
                  id='title-323b3650-ea74-11ec-8f17-9f136c7b88b4-1'
                  className='rc-accordion-button rf-pdp-compatibility-accordion'
                >
                  <span className='rc-accordion-title'>Compatibility</span>
                  <span className='icon'></span>
                  <span className='rc-accordion-chevrondown'>
                    <svg
                      viewBox='0 0 17 8.85'
                      className='as-svgicon as-svgicon-chevrondown as-svgicon-base as-svgicon-chevrondownbase'
                      role='img'
                      aria-hidden='true'
                      width='35px'
                      height='35px'
                    >
                      <path fill='none' d='M0 0h35v35H0z'></path>
                      <path
                        fill='none'
                        stroke='#86868b'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.25'
                        d='M15 1.13L8.5 7.72 2 1.13'
                      ></path>
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                aria-hidden='true'
                data-core-height-transition-wrapper=''
                className='r-height-transition-exit-done'
                style={{ height: '0px' }}
              >
                <div data-core-height-transition-content=''>
                  <div
                    data-core-accordion-content=''
                    aria-hidden='true'
                    id='content-323b3650-ea74-11ec-8f17-9f136c7b88b4-1'
                  >
                    <div className='rc-accordion-content rc-accordion-content-nopadding'>
                      <div className=''>
                        <div className='rf-pdp-compabilitysection-panel row'>
                          <div className='rf-pdp-compability-sidepanel column large-3 small-12'>
                            <div className='rf-pdp-compatibility'></div>
                          </div>
                          <div className='rf-compability-mainpanel column large-9 small-12'>
                            <div className='rf-pdp-compatibility-list'>
                              <h3
                                className='rf-pdp-compatibility-title'
                                data-autom='compatibleModelTitle'
                              >
                                iPhone Models
                              </h3>
                              <ul role='list' className='rf-pdp-productlist'>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/shop/buy-iphone/iphone-13-pro'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPhone 13 Pro
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/shop/buy-iphone/iphone-13-pro'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPhone 13 Pro Max
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/shop/buy-iphone/iphone-13'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPhone 13 mini
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/shop/buy-iphone/iphone-13'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPhone 13
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/shop/buy-iphone/iphone-se'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPhone SE (3rd generation)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 12 Pro</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 12 Pro Max</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/shop/buy-iphone/iphone-12'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPhone 12 mini
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/shop/buy-iphone/iphone-12'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPhone 12
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 11 Pro</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 11 Pro Max</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/shop/buy-iphone/iphone-11'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPhone 11
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone SE (2nd generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone XS</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone XS Max</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone XR</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone X</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 8</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 8 Plus</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 7</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 7 Plus</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 6s</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone 6s Plus</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPhone SE (1st generation)</span>
                                </li>
                              </ul>
                            </div>
                            <div className='rf-pdp-compatibility-list'>
                              <h3
                                className='rf-pdp-compatibility-title'
                                data-autom='compatibleModelTitle'
                              >
                                Apple Watch Models
                              </h3>
                              <ul role='list' className='rf-pdp-productlist'>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/watch'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    Apple Watch Series 7
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Apple Watch Series 6</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/watch'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    Apple Watch SE
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Apple Watch Series 5</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Apple Watch Series 4</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='https://www.apple.com/watch'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    Apple Watch Series 3
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Apple Watch Series 2</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Apple Watch Series 1</span>
                                </li>
                              </ul>
                            </div>
                            <div className='rf-pdp-compatibility-list'>
                              <h3
                                className='rf-pdp-compatibility-title'
                                data-autom='compatibleModelTitle'
                              >
                                Apple TV Models
                              </h3>
                              <ul role='list' className='rf-pdp-productlist'>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-tv/apple-tv-4k'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    Apple TV 4K (2nd generation)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Apple TV 4K (1st generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Apple TV HD</span>
                                </li>
                              </ul>
                            </div>
                            <div className='rf-pdp-compatibility-list'>
                              <h3
                                className='rf-pdp-compatibility-title'
                                data-autom='compatibleModelTitle'
                              >
                                iPod Models
                              </h3>
                              <ul role='list' className='rf-pdp-productlist'>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPod touch (7th generation)</span>
                                </li>
                              </ul>
                            </div>
                            <div className='rf-pdp-compatibility-list'>
                              <h3
                                className='rf-pdp-compatibility-title'
                                data-autom='compatibleModelTitle'
                              >
                                iPad Models
                              </h3>
                              <ul role='list' className='rf-pdp-productlist'>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-ipad/ipad-pro'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPad Pro 12.9-inch (5th generation)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    iPad Pro 12.9-inch (4th generation)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    iPad Pro 12.9-inch (3rd generation)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    iPad Pro 12.9-inch (2nd generation)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    iPad Pro 12.9-inch (1st generation)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-ipad/ipad-pro'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPad Pro 11-inch (3rd generation)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad Pro 11-inch (2nd generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad Pro 11-inch (1st generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad Pro 10.5-inch</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad Pro 9.7-inch</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-ipad/ipad-air'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPad Air (5th generation)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad Air (4th generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad Air (3rd generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad Air 2</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-ipad/ipad-10-2'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPad (9th generation)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad (8th generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad (7th generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad (6th generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad (5th generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-ipad/ipad-mini'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iPad mini (6th generation)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad mini (5th generation)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iPad mini 4</span>
                                </li>
                              </ul>
                            </div>
                            <div className='rf-pdp-compatibility-list'>
                              <h3
                                className='rf-pdp-compatibility-title'
                                data-autom='compatibleModelTitle'
                              >
                                Mac Models
                              </h3>
                              <ul role='list' className='rf-pdp-productlist'>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/macbook-air'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    MacBook Air (M2, 2022)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/macbook-air/m1-chip'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    MacBook Air (M1, 2020)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    MacBook Air (Retina, 13‑inch, 2020)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    MacBook Air (Retina, 13-inch, 2018 - 2019)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    MacBook Air (13-inch, Early 2015 - 2017)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>MacBook Air (11-inch, Early 2015)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/macbook-pro'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    MacBook Pro (13-inch, M2, 2022)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>MacBook Pro (13-inch, M1, 2020)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>MacBook Pro (13-inch, 2020)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    MacBook Pro (13-inch, 2016 - 2019)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    MacBook Pro (Retina, 13-inch, Late 2012 -
                                    2015)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/macbook-pro/14-inch'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    MacBook Pro (14-inch, 2021)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/macbook-pro/16-inch'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    MacBook Pro (16-inch, 2021)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>MacBook Pro (16-inch, 2019)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    MacBook Pro (15-inch, 2016 - 2019)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    MacBook Pro (Retina, 15-inch, Mid 2012 -
                                    2015)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    MacBook (Retina, 12-inch, Early 2015 – 2017)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/imac'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    iMac (24-inch, M1, 2021)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iMac (Retina 4K, 21.5-inch, 2019)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iMac (Retina 4K, 21.5-inch, 2017)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    iMac (Retina 4K, 21.5-inch, Late 2015)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    iMac (Retina 5K, 27-inch, 2019 - 2020)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iMac (Retina 5K, 27-inch, 2017)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>
                                    iMac (Retina 5K, 27-inch, Late 2014 - 2015)
                                  </span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>iMac Pro (2017)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/mac-studio'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    Mac Studio (2022){' '}
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/mac-mini'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    Mac mini (M1, 2020)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/mac-mini'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    Mac mini (2018)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Mac mini (Late 2014)</span>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <a
                                    href='/shop/buy-mac/mac-pro/mac-pro'
                                    className='rf-pdp-compatibility-productlistlinks'
                                  >
                                    Mac Pro (2019)
                                  </a>
                                </li>
                                <li
                                  role='listitem'
                                  className='rf-pdp-compatibility-productlistitems'
                                >
                                  <span>Mac Pro (Late 2013)</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
