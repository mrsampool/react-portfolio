//React
import React from "react";

//Dependencies
import Typewriter from "typewriter-effect";

//Sub-Components
export function SplashName(props) {
  return (
    <div className={"name col text-center"}>
      <Typewriter
        options={{
          delay: 75,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(4500)
            .typeString(
              "<span class='main'>SAM</span>" +
                "<span class='codeBracket'>{</span>" +
                "<span id={'lastName'} class='bracketed'>POOL</span>" +
                "<span class='codeBracket'>}</span>"
            )
            .start();
        }}
      />
    </div>
  );
}
export function SplashTitle(props) {
  return (
    <div className={"col text-center"}>
      <Typewriter
        options={{
          delay: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(4500)
            .typeString(
              "<span class='codeBracket'>{</span>" +
                "<span class='bracketed'>web</span>" +
                "<span class='codeBracket'>}</span>" +
                "<span class='main'>Dev</span>"
            )
            .start();
        }}
      />
    </div>
  );
}

//HEADER
export function Header(props) {
  function home() {
    props.setPage("splash");
  }
  function work() {
    props.setPage("work");
  }
  function me() {
    props.setPage("me");
  }

  return (
    <div id={"splashPage"} className={"splashPage row w-100 no-gutters"}>
      <div className={"col"}>
        <header className={"headline w-100"}>
          <div className={"main"}>
            <SplashName />
          </div>

          <div className={"title"}>
            <SplashTitle />
          </div>
        </header>

        <nav className={"row no-gutters"}>
          <div className={"col-md text-center"}>
            <span
              className={`${props.page === "splash" ? "active" : ""}`}
              onClick={home}
            >
              {" "}
              HOME{" "}
            </span>
          </div>

          <div className={"col-md text-center"}>
            <span
              className={`${props.page === "work" ? "active" : ""}`}
              onClick={work}
            >
              {" "}
              MY WORK{" "}
            </span>
          </div>

          <div className={"col-md text-center"}>
            <span
              className={`${props.page === "me" ? "active" : ""}`}
              onClick={me}
            >
              ABOUT ME
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}
