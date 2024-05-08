import React from "react";
import '../App.css'

export default function LogIn() {
    return(
        <>
 
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />

            <section className="login-container">
                <form className="formulario">
                    <h2>Inicio Sesion</h2>
                    <p>Inicia Sesion en tu cuenta, si no tienes una, recibe indicaciones para crear una</p>

                    <label htmlFor="username">Correo Electronico: </label>
                    <input type="text" name="username" id="username" required />

                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" id="password" name="password"/>

                    <button type="submit">Iniciar Sesion</button>
                </form>
            </section>
        </>
    )
}