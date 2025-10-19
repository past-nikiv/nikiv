import "./global.css"
import { RootProvider } from "fumadocs-ui/provider/next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import { OpenPanelComponent } from "@openpanel/nextjs"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "nikiv.dev | Personal website, docs",
    template: "%s | nikiv.dev",
  },
  description: "Personal website, docs",
  metadataBase: new URL("https://nikiv.dev"),
  // TODO: not sure if this is applied
  openGraph: {
    title: "nikiv.dev",
    description: "Personal website, docs",
    url: "https://nikiv.dev",
    siteName: "nikiv.dev",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "nikiv",
    "nikivdev",
    "nikita voloboev",
    "personal website",
    "docs",
    "looking back",
    "solbond",
    "learn anything",
  ],
}

export default function Layout({ children }: { children: ReactNode }) {
  const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {clientId ? (
          <OpenPanelComponent clientId={clientId} trackScreenViews />
        ) : null}
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
