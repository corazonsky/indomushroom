import React from "react"

export default function Button({ children }) {
  return (
    <button
      type="button"
      class="py-5 px-4  bg-red-500 hover:bg-red-600 
        focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 
        text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-3"
    >
      {children}
    </button>
  )
}
