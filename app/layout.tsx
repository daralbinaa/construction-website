import type React from "react"
import ClientLayout from "./client-layout"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/DABLOGO.png" type="image/png" />
        <link rel="shortcut icon" href="/DABLOGO.png" type="image/png" />
        <link rel="apple-touch-icon" href="/DABLOGO.png" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
  generator: 'v0.dev',
  icons: {
    icon: '/DABLOGO.png',
    shortcut: '/DABLOGO.png',
    apple: '/DABLOGO.png',
  },
};
