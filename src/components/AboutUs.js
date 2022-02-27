import React from "react"
import ProductCard from "./ProductCard"

export default function AboutUs() {
  return (
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
          <b>Purespiceindo</b> or CV Jaya Bakti Sentosa is a company focused on
          supplying quality spices from indonesia, we only give the best in
          quality and also in price. Our spices is grown only from the best
          spice plantation in indonesia from Both Sumatra and Java island. Our
          main product is Cinnamon Cassia Vera which is a staple ingredients
          used in many industries such as F&B, Cosmetics, Aromtheraphy and Etc.
          Our secondary spice product includes Ginger, Turmeric, Candlenut,
          coriander seeds and etc. We also can provide a handful of other herbs
          or fresh goods you may be looking for in indoneisa. Our company is
          open to both business opportunities from local and international. And
          we would to hear from you our dear customers. Company Vision Becoming
          a one stop solution for the customers’ spice needs Company Mission
          Only providing the best both and quality and price, keeping in touch
          with our customers to build a reliable and trustworthy communication
          network
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
          <ProductCard name="Reliable" origin="Good" />
          <ProductCard name="Good Quality" origin="Good" />
          <ProductCard name="Affordable Price" origin="Good" />
        </div>
      </div>
    </div>
  )
}
