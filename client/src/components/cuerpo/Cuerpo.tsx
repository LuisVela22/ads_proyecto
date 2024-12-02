import React from "react";
// import { Card } from "react-bootstrap";
import './cuerpo.css'
import Card from './Card.tsx'
import logoAtletismo from '../../assets/rayo.jpeg';
import logoNatacion from '../../assets/natacion.jpeg';
import logoFut from '../../assets/messi.jpeg'
import logoArtes from '../../assets/artes.jpeg'
import logoGimnasia from '../../assets/gimnasia.jpeg'
// import Carouseel from "./Carouseels.tsx";
import Accordion  from './Accordion.tsx';
// import Buttondes from "./Buttondes.tsx";



const Cuerpo: React.FC = () => {


    return (
        <div>
            <h1>Bienvenido al Club de Leones</h1>
            <br />
            <hr />
            <br />
            <Accordion />
            {/* <Carouseel /> */}
            {/* <div className="jumbotron" >
                <h1 className="display-4">Agenda tu cita cuanto antes!</h1>
                <p className="lead">Agenda tu cita médica con nuestros doctores especialistas en areas como...</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cardiología</li>
                    <li className="list-group-item">Neurología</li>
                    <li className="list-group-item">Pediatría</li>
                    <li className="list-group-item">Dermatología</li>
                    <li className="list-group-item">Oncología</li>
                    <li className="list-group-item">Psiquiatría</li>
                    <li className="list-group-item">Gineoclogía y Obstetricía</li>
                </ul>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>

            </div> */}
            <main className="container mt-5">
                <section className="mt-5">
                <h2>Informacion, disciplinas y servicios.</h2>
                    <div className="row">
                        

                        <Card cardTitle="Atletismo" src={logoAtletismo}>
                        El atletismo es uno de los deportes más antiguos y completos, y el Club de Leones se especializa en su enseñanza y perfeccionamiento, atrayendo tanto a principiantes como a atletas experimentados.
                        </Card>
                        <Card cardTitle="Natacion" src={logoNatacion}>
                        La natación, conocida como uno de los deportes más completos, ocupa un lugar central en el Club de Leones. Es ideal para quienes buscan mejorar su condición física mientras disfrutan de los beneficios de la actividad acuática.
                        </Card>
                        <Card cardTitle="Futbol" src={logoFut}>
                        La natación, conocida como uno de los deportes más completos, ocupa un lugar central en el Club de Leones. Es ideal para quienes buscan mejorar su condición física mientras disfrutan de los beneficios de la actividad acuática.
                        </Card>
                        <Card cardTitle="Artes Marciales" src={logoArtes}>
                        La natación, conocida como uno de los deportes más completos, ocupa un lugar central en el Club de Leones. Es ideal para quienes buscan mejorar su condición física mientras disfrutan de los beneficios de la actividad acuática.
                        </Card>
                        <Card cardTitle="Gimnasia" src={logoGimnasia}>
                        La gimnasia es una disciplina que combina fuerza, flexibilidad y creatividad. En el Club de Leones, se enseña tanto a nivel recreativo como competitivo, siendo una de las actividades favoritas de los socios más jóvenes.
                        </Card>

                    </div>
                </section>
            </main>
        </div>
    )

}

export default Cuerpo;
