import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Buttondes: React.FC = () => {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Picame">
                <Dropdown.Item href="#/action-1">Proximos Eventos</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Eventos Concluidos</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Atletas Destacados</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Coaches</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Contacto</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Buttondes;