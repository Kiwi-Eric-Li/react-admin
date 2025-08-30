import {useEffect} from 'react'
import './App.css';

function App() {

  useEffect(() => {
    console.log(process.env.REACT_APP_SECRET_CODE);
  }, []);

  return (
    <div className="App">
      <h1>title</h1>
    </div>
  );
}

export default App;
