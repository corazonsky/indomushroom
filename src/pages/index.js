import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import Button from "../components/Button"
import ProductCard from "../components/ProductCard"

export default function Home({ data }) {
  const products = data.products.nodes
  const logo = data.logo
  const teams = data.teams.nodes

  return (
    <Layout>
      <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
          <p class="my-3 text-sm sm:text-xl text-gray-700">
            <b>Offering only the best price and quality</b>
          </p>
          <h2 class="my-3 uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none text-gray-800">
            Pure Spice Indo
          </h2>
          <p class="my-3 text-sm sm:text-xl text-gray-700">
            Spice supplier from Indonesia
          </p>
          <Link to="/projects">
            <Button>View Products Now</Button>
          </Link>
        </div>
        <div class="hidden sm:block sm:w-1/3 lg:w-2/5 relative mx-auto">
          <Img
            fluid={logo.childImageSharp.fluid}
            class="max-w-xs md:max-w-sm m-auto"
          />
        </div>
      </div>
      <div class="px-10 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {products.map(product => (
          <Link to={"/projects/" + product.frontmatter.slug} key={product.id}>
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
      <div class="max-w-screen-xl px-4 mx-auto md:px-8 bg-white py-10">
        <div class="mb-10 md:mb-16">
          <h2
            class="
          mb-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          md:mb-6
        "
          >
            About Us
          </h2>
          <p class="py-4 max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            <b>Purespiceindo</b> or CV Jaya Bakti Sentosa is a company focused
            on supplying quality spices from indonesia, although we are a new
            established company we only give the best in quality and also in
            price. Our spices is grown only from the best spice plantation in
            indonesia from Both Sumatra and Java island. Our main product is
            Cinnamon Cassia Vera which is a staple ingredients used in many
            industries such as F&B, Cosmetics, Aromtheraphy and Etc. Our company
            is open to both business opportunities from local and international.
            And we would to hear from you our dear customers.
          </p>
          <h2
            class="
          mt-6
          mb-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          md:mb-6
        "
          >
            Our Value
          </h2>
          <div class="px-10 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <ProductCard name="Reliable" origin="Good" />
            <ProductCard name="Good Quality" origin="Good" />
            <ProductCard name="Affordable Price" origin="Good" />
          </div>
          <h2
            class="
          mt-6
          mb-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          md:mb-6
        "
          >
            Meet Our Team
          </h2>
          <div class="px-10 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            {teams.map(team => (
              <ProductCard>
                <Img
                  fluid={team.frontmatter.thumb.childImageSharp.fluid}
                  className="object-fill h-full w-full"
                />
              </ProductCard>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const products = graphql`
  query Home {
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
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teams: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(teams)/" } }
    ) {
      nodes {
        frontmatter {
          name
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
  }
`
