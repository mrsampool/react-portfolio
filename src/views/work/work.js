//React
import React, { useState } from "react";

//Data
import {projects} from "../../data/projects";

//Sub-Components (Imports)
import { icons } from "../../components/icons/icons";
import { TechList } from "../../components/techList/techList";
import { Button } from "../../components/elements/elements";

export function FeaturedThumb(props) {
  const project = projects[props.projectId];

  function handleClick() {
    props.setProject(props.projectId);
  }
  function handleFocus() {
    if (props.projectId === props.currentProject) {
      return "active";
    } else {
      return "";
    }
  }

  return (
    <button
      className={`projThumb ${handleFocus()} ${props.projectId}`}
      style={{backgroundColor: project.logoBG}}
      onClick={handleClick}
    >
      <img src={project.logo} />
    </button>
  );
}
export function FeaturedProjects(props) {
  function makeThumbs() {
    return Object.keys(projects).map((projectId) => {
      return (
        <FeaturedThumb
          projectId={projectId}
          setProject={props.setProject}
          currentProject={props.currentProject}
        />
      );
    });
  }
  return (
    <div className={"featProj"}>
      <h2 className={"text-center"}>
        FEATURED <br />
        PROJECTS
      </h2>

      <div
        className={
          "row d-flex flex-column-md align-items-center justify-content-center"
        }
      >
        {makeThumbs()}
      </div>
    </div>
  );
}
export function ProjectSummary(props) {
  // DATA
  const projectData = projects[props.projectId];

  console.log(projectData);

  // FUNCTIONS
  function getDescription(descrData) {
    const text = descrData.map((line) => {
      return <p>{line}</p>;
    });
    return (
      <div className={"row"}>
        <div className={"projDescr col"}>{text}</div>
      </div>
    );
  }
  function getButtons(projectData) {
    const buttons = [];

    if (projectData.demo) {
      buttons.push(<Button link={projectData.demo} text={"Try the Demo"} />);
    } else if (projectData.app) {
      buttons.push(<Button link={projectData.app} text={"Try the App"} />);
    } else if (projectData.site) {
      buttons.push(<Button link={projectData.site} text={"See the Site"} />);
    }

    if (projectData.code) {
      buttons.push(<Button link={projectData.code} text={"See the code"} />);
    }

    return buttons;
  }
  function getTech(techData) {
    const tech = techData.map((tech) => {
      return (
        <div
          className={
            "techItem d-flex flex-column justify-content-center align-items-center"
          }
        >
          <div className={"techIcon"}>
            <img src={tech.icon} />
          </div>
          <div className={"techName"}>
            <p>{tech.name}</p>
          </div>
        </div>
      );
    });
    return (
      <div className={"techList row"}>
        <div className={"col"}>
          <div className={"row"}>
            <div className={"col d-flex justify-content-center"}>
              <h3 className={"techTitle"}>TECH</h3>
            </div>
          </div>

          <div className={"row"}>
            <div
              className={"col d-flex flex-row justify-content-around flex-wrap"}
            >
              {tech}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={"projSummary"}>
      <div className={"projHeaders row"}>
        <div className={"col"}>
          <h2 className={"projTitle"}>{projectData.title}</h2>
          <span className={"projSubtitle"}>{projectData.subtitle}</span>
        </div>
      </div>

      <div className={"row no-gutters"}>
        <section className={"col-lg"}>
          {getDescription(projectData.descr)}

          <div className={"row d-flex justify-content-center"}>
            {getButtons(projectData)}
          </div>
        </section>

        <div className={"col-lg"}>
          <section
            className={"projScreens row d-flex flex-row justify-content-center"}
          >
            <div
              className={"col-sm-7 d-flex flex-column justify-content-center"}
            >
              <div className={"screenframe desktop"}>
                {icons.desktop}
                <div className={"screenshot"}>
                  <img src={projectData.screenshots.desktop} />
                </div>
              </div>
            </div>

            {projectData.screenshots.mobile ? (
              <div
                className={"col-sm d-flex flex-column justify-content-center"}
              >
                <div className={"screenframe mobile"}>
                  {icons.mobile}
                  <div className={"screenshot"}>
                    <img src={projectData.screenshots.mobile} />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </section>
        </div>
      </div>

      <section className={"row"}>
        <div className={"col"}>
          <TechList techList={projectData.tech} />
        </div>
      </section>
    </section>
  );
}

//WORK
export function Work(props) {
  // STATE
  const [projectId, setProjectId] = useState("tt");

  return (
    <div className={"work row no-gutters"}>
      <div className={"col-xl-2 d-flex justify-content-center"}>
        <FeaturedProjects
          setProject={setProjectId}
          currentProject={projectId}
        />
      </div>

      <div className={"project col"}>
        <ProjectSummary projectId={projectId} />
      </div>
    </div>
  );
}
