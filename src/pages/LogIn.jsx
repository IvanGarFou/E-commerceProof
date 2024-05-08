import React from "react";
import '../App.css'

export default function LogIn() {
    return(
        <>
            
            <section className="login-container">
                <form className="formulario">
                    <img src="https://i.postimg.cc/7bvd4FMw/musica.png" alt="" />

                    <h2>Sign in to your account</h2>

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