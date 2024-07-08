export interface ImageLink {
    image: string,
    alttext: string,
    link: string,
    cssClasses?: string[],
}

export interface SocialLinkProps extends ImageLink {
    domain: string,
}

export interface ProjectViewProps {
    name: string,
    subtitle: string,
    favorite?: boolean;

    date: string,
    purpose: string,
    roles?: string[],

    image?: string | HoverGifProps,
    description: string | string[],
    skills: string[],

    socials?: JSX.Element[],
    game?: JSX.Element,
}

export interface ProjectSectionProps {
    title: string,
    description?: string,
    projects: ProjectViewProps[]
}

export interface HoverGifProps {
    staticImg : string,
    gif : string
}