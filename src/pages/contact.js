import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons"

const Contact = ({ data }) => {
  const { name, address, email, phone } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div
        className="md:max-w-screen-xl px-4 mx-auto md:px-8 py-10"
        id="contact"
      >
        <h2 className="my-3 mx-auto uppercase text-4xl md:text-6xl text-center font-black text-gray-800">
          Contact Us
        </h2>
      </div>
      <div className="contact mx-auto bg-white">
        <div class="container rounded-md justify-between items-center mx-auto md:max-w-screen-xl px-28 py-28">
          <h2 className="font-bold text-lg sm:text-2xl py-2">
            Pure Spice Indo
          </h2>
          <h2 className="text-lg sm:text-xl py-2">{name}</h2>
          <div className="flex justify-start align-middle py-3">
            <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
            <p className="ml-2 text-xs sm:text-base">{address}</p>
          </div>
          <div className="flex justify-start align-middl py-3">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            <p className="ml-2 text-xs sm:text-base">{email}</p>
          </div>
          <div className="flex justify-start align-middle py-3">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
            <p className="ml-2 text-xs sm:text-base">{phone}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query Contact {
    markdownRemark(frontmatter: { slug: { eq: "contact" } }) {
      frontmatter {
        name
        address
        address_details
        email
        phone
      }
    }
  }
`
