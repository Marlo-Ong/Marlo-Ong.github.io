import "./App.css"
// import { useState } from "react";
import classes from "./App.module.css"
import { SocialLink } from "./SocialLink/SocialLink"
import { Project } from "./ProjectView/ProjectView"
import { SocialLinkProps, ProjectViewProps } from "./common/types";

import GithubLogo from "./public/White/Github_white.png"
import HTMLLogo from "./public/White/HTML5_white.png"
import LinkedinLogo from "./public/White/LinkedIN_white.png"
import GmailLogo from "./public/White/Gmail_white.png"
import Kuddelmuddel from "./public/kuddelmuddel.png"
import Arecibo from "./public/arecibo.png"
import WordHunt from "./public/wordhunt.jpg"

// Social Media Templates
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
  domain: "Email"
}

const socialMediaLinks : SocialLinkProps[] = [
  github, linkedin, gmail
];

// Project Links
function Github(link: string)
{
  var githubProps : SocialLinkProps = {
    ...github,
    link: link
  }
  return <SocialLink {...githubProps}/>
}

function itchIO(link: string)
{
  var itchioProps : SocialLinkProps = {
    link: "https://mkingco.itch.io/" + link,
    alttext: "HTML Logo",
    image: HTMLLogo,
    domain: "itch.io"
  }
  return <SocialLink {...itchioProps}/>
}

const project1 : ProjectViewProps = {
  name: "Kuddelmuddel",
  subtitle: "Grow weeds and take over the Earth!",
  
  date: "June 2023 - August 2023",
  purpose: "Techwise Course 1 Capstone Project",
  roles: ["Game Programmer", "Audio Engineer"],

  description: "Kuddelmuddel is an incremental mobile game where you grow weeds, grow some more weeds, and grow even more weeds! \
  Created as a part of Techwise's Course 1 capstone project, I had a hand in coding the foundational game state logic, creating C# developer tools for my fellow teammates, making the frame-by-frame animations, and implementing (and choosing) all of the music and SFX you hear in the game.",
  image: Kuddelmuddel,
  skills: ["Unity", "C#", "WebGL"],
  
  socials: [Github("https://github.com/elenachau/techwise-kuddelmuddel"), itchIO("kuddelmuddel")],
}

const project2 : ProjectViewProps = {
  name: "Project Arecibo",
  subtitle: "Send future messages through space.",

  date: "January 2024 - March 2024",
  purpose: "Techwise Course 2 Capstone Project",
  roles: ["Back-End Developer"],

  description: "My first foray into web development, I helped administer the user authentication and authorization functionality from our MongoDB database, as well as create corresponding login and registration pages. I then converted our website from base HTML to the .ejs template, to allow our home page to dynamically display user data. I also played an assistive role both by debugging the back-end logic and by cleaning up front-end issues. ",
  image: Arecibo,
  skills: ["HTML/CSS", "AWS", "MongoDB", "Express.js", "JavaScript", "Github Issues"],

  socials: [Github("https://github.com/ChrisTutje/TechwiseCommunicationsApp")],
}

const project3 : ProjectViewProps = {
  name: "Word Hunt Recreated",
  subtitle: "The classic GamePigeon game.",

  date: "January 2024",
  purpose: "Personal Project",
  roles: ["Solo Developer"],

  description: "A 2-day recreation of the iPhone game in Unity. I wanted to recreate the game exactly, so I utilized the game's own assets, sounds, and dictionaries to make it as indistinguishable as possible. Future plans to expand the project are to add custom board creation, shareable board links, match history, timed runs/speedruns, a high score leaderboard, and potentially online multiplayer.",
  image: WordHunt,
  skills: ["Unity", "C#"],

  socials: [Github("https://github.com/Marlo-Ong/word-hunt-recreated"), itchIO("gamepigeon-word-hunt")],
}

const projects : ProjectViewProps[] = [
  project1, project2, project3, project1, project1
];

function App() {
  // const [projectState, setProjectState] = useState(projects);

  // function toggleExpand(element: ProjectViewProps) {
  //   element.expanded = !element.expanded;
  //   setProjectState([...projectState]);
  // };

  return (
    <div className={classes.appView}>

      <div className={classes.banner}>
        <div className={classes.header}>
          <h1>Marlo Ongkingco</h1>
          <h2>Game programming, software development, audio engineering</h2>

          <div className={classes.socialsView}>
            {socialMediaLinks.map((args) => (<SocialLink {...args}/> ))}
          </div>
        </div>
      </div>

      <div className={classes.projectsView}>
        {projects.map((args) => (<Project {...args}/> ))}
      </div>
    </div>
  );
}

export default App;
