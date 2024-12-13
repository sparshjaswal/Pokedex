import React from 'react';
import "./evolutionChainCard.scss";
import "../../../styles/common.scss";
import PokemonCard from "../../pokemonCard/pokemonCard";
import rightArrowIcon from "../../../assets/icons/right-arrow.png";
import { EvolutionChainCardProps } from "../../../constants/pokemon.types"

const EvolutionChainCard: React.FC<EvolutionChainCardProps> = ({ data }) => {
    const arrayele = [1, 2, 3];

    return ( 
        <div>
            <div className="evol-container">
                <div className="evol-wrap evolu-break">
                    {arrayele.map((obj, index) => (
                        <div className="flex-row" key={obj}>
                            <div>
                                <div className="pt-2">
                                    <PokemonCard className="disabled-click" key={data.id} data = {{...data, sprites: {front_default: null } }} />
                                </div>
                            </div>
                            {arrayele.length !== index + 1 && (
                                <div>
                                    <div className="evol-next-arrow">
                                        <img src={rightArrowIcon} alt="right arrow icon" onKeyDown={() => { }} role="presentation" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EvolutionChainCard;