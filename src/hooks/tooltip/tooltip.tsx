import React, { forwardRef, ReactNode } from 'react';
import { Whisper, Popover } from 'rsuite';

interface DefaultPopoverProps {
    content: ReactNode;
    className?: string;
    [key: string]: any; // To allow other props
}

// eslint-disable-next-line react/display-name
const DefaultPopover = forwardRef<HTMLDivElement, DefaultPopoverProps>(({ content, className, ...props }, ref) => {
    return (
        <Popover ref={ref} {...props} className={className} arrow={false}>
            <p>{content}</p>
        </Popover>
    );
});

interface AppTooltipProps {
    placement: 'top' | 'bottom' | 'left' | 'right'; // Specify allowed placements
    data: ReactNode;
    className?: string;
    name: string;
    tooltipClass?: string;
}

const AppTooltip: React.FC<AppTooltipProps> = ({ placement, data, className, name, tooltipClass }) => (
    <Whisper
        trigger="click"
        placement={placement}
        controlId={`control-id-${placement}`}
        speaker={
            <DefaultPopover content={data} className={tooltipClass} />
        }
    >
        <div className={className}>{name}</div>
    </Whisper>
);

export default AppTooltip;