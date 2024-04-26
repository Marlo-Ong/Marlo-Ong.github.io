export interface ImageLink {
    image: string,
    alttext: string,
    link: string,
}

export interface SocialLinkProps extends ImageLink {
    domain: string,
}

export interface ProjectViewProps extends ImageLink {
    name: string,
    subtitle: string,
    description: string,
    skills: string[],
    children?: JSX.Element[],
}