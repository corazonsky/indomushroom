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
    <footer class="bg-white w-full py-8">
      <div class="max-w-screen-xl mx-auto px-4">
        <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li class="my-2">
            <a
              class="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li class="my-2">
            <a
              class="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href="#"
            >
              Configuration
            </a>
          </li>
          <li class="my-2">
            <a
              class="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href="#"
            >
              Github
            </a>
          </li>
          <li class="my-2">
            <a
              class="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href="#"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div class="text-center text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center">
          {copyright}
        </div>
      </div>
    </footer>
  )
}
