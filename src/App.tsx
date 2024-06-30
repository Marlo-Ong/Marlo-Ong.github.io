import "./App.css"
import classes from "./App.module.css"

import { SocialLink } from "./SocialLink/SocialLink"
import { Project } from "./ProjectView/ProjectView"
import { projects } from "./Projects";
import { socialMediaLinks } from "./Socials";

// import ImageCarousel from "./Carousel/Carousel";

function App() {
  return (
    <div className={classes.appView}>

      <div className={classes.banner}>
        <div className={classes.header}>
          <h1>Marlo Ongkingco</h1>
          <h2>Game programmer, software developer, audio-visual creator</h2>

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
