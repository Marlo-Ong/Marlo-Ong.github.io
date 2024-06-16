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

// Social Media
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
  link: "moon.ongkingco@outlook.com",
  alttext: "Gmail Logo",
  image: GmailLogo,
  domain: "moon.ongkingco@outlook.com"
}

const socialMediaLinks : SocialLinkProps[] = [
  github, linkedin, gmail
];

// Projects
const project1Github : SocialLinkProps = {
  ...github,
  link: "https://github.com/elenachau/techwise-kuddelmuddel",
}

const project1itch : SocialLinkProps = {
  link: "https://mkingco.itch.io/kuddelmuddel",
  alttext: "HTML Logo",
  image: HTMLLogo,
  domain: "itch.io"
}

const project1Socials = [project1Github, project1itch];

const project1 : ProjectViewProps = {
  name: "Kuddelmuddel Web Game",
  subtitle: "Techwise Project 1",
  description: "Kuddelmuddel is an incremental mobile game where you grow weeds, grow some more weeds, and grow even more weeds! \
  Created as a part of Techwise's Course 1 capstone project, I had a hand in coding the foundational game state logic, creating C# developer tools for my fellow teammates, making the frame-by-frame animations, and implementing (and choosing) all of the music and SFX you hear in the game.",

  link: "https://mkingco.itch.io/kuddelmuddel",
  image: Kuddelmuddel,
  alttext: "A screenshot of Kuddelmuddel's gameplay",

  skills: ["Unity", "C#", "WebGL"],
  children: project1Socials.map((args) => (<SocialLink {...args}/>)),
  game: WebGLGame("../../kuddelmuddel-webgl-gzip-v4/index.html")
}

const project2 : ProjectViewProps = {
  name: "Project Arecibo - Communications Website",
  subtitle: "Techwise Project 2",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. At varius vel pharetra vel turpis nunc. Aliquam nulla facilisi cras fermentum. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Molestie nunc non blandit massa enim. Lacinia quis vel eros donec ac odio tempor orci dapibus. Mauris sit amet massa vitae tortor condimentum lacinia quis. Dictum non consectetur a erat nam at. Sed libero enim sed faucibus turpis.",

  link: "https://github.com/ChrisTutje/TechwiseCommunicationsApp",
  image: Arecibo,
  alttext: "A screenshot of Project Arecibo",

  skills: ["HTML/CSS", "AWS", "MongoDB"],
}

const project3 : ProjectViewProps = {
  name: "Word Hunt Recreation",
  subtitle: "Unity Game",
  description: "Lorem ipsump dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. At varius vel pharetra vel turpis nunc. Aliquam nulla facilisi cras fermentum. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Molestie nunc non blandit massa enim. Lacinia quis vel eros donec ac odio tempor orci dapibus. Mauris sit amet massa vitae tortor condimentum lacinia quis. Dictum non consectetur a erat nam at. Sed libero enim sed faucibus turpis.",

  link: "https://mkingco.itch.io/gamepigeon-word-hunt",
  image: WordHunt,
  alttext: "A screenshot of Word Hunt",

  skills: ["Unity", "C#"],
}

const projects : ProjectViewProps[] = [
  project1, project2, project3
];

function WebGLGame(path : string)
{
  return (
    <div>
      <iframe src={path} width="960" height="650"></iframe>
    </div>
  )
}

function App() {
  // const [projectState, setProjectState] = useState(projects);

  // function toggleExpand(element: ProjectViewProps) {
  //   element.expanded = !element.expanded;
  //   setProjectState([...projectState]);
  // };

  return (
    <div>
      <h1>MARLO ONGKINGCO</h1>

      <div className={classes.socialsView}>
        {socialMediaLinks.map((args) => (<SocialLink {...args}/> ))}
      </div>

      <div className={classes.projectsView}>
        {projects.map((args) => (<Project {...args}/> ))}
      </div>
    </div>
  );
}

export default App;
