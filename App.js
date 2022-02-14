import React from "react"
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Info from "./components/Info.js"
import Interests from "./components/Interests.js"

export default function App(){
    return(
        <main className="div-main">
            <div className="div-info">
                <Info />
            </div>
            <div className="div-about">
                <About />
            </div>
            <div className="div-interests">
                <Interests />
            </div>
            <div className="div-footer">
                <Footer />
            </div>
        </main>
        
    )
}