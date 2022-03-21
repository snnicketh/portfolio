import React from "react";
import "./../../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project - Kromatika Finance App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://kromatika.finance"
          >
            <div className="project-images" id="kromatika"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Kromatika Finance DEX</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/sNnickK/kromatika-web"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://kromatika.finance/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        

       

        
        
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/chaindev831"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
