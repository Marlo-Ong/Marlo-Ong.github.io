import GithubLogo from "./public/Black/Github_black.png"
import YoutubeLogo from "./public/Black/Youtube_black.png"
import LinkedinLogo from "./public/Black/LinkedIN_black.png"
import GmailLogo from "./public/Black/Gmail_black.png"
import GoogleLogo from "./public/Black/Google_black.png"
import ItchIOLogo from "./public/Black/itchio-logo.png"

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
  link: "https://www.youtube.com/@kingcoism/videos",
  alttext: "YouTube logo",
  image: YoutubeLogo,
  domain: "Youtube"
}

const itchio : SocialLinkProps = {
  link: "https://mkingco.itch.io/",
  alttext: "Itch.IO Logo",
  image: ItchIOLogo,
  domain: "itch.io"
}

export const socialMediaLinks : SocialLinkProps[] = [
  github, linkedin, itchio, youtube, gmail,
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
    image: ItchIOLogo,
    domain: "Play Now!"
  }
  return <SocialLink {...itchioProps}/>
}

export function ActionLink(link: string, title: string)
{
  var linkProps : SocialLinkProps = {
    link: link,
    alttext: title,
    image: YoutubeLogo,
    domain: title
    }

  linkProps.cssClasses = [socialLinkClasses.actionButton]
  return <SocialLink {...linkProps}/>
}

export function Youtube(link: string, isActionButton: boolean = true, title?: string)
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

export function Google(link: string, title: string, isActionButton: boolean = true)
{
  var customProps : SocialLinkProps = {
    link: link,
    alttext: "The Google logo.",
    image: GoogleLogo,
    domain: title,
    }

  if (isActionButton)
    customProps.cssClasses = [socialLinkClasses.actionButton]

  return <SocialLink {...customProps}/>
}