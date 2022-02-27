import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const ProductDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="details max-w-screen px-4 mx-auto md:px-8 pb-10">
        <h2 className="my-3 px-20 md:px-28 mx-auto uppercase text-6xl sm:text-6xl text-center font-black flex flex-col leading-none text-gray-800">
          {title}
        </h2>
        <Img
          className="max-w-sm mx-auto object-contain"
          fluid={featuredImg.childImageSharp.fluid}
        />
      </div>
      <div className="bg-white">
        <div className="details px-20 mx-auto md:px-28 pt-10 pb-10 max-w-screen-xl">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails

export const query = graphql`
  query ProductDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
