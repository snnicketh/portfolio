import React from "react";
import classes from "./skills.module.css";
// import ProgressBar from "@bit/developer-junaid.collection.linear-progress";
import ProgressBar from "@ramonak/react-progress-bar";

const CustomProgressBar = ({ completed, label }) => {
  return (
    <div className={classes.customProgressBar}>
      <span>{label}</span>
      <ProgressBar completed={completed} bgColor={"green"} height={"5px"} labelColor={"blue"} labelAlignment={"outside"} />
    </div>
  )
}

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>

      <div className={classes.techs}>
        <CustomProgressBar completed={94} label="React JS function: ES6, React Redux, React Hooks" />
        <CustomProgressBar completed={93} label="React UI Framework: Material-Ui, EasyDev, Prime React, Elemental UI" />
        <CustomProgressBar completed={95} label="API implementation: REST API, GraphQL, JSON, WebSocket" />
        <CustomProgressBar completed={90} label="Blockchain: Smart contract, NFT, Solidity" />
        <CustomProgressBar completed={84} label="Unit test: jest, mocha" />
        <CustomProgressBar completed={93} label="Database: Git/Bitbucket, Asana/Trello, Docker, CI/CD" />
        <CustomProgressBar completed={94} label="MySQL, PostgreSQL, SQLite, MongoDB, Firebase, Elasticsearch" />
        <CustomProgressBar completed={93} label="Back-end frameworks: Express.js, Django, ASP.NET, Laravel" />
        <CustomProgressBar completed={97} label="Server-side programming languages: Node.js, PHP, C#, Python" />
        <CustomProgressBar completed={92} label="API integration: REST API, GraphQL, Cloud API (AWS Lambda API)" />
      </div>
    </section>
  );
};

export default Skills;
