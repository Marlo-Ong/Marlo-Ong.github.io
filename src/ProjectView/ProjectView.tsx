import { FC } from "react";
import { ProjectViewProps } from "../common/types";
// import { SocialLink } from "../SocialLink/SocialLink";
import classes from "./ProjectView.module.css"

export const Project: FC<ProjectViewProps> = ({ image, alttext, link, description, name, skills, subtitle, children }: ProjectViewProps) => {
    return (
        <div className={classes.project}>
            <h1>
                <a href={link} target="_blank">{name}</a>
            </h1>
            <h2>{subtitle}</h2>
            <img className={classes.projectImg} src={image} alt={alttext}/>
            <div>{description}</div>

            <div>Skills used: {skills.join(', ')}</div>

            <div className={classes.socials}>
                {children}
            </div>
        </div>
    );
}

