import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";


export default function ProjectCard({
  project,
  index,
}) {

  /*
   * Save the current portfolio scroll position
   * before opening the project.
   */
  const handleProjectClick = () => {

    sessionStorage.setItem(
      "portfolio-scroll-position",
      window.scrollY.toString()
    );

  };


  return (

    <motion.article
      className="project-card"

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.15,
      }}

      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
    >

      {/* ======================================================
          PROJECT NUMBER
          ====================================================== */}

      <div className="project-number">

        {String(index + 1).padStart(2, "0")}

      </div>


      {/* ======================================================
          PROJECT TYPE
          ====================================================== */}

      <div className="project-top">

        <span>
          {project.type}
        </span>

        <ExternalLink size={17} />

      </div>


      {/* ======================================================
          TITLE
          ====================================================== */}

      <h3>
        {project.title}
      </h3>


      {/* ======================================================
          DESCRIPTION
          ====================================================== */}

      <p>
        {project.description}
      </p>


      {/* ======================================================
          TECHNOLOGIES
          ====================================================== */}

      <div className="project-tech">

        {project.technologies?.map(
          (technology) => (

            <span key={technology}>
              {technology}
            </span>

          )
        )}

      </div>


      {/* ======================================================
          PROJECT LINK
          ====================================================== */}

      <a
        href={`${import.meta.env.BASE_URL}project/${project.id}/`}
        onClick={handleProjectClick}
        className="project-view"
      >

        Open Project Showcase

        <ArrowUpRight size={17} />

      </a>

    </motion.article>

  );
}