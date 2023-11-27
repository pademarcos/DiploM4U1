import { useEffect, useState, Fragment } from "react";
import "../styles/components/pages/NovedadesPage.css";

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:4000/api/novedades")
      .then((response) => response.json())
      .then((data) => {
        setNovedades(data.novedades);
      })
      .catch((error) => console.error("Error al obtener las novedades", error));
  }, []); 

  return (
    <Fragment>
      <h1>Novedades</h1>
      <div className="container novedades-container">
        <div className="row">
          <div className="col">
            <h3>Listado de Novedades</h3>
            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">#</th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Subtitulo</th>
                  <th scope="col">Cuerpo</th>
                </tr>
              </thead>
              <tbody>
                {novedades.map((novedad) => (
                  <tr key={novedad.id}>
                    <th scope="row">{novedad.id}</th>
                    <td>{novedad.titulo}</td>
                    <td>{novedad.subtitulo}</td>
                    <td>{novedad.cuerpo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Novedades;
