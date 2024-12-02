import Accordion from 'react-bootstrap/Accordion';
import styles from './accordion.css'

const Acordion: React.FC = () => {
    return (
        <div className='container-1'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Quienes somos</Accordion.Header>
                    <Accordion.Body>
                    El Club de Leones es una destacada organización deportiva comprometida con la excelencia y el desarrollo integral de sus atletas. Desde su fundación, este club ha destacado como un punto de referencia para la formación de competidores apasionados en diversas disciplinas deportivas. <br />
                    El Club de Leones no solo se dedica a entrenar a sus atletas para que destaquen en competencias, sino que también se enfoca en su formación integral como individuos. A través de estas disciplinas, el club fomenta el respeto, el trabajo en equipo y la dedicación, ayudando a sus miembros a alcanzar su máximo potencial dentro y fuera del ámbito deportivo. 🦁
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Mision y Vision</Accordion.Header>
                    <Accordion.Body>
                    El Club de Leones tiene como misión fomentar el espíritu competitivo, la disciplina y el trabajo en equipo entre sus miembros. Promueve valores como la perseverancia, el respeto y la solidaridad, formando no solo deportistas excepcionales, sino también ciudadanos ejemplares.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Acordion;