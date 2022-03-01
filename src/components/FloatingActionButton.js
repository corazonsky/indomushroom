import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function FloatingActionButton() {
  return (
    <div class="md:flex md:items-center md:justify-between md:p-6 fixed bottom-14 right-6 z-50">
      <a href="https://api.whatsapp.com/send?phone=6281803154541">
        <button class="p-0 w-16 h-16 md:w-24 md:h-24 bg-green-600 rounded-full hover:bg-green-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <FontAwesomeIcon icon={faWhatsapp} color="white" />
        </button>
      </a>
    </div>
  )
}
