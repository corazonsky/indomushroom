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
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 fixed bottom-0 inset-x-0 z-50">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <span class="text-xs text-gray-500 sm:text-center md:text-base">
          {copyright}
        </span>
        <span class="text-xs text-gray-500 sm:text-center md:text-base">
          <FontAwesomeIcon icon={faEnvelope} />
          <b class="ml-2 mx-auto">
            Send your inquriy to info@purespiceindo.com
          </b>
        </span>
      </div>
    </footer>
  )
}
