import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import Button from "../components/Button"
import ProductCard from "../components/ProductCard"

export default function Home({ data }) {
  const products = data.products.nodes

  return (
    <Layout>
      <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
          <p class="my-3 text-sm sm:text-xl text-gray-700">
            <b>100% Healthy and Affordable</b>
          </p>
          <h2 class="my-3 uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none text-gray-800">
            indomushroom
          </h2>
          <p class="my-3 text-sm sm:text-xl text-gray-700">
            Mushroom supplier from East Java, Indonesia
          </p>
          <Link to="/projects">
            <Button>View Products Now</Button>
          </Link>
        </div>
        <div class="hidden sm:block sm:w-1/3 lg:w-2/5 relative">
          {/* <Img
            fluid={data.file.childImageSharp.fluid}
            class="max-w-xs md:max-w-sm m-auto"
          /> */}
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center">
        {products.map(product => (
          //<Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
          <ProductCard>
            <Img
              fluid={product.childImageSharp.fluid}
              className="relative w-64 h-full"
            />
          </ProductCard>
          //</Link>
        ))}
      </div>
    </Layout>
  )
}

export const products = graphql`
  query Products {
    products: allFile(filter: { absolutePath: { regex: "/(products)/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
