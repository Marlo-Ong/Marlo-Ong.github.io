import { ProjectViewProps } from "./common/types";
import { Github, Google, Youtube, itchIO } from "./Socials";

import Kuddelmuddel from "./public/kuddelmuddel.png"
import Arecibo from "./public/arecibo.png"
import WordHunt from "./public/wordhunt.jpg"
import Infinitrivia from "./public/infinitrivia.png"
import Soupasaurus from "./public/soupasaurus.png"
import SillyBilly from "./public/sillybilly.png"
import Epilogue from "./public/epilogue.png"
import Minimal from "./public/minimal.png"
import Silliness from "./public/silliness.png"
import Nonsensical from "./public/nonsensical.png"
import ParisianDream from "./public/parisiandream.png"
import FrutigerAero from "./public/frutiger.png"
import BirdGame from "./public/birdgame.jpg"

import InfinitriviaGIF from "./public/infinitrivia.gif"
import SillyBillyGIF from "./public/sillybilly.gif"
import WordHuntGIF from "./public/wordhunt.gif"
import AreciboGIF from "./public/arecibo.gif"
import KuddelmuddelGIF from "./public/kuddelmuddel.gif"
// import EpilogueGIF from "./public/epilogue.gif"
import FrutigerGIF from "./public/frutiger.gif"
import MinimalGIF from "./public/minimal.gif"
import NonsensicalGIF from "./public/nonsensical.gif"
import ParisianDremaGIF from "./public/parisiandream.gif"
import SillinessGIF from "./public/silliness.gif"

// Games
const kuddelmuddel : ProjectViewProps = {
  name: "Kuddelmuddel",
  subtitle: "Grow weeds and take over the Earth!",
  
  date: "June 2023 - August 2023",
  purpose: "Techwise Course 1 Capstone Project",
  roles: ["Game Programmer", "Audio Engineer"],

  description: "Kuddelmuddel is an incremental mobile game where you grow weeds, grow some more weeds, and grow even more weeds! \
  Created as a part of Techwise's Course 1 capstone project, I had a hand in coding the foundational game state logic, creating C# \
  developer tools for my fellow teammates, making the frame-by-frame animations, and implementing (and choosing) all of the music and SFX you hear in the game.",
  image: {
    staticImg: Kuddelmuddel,
    gif: KuddelmuddelGIF
  },
  skills: ["Unity", "C#", "Data Structures", "UI/UX"],
  
  socials: [
    Github("https://github.com/elenachau/techwise-kuddelmuddel"),
    Youtube("https://www.youtube.com/watch?v=_nOwZ7wz6nY", false, "Trailer"),
    itchIO("kuddelmuddel")
  ],
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
  image: {
    staticImg: Arecibo,
    gif: AreciboGIF
  },
  skills: ["HTML/CSS", "AWS", "MongoDB", "Express.js", "JavaScript", "Github Issues"],

  socials: [
    Github("https://github.com/ChrisTutje/TechwiseCommunicationsApp"),
    Youtube("https://www.youtube.com/watch?v=0RG7q72lEh4", true, "Demo")
  ],
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
  image: {
    staticImg: WordHunt,
    gif: WordHuntGIF
  },
  skills: ["Unity", "C#"],

  socials: [
    Github("https://github.com/Marlo-Ong/word-hunt-recreated"),
    Google("https://docs.google.com/document/d/1wPYATW8UgB-PooRN8VOaTBGCO1oJWUF2bV40hNSuLy0/edit?usp=sharing", "Guide", false),
    itchIO("gamepigeon-word-hunt")
  ],
}

const infinitrivia : ProjectViewProps = {
  name: "Infinitrivia",
  subtitle: "Limitless trivia powered by ChatGPT.",
  favorite: true,

  date: "April 2024",
  purpose: "\"Biggest Little Hackathon 2024\" Entry",
  roles: ["Solo Developer", "Prompt Engineer", "Game Programmer", "Artist", "Audio Engineer"],

  description: "A short trivia game made in 36 hours as part of the ACM chapter at University of Nevada, Reno. \
  Inspired by games such as JackBox Party Pack and the Impossible Quiz, I went for a cohesive but playful design. I made all the visual assets, \
  including a custom hand-drawn font, logo, and buttons. I tested several OpenAI prompts to retrieve consistent trivia questions and answers.\
  I used MockAPI to read and store created questions to save tokens.",
  image: {
    staticImg: Infinitrivia,
    gif: InfinitriviaGIF
  },
  skills: ["Unity", "C#", "REST APIs", "OpenAI API", "Visual Design", "Databasing", "Prompt Engineering"],

  socials: [Github("https://github.com/Marlo-Ong/infinitrivia"), itchIO("infinitrivia")],
}

