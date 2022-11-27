import './App.css';
import { Row, Container } from 'react-bootstrap';
import Addquestion from './components/Addquestion'
import QuestionsList from './components/QuestionsList'
import DeleteData from './components/DeleteData'
import { useState } from 'react'
import { data } from './components/data'


function App() {
  const [dataList,setDataList] = useState(data);
  const addData = () => {
    setDataList([...data])
  }
  return (
    <div className="App">
      <Container className='p-5'>
          <Row>
              <h3 className='mb-4'>Questions & Answers </h3>
              <Addquestion addData={addData}/>
              <QuestionsList dataList={dataList}/>
              <DeleteData dataList={dataList}/>
          </Row>
      </Container>
    </div>
  );
}

export default App;
 
