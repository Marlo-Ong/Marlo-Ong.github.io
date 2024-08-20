import "./App.css"
import classes from "./App.module.css"

import { SocialLink } from "./SocialLink/SocialLink"
import { socialMediaLinks } from "./Socials";
import { ProjectSection, projectSections } from "./ProjectSection/ProjectSection";

import AboutMeImage from "./public/frutigerbanner.png"
import ChevronScroller from "./Utils/ChevronScroller";

function App() {
  return (
    <div className={classes.appView}>

      <div className={classes.introScreen}>
        <div className={classes.banner}>
          <div className={classes.header}>
            <h1>Marlo Ongkingco</h1>
            <h2>Game programmer, software developer, audio-visual creator</h2>

            <div className={classes.socialsView}>
              {socialMediaLinks.map((args) => (<SocialLink {...args}/> ))}
            </div>
          </div>
        </div>

        <div className={classes.aboutMe}>
          <div className={classes.aboutMeTexts}>
            <h1>Hey!</h1>
            <span>
              I'm a video game developer from Las Vegas, Nevada, attending the University of Nevada, Reno.
              I'm love working in the Unity game engine, though I have experience
              Godot and Raylib. Below I've compiled a collection of my professional
              and educational work, Blender 3D animations, musical compositions, and
              self-made video games that you can start playing immediately.
            </span>
          </div>
          <div className={classes.aboutMeImage}>
            <img src={AboutMeImage}/>
          </div>
        </div>

        <div className={classes.scrollToAction}>
          <h1>Check out my projects!</h1>
          <ChevronScroller targetId="body"/>
        </div>
      </div>
      
      <div id="body" className={classes.body}>
        {projectSections.map((args) => (<ProjectSection {...args}/> ))}
      </div>

    </div>
  );
}

export default App;
