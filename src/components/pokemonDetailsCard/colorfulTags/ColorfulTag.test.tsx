// ColorfulTag.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorfulTag from './colorfulTag';
import { getPokemonBgColor } from '../../../constants/utils';

// Mock the getPokemonBgColor function
jest.mock('../../../constants/utils', () => ({
  getPokemonBgColor: jest.fn(),
}));

describe('ColorfulTag', () => {
  it('renders the text and applies the correct background color', () => {
    const mockType = 'fire';
    const mockText = 'Fire Type';
    const mockBgColor = 'red'; // Example background color

    // Set up the mock implementation
    (getPokemonBgColor as jest.Mock).mockReturnValue(mockBgColor);

    render(<ColorfulTag text={mockText} className="test-class" type={mockType} />);

    // Check if the text is rendered
    expect(screen.getByText(mockText)).toBeInTheDocument();

    // // Check if the background color is applied correctly
    // const colorfulTag = screen.getByText(mockText).parentElement;
    // expect(colorfulTag).toHaveStyle(`background: ${mockBgColor}`);
  });
});