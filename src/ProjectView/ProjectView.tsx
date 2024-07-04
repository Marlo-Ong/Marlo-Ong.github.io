import { FC } from "react";
import { ProjectViewProps, HoverGifProps } from "../common/types";
import classes from "./ProjectView.module.css"
import HoverGif from "../Utils/HoverGif";
import StarIcon from "../public/star-icon.png";

function isHoverGifProps(obj: any): obj is HoverGifProps {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.staticImg === 'string' &&
        typeof obj.gif === 'string'
    );
};

export const Project: FC<ProjectViewProps> = ({ image, description, name, skills, subtitle, date, purpose, roles, socials, favorite }: ProjectViewProps) => {
    return (
        <div className={classes.project}>
            {favorite &&
                <div className={classes.favorite}>
                    <img src={StarIcon}/>
                    <span>Personal Favorite</span>
                </div>
            }
            <h1>{name}</h1>
            <h2>{subtitle}</h2>

            <div className={classes.metadata}>
                <p><span>Date:</span> {date}</p>
                <p><span>Purpose:</span> {purpose}</p>
                <p><span>Roles:</span> {roles?.join(', ')}</p>
            </div>

            <div className={classes.imgContainer}>
                {isHoverGifProps(image) ? (
                    <HoverGif {...image} />
                ) : (
                    <img className={classes.projectImg} src={image as string} alt="Project" />
                )}
            </div>

            <div className={classes.projectContent}>
                <div>{description}</div>

                <div className={classes.skills}>
                    Skills used: {skills.map(
                        (skill) => 
                        <div className={classes.tagItem}>
                            {skill}
                        </div>
                    )}
                </div>

                <div className={classes.socials}>
                    {socials}
                </div>
            </div>
        </div>
    );
}

