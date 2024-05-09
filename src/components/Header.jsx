import React from "react";
import './styles.css'

export default function Header() {
    return(
        <section className="header">
            <img src="https://i.postimg.cc/7bvd4FMw/musica.png" alt="" />

            <section className="options">
                <ul>
                    <li>Home</li>
                    <li>Discografias</li>
                    <li>Conciertos</li>
                </ul>
            </section>
        </section>
    )
}