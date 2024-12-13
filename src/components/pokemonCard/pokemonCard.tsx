import React from 'react';
import { PokemonCardProps } from "../../constants/pokemon.types";
import { getBackground } from "../../constants/utils";
import { numberFormation } from "../../services/common.service";
import "./pokemonCard.scss";


const PokemonCard: React.FC<PokemonCardProps> = ({ data, onClick, className = '' }) => {
    const { id, name, types, sprites } = data;
    const background = getBackground(types || []);
    const imageUrl = sprites?.other?.dream_world?.front_default ||
        sprites?.front_default || "https://via.placeholder.com/150"

    return (
        <div className={`${className} card`} onClick={onClick} role="presentation" style={{ background }}>
            <div className="image-container">
                <img src={imageUrl} alt={`${name} sprite`} />
            </div>
            <div className="text-container">
                <strong><b>{name}</b></strong>
                <span>{numberFormation(id)}</span>
            </div>
        </div>
    );
}

export default PokemonCard;