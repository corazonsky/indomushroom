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
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-4 fixed top-0 inset-x-0 z-50">
      <div class="container flex flex-wrap justify-between items-center mx-auto text-xs md:text-base ">
        <Link to="/#header" class="flex">
          <span class="self-center text-lg font-semibold whitespace-nowrap uppercase">
            {title}
          </span>
        </Link>
        <div class="w-full block w-auto">
          <ul class="flex flex-row space-x-8 mt-0 font-medium">
            <li>
              <Link
                to="/#header"
                class="py-2 pr-2 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                class="py-2 pr-2 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                class="py-2 pr-3 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                class="py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
