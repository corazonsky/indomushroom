import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons"

const Contact = ({ data }) => {
  const {
    name,
    address,
    address_details,
    email,
    phone,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="details max-w-screen px-4 mx-auto md:px-8 pb-10">
        <h2 className="my-3 px-20 md:px-28 mx-auto uppercase text-6xl sm:text-6xl text-center font-black flex flex-col leading-none text-gray-800">
          Contact Us
        </h2>
      </div>
      <div className="contact mx-auto bg-white">
        <div class="container rounded-md justify-between items-center mx-auto max-w-screen px-28 py-28">
          <h2 className="font-bold">Pure Spice Indo</h2>
          <h2>{name}</h2>
          <div className="flex justify-start align-middle">
            <FontAwesomeIcon icon={faHome} className="mt-3 w-4 h-4" />
            <h3 className="ml-2">{address}</h3>
          </div>
          <div className="flex justify-start align-middle">
            <FontAwesomeIcon icon={faEnvelope} className="mt-3 w-4 h-4" />
            <h3 className="ml-2">{email}</h3>
          </div>
          <div className="flex justify-start align-middle">
            <FontAwesomeIcon icon={faPhone} className="mt-3 w-4 h-4" />
            <h3 className="ml-2">{phone}</h3>
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
