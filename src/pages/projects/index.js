import React from "react"
import Layout from "../../components/Layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ProductCard from "../../components/ProductCard"

const Projects = ({ data }) => {
  console.log(data)
  const products = data.products.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className="products">
        <h2 class="font-semibold whitespace-nowrap text-center">Products</h2>
        <h3>Best price and quality offerred</h3>
        <div class="px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {products.map(product => (
            //<Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <ProductCard
              name={product.frontmatter.title}
              origin={product.frontmatter.stack}
            >
              <Img
                fluid={product.frontmatter.thumb.childImageSharp.fluid}
                className="object-fill h-full w-full"
              />
            </ProductCard>
            //</Link>
          ))}
        </div>
        <p>Likewhat you see? email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export default Projects

// export page query
export const products = graphql`
  query Projects {
    products: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(products)/" } }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
