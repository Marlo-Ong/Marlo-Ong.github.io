import { FC } from 'react';
import classes from "./ChevronScroller.module.css"

interface ChevronScrollerProps {
    numArrows?: number;
    targetId: string;
  }

export const ChevronScroller : FC<ChevronScrollerProps> = ({ numArrows, targetId }) => {
    const handleScroll = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (numArrows === undefined)
        numArrows = 3;

    return (
        <div className={classes.arrow} onClick={handleScroll}>
            {Array.from({ length: numArrows }, () => (
                <span/>
            ))}
        </div>
    );
};

export default ChevronScroller;