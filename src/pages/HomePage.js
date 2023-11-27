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
          <h5>Explora el arte de la fotografía con nosotros.</h5>
          <p>Contáctanos para descubrir las mejores cámaras del mercado.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.homedepot.com.mx/especiales/shop_the_look/2021/102/Main102.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>Captura momentos únicos con nuestras cámaras de alta gama.</h5>
            <p>Contacta y eleva tu experiencia fotográfica.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.homedepot.com.mx/especiales/shop_the_look/2021/95/Main95.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Las mejores imágenes comienzan con las mejores cámaras.</h5>
            <p>Conéctate con nosotros y descubre la diferencia.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Fragment>
     );
}
 
export default Home;