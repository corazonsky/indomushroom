import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function TeamCard(props) {
  return (
    <a href={props.linkedin}>
      <div class="w-2/3 md:w-full lg:max-w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-110 mx-auto h-full">
        <div class="relative pt-10 flex items-center justify-center">
          <div class="block absolute bottom-0 left-0 mb-24 ml-3"></div>
          {props.children}
        </div>
        <div class="relative text-black px-6 pb-6 mt-6">
          <div className="flex justify-start py-2">
            <FontAwesomeIcon icon={faWhatsapp} className="md:mt-1 w-4 h-4" />
            <h3 className="ml-2 text-xs md:text-base">{props.phone}</h3>
          </div>
          <div className="flex justify-start py-2">
            <FontAwesomeIcon icon={faLinkedin} className="md:mt-1 w-4 h-4" />
            <h3 className="ml-2 text-xs md:text-base">{props.name}</h3>
          </div>
        </div>
      </div>
    </a>
  )
}
