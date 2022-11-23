import React from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap'

const Addquestion = () => {
    return (
        <Form>
            <Row>
                <Col md="5" xs="12">
                    <Form.Control type="text" placeholder="Enter Your Question" />
                </Col>
                <Col md="5" xs="12">
                    <Form.Control type="text" placeholder="Enter Your Answer" />
                </Col>
                <Col md="2" xs="12">
                    <Button variant="success" type="submit" className='text-white w-100'>
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Addquestion
