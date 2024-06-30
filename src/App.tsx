import "./App.css"
import classes from "./App.module.css"
import socialLinkClassses from "./SocialLink/SocialLink.module.css";
import { SocialLink } from "./SocialLink/SocialLink"
import { Project } from "./ProjectView/ProjectView"
import { SocialLinkProps, ProjectViewProps } from "./common/types";
// import ImageCarousel from "./Carousel/Carousel";

import GithubLogo from "./public/Black/Github_black.png"
import HTMLLogo from "./public/Black/HTML5_black.png"
import LinkedinLogo from "./public/Black/LinkedIN_black.png"
import GmailLogo from "./public/Black/Gmail_black.png"
import Kuddelmuddel from "./public/kuddelmuddel.png"
import Arecibo from "./public/arecibo.png"
import WordHunt from "./public/wordhunt.jpg"
import Infinitrivia from "./public/infinitrivia.png"
import Soupasaurus from "./public/soupasaurus.png"
import SillyBilly from "./public/sillybilly.png"

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
  domain: "Email",
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
    cssClasses: [socialLinkClassses.actionButton],
    alttext: "HTML Logo",
    image: HTMLLogo,
    domain: "Play Now!"
  }
  return <SocialLink {...itchioProps}/>
}

const kuddelmuddel : ProjectViewProps = {
  name: "Kuddelmuddel",
  subtitle: "Grow weeds and take over the Earth!",
  
  date: "June 2023 - August 2023",
  purpose: "Techwise Course 1 Capstone Project",
  roles: ["Game Programmer", "Audio Engineer"],

  description: "Kuddelmuddel is an incremental mobile game where you grow weeds, grow some more weeds, and grow even more weeds! \
  Created as a part of Techwise's Course 1 capstone project, I had a hand in coding the foundational game state logic, creating C# \
  developer tools for my fellow teammates, making the frame-by-frame animations, and implementing (and choosing) all of the music and SFX you hear in the game.",
  image: Kuddelmuddel,
  skills: ["Unity", "C#", "Data Structures", "UI/UX"],
  
  socials: [Github("https://github.com/elenachau/techwise-kuddelmuddel"), itchIO("kuddelmuddel")],
}

const arecibo : ProjectViewProps = {
  name: "Project Arecibo",
  subtitle: "Send messages to the future.",

  date: "January 2024 - March 2024",
  purpose: "Techwise Course 2 Capstone Project",
  roles: ["Back-End Developer"],

  description: "My first foray into web development, I helped administer the user authentication and authorization functionality \
  from our MongoDB database, as well as create corresponding login and registration pages. I then converted our website from base \
  HTML to the .ejs template, to allow our home page to dynamically display user data. I also played an assistive role both by \
  debugging the back-end logic and by cleaning up front-end issues. ",
  image: Arecibo,
  skills: ["HTML/CSS", "AWS", "MongoDB", "Express.js", "JavaScript", "Github Issues"],

  socials: [Github("https://github.com/ChrisTutje/TechwiseCommunicationsApp")],
}

const wordhunt : ProjectViewProps = {
  name: "Word Hunt Recreated",
  subtitle: "The classic GamePigeon game, now on the Web.",

  date: "January 2024",
  purpose: "Personal Project",
  roles: ["Solo Developer"],

  description: "A 2-day recreation of the iPhone game in Unity. I wanted to recreate the game exactly, so I utilized the game's \
  own assets, sounds, and dictionaries to make it as indistinguishable as possible. Future plans to expand the project are to \
  add custom board creation, shareable board links, match history, timed runs/speedruns, a high score leaderboard, and potentially online multiplayer.",
  image: WordHunt,
  skills: ["Unity", "C#"],

  socials: [Github("https://github.com/Marlo-Ong/word-hunt-recreated"), itchIO("gamepigeon-word-hunt")],
}

const infinitrivia : ProjectViewProps = {
  name: "Infinitrivia",
  subtitle: "Limitless trivia powered by ChatGPT.",

  date: "April 2024",
  purpose: "\"Biggest Little Hackathon 2024\" Entry",
  roles: ["Solo Developer", "Prompt Engineer", "Game Programmer", "Artist", "Audio Engineer"],

  description: "A short trivia game made in 36 hours as part of the ACM chapter at University of Nevada, Reno. \
  Inspired by games such as JackBox Party Pack and the Impossible Quiz, I went for a cohesive but playful design. I made all the visual assets, \
  including a custom hand-drawn font, logo, and buttons. I tested several OpenAI prompts to retrieve consistent trivia questions and answers.\
  I used MockAPI to read and store created questions to save tokens.",
  image: Infinitrivia,
  skills: ["Unity", "C#", "REST APIs", "OpenAI API", "Visual Design", "Databasing", "Prompt Engineering"],

  socials: [Github("https://github.com/Marlo-Ong/infinitrivia"), itchIO("infinitrivia")],
}

const soupasaurus : ProjectViewProps = {
  name: "Soupasaurus",
  subtitle: "What kind of soup would you be?",

  date: "April 2024",
  purpose: "\"LA Hacks 2024\" Entry",
  roles: ["Game Programmer", "Front-End Developer"],

  description: "Made in collaboration with University of California, San Diego students. I wrote inspector tools to interface \
  Unity C# scripting with the editor, facilitating an easier design and animation workflow for our front-end developers. \
  I also wrote the logic to communicate with our custom Python backend and display the output of a Google Gemini prompt.",
  image: Soupasaurus,
  skills: ["Unity", "C#", "Python", "Google Gemini API"],

  socials: [Github("https://github.com/Marlo-Ong/soupasaurus"), itchIO("soupasaurus")],
}

const sillybilly : ProjectViewProps = {
  name: "Silly Billies' Chromatic Chaos",
  subtitle: "Bureacracy for iPad kids!",

  date: "April 2023",
  purpose: "\"Biggest Little Hackathon 2023\" Entry",
  roles: ["Game Programmer", "Composer"],

  description: "My first ever Unity game for my first ever Hackathon! Created alongside some UNR friends, \
  it was a steep learning experience jumping into C# and the Unity API for the first time, especially on a time crunch,\
  but it was also my first introduction to design patterns like using singletons and factories and coroutines. \
  Despite the challenges, we were able to pull off a game with awesome art, custom-made sounds, and a hilarious premise.",
  image: SillyBilly,
  skills: ["Unity", "C#", "Design Patterns", "Music Composition", "Sound Design", "Teamwork"],

  socials: [Github("https://github.com/SapphireGaze/chromatic-chaos"), itchIO("silly-billiess-chromatic-chaos")],
}

const projects : ProjectViewProps[] = [
  infinitrivia, wordhunt, sillybilly,
  soupasaurus, kuddelmuddel, arecibo
];

function App() {
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

      {/* {ImageCarousel()} */}
    </div>
  );
}

export default App;
