import {useEffect} from 'react'
import './App.css';

import Login from './views/login'

function App() {

  useEffect(() => {
    console.log(process.env.REACT_APP_SECRET_CODE);
    
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
