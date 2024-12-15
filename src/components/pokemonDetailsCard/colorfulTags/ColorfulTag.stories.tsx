// ColorfulTag.stories.tsx
import React from 'react';
import ColorfulTag from './colorfulTag';
import { Meta, StoryFn } from '@storybook/react';
import { ColorfulTagProps } from '../../../constants/pokemon.types';

export default {
  title: 'Components/ColorfulTag',
  component: ColorfulTag,
} as Meta;

const Template: StoryFn<ColorfulTagProps> = (args) => <ColorfulTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Fire',
  className: 'tag-fire',
  type: 'fire', // Assuming 'fire' is a valid type for getPokemonBgColor
};

export const Water = Template.bind({});
Water.args = {
  text: 'Water',
  className: 'tag-water',
  type: 'water', // Assuming 'water' is a valid type for getPokemonBgColor
};

export const Grass = Template.bind({});
Grass.args = {
  text: 'Grass',
  className: 'tag-grass',
  type: 'grass', // Assuming 'grass' is a valid type for getPokemonBgColor
};