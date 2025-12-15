import "./globals.css"

export const metadata = {
  title: "Peanuts Academy",
  description: "Professional training and development programs",
}

export const viewport = {
  themeColor: "#0d9488",
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  )
}
