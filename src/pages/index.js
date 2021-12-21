import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import Button from "../components/Button"
import ProductCard from "../components/ProductCard"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
          <p class="my-3 text-sm sm:text-xl text-gray-700">
            <b>100% Healthy and Affordable</b>
          </p>
          <h2 class="my-3 uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
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
          <Img
            fluid={data.file.childImageSharp.fluid}
            class="max-w-xs md:max-w-sm m-auto"
          />
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center">
        <ProductCard>
          <img
            src="/image/products/cannedmushroom.png"
            class="relative w-64 h-full"
          />
        </ProductCard>
        <ProductCard>
          <img
            src="/image/products/cannedmushroom.png"
            class="relative w-64 h-full"
          />
        </ProductCard>
        <ProductCard>
          <img
            src="/image/products/cannedmushroom.png"
            class="relative w-64 h-full"
          />
        </ProductCard>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "products/freshmushroom.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
