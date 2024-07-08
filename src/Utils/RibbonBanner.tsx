import { FC } from "react";
import classes from "./RibbonBanner.module.css"

export interface RibbonBannerProps {
    title: string,
    text?: string,
}

export const RibbonBanner: FC<RibbonBannerProps> = ({title, text}) => {
    return (
        <div className={classes.sectionText}>
            <div className={classes.ribbon}>
                <div className={classes.ribbonContent}>
                    <h1>{title}</h1>
                    {text !== undefined && <span>{text}</span>}
                </div>
            </div>
        </div>
    );
}