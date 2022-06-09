import { useState } from 'react'

export default function SearchBox({ title, placeholder }) {
  const [input, setInput] = useState('')

  function hangleInput(e) {
    e.preventDefault()
    setInput(e.target.value)
  }

  return (
    <>
      <div className='searchbox section-content'>
        <div className='search-box large-6 small-12 large-centered'>
          <h1 className='section-headline'>
            <span>{title}</span>
          </h1>
          <form method='POST' data-analytics-region='search'>
            <div className='form-textbox form-textbox-with-button form-textbox-with-righticon'>
              {' '}
              <input
                name='search'
                type='text'
                className={`form-textbox-input search-input${
                  input && ' form-textbox-entered'
                }`}
                aria-invalid='false'
                autoComplete='off'
                onChange={(e) => hangleInput(e)}
                value={input}
              />
              <span className='form-textbox-label' aria-hidden='true'>
                {placeholder}
              </span>
              <div className='search-input-lefticon'>
                <button type='submit'>
                  <span className='form-icons form-icons-search15'>
                    <span className='visuallyhidden'>submit</span>
                  </span>
                </button>
              </div>
              <div className='form-textbox-righticon'>
                <button
                  type='button'
                  className='form-icons form-icons-reset'
                  onClick={() => setInput('')}
                >
                  <span className='visuallyhidden'>Clear</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .section-headline {
          font-size: 32px;
          line-height: 1.125;
          letter-spacing: 0.004em;
          margin: 60px auto 40px;
          text-align: center;
        }

        .form-textbox {
          position: relative;
          margin-bottom: 30px;
          z-index: 9996;
        }

        /* form-textbox-input */
        .form-textbox-input {
          font-size: 17px;
          line-height: 1.23536;
          letter-spacing: -0.022em;
          width: 100%;
          height: 3.29412rem;
          border-radius: 12px;
          border-width: 1px;
          border-style: solid;
          box-sizing: border-box;
          padding: 1.05882rem 0.94118rem 0;
          text-align: left;
          appearance: none;
        }
        .form-textbox .form-textarea,
        .form-textbox .form-textbox-input {
          color: #1d1d1f;
          border-color: #d2d2d7;
          background-color: hsla(0, 0%, 100%, 0.8);
          text-overflow: ellipsis;
        }
        .form-textbox-with-righticon .form-textbox-input {
          padding-right: 2.88235rem;
        }
        .form-textbox-with-button .form-textbox-input {
          padding-right: 3.82353rem;
        }
        .search-box .form-textbox-input {
          padding-left: 2.82353rem;
        } // :focus
        .form-textbox-input.focused,
        .form-textbox-input:focus {
          box-shadow: 0 0 0 4px rgb(0 125 250 / 60%);
          outline: none;
        }
        .form-textbox .form-textarea.focused,
        .form-textbox .form-textarea:focus,
        .form-textbox .form-textbox-input.focused,
        .form-textbox .form-textbox-input:focus {
          border-color: #0071e3;
        }

        /* form-textbox-label */
        .form-textbox-label {
          font-size: 17px;
          line-height: 1.23536;
          letter-spacing: -0.022em;

          max-width: calc(100% - 32px);
          position: absolute;
          top: 1.05882rem;
          left: 1rem;
          pointer-events: none;
          white-space: nowrap;
          overflow: hidden;

          transition-timing-function: ease-in;
          transition-duration: 0.125s;
        }
        .form-textbox .form-textbox-label {
          color: #86868b;
        }
        .search-box .form-textbox-label {
          padding-left: 1.88235rem;
        } // :focus
        .form-textbox
          .form-textbox-input:not(:disabled).focused
          ~ .form-textbox-label,
        .form-textbox
          .form-textbox-input:not(:disabled).form-textarea-with-placeholder
          ~ .form-textbox-label,
        .form-textbox
          .form-textbox-input:not(:disabled).form-textbox-entered
          ~ .form-textbox-label,
        .form-textbox
          .form-textbox-input:not(:disabled):focus
          ~ .form-textbox-label,
        .form-textbox
          .form-textbox-input:not(:disabled):valid[required]
          ~ .form-textbox-label,
        .form-textbox
          .form-textbox-input:not(:disabled)[placeholder]:not(:placeholder-shown)
          ~ .form-textbox-label,
        .form-textbox
          .form-textbox-input:not(:disabled)[placeholder]:not([placeholder=' '])
          ~ .form-textbox-label {
          color: #6e6e73;
        }
        .form-textbox-input.focused ~ .form-textbox-label,
        .form-textbox-input.form-textarea-with-placeholder
          ~ .form-textbox-label,
        .form-textbox-input.form-textbox-entered ~ .form-textbox-label,
        .form-textbox-input:focus ~ .form-textbox-label,
        .form-textbox-input:valid[required] ~ .form-textbox-label,
        .form-textbox-input[placeholder]:not(:placeholder-shown)
          ~ .form-textbox-label,
        .form-textbox-input[placeholder]:not([placeholder=' '])
          ~ .form-textbox-label {
          font-size: 12px;
          line-height: 1.33337;
          letter-spacing: -0.01em;
          top: 0.58824rem;
        }

        /* search-input-lefticon */
        .search-input-lefticon {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .form-icons {
          display: block;
        }
        .form-icons-clearsolid15,
        .form-icons-reset,
        .form-icons-search15 {
          background-size: 15px;
          background-repeat: no-repeat;
          width: 15px;
          height: 15px;
        }
        .form-icons-search15 {
          background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2018%2025%22%20fill%3D%22rgb%28134%2C134%2C139%29%22%20style%3D%22%22%3E%20%3Ctitle%3Emagnifyingglass_reduced%401x%3C%2Ftitle%3E%20%3Cg%20transform%3D%22translate%280%2C%20-2.75%29%22%3E%20%3Crect%20width%3D%2218%22%20height%3D%2225%22%20fill%3D%22none%22%2F%3E%20%3Cpath%20d%3D%22M17.512%2C20.113l-4.786-4.788a7.068%2C7.068%2C0%2C1%2C0-.777.778l4.785%2C4.788a.55.55%2C0%2C1%2C0%2C.777-.777ZM1.427%2C10.75A5.946%2C5.946%2C0%2C1%2C1%2C7.373%2C16.7%2C5.957%2C5.957%2C0%2C0%2C1%2C1.427%2C10.75Z%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E);
        }

        /*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 25" fill="rgb(134,134,139)" style=""> <title>magnifyingglass_reduced@1x</title> <g transform="translate(0, -2.75)"> <rect width="18" height="25" fill="none"/> <path d="M17.512,20.113l-4.786-4.788a7.068,7.068,0,1,0-.777.778l4.785,4.788a.55.55,0,1,0,.777-.777ZM1.427,10.75A5.946,5.946,0,1,1,7.373,16.7,5.957,5.957,0,0,1,1.427,10.75Z"/> </g> </svg>
        */

        .form-textbox-with-righticon .form-textbox-righticon {
          position: absolute;
          user-select: none;
          top: 1.17647rem;
          font-size: 32px;
          line-height: 1.09375;
          font-weight: 400;
          letter-spacing: 0.011em;
          font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          right: 1rem;
        }

        /* form-icons-reset */
        .form-icons-clearsolid15,
        .form-icons-reset {
          background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22rgb%28134%2C134%2C139%29%22%20style%3D%22%22%3E%20%3Ctitle%3Exmark.circle.fill_reduced%401x%3C%2Ftitle%3E%20%3Cg%20transform%3D%22translate%28-0.5%2C%20-3%29%22%3E%20%3Cpath%20d%3D%22M10%2C3a9.5%2C9.5%2C0%2C1%2C0%2C9.5%2C9.5A9.5%2C9.5%2C0%2C0%2C0%2C10%2C3Zm3.889%2C12.611a.55.55%2C0%2C1%2C1-.777.777L10%2C13.277%2C6.889%2C16.389a.55.55%2C0%2C0%2C1-.777-.777L9.223%2C12.5%2C6.111%2C9.389a.55.55%2C0%2C0%2C1%2C.777-.777L10%2C11.723l3.111-3.111a.55.55%2C0%2C0%2C1%2C.777.777L10.777%2C12.5Z%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E);
        }
        .form-textbox-with-lefticon .form-textbox-lefticon .form-icons-reset,
        .form-textbox-with-righticon .form-textbox-righticon .form-icons-reset {
          display: none;
        } // :entered
        .form-icons-message .form-label-small,
        .form-textbox-input.form-textbox-entered
          ~ .form-textbox-lefticon
          .form-icons-reset,
        .form-textbox-input.form-textbox-entered
          ~ .form-textbox-righticon
          .form-icons-reset,
        .form-textbox-input:valid[required]
          ~ .form-textbox-lefticon
          .form-icons-reset,
        .form-textbox-input:valid[required]
          ~ .form-textbox-righticon
          .form-icons-reset {
          display: block;
        }

        /* desktop ////////////////////////// */
        @media only screen and (min-width: 1069px) {
          /* TODO: Page Not Found */
          .page-not-found .section-headline {
            font-size: 48px;
            line-height: 1.08349;
            letter-spacing: -0.003em;
            margin: 90px -8px 49px;
          }
          .form-textbox {
            margin-bottom: 42px;
          }
        }
        /* tablet ////////////////////////// */
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .searchbox.section-content {
            width: 100%;
          }
        }
        /* mobile ////////////////////////// */
        @media only screen and (max-width: 734px) {
          .accessories .section-headline {
            font-size: 24px;
            line-height: 1.16667;
            letter-spacing: 0.009em;
          }
        }
      `}</style>
    </>
  )
}

SearchBox.defaultProps = {
  title: 'The page you’re looking for can’t be found.',
  placeholder: 'Search apple.com',
}
