import './details.page.scss';
import React, { useState, useEffect } from "react";
import { Loader, Modal, Placeholder } from 'rsuite';
import { getPokemonDataById, getPokemonTypesById, getSpeciesDataById } from "../../services/common.service";
import DetailsHeader from '../../components/pokemonDetailsCard/detailsHeader/detailsHeader';
import PropertyCard from '../../components/pokemonDetailsCard/propertyCard/propertyCard';
import StatCard from '../../components/pokemonDetailsCard/statCard/statCard';
import EvolutionChainCard from '../../components/pokemonDetailsCard/evolutionChainCard/evolutionChainCard';
import { DetailPageProps, PokemonData, SpeciesData, TypeData } from '../../constants/pokemon.types';

const DetailPage: React.FC<DetailPageProps> = ({ isCardSelected, toggleModal, pokemonId, offset }) => {
    const [currentPokemonId, setCurrentPokemonId] = useState<number>(pokemonId);
    const handleClose = () => toggleModal();
    const [data, setPokemonData] = useState<PokemonData | null>(null);
    const [isDetailLoading, setLoading] = useState<boolean>(true);
    const [isModalOpen, setCloseModal] = useState<boolean>(isCardSelected);
    const [pokemonSpeciesData, setPokemonSpeciesData] = useState<SpeciesData | null>(null);
    const [pokemonTypeData, setPokemonTypeData] = useState<TypeData | null>(null);

    useEffect(() => {
        if (!currentPokemonId) return;
        (async function setPokemonDetails() {
            setLoading(true);
            const response = await getPokemonDataById(currentPokemonId);
            setPokemonData(response);
            setLoading(false);
            const speciesData = await getSpeciesDataById(currentPokemonId);
            setPokemonSpeciesData(speciesData);
            const typeData = await getPokemonTypesById(currentPokemonId);
            setPokemonTypeData(typeData);
        })();
    }, [currentPokemonId]);

    const handleForwordClick = () => {
        if (currentPokemonId === offset) return;
        setCurrentPokemonId(currentPokemonId + 1);
    };

    const handleBackwordClick = () => {
        if (currentPokemonId === 1) return;
        setCurrentPokemonId(currentPokemonId - 1);
    };

    const closePopUp = () => {
        setCloseModal(false);
    };

    return (
        <>
            <Modal
                dialogClassName={"details-modal-container"}
                size={"md"}
                open={isModalOpen}
                onClose={handleClose}
                onExited={() => {
                    setPokemonData(null);
                }}
            >
                {data ? (
                    <>
                        <div className="model-container">
                            <Modal.Header closeButton={false} className="rs-modal-header-2">
                                {isDetailLoading && <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />}
                                {!isDetailLoading &&
                                    <div>
                                        <DetailsHeader data={data} speciesData={pokemonSpeciesData} forwordClick={handleForwordClick} backClick={handleBackwordClick} closeClick={closePopUp} />
                                    </div>
                                }
                                <div className="padding-components">
                                    {pokemonSpeciesData && pokemonTypeData && (
                                        <PropertyCard speciesData={pokemonSpeciesData} data={data} pokemonTypeData={pokemonTypeData} />
                                    )}
                                </div>
                                <div className="padding-components">
                                    {data.stats && (<StatCard stats={data.stats} />)}
                                </div>
                                <div className="padding-components">
                                    <EvolutionChainCard data={data} />
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                {/* <PokemonCard data={data} /> */}
                            </Modal.Body>
                        </div>
                    </>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <Loader size="md" />
                    </div>
                )}
            </Modal>
        </>
    );
};
export default DetailPage;