import React, {useState} from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap'
import {data} from './data'

const Addquestion = ({addData}) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const addFullData = (e) => {
        e.preventDefault();
        data.push({id:Math.random(), q:question, a:answer});
        setQuestion("");
        setAnswer("");
        addData();
    }
    return (
        <Form>
            <Row>
                <Col md="5" xs="12">
                    <Form.Control value={question} onChange={(e) => setQuestion(e.target.value)} type="text" placeholder="Enter Your Question" />
                </Col>
                <Col md="5" xs="12">
                    <Form.Control value={answer} onChange={(e) => setAnswer(e.target.value)} type="text" placeholder="Enter Your Answer" />
                </Col>
                <Col md="2" xs="12">
                    <Button onClick={addFullData} variant="success" type="submit" className='text-white w-100'>
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Addquestion
