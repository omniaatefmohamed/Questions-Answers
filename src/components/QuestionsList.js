import React from 'react'
import { Accordion, Button, Alert, Row } from 'react-bootstrap'
import {data} from './data'
const Questions_list = ({ dataList }) => {
    const DeleteAllData = () => {
        console.log(dataList.length)
        dataList.splice(0, data.length)
        console.log(dataList.length)
    }
    return (
        <Row>
            <Accordion className='mt-3'>
                {

                    dataList.length >= 1 ? (dataList.map((item, index) => {
                        return (
                            <Accordion.Item eventKey={index} key={item.id}>
                                <Accordion.Header>{item.q}</Accordion.Header>
                                <Accordion.Body className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0'>{item.a}</p>
                                    <Button variant="danger"> Delete</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })) : (
                        <Alert varient="info" className='mt-3'>
                            No Questions to show
                        </Alert>)
                }
                {
                    dataList.length >= 1 ? (<Button onClick={DeleteAllData} className='mt-5 w-100' variant="danger">Delete All Data</Button>) : null
                }
            </Accordion>
        </Row>

    )
}

export default Questions_list
