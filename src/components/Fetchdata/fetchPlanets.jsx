import React, { useState, useEffect } from 'react';

export default function FetchPlanets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/planets');
        const data = await response.json();
        setPlanets(data.items);
        console.log(data.items);
      } catch (error) {
        console.error('Error fetching planet data:', error);
      }
    };

    FetchData();
  }, []);

  return (
    <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      {planets.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : (
        planets.map((planet) => (
          <div
            key={planet.id}
            className="w-60 p-1 bg-white rounded-xl shadow-lg hover:shadow-2xl m-4"
          >
            <img
              className="h-64 w-full  rounded-xl transform transition-all hover:-translate-y-5 duration-300"
              src={planet.image}
              alt={planet.name}
            />
            <div className="p-2">
              <h2 className="font-bold text-xl mb-2 text-center">{planet.name}</h2>
              <p className="mb-2 text-gray-700 font-bold">
                Planet Destroyed: <span className="text-yellow-500">{planet.isDestroyed ? 'Yes' : 'No'}</span>
              </p>

              
            </div>
          </div>
        ))
      )}
    </div>
  );
}
