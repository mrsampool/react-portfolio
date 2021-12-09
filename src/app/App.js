//React
import React, { useState, useEffect } from "react";

//Sub-Components1
import { Header } from "../components/header/header";
import { Work } from "../views/work/work";
import { Me } from "../views/me/me";
import { BG } from "../components/bg/bg";

//Style Sheet
import "./app.css";

//App
export function App(props) {
  const [page, setPage] = useState("splash");

  return (
    <div
      className={`App ${page === "splash" ? "splash" : "me"} container-fluid`}
    >
      <BG />

      <Header setPage={setPage} page={page} />

      <main className={"row no-gutters"}>
        <div className={"col"}>
          {page === "work" ? <Work /> : ""}
          {page === "me" ? <Me /> : ""}
        </div>
      </main>
    </div>
  );
}
