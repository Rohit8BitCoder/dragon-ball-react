import Header from './components/Header';
import './App.css';
import Fetchchar from './components/Fetchdata/Fetchchar';
import FetchPlanets from './components/Fetchdata/fetchPlanets';
import { Routes, Route } from 'react-router-dom';
import CharDetails from './components/Fetchdata/details';
import Layout from './components/Layout';


function App() {
  return (
    <>
        <Routes >
          <Route path="/" element={ <Layout/>} >
            <Route path='' element={<Fetchchar />} />
            <Route path='planets' element={<FetchPlanets/>} />
            <Route path="character/:id" element={<CharDetails/>} />
          </Route>
        </Routes>
    
     
    </>
  )
}

export default App
