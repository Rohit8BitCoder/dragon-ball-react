import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";

export default function CharDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
                const data = await response.json();
                setCharacter(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching character details:", error);
            }
        };

        fetchCharacter();
    }, [id]);       

    if(!character) {
        return <div>Loading...</div>;
    }

    if (!character.image || !character.name) {
        return <div>Character data is incomplete.</div>;
    }
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <div className="flex">
                <img src={character.image} alt={character.name} className="w-48 h-48 object-scale-down mx-auto mb-4"/>
            </div>
             
             <div className="flex">
                <h2 className="text-2xl font-bold text-center mb-4">{character.name}</h2>
             </div>
            
           
        </div>
    </div>
    )
}