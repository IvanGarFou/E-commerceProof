import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <Header/>

      <section className='main'>
            <img src="https://i.postimg.cc/7bvd4FMw/musica.png" alt="" />

            <h1>Sumérgete en el <span> Sonido.</span></h1>
            <button>Ingresa ahora!</button>

            <img src="https://i.postimg.cc/PqnH1gSL/Musica.png"  className="music-image" alt="" />
      </section>


      <section className='intro'>
        <h1>Una experiencia unica con <span>MusicDev </span></h1>

        <p>Tu musica es una expresion de lo que eres, nuestra mision
          es ofrecerte la oportunidad de subir y conocer musica de otros artistas como tu
          con recomendaciones pensadas para ti. Vive una experiencia unica con nosotros
        </p>
      </section>

      <section className='upgrade-membership'>
            <section className='upgrade-text'>
                <h2><span> Suscripciones</span> para escucharte mejor.</h2>
                <p>
                  Disfruta reproduccion de tu musica favorita sin anuncios,
                  con contenido adicional, episodios ineditos de tus podcast favoritos
                  ademas de otros beneficios exclusivos de tu suscripcion. Tambien puedes conectar
                  a tus dispositivos inteligentes con premium
                </p>
            </section>

            <img src="https://i.postimg.cc/D0fQkMJc/app.png" alt="" />
      </section>

      <section className='alexa-des'>
        <img src="https://www.youversion.com/wp-content/uploads/2021/01/echo-google-home.png" alt="" />

        <section className='alexa-description'>

            <h2> <span>Escucha </span>en todas partes</h2>
            <p>
              Disfruta de tu audio exactamente donde, cuando y como quieras.
              MusicDev está disponible en cientos de dispositivos domésticos, de automóviles y portátiles, 
              y funciona con Alexa y Google Home.
            </p>

            <button>Buscar en Amazon...</button>
        </section>
      </section>
    
      <section className='conciertos'>
            <section className='conciertos-text'>
                <h2>Convierte tu casa en el mejor escenario</h2>
                <p>
                  Dejate sorprender por nuestra serie de shows con actuaciones 
                  exclusivas grabadas en tiempo real solo con nosotros.
                </p>
            </section>
      </section>

    
      <section className='descuento-estudiantes'>
         <section className='estudiantes-des'>
           <h2>50% de descuento para estudiantes</h2>
           <p>Como parte de nuestro compromiso de hacer la música clásica accesible a todo el mundo, ofrecemos un
             descuento para estudiantes que da acceso a todas nuestras suscripciones a mitad de precio. Los estudiantes
              obtienen un 50% de descuento en todos nuestros planes de suscripción, ya sea Premium+ o Premium+ Concerts.
            </p>
            <button>Conocer mas...</button>
         </section>       

         <img src="https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </section>

      <Footer />
    </>
  )
}

export default Home
