import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";


export default function ProjectCard({
  project,
  index,
}) {

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

      <div className="project-number">
        0{index + 1}
      </div>


      <div className="project-top">

        <span>
          {project.type}
        </span>

        <ExternalLink
          size={17}
        />

      </div>


      <h3>
        {project.title}
      </h3>


      <p>
        {project.description}
      </p>


      <div className="project-tech">

        {project.technologies.map(
          (technology) => (

            <span key={technology}>
              {technology}
            </span>

          )
        )}

      </div>


      <a
        href={`${import.meta.env.BASE_URL}project/${project.id}/`}
        onClick={() => {
          sessionStorage.setItem(
            "portfolio-scroll-position",
            window.scrollY.toString()
      );
     }}
    className="project-view"
  >
    Open Project Showcase
    <ArrowUpRight size={17} />
</a>

    </motion.article>
  );
}