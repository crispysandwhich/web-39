import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function getUrlPath(path){
  if(process.env.NODE_ENV === 'development'){
    return 'http://localhost:5000' + path
  }else{
    return path
  }
}


function App() {
  const [message, SetMessage] = useState('What is life')



  useEffect(() => {

    fetch(getUrlPath('/api/hello'))
      .then(res => res.json())
      .then(resBody => SetMessage(resBody))

  },[])

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;