const soupasaurus : ProjectViewProps = {
  name: "Soupasaurus",
  subtitle: "What kind of soup would you be?",
  favorite: true,

  date: "April 2024",
  purpose: "\"LA Hacks 2024\" Entry",
  roles: ["Game Programmer", "Front-End Developer"],

  description: "Made in collaboration with University of California, San Diego students. I wrote inspector tools to interface \
  Unity C# scripting with the editor, facilitating an easier design and animation workflow for our front-end developers. \
  I also wrote the logic to communicate with our custom Python backend and display the output of a Google Gemini prompt.",
  image: Soupasaurus,
  skills: ["Unity", "C#", "Python", "Google Gemini API"],

  socials: [
    Github("https://github.com/Marlo-Ong/soupasaurus"),
    Google("https://devpost.com/software/soupersaurus", "Devpost", false),
    Youtube("https://youtu.be/3SGgthFEBKs", false, "Demo"),
    itchIO("soupasaurus")],
}

const sillybilly : ProjectViewProps = {
  name: "Silly Billies's Chromatic Chaos",
  subtitle: "Bureacracy for iPad kids!",

  date: "April 2023",
  purpose: "\"Biggest Little Hackathon 2023\" Entry",
  roles: ["Game Programmer", "Composer"],

  description: "My first ever Unity game for my first ever Hackathon! Created alongside some UNR friends, \
  it was a steep learning experience jumping into C# and the Unity API for the first time, especially on a time crunch,\
  but it was also my first introduction to design patterns like using singletons and factories and coroutines. \
  Despite the challenges, we were able to pull off a game with awesome art, custom-made sounds, and a hilarious premise.",
  image: {
    gif: SillyBillyGIF,
    staticImg: SillyBilly
  },
  skills: ["Unity", "C#", "Design Patterns", "Music Composition", "Sound Design", "Teamwork"],

  socials: [
    Github("https://github.com/SapphireGaze/chromatic-chaos"),
    Youtube("https://www.youtube.com/watch?v=KLmcro7wXwI", false, "Music"),
    itchIO("silly-billiess-chromatic-chaos")],
}

// 3D Animations
const epilogue : ProjectViewProps = {
  name: "Epilogue",
  subtitle: "A journey of a sphere in space.",
  favorite: true,

  date: "January 2021 - April 2021",
  purpose: "LVA Jazz Class: Semester 2 Video Project",
  roles: ["3D Animator", "Music Arranger & Composer", "Audio Engineer", "Video Editor"],

  description: "My first ever 3D animation using Blender. Inspired by the feeling of separation evoked by high school graduations \
  during the pandemic, the animation follows pieces of a whole that are forced apart, but eventually come back together. \
  I created the orchestral arrangement of Bill Evans's \"Epilogue\", using personal recordings of bells, shakers, and my own voice for texture.",
  image: Epilogue,
  skills: ["Blender", "Cakewalk DAW", "Musescore", "DaVinci Resolve", "Recording/Mixing/Mastering"],

  socials: [Youtube("https://www.youtube.com/watch?v=nCfQIgI1Hks")],
}

const minimal : ProjectViewProps = {
  name: "Minimal",
  subtitle: "Instruments-in-a-box!",

  date: "July 2019 - March 2022",
  purpose: "Personal Project",
  roles: ["3D Animator", "Music Composer"],

  description: "An animation of my original composition made during a 30-day Composition Challenge in 2019. \
  The composition was inspired by Kensuke Ushio's minimalist work on A Silent Voice. \
  The animation was heavily inspired by the 2000's Animusic animations by Wayne Lytle and Dave Crognale.",
  image: {
    staticImg: Minimal,
    gif: MinimalGIF
  },
  skills: ["Blender", "Musescore"],

  socials: [Youtube("https://www.youtube.com/watch?v=AZksMRi_VZ4")],
}

const silliness : ProjectViewProps = {
  name: "Silliness",
  subtitle: "A quadrilateral visualization.",

  date: "April 2022 - May 2022",
  purpose: "LVA Music Tech: Semester Project",
  roles: ["3D Animator", "Music Composer", "Video Editor"],

  description: "A simple animation of an original composition made during my senior year at LVA. \
  My goal for the composition was to make very modular tracks that are still coherent when layered together. \
  It uses the same instrument, but the visualization is able to show you which musical ideas belong to which.",
  image: {
    staticImg: Silliness,
    gif: SillinessGIF
  },
  skills: ["Blender", "Cakewalk", "DaVinci Resolve"],

  socials: [Youtube("https://youtu.be/wbcT1ex_PB8?si=e_rFKh5GoXzobQNe")],
}

