import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'

function Home() {

  return (
    <>
      <Header/>

      <section className='main'>
            <img src="https://i.postimg.cc/7bvd4FMw/musica.png" alt="" />

            <h1>Sumérgete en el sonido.</h1>
            <button>Ingresa ahora!</button>

            <img src="https://i.postimg.cc/PqnH1gSL/Musica.png"  className="music-image" alt="" />
      </section>

      <section className='alexa-des'>
        <img src="https://www.youversion.com/wp-content/uploads/2021/01/echo-google-home.png" alt="" />

        <section className='alexa-description'>

            <h1>ESCUCHA EN TODAS PARTES</h1>
            <p>
              Disfruta de tu audio exactamente donde, cuando y como quieras.
              MusicDev está disponible en cientos de dispositivos domésticos, de automóviles y portátiles, 
              y funciona con Alexa y Google Home.
            </p>

            <button>Buscar en Amazon...</button>
        </section>
      </section>

      <section className='upgrade-membership'>
            <section className='upgrade-text'>
                <h2>Upgrade to Premium Membership</h2>
                <p>¡Únete a nuestra comunidad musical y desbloquea un mundo de posibilidades!
                     Conviértete en miembro y accede a una amplia biblioteca de música de alta calidad,
                      sin límites ni interrupciones.</p>
                <button>Upgrade...</button>
            </section>

            <img src="https://www.buscopng.com/wp-content/uploads/2020/11/Joven-atractiva-ejecutiva.png" alt="" />
      </section>
    
      <section className='descuento-estudiantes'>
         <section className='estudiantes-des'>
           <h3>50% de descuento para estudiantes</h3>
           <p>Como parte de nuestro compromiso de hacer la música clásica accesible a todo el mundo, ofrecemos un
             descuento para estudiantes que da acceso a todas nuestras suscripciones a mitad de precio. Los estudiantes
              obtienen un 50% de descuento en todos nuestros planes de suscripción, ya sea Premium+ o Premium+ Concerts.
            </p>
            <button>Conocer mas...</button>
         </section>       

         <img src="https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </section>
    </>
  )
}

export default Home
