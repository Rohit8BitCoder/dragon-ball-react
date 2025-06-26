import { Routes, Route, Navigate } from 'react-router-dom';
import Fetchchar from './components/Fetchdata/Fetchchar';
import FetchPlanets from './components/Fetchdata/fetchPlanets';
import CharDetails from './components/Fetchdata/details';
import Dashboard from './components/Dashboard';
import About from './components/page/about';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="characters" element={<Fetchchar />} />
        <Route path="planets" element={<FetchPlanets />} />
        <Route path="character/:id" element={<CharDetails />} />
        <Route path="about" element = {<About />} />
        <Route path="*" element={<Navigate to="/dashboard/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;