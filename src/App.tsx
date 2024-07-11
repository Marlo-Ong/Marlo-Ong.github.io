import "./App.css"
import classes from "./App.module.css"

import { SocialLink } from "./SocialLink/SocialLink"
import { socialMediaLinks } from "./Socials";
import { ProjectSection, projectSections } from "./ProjectSection/ProjectSection";

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
      
      <div className={classes.body}>
        {projectSections.map((args) => (<ProjectSection {...args}/> ))}
      </div>

    </div>
  );
}

export default App;
