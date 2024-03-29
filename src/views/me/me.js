//React
import React from "react";

//Data

//Sub-Components
import { TechList } from "../../components/techList/techList";
import { ItemBox } from "../../components/itemBox/itemBox";
import { icons } from "../../components/icons/icons";

//Images
import self from "./self.png";
import linkedIn from "./linkedin.svg";
import github from "../../data/techIcons/github.png";
import ig from "./ig.svg";
import {tech} from "../../data/tech";

export function Connect() {
  return (
    <div className={"row d-flex justify-content-center m-1"}>
      <div className={"connect col-auto"}>
        <h3>CONNECT</h3>

        <div className={"row p-2"}>
          <div
            className={
              "col d-flex flex-wrap justify-content-center align-items-center"
            }
          >
            <ItemBox
              iconSVG={icons.email}
              link={"mailto:sambpool@gmail.com"}
              name={"Email"}
            />
            <ItemBox
              icon={linkedIn}
              link={"https://www.linkedin.com/in/sampool/"}
              name={"LinkedIn"}
            />
            <ItemBox
              icon={github}
              link={"https://github.com/mrsampool"}
              name={"GitHub"}
            />
            <ItemBox
              icon={ig}
              link={"https://www.instagram.com/mrsampool/"}
              name={"Instagram"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Me(props) {
  function getTech() {
    const techKeys = Object.keys(tech);

    const list = techKeys.map((techKey) => {
      return tech[techKey];
    });

    return <TechList techList={list} />;
  }

  return (
    <div className={"me row"}>
      <div className={"bio col-lg"}>
        <h2>ABOUT ME</h2>

        <div className={"row d-flex align-items-center"}>
          <div className={"col-lg-auto d-flex justify-content-center"}></div>

          <div className={"col text-center text-lg-left"}>
            <div className={"self float-sm-left"}>
              <img src={self} />
            </div>

            <p>Hey there, Sam Pool here.</p>

            <p>
              My experience with web development started when I was 12 years old
              and began creating my own Flash games and cartoons, and building
              websites to share them with the world.
            </p>

            <p>
              My original career path was as an Assistant Director in the film
              and television industry, managing production schedules and
              logistics for complicated feature film and commercial productions.
            </p>

            <p>
              In 2015, my experience with web development and media production
              collided when I landed a contract to develop a website, as well as
              produce original multimedia content, for electronics manufacturer
              BetaTron Electronics, and have been building my web development
              skills and professional web portfolio ever since.
            </p>

            <p>
              I'm currently working as a Software Engineering Resident for
              Hack Reactor, where I help students learn software engineering,
              helping them debug their code and also assisting in instruction
              for the complicated topics involved. I will finish this residency
              in January 2022, and will be able to start a new role beginning
              February 1, 2022.
            </p>

            <p>
              I primarily code in JavaScript, both on the front end (I have been
              using ReactJS consistently since 2020) and server side via NodeJS.
              You can see the wide assortment of specific technologies I
              have experience with listed in this page's "tech" box.
            </p>

            <p>
              P.S. - My main hobbies are cruising mountain roads and taking
              landscape photos with my FujiFilm xt100 - check out my IG if
              you're interested.
            </p>
          </div>
        </div>

        <Connect />
      </div>

      <div className={"tech col-lg-4"}>{getTech()}</div>
    </div>
  );
}
