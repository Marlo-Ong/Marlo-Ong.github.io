import { useState, useEffect } from "react";
import { Project } from "../ProjectView/ProjectView";
import { games, videos } from "../Projects";
import { ProjectSectionProps } from "../common/types";
import classes from "./ProjectSection.module.css"

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

export const ProjectSection : React.FC<ProjectSectionProps> = ({ title, description, projects }: ProjectSectionProps) => {
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
    <div className={classes.projectSection}>
      <div className={classes.sectionText}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className={classes.projectsView}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={classes.column}>
            {column.map((args) => (<Project {...args}/>))}
          </div>
        ))}
      </div>
    </div>
  )
}
  
const gamesProjectSection : ProjectSectionProps = {
  title: "Games",
  description: "A collection of short games I've made. \
  Most of them utilize the Unity game engine. All of them are \
  built on the WebGL platform, meaning any device that runs HTML5 \
  can run these games! Try them on your phone!",
  projects: games
}

const videosProjectSection : ProjectSectionProps = {
  title: "Videos",
  description: "My 3D animations and video editing projects \
  dating as far back as 2021. All of these videos utilize Blender 3D \
  and are typically backed by even older musical compositions I wrote.",
  projects: videos
}

export const projectSections : ProjectSectionProps[] = [
  gamesProjectSection, videosProjectSection
]