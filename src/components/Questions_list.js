import React from 'react'
import { Accordion, Button } from 'react-bootstrap'

const Questions_list = () => {
    return (
        <Accordion className='mt-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>q1</Accordion.Header>
                <Accordion.Body className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>kjhjkl</p>
                    <Button variant="danger"> Delete</Button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Questions_list
