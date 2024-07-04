import { FC, useState } from 'react';
import { HoverGifProps } from './common/types';
import classes from "./ProjectView/ProjectView.module.css"

export const HoverGif : FC<HoverGifProps> = ({ staticImg, gif }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={classes.hoverGif}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
        
      <span>(Click or hover to see a preview.)</span>
      <img className={classes.projectImg}
        src={isHovering ? gif : staticImg}/>
    </div>
  );
};

export default HoverGif;