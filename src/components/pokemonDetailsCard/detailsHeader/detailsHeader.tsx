import PokemonCard from "../../pokemonCard/pokemonCard";
import AppTooltip from "../../../hooks/tooltip/tooltip";
import backIcon from "../../../assets/icons/back-icon.png";
import closeIcon from "../../../assets/icons/close-icon.png"
import rightIcon from "../../../assets/icons/right-icon.png"
import { numberFormation } from "../../../services/common.service";
import { getPokemonDescription } from "../../../constants/utils";
import "./detailsHeader.scss";
import "../../../styles/common.scss";
import { DetailsHeaderProps } from "../../../constants/pokemon.types";

const DetailsHeader = ({ data, speciesData, backClick, closeClick, forwardClick }: DetailsHeaderProps) => {

  const getPokemonDescriptions = () => {
    if (speciesData && speciesData.flavor_text_entries) {
      return getPokemonDescription(speciesData.flavor_text_entries);
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="details-header-container">
        <div className="header-wrap">
          <div>
            <PokemonCard className="disabled-click" key={data.id} data={data} onClick={() => { }} />
          </div>
          <div className="header-sub-wrap pl-3">
            <div className="title-wrap">
              <div>
                <h3 className="text-caps">{data.name}</h3>
              </div>
              <div className="horizontal-line"></div>
              <div>
                <h3>{numberFormation(data.id)}</h3>
              </div>
              <div className="horizontal-line"></div>
              <div>
                <div className="icon-wrap">
                  <img src={backIcon} alt="back icon to go backward" onClick={backClick} onKeyDown={() => { }} role="presentation"></img>
                  <img src={closeIcon} alt="close icon to go backward" onClick={closeClick} onKeyDown={() => { }} role="presentation"></img>
                  <img src={rightIcon} alt="forward icon to go backward" onClick={forwardClick} onKeyDown={() => { }} role="presentation"></img>
                </div>
              </div>
            </div>
            <div className="text-description">
              <div className="text-dot"><span >{getPokemonDescriptions().substring(0, 363)} </span></div>
              <div className="text-dot">... </div>
              {getPokemonDescriptions().length > 363 && <AppTooltip placement="bottom"
                className="load-more"
                tooltipClass="tooltip-popover"
                name="read more"
                data={getPokemonDescriptions()}
                // appearance="subtle"
              />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsHeader;