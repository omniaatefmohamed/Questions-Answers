import React from 'react'
import { Accordion, Button, Alert } from 'react-bootstrap'

const Questions_list = ({ dataList }) => {
    return (
        <Accordion className='mt-3'>
            {
                dataList.length >= 1 ? (() => {
                    return (
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>q1</Accordion.Header>
                            <Accordion.Body className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0'>kjhjkl</p>
                                <Button variant="danger"> Delete</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                }) : (
                    <Alert varient="info" className='mt-3'>
                        No Questions to show
                    </Alert>)
            }
        </Accordion>
    )
}

export default Questions_list
