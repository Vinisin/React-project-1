import React from "react"
export default function Info(){
    return(
        <header>
            <img className="img-info"/>
            <h1 className="my-name">Vinicius Freitas</h1>
            <h2 className="sub-name">Frontend Developer</h2>
            <h3 className="website">vinifreitas.website</h3>
            
                <a href="viniciusfreitasp@hotmail.com">
                <button className="button-email" type="button">
                <img className="email-icon" src="./images/Icon-email.svg"/>
                <h1 className="text-email">Email</h1>
                </button>
                </a>
            
        </header>
    )
}