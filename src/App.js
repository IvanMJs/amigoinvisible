
import './App.css';
import Quiz from './components/quiz';
import { questions } from './data/data';

function App() {
  return (
    <>
      <Quiz questions={questions}/>
    </>
    )
}

export default App;
