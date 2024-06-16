export interface ImageLink {
    image: string,
    alttext: string,
    link: string,
}

export interface SocialLinkProps extends ImageLink {
    domain: string,
}

export interface ProjectViewProps {
    name: string,
    subtitle: string,

    date: string,
    purpose: string,
    roles?: string[],

    image?: string,
    description: string,
    skills: string[],

    socials?: JSX.Element[],
    game?: JSX.Element,
}