import { FC } from "react";
import { SocialLinkProps } from "../common/types";
import classes from "./SocialLink.module.css"

export const SocialLink: FC<SocialLinkProps> = ({ image, alttext, link, domain, }: SocialLinkProps) => {
    return (
        <div className={classes.socialLink}>
            <a href={link} target="_blank"><img src={image} alt={alttext}/></a>
            <div>{domain}</div>
        </div>
    );
}

