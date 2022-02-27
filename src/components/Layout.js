import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import FloatingActionButton from "./FloatingActionButton"
import "../styles/global.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

export default function Layout({ children }) {
  return (
    <div className="layout flex flex-col h-screen">
      <Navbar className="fixed top-0 inset-x-0 z-50" />
      <div className="content mb-auto">{children}</div>
      <FloatingActionButton />
      <Footer />
    </div>
  )
}
