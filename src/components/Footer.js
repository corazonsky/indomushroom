import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const { copyright } = data.site.siteMetadata

  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-base text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com" class="hover:underline" target="_blank">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
          <a
            href="#"
            class="mr-4 text-base text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            class="mr-4 text-base text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            class="mr-4 text-base text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
          >
            Licensing
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-base text-gray-500 hover:underline dark:text-gray-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}
