import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import Button from "../components/Button"
import ProductCard from "../components/ProductCard"
import TeamCard from "../components/TeamCard"

export default function Home({ data }) {
  const products = data.products.nodes
  const logo = data.logo
  const teams = data.teams.nodes
  const values = data.values.nodes

  return (
    <Layout>
      <div
        id="header"
        class="container mx-auto px-6 flex relative py-16 md:max-w-screen-xl"
      >
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
          <Link to="/products">
            <Button>View Products Now</Button>
          </Link>
        </div>
        <div class="hidden sm:block sm:w-1/3 lg:w-1/4 relative mx-auto">
          <Img fluid={logo.childImageSharp.fluid} class="m-auto" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-14 md:max-w-screen-xl px-4 mx-auto md:px-8 py-10">
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
      <div id="about" class=" px-4 mx-auto md:px-8 bg-white py-2">
        <div class="mb-10 md:mb-16 md:max-w-screen-xl container justify-between items-center mx-auto">
          <div
            class="relative flex py-5 items-center mt-20
          mb-2 md:mb-3"
          >
            <div class="flex-grow border-t border-gray-400"></div>
            <h2
              class="
          px-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          
        "
            >
              About Us
            </h2>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <p class="py-4 max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            <b>Purespiceindo</b> or CV Jaya Bakti Sentosa is a company focused
            on supplying quality spices from indonesia, we only give the best in
            quality and also in price. Our spices is grown only from the best
            spice plantation in indonesia from Both Sumatra and Java island.
          </p>
          <p class="py-4 max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            Our main product is Cinnamon Cassia Vera which is a staple
            ingredients used in many industries such as F&B, Cosmetics,
            Aromtheraphy and Etc. Our secondary spice product includes Ginger,
            Turmeric, Candlenut, coriander seeds and etc. We also can provide a
            handful of other herbs or fresh goods you may be looking for in
            indonesia.
          </p>
          <p class="py-4 max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            Our company is open to both business opportunities from local and
            international. And we would to hear from you our dear customers.
            Company Vision Becoming a one stop solution for the customers’ spice
            needs Company Mission Only providing the best both and quality and
            price, keeping in touch with our customers to build a reliable and
            trustworthy communication network
          </p>
          <div
            class="relative flex py-5 items-center mt-20
          mb-2 md:mb-3"
          >
            <div class="flex-grow border-t border-gray-400"></div>
            <h2
              class="
          px-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          
        "
            >
              Our Value
            </h2>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div class="px-10 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-14">
            {values.map(value => (
              <ProductCard>
                <Img
                  fluid={value.frontmatter.thumb.childImageSharp.fluid}
                  className="object-fill h-full w-full"
                />
              </ProductCard>
            ))}
          </div>
          <div
            class="relative flex py-5 items-center mt-20
          mb-2 md:mb-3"
          >
            <div class="flex-grow border-t border-gray-400"></div>
            <h2
              class="
          px-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          
        "
            >
              Meet Our Team
            </h2>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div class="px-10 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
            {teams.map(team => (
              <TeamCard
                phone={team.frontmatter.phone}
                linkedin={team.frontmatter.linkedin}
                name={team.frontmatter.name}
              >
                <Img
                  fluid={team.frontmatter.thumb.childImageSharp.fluid}
                  className="object-fill h-full w-full"
                />
              </TeamCard>
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
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teams: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___name }
      filter: { fileAbsolutePath: { regex: "/(teams)/" } }
    ) {
      nodes {
        frontmatter {
          name
          linkedin
          phone
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
    values: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(values)/" } }
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
