import { FC, useState } from 'react';
import { HoverGifProps } from './common/types';
import classes from "./ProjectView/ProjectView.module.css"

export const HoverGif : FC<HoverGifProps> = ({ staticImg, gif }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img className={classes.projectImg}
        src={isHovering ? gif : staticImg}
      />
    </div>
  );
};

export default HoverGif;