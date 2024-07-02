import "./App.css"
import classes from "./App.module.css"

import { SocialLink } from "./SocialLink/SocialLink"
import { Project } from "./ProjectView/ProjectView"
import { projects } from "./Projects";
import { socialMediaLinks } from "./Socials";
import { useEffect, useState } from "react";

const distributeIntoColumns = <T, >(items: T[], numOfColumns: number): T[][] => {
  const columns: T[][] = Array.from({ length: numOfColumns }, () => []);
  items.forEach((item, index) => {
      columns[index % numOfColumns].push(item);
  });
  return columns;
}

// Fisher-Yates
const shuffleArray = (array: any[]) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ProjectView: React.FC = () => {
  const [numOfColumns, setNumOfColumns] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1200) {
          setNumOfColumns(3);
      } else if (window.innerWidth >= 800) {
          setNumOfColumns(2);
      } else {
          setNumOfColumns(1);
      }
    }

    // Initial call to set number of columns based on window width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  const columns = distributeIntoColumns(shuffleArray(projects), numOfColumns);

  return (
    <div className={classes.projectsView}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={classes.column}>
            {column.map((args) => (<Project {...args}/>))}
          </div>
        ))}
      </div>
  )
}

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
      <ProjectView/>      
    </div>
  );
}

export default App;
