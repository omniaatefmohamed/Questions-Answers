import './App.css';
import { Row, Container } from 'react-bootstrap';
import Addquestion from './components/Addquestion'
import Questions_list from './components/Questions_list'
import DeleteData from './components/DeleteData'
import {data} from './components/data'
import { useState } from 'react';


function App() {
  const [dataList,setDataList] = useState(data);
  const addData = () => {
    setDataList(data)
  }
  return (
    <div className="App">
      <Container className='p-5'>
          <Row>
              <h3 className='mb-4'>Questions & Answers </h3>
              <Addquestion addData={addData}/>
              <Questions_list dataList={dataList}/>
              <DeleteData dataList={dataList}/>
          </Row>
      </Container>
    </div>
  );
}

export default App;
 
