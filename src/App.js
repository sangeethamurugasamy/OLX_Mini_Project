import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Header} from './Components/Header'
// import {NavBar} from './Components/NavBar'
import {BrowserRouter} from 'react-router-dom'
import {Layout} from './Components/Layout';
// import { Navigation } from './Components/Styling/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Route path="/" component={}/> */}
        {/* <Header/>
        <NavBar/> */}
        <Layout/>
      </BrowserRouter>
  </div>
  );
}

export default App;
