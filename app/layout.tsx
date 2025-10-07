import "./global.css"
import { RootProvider } from "fumadocs-ui/provider/next"
import { Inter } from "next/font/google"
import type { ReactNode, SVGProps } from "react"
import { Metadata } from "next"

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
    "nikita voloboev",
    "personal website",
    "docs",
    "looking back",
    "solbond",
    "learn anything",
  ],
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
          <GithubCornerLink />
        </RootProvider>
      </body>
    </html>
  )
}

function GithubCornerLink() {
  return (
    <a
      href="https://github.com/nikitavoloboev/nikiv"
      aria-label="nikiv GitHub repository"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 inline-flex items-center justify-center rounded-full border border-neutral-200/80 p-1.5 text-neutral-500 transition hover:border-neutral-400 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 dark:border-neutral-700/80 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-white dark:focus-visible:outline-neutral-500"
    >
      <GithubIcon className="h-5 w-5" />
      <span className="sr-only">Open nikiv GitHub repository</span>
    </a>
  )
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.874.119 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.476 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
    </svg>
  )
}
