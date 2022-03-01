import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Nav() {
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
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 fixed top-0 inset-x-0 z-50">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap">
            {title}
          </span>
        </Link>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <FontAwesomeIcon icon={faBars} color="gray" />
        </button>
        <div
          className={
            "mobile-menu w-full md:block md:w-auto" +
            (navbarOpen ? "" : " hidden")
          }
        >
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/#header"
                onClick={() => setNavbarOpen(!navbarOpen)}
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                onClick={() => setNavbarOpen(!navbarOpen)}
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products#products"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact#contact"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
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

export default Nav
