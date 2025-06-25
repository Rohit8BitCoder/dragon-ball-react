import Header from './components/Header';
import './App.css';
import Fetchchar from './components/Fetchdata/Fetchchar';
import FetchPlanets from './components/Fetchdata/fetchPlanets';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
        <Routes >
          <Route path="/" element={ <Fetchchar/>} />
          <Route path='/planets' element={<FetchPlanets/>} />
        </Routes>
    
     
    </>
  )
}

export default App
