import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <nav class="bg-white shadow ">
      <div class="max-w-8xl mx-auto px-8 py-4">
        <div class="flex items-center justify-between h-16">
          <div class="w-full justify-between flex items-center">
            <h1 class="flex-shrink-0 text-xl">
              <b>{title}</b>
            </h1>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  class="text-gray-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium text-xl"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  class="text-gray-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium text-xl"
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  class="text-gray-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium text-xl"
                >
                  Content
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            class="text-gray-300 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            class="text-gray-300 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/projects"
            class="text-gray-300 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Content
          </Link>
        </div>
      </div>
    </nav>
  )
}
