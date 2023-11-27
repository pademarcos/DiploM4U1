import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/components/pages/HomePage.css";

const Home = () => {
    return ( 
        <Fragment >
            <Carousel data-bs-theme="dark" className="carousel">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://cdn.homedepot.com.mx/especiales/shop_the_look/2023/229/Main229.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Primera foto</h5>
          <p>Explora el arte de la fotografía con nosotros. 📷 ¡Contáctanos para descubrir las mejores cámaras del mercado!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.homedepot.com.mx/especiales/shop_the_look/2021/102/Main102.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Captura momentos únicos con nuestras cámaras de alta gama. 🌈 ¡Contacta y eleva tu experiencia fotográfica!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.homedepot.com.mx/especiales/shop_the_look/2021/95/Main95.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
          Las mejores imágenes comienzan con las mejores cámaras. 🚀 ¡Conéctate con nosotros y descubre la diferencia!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Fragment>
     );
}
 
export default Home;