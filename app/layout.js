import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>Hello</div>
        {children}
      </body>
    </html>
  )
}
