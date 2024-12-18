import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EvolutionChainCard from './evolutionChainCard';
import { PokemonCardProps } from '../../../constants/pokemon.types';
import data from '../sample';

export default {
  title: 'Components/EvolutionChainCard',
  component: EvolutionChainCard,
} as Meta;


const Template: StoryFn<PokemonCardProps> = (args) => <EvolutionChainCard {...args} />;

const mockData: PokemonCardProps = {
  data: { ...data } as any
};

export const Default = Template.bind({});
Default.args = {
  ...mockData,
};