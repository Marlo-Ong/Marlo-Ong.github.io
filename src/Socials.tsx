import GithubLogo from "./public/Black/Github_black.png"
import YoutubeLogo from "./public/Black/Youtube_black.png"
import LinkedinLogo from "./public/Black/LinkedIN_black.png"
import GmailLogo from "./public/Black/Gmail_black.png"
import HTMLLogo from "./public/Black/HTML5_black.png"

import { SocialLinkProps } from "./common/types";
import { SocialLink } from "./SocialLink/SocialLink";
import socialLinkClasses from "./SocialLink/SocialLink.module.css";

const github : SocialLinkProps = {
  link: "https://github.com/Marlo-Ong",
  alttext: "GitHub logo",
  image: GithubLogo,
  domain: "Github"
}

const linkedin : SocialLinkProps = {
  link: "https://www.linkedin.com/in/marloongkingco/",
  alttext: "Linkedin Logo",
  image: LinkedinLogo,
  domain: "Linkedin"
}

const gmail : SocialLinkProps = {
  link: "mailto:moon.ongkingco@outlook.com",
  alttext: "Gmail Logo",
  image: GmailLogo,
  domain: "Email",
}

const youtube : SocialLinkProps = {
  link: "https://www.youtube.com/channel/UCvuFxj0nn0lfNLO-Zrhlb0A",
  alttext: "YouTube logo",
  image: YoutubeLogo,
  domain: "Youtube"
}

export const socialMediaLinks : SocialLinkProps[] = [
  github, linkedin, youtube, gmail
];

// Project Links
export function Github(link: string)
{
  var githubProps : SocialLinkProps = {
    ...github,
    link: link
  }
  return <SocialLink {...githubProps}/>
}

export function itchIO(link: string)
{
  var itchioProps : SocialLinkProps = {
    link: "https://mkingco.itch.io/" + link,
    cssClasses: [socialLinkClasses.actionButton],
    alttext: "HTML Logo",
    image: HTMLLogo,
    domain: "Play Now!"
  }
  return <SocialLink {...itchioProps}/>
}

export function Youtube(link: string, title?: string, isActionButton?: boolean)
{
  var youtubeProps : SocialLinkProps = {
    ...youtube,
    link: link,
    domain: title ?? "Watch Now!",
    }

  if (isActionButton)
    youtubeProps.cssClasses = [socialLinkClasses.actionButton]

  return <SocialLink {...youtubeProps}/>
}