import React, { useContext, useMemo, useState } from "react";
import Header from "../../components/header/header";
import "./home.scss";
import "../../styles/common.scss";
import PokemonCard from "../../components/pokemonCard/pokemonCard";
import AppLoader from "../../components/loader/loader";
import PokemonContext from "../../context/pokemonContext/pokemon.context";
import DetailPage from "../details/details.page";
import { Button, Col, Row } from "rsuite";
import AppFilter from "../../components/filter/filter";


const HomePage = () => {
  const [isCardSelected, setToggleSelect] = useState(false);
  const [pokemonId, setPokemonId] = useState();
  const [isFilterEnable, setIsFilterEnable] = useState(false);


  const { state, getPokemonData } = useContext(PokemonContext);
  const { pokemonList, isLoading, isLoadMoreInprogress } = state;

  const pokemonListView = useMemo(
  () =>
    pokemonList?.map((data, index) => (
      <div key={`${data.id}-${index}`} className="responsive">
        <PokemonCard key={data.id} data={data} onClick={() => {
          setPokemonId(data.id);
          toggleModal();
        }} />
      </div>
    )),
  [pokemonList]
);

  const handleLoadMoreClick = () => {
    getPokemonData();
  }

  const toggleModal = () => {
    setToggleSelect((prevState) => !prevState);
  }

  const isFilterEnableHandler = (isEnable) => {
    setIsFilterEnable(isEnable);
  }

  return (
    <>
      <div className="home-container">
        <div>
          <Header className="header-container">
            <Row lg={24} xl={24} className="app-header-wrap show-grid">
              <Col xs={12} sm={12} lg={5} xl={5}>
                <div className="header-title">
                  <h3>Pokédex</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} lg={2} xl={2} className="hide">
                <div className="header-horizontal-line"></div>
              </Col>
              <Col xs={24} sm={24} lg={20} xl={20}>
                <div className="subheading">
                  <span>Search for any Pokémon that exist on the planet</span>
                </div>
              </Col>
            </Row>

          </Header>
          <div>
            <AppFilter  isFilterEnable={isFilterEnableHandler} />
          </div>
        </div>
        {pokemonList.length > 0 && (<div>
          <div className="card-list">
            {pokemonListView}
          </div>
          <div>
            {isLoadMoreInprogress && <AppLoader className="loadmore-loader" />}
          </div>
          {!isFilterEnable && (
            <div className="load-more-wrap">
              <Button appearance="link" onClick={handleLoadMoreClick} >Load more </Button>
            </div>
          )}
        </div>)}
        {(!pokemonList.length) && (
          <div className="no-data-found"><span>No data found</span></div>
        )}
        {isLoading && (
          <AppLoader className="app-loader-wrapper" />
        )}
        <div>
          {isCardSelected && (<DetailPage isCardSelected={isCardSelected} toggleModal={toggleModal} pokemonId={pokemonId} offset={pokemonList.length} />)}
        </div>
      </div>
    </>
  )
}


export default HomePage;