const nonsensical : ProjectViewProps = {
  name: "Nonsensical",
  subtitle: "What does it mean?",
  favorite: true,

  date: "March 2022",
  purpose: "Personal Project",
  roles: ["3D Animator", "Music Composer", "Video Editor", "Audio Engineer"],

  description: "A video editing test made over one of my original compositions. \
  This was my first time diving into DaVinci Resolve and discovering its capabilities. \
  My goal for the video was to see if I could overlay green screen effects atop my 3D Blender animations. \
  The song was inspired by Kamasi Washington's \"Harmony of Differences\" and creates a replayable loop.",
  image: {
    staticImg: Nonsensical,
    gif: NonsensicalGIF
  },
  skills: ["Blender", "REAPER", "Musescore", "DaVinci Resolve", "Audio Mixing"],

  socials: [Youtube("https://www.youtube.com/watch?v=J3nH6R0C1EE")],
}

const parisiandream : ProjectViewProps = {
  name: "Parisian Dream",
  subtitle: "A dreary poem.",

  date: "September 2022",
  purpose: "Personal Project",
  roles: ["3D Animator", "Sound Designer"],

  description: "My first short attempt at animating a human body. \
  This video combined a lot of inspirations I had at the time:\
  Shuzo Oshimi's \"Aku No Hana\" and its use of Charles Baudelaire's collection \
  of poems \"Les Fleurs du Mal,\" vocal synthesis for non-musical purposes, and the eerieness of Boisvert's videos. ",
  image: {
    staticImg: ParisianDream,
    gif: ParisianDremaGIF
  },
  skills: ["Blender", "Synthesizer V Studio Basic", "Voice Synthesis", "DaVinci Resolve", "REAPER"],

  socials: [Youtube("https://www.youtube.com/watch?v=qw3ZKqMqG_g")],
}

const frutigeraero : ProjectViewProps = {
  name: "Frutiger Aero",
  subtitle: "A 2000s-era aesthetic.",
  favorite: true,

  date: "January 2023",
  purpose: "Personal Project",
  roles: ["3D Animator"],

  description: " \
  I sought to challenge myself with this animation: using only a reference photo, \
  I wanted to bring to life the feeling of a nostalgic 2000's aesthetic. I was able to \
  apply knowledge about rigging with animal skeletons, building complex shaders with the bubbles, and \
  cloth physics from animating the waves and ripples of the computer screen.",
  image: {
    staticImg: FrutigerAero,
    gif: FrutigerGIF
  },
  skills: ["Blender 3D", "Rigging",],

  socials: [Youtube("https://www.youtube.com/watch?v=YPpdxCmrk_0")],
}

// Professional Projects
const birdgame : ProjectViewProps = {
  name: "Unreleased ManaWorks Game",
  subtitle: "Live life as a bird in this upcoming MMO.",

  date: "May 2024 - August 2024",
  purpose: "ManaWorks Inc. - Summer 2024 Internship",
  roles: ["Game Programmer Intern", "Audio Engineer", "Performance Analyst"],

  description: [
    "Created an interface to monitor and display FPS, memory, in-game stats, and profiling stats within several different UI systems.",
    "Analyzed and fixed performance bottlenecks/regressions in CPU/GPU.",
    "Developed an semi-automated process for weekly benchmarking of game performance"
  ],
  image: BirdGame,
  skills: ["UI/UX", "Game Optimization", "Performance Profiling", "Memory Management", "Data Structures and Algorithms"],

  socials: [Google("https://mana.works/", "Dev Page", true)],
}

const liondragon : ProjectViewProps = {
  name: "LionDragon Studios Game",
  subtitle: "A language-learning mobile game for kids.",

  date: "January 2024 - May 2024",
  purpose: "LionDragon Studios - Spring 2024 Internship",
  roles: ["Software Developer Intern"],

  description: [
    "Aided in building ground-up game logic and touch detection",
    "Created tools for designers to add interactive animations to objects",
    "Implemented reactive audio feedback for player input"
  ],
  skills: ["UI/UX", "Game Programming", "Mobile Development"],
}

const mobalytics : ProjectViewProps = {
  name: "Mobalytics Synthesis Presentation",
  subtitle: "\"Card Games Are Solved Games\"",

  date: "November 2024 - December 2024",
  purpose: "Mobalytics - Winter 2023 Externship",
  roles: ["Game Market Researcher"],

  description: "The goal of this presentation was to conduct a high-level \
  overview of a video game genre to determine expansion viability for Mobalytics \
  (and eSports-focused companion app). I chose to research the digital card games (DCG) genre due \
  to my experience playing and watching on these types of games, as well as its \
  popular strategic and competitive basis.",
  skills: ["Loom", "Tableau", "SQL", "Market Research", "Player Psychology", "Game Analytics"],
  socials: [Youtube("https://www.loom.com/share/86a53a8509b34e1f8965055e823dae6b", true)]
}

export const professional : ProjectViewProps[] = [
  birdgame, liondragon, mobalytics
];

export const games : ProjectViewProps[] = [
  infinitrivia, wordhunt, sillybilly,
  soupasaurus, kuddelmuddel, arecibo,
];

export const videos : ProjectViewProps[] = [
  epilogue, minimal, silliness,
  nonsensical, parisiandream, frutigeraero
]
