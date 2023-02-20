import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Modal, Container} from 'react-bootstrap';

const MyModal = ({title, open, setOpen, body, actions})=> {

    return <Container>
            <Modal show={open} onHide={e=>setOpen(false)} backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title>{title != null ? title : ""}</Modal.Title>
                </Modal.Header>
    
                <Modal.Body>{body != null ? body : ""}</Modal.Body>
    
                <Modal.Footer>
                    <Button variant="secondary" onClick={e=>setOpen(false)} >Close</Button>

                    {actions && actions.map((action, index)=> {

                        return <Button key={index} variant={action.variant} onClick={action.onClick}>{action.title}</Button>

                    })}

                </Modal.Footer>
            </Modal>
          </Container>
}

export default MyModal