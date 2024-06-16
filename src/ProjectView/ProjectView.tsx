import { FC } from "react";
import { ProjectViewProps } from "../common/types";
// import { SocialLink } from "../SocialLink/SocialLink";
import classes from "./ProjectView.module.css"

export const Project: FC<ProjectViewProps> = ({ image, description, name, skills, subtitle, date, purpose, roles, socials }: ProjectViewProps) => {
    return (
        <div className={classes.project}>
            <h1>{name}</h1>
            <h2>{subtitle}</h2>

            <div className={classes.metadata}>
                <p><span>Date:</span> {date}</p>
                <p><span>Purpose:</span> {purpose}</p>
                <p><span>Roles:</span> {roles?.join(', ')}</p>
            </div>

            <img className={classes.projectImg} src={image}/>

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

