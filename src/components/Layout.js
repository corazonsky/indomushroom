import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="layout flex flex-col h-screen">
      <Navbar />
      <div className="content mb-auto flex-1 overflow-y-auto">{children}</div>
      <Footer />
    </div>
  )
}
