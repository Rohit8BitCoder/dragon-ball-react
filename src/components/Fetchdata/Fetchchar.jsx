import React, { useState, useEffect, useRef } from 'react';

export default function Fetchchar() {
  const [characters, setCharacters] = useState([]);
  const [charLimit, setCharLimit] = useState(6);
  const [isInitialCall, setIsInitialCall] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // ✅ Track if more data exists
  const loadingRef = useRef(null);

  const isInitialCallRef = useRef(isInitialCall);
  useEffect(() => {
    isInitialCallRef.current = isInitialCall;
  }, [isInitialCall]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dragonball-api.com/api/characters?limit=${charLimit}`);
        const data = await response.json();

        setCharacters(data.items);

        // ✅ Check if we received fewer than the requested items
        if (!data.items || data.items.length < charLimit) {
          setHasMore(false); // No more data to fetch
        } else {
          setHasMore(true); // May still have more
        }

        setIsInitialCall(false);
      } catch (error) {
        console.error('Error fetching char data:', error);
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (hasMore) {
      FetchData();
    }
  }, [charLimit]);

  useEffect(() => {
    if (!loadingRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isInitialCallRef.current && !isLoading && hasMore) {
          setCharLimit(prev => prev + 6);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadingRef.current);

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [isLoading, hasMore]);

  return (
    <div>
      <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
        {characters.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Loading...</p>
        ) : (
          characters.map((character) => (
            <div
              key={character.id}
              className="w-60 p-1 bg-white rounded-xl shadow-lg hover:shadow-2xl m-4"
            >
              <img
                className="h-70 w-full object-scale-down rounded-xl transform transition-all hover:-translate-y-5 duration-300"
                src={character.image}
                alt={character.name}
              />
              <div className="p-2">
                <h2 className="font-bold text-xl mb-2 text-center">{character.name}</h2>
                <p className='mb-2 text-yellow-500 font-bold'>{character.race} - {character.gender}</p>
                <p className="text-gray-700 font-bold">Basic Ki: </p>
                <p className='mb-2 text-yellow-500 font-bold'>{character.ki}</p>
                <p className="text-gray-600 font-bold">affiliation: </p> 
                <p className='mb-2 text-yellow-500 font-bold'>{character.affiliation}</p>
              </div>
            </div>
          ))
        )}

        {/* Ref target div */}
        <div ref={loadingRef} className="w-full text-center py-4">
          {isLoading
            ? "Loading more characters..."
            : hasMore
              ? "Scroll to load more"
              : "🚫 No more characters to load"}
        </div>
      </div>
    </div>
  );
}
