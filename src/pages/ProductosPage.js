import { Fragment } from "react";
import imagen1 from "../img/e1.jpg"
import imagen2 from "../img/e2.jpg"
import imagen3 from "../img/e3.jpg"
import CamaraCard from "../components/layout/CamaraCard";


export const camaras = [
                {
                id: 1,
                nombre:"Canon EOS",
                descripcion:"Camara1",
                precio:1000,
                imagen:imagen1
            },
            {
                id:2,
                nombre:"Nikon D3500",
                descripcion:"Carara2",
                precio:2000,
                imagen:imagen2
            },
            {
                id:3,
                nombre:"Sony Alpha a6400",
                descripcion:"Camara3",
                precio:3000,
                imagen:imagen3
            }
            ]
const Productos = () => {
    return ( 
        <Fragment >
            <h2>Cámaras Fotográficas</h2>
            <h5 className="container">Las cámaras profesionales tienen sensores más grandes que las cámaras semiprofesionales, lo que significa que pueden capturar una mayor cantidad de luz y producir imágenes de calidad infinitamente superior. Si desea imágenes de alta definición, definitivamente debe optar por una plantilla profesional.</h5>
          <div className="container d-flex justify-content-center align-items-center h-90 mt-4">
            <div className="row">
                { 
                    camaras.map (props=> (
                        <div className="col-md-4" key={props.id}>
                           <CamaraCard key={props.id} nombre={props.nombre} imagen={props.imagen} descripcion={props.descripcion} precio={props.precio}/>
                          </div>  
                    ))
                }
            </div>
          </div>
        </Fragment>
     );
}
 
export default Productos;