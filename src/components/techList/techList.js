import React from "react";
import { ItemBox } from "../itemBox/itemBox";

export function TechList(props) {
  const tech = props.techList.map((tech) => {
    return <ItemBox icon={tech.icon} name={tech.name} />;
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
