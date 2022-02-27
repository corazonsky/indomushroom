import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

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
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <span class="text-base text-gray-500 sm:text-center dark:text-gray-400">
          {copyright}
        </span>
        <span class="text-base text-gray-500 sm:text-center dark:text-gray-400">
          <FontAwesomeIcon icon={faEnvelope} />
          <b class="ml-2 mx-auto">
            Send your inquriy to info@purespiceindo.com
          </b>
        </span>
      </div>
    </footer>
  )
}
