import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppTooltip from './tooltip';

describe('AppTooltip Component', () => {
  const tooltipContent = "This is a tooltip";

  it('renders the tooltip with the correct content', () => {
    render(
      <AppTooltip
        placement="top"
        data={tooltipContent}
        className="tooltip-trigger"
        name="Hover me"
      />
    );

    const triggerElement = screen.getByText('Hover me');
    expect(triggerElement).toBeInTheDocument();

    fireEvent.click(triggerElement);

    expect(screen.getByText(tooltipContent)).toBeInTheDocument();
  });
  
  it('does not show tooltip initially', () => {
    render(
      <AppTooltip
        placement="top"
        data={tooltipContent}
        className="tooltip-trigger"
        name="Hover me"
      />
    );
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();
  });
});