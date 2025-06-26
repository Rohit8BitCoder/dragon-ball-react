import logo2 from '../assets/logo2.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex ps-2'>
        <img src={logo2} alt='logo' width="150" height="100" />
      </div>
      <div className='flex gap-2 pr-4'>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `bg-white font-semibold py-2 px-4 border border-gray-400 rounded shadow 
             hover:bg-gray-100 text-gray-800 
             ${isActive ? "text-orange-700 border-orange-400" : ""}`
          }
        >
          Characters
        </NavLink>

        <NavLink
          to="/planets"
          className={({ isActive }) =>
            `bg-white font-semibold py-2 px-4 border border-gray-400 rounded shadow 
             hover:bg-gray-100 text-gray-800 
             ${isActive ? "text-orange-700 border-orange-400" : ""}`
          }
        >
          Planets
        </NavLink>
      </div>
    </div>
  );
}
