import './Banner.css'
import React from 'react'

interface BannerProps {
    endereco: string,
    textoAlternativo?: string   
}

const Banner = ({ endereco, textoAlternativo}: BannerProps) => {

    return (
        <header className="banner">
            <img src={endereco} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner