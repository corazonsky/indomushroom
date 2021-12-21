import React from "react"

export default function ProductCard({ children }) {
  return (
    <div class="flex-shrink-0 mx-5 mb-8 relative overflow-hidden bg-yellow-500 rounded-lg w-1/5 shadow-lg">
      <svg
        class="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="#f3c06b"
        ></rect>
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="#f3c06b"
        ></rect>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 mb-24 ml-3"></div>
        {children}
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Canned</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Champignon</span>
        </div>
      </div>
    </div>
  )
}
