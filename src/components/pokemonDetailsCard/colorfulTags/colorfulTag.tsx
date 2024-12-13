import React from 'react';
import { getPokemonBgColor } from '../../../constants/utils';
import "./colorfulTags.scss";
import { ColorfulTagProps } from '../../../constants/pokemon.types';


const ColorfulTag: React.FC<ColorfulTagProps> = ({ text, className, type }) => {
  return (
    <div>
      <div className={className}>
        <span style={{
          background: getPokemonBgColor(type)
        }} className="colorful-tag">{text}</span>
      </div>
    </div>
  )
}

export default ColorfulTag;