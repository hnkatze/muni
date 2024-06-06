
import Link from "next/link"
import { SVGProps } from "react"

export function BaseServ() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center h-14 px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="grid gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-6xl/none xl:text-7xl/none">
            Welcome to Acme Inc
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open
            Source.
          </p>
        </div>
        <div className="mx-auto grid gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
              The complete platform for building the Web
            </h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and scale the
              best web experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
              The complete platform for building the Web
            </h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and scale the
              best web experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
              The complete platform for building the Web
            </h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and scale the
              best web experiences.
            </p>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function MountainIcon(props:SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
