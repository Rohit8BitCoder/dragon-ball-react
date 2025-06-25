import logo2 from '../assets/logo2.png';
import { useNavigate } from 'react-router-dom';



export default function Header () {
const navigate = useNavigate();
  const HandleClickChar = () => {
    navigate('/'); 
  };

  const HandleClickPlanets = () => {
    navigate('/planets'); 
  };
  
  return (
    <div className='flex justify-between items-center'>
      <div className='flex ps-2'>
        <img src={logo2} alt='logo' width="200" height="100"/>
      </div>
      <div className='flex gap-2 pr-4'>
        <button 
        onClick={HandleClickChar}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Characters </button>
        
        <button 
        onClick={HandleClickPlanets}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Planets</button>
      </div>
    
    </div>
  )
}