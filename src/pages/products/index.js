import React from "react"
import Layout from "../../components/Layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ProductCard from "../../components/ProductCard"

const Products = ({ data }) => {
  console.log(data)
  const products = data.products.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className="products">
        <div className="details max-w-screen-xl px-4 mx-auto md:px-8 pb-10">
          <h2 className="my-3 px-20 md:px-28 mx-auto uppercase text-6xl sm:text-6xl text-center font-black flex flex-col leading-none text-gray-800">
            Products
          </h2>
          <p class="my-3 text-sm sm:text-xl text-gray-700 text-center">
            <b>Offering only the best price and quality</b>
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-14 max-w-screen-xl px-4 mx-auto md:px-8 py-10">
          {products.map(product => (
            <Link to={"/products/" + product.frontmatter.slug} key={product.id}>
              <ProductCard
                name={product.frontmatter.title}
                origin={product.frontmatter.stack}
              >
                <Img
                  fluid={product.frontmatter.thumb.childImageSharp.fluid}
                  className="object-fill h-full w-full"
                />
              </ProductCard>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Products

// export page query
export const products = graphql`
  query Products {
    products: allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___date }
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
