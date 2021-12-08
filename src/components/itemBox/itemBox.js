import React from "react";

export function ItemBox(props) {
  function buildItem() {
    return (
      <div
        className={"itemBox d-flex align-items-center justify-content-center"}
      >
        <div className={"itemIcon"}>
          {props.iconSVG ? props.iconSVG : <img src={props.icon} />}
        </div>

        {props.banner ? (
          <div className={"connectInfo"}>
            <span>{props.banner}</span>
          </div>
        ) : (
          ""
        )}

        <div className={"itemName"}>
          <p>{props.name}</p>
        </div>
      </div>
    );
  }

  if (props.link) {
    return (
      <a href={props.link} target={"_blank"}>
        {buildItem()}
      </a>
    );
  } else {
    return buildItem();
  }
}
