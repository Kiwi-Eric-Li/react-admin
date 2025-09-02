import {useEffect} from 'react'
import './App.css';

import Login from './views/login'
import Layout from './views/layout'

function App() {

  useEffect(() => {
    console.log(process.env.REACT_APP_SECRET_CODE);
    
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
