import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Fetchdata/Pagination';

export default function CharCard ({characters}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
    const navigate = useNavigate();


    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCharacters = characters.slice(indexOfFirstItem,indexOfLastItem)
    
    
    function handleCardClick(id){
        navigate(`/dashboard/character/${id}`);
    }
    
    return (
<div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      {characters.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : (
        currentCharacters.map((character) => (
          <div
            key={character.id}
            onClick={() => handleCardClick(character.id)}
            className="w-60 p-1 bg-white rounded-xl  shadow-lg hover:shadow-2xl m-4"
          >

            <img
              className="h-70 w-full object-scale-down rounded-xl transform transition-all hover:-translate-y-5 duration-300"
              src={character.image}
              alt={character.name}
            />
            <div className="p-2 ">
              <h2 className="font-bold text-xl mb-2 text-center">{character.name}</h2>

              <p className='mb-2 text-yellow-500 font-bold'>{character.race} - {character.gender}</p>

              <p className="text-gray-700 font-bold">Basic Ki: </p>
                <p className='mb-2 text-yellow-500 font-bold'>{character.ki}</p>

              <p className="text-gray-600 font-bold">affiliation: </p> 
                <p className='mb-2 text-yellow-500 font-bold '>{character.affiliation}</p>
              
            </div>
          </div>
        ))
      )}

      <Pagination 
        currentPage={currentPage}
        totalItems={characters.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}

        />
    </div>
    );
}