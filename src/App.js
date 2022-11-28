import './App.css';
import { Row, Container } from 'react-bootstrap';
import Addquestion from './components/Addquestion'
import QuestionsList from './components/QuestionsList'
import DeleteData from './components/DeleteData'


function App() {
  return (
    <div className="App">
      <Container className='p-5'>
          <Row>
              <h3 className='mb-4'>Questions & Answers </h3>
              <Addquestion/>
              <Questions_list/>
              <DeleteData />
          </Row>
      </Container>
    </div>
  );
}

export default App;
