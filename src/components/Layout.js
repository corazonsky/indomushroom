import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="layout flex flex-col min-h-screen">
      <Navbar />
      <div className="content mb-auto">{children}</div>
      <Footer />
    </div>
  )
}
