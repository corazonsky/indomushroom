import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const About = ({ data }) => {
  // const { html } = data.markdownRemark
  // const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="a">
        {/* <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className="b">
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className="c" dangerouslySetInnerHTML={{ __html: html }} /> */}
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query About {
    markdownRemark(frontmatter: { slug: { eq: "about-us" } }) {
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
