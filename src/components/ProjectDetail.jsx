import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Github,
} from "lucide-react";

import { motion } from "framer-motion";

import { profile } from "../data/portfolioData";


export default function ProjectDetail({
  project,
}) {

  return (

    <div className="project-detail-page">

      <header className="navbar">

        <a
          href={import.meta.env.BASE_URL}
          className="brand"
        >

          <span className="brand-mark">
            JM
          </span>

          <span>
            {profile.shortName}
          </span>

        </a>

      </header>


      <main>

        <section className="project-detail-hero">

          <motion.div
            className="project-detail-copy"

            initial={{
              opacity: 0,
              x: -35,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
            }}
          >

            <a
              href={`${import.meta.env.BASE_URL}#projects`}
              className="back-link"
            >

              <ArrowLeft size={15} />

              Back to Projects

            </a>


            <span className="eyebrow">
              PROJECT SHOWCASE
            </span>


            <h1>
              {project.title}
            </h1>


            <p className="project-detail-description">
              {project.description}
            </p>


            <div className="project-tags">

              {project.technologies.map(
                (technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                )
              )}

            </div>


            <div className="hero-actions">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"

                className="button primary"
              >

                View Source

                <Github size={17} />

              </a>


              <a
                href={`${import.meta.env.BASE_URL}#projects`}
                className="button secondary"
              >

                All Projects

                <ArrowUpRight size={17} />

              </a>

            </div>

          </motion.div>


          <motion.div
            className="project-main-image"

            initial={{
              opacity: 0,
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >

            <img
              src={project.images[0]}
              alt={project.title}
            />

          </motion.div>

        </section>


        <section className="project-gallery-section">

          <span className="eyebrow">
            VISUAL SHOWCASE
          </span>


          <h2>
            Project Interface
          </h2>


          <p className="gallery-description">
            Project-specific visuals and
            implementation screens.
          </p>


          <div className="project-gallery">

            {project.images.map(
              (image, index) => (

                <motion.figure
                  key={image}

                  initial={{
                    opacity: 0,
                    y: 35,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >

                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                  />

                </motion.figure>

              )
            )}

          </div>

        </section>


        <section className="project-information">

          <div>

            <span className="eyebrow">
              KEY FEATURES
            </span>


            <h2>
              What I built
            </h2>


            <div className="feature-list">

              {project.features.map(
                (feature) => (

                  <div
                    className="feature-item"
                    key={feature}
                  >

                    <CheckCircle2
                      size={17}
                    />

                    <span>
                      {feature}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>


          <div>

            <span className="eyebrow">
              TECHNOLOGY
            </span>


            <h2>
              Technology Stack
            </h2>


            <div className="detail-tech-list">

              {project.technologies.map(
                (technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                )
              )}

            </div>

          </div>

        </section>


        <section className="project-cta">

          <span className="eyebrow">
            EXPLORE MORE
          </span>


          <h2>
            See more of my work.
          </h2>


          <a
            href={`${import.meta.env.BASE_URL}#projects`}
            className="button primary"
          >

            Back to Portfolio

            <ArrowUpRight size={17} />

          </a>

        </section>

      </main>

    </div>
  );
}