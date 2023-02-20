
import { useState } from 'react'
import validator from 'validator'
import MyModal from '../components/modal'
import {Button, Form, Row, Col} from 'react-bootstrap';

const Login = ()=> {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [openError, setOpenError] = useState(false)
    const [errorTitle, setErrorTitle] = useState("")
    const [errorBody, setErrorBody] = useState(null)
    const [errorActions, setErrorActions] = useState(null)

    const validated = ()=> {

        let errors = []

        if (!validator.isEmail(email)) {
            errors.push("this is not an email, try again")
        }
        
        const specialCar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

        if(!validator.isLength(password, {min: 8, max: 16}) || !validator.isAlphanumeric(password) || !validator.contains(password, specialCar)) {
            errors.push("password must be between 8-16 characters, alphanumeric, and at least one special character")
        }

        if (errors.length > 0) {
            setErrorTitle("Error")
            setErrorBody(<div>
                {errors.map((error, index)=><div key={index}>{error}</div>)}
            </div>)
            setErrorActions([])
            setOpenError(true)
            return false
        } else {
            // send to backend
            return true
        }

    }

    const onSubmit = e=> {

        if (validated()) {
            // send to backEnd
            console.log("we made it yall")
        }

    }

    return <>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                </Col>
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>Login</Button>
        </Form>
        <MyModal open={openError} setOpen={setOpenError} title={errorTitle} body={errorBody} actions={errorActions} />
        </>
        


}

export default Login;