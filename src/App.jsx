import React from "react"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Collection from "./Pages/Collection"

function App() {
  

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  )
}

export default App
