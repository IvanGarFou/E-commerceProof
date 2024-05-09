import React from "react";
import Header from '../components/Header'
import '../App.css'

export default function Product() {
    return(
        <> 
            <Header/>
            <section className="product-container">
                <section className="images-music">
                    <img src="https://images.pexels.com/photos/2118046/pexels-photo-2118046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </section>

                <section className="music-description">
                    <h3>Vive la musica!</h3>
                    <h1>Te interesa ser compositor o musico?</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.</p>

                    <button>Descubre mas...</button>
                </section>
            </section>
        </>
       
    )
}