import {useEffect} from 'react'
import './App.css';
import {login} from './api/index.ts'
import Welcome from './views/welcome'

function App() {

  useEffect(() => {
    console.log(process.env.REACT_APP_SECRET_CODE);
    loginFun();
  }, []);

  const loginFun = async () => {
    const data = await login({'userName': 'dawei', 'userPwd': 'dawei'});
    console.log("login=", data);
  }

  return (
    <div className="App">
      <h1>title</h1>
      <Welcome />
    </div>
  );
}

export default App;
