import { ProjectViewProps } from "./common/types";
import { Github, Youtube, itchIO } from "./Socials";

import Kuddelmuddel from "./public/kuddelmuddel.png"
import Arecibo from "./public/arecibo.png"
import WordHunt from "./public/wordhunt.jpg"
import Infinitrivia from "./public/infinitrivia.png"
import Soupasaurus from "./public/soupasaurus.png"
import SillyBilly from "./public/sillybilly.png"
import Epilogue from "./public/epilogue.png"
import Minimal from "./public/minimal.png"
import Silliness from "./public/silliness.png"


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
  
  socials: [
    Github("https://github.com/elenachau/techwise-kuddelmuddel"),
    Youtube("https://www.youtube.com/watch?v=_nOwZ7wz6nY", "Trailer"),
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

  socials: [
    Github("https://github.com/SapphireGaze/chromatic-chaos"),
    Youtube("https://www.youtube.com/watch?v=KLmcro7wXwI", "Music"),
    itchIO("silly-billiess-chromatic-chaos")],
}

const epilogue : ProjectViewProps = {
  name: "Epilogue",
  subtitle: "A journey of a sphere in space.",

  date: "January 2021 - April 2021",
  purpose: "LVA Jazz Class: Semester 2 Video Project",
  roles: ["3D Animator", "Music Arranger & Composer", "Audio Engineer", "Video Editor"],

  description: "My first ever 3D animation using Blender. Inspired by the feeling of separation evoked by high school graduations \
  during the pandemic, the animation follows pieces of a whole that are forced apart, but eventually come back together. \
  I created the orchestral arrangement of Bill Evans's \"Epilogue\", using personal recordings of bells, shakers, and my own voice for texture.",
  image: Epilogue,
  skills: ["Blender", "Cakewalk DAW", "Musescore", "DaVinci Resolve", "Recording/Mixing/Mastering"],

  socials: [Youtube("https://www.youtube.com/watch?v=nCfQIgI1Hks", "Watch Here!", true)],
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
  image: Minimal,
  skills: ["Blender", "Musescore"],

  socials: [Youtube("https://www.youtube.com/watch?v=AZksMRi_VZ4", "Watch Here!", true)],
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
  image: Silliness,
  skills: ["Blender", "Cakewalk", "DaVinci Resolve"],

  socials: [Youtube("https://www.youtube.com/watch?v=AZksMRi_VZ4", "Watch Here!", true)],
}

export const projects : ProjectViewProps[] = [
  infinitrivia, wordhunt, sillybilly,
  soupasaurus, kuddelmuddel, arecibo,
  epilogue, minimal, silliness
];