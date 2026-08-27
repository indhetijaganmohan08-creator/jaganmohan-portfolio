import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Github,
} from "lucide-react";

import { motion } from "framer-motion";

import { profile } from "../data/portfolioData";


export default function ProjectDetail({ project }) {

  /*
   * ============================================================
   * GO BACK TO PREVIOUS PORTFOLIO POSITION
   * ============================================================
   *
   * ProjectCard stores the user's scroll position before opening
   * the project.
   *
   * Using browser history here takes the user back to the
   * portfolio instead of loading the homepage from the top.
   */
  const goBackToPortfolio = (event) => {
    event.preventDefault();

    /*
     * If there is browser history available, go back.
     */
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    /*
     * Fallback for cases where the project page was opened
     * directly.
     */
    window.location.href = import.meta.env.BASE_URL;
  };


  /*
   * ============================================================
   * PROJECT IMAGE FALLBACK
   * ============================================================
   *
   * Prevents the page from breaking visually if a project
   * happens to have no images.
   */
  const images = Array.isArray(project?.images)
    ? project.images
    : [];


  return (

    <div className="project-detail-page">

      {/* ======================================================
          NAVBAR
          ====================================================== */}

      <header className="navbar">

        <a
          href={import.meta.env.BASE_URL}
          className="brand"
          aria-label="Return to portfolio homepage"
          onClick={goBackToPortfolio}
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

        {/* ====================================================
            PROJECT HERO
            ==================================================== */}

        <section className="project-detail-hero">

          {/* Project Introduction */}

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

            {/* Back Button */}

            <a
              href={import.meta.env.BASE_URL}
              className="back-link"
              onClick={goBackToPortfolio}
            >

              <ArrowLeft size={15} />

              Back to Projects

            </a>


            {/* Label */}

            <span className="eyebrow">
              PROJECT SHOWCASE
            </span>


            {/* Project Title */}

            <h1>
              {project.title}
            </h1>


            {/* Project Description */}

            <p className="project-detail-description">
              {project.description}
            </p>


            {/* Technology Tags */}

            <div className="project-tags">

              {project.technologies?.map(
                (technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                )
              )}

            </div>


            {/* Hero Actions */}

            <div className="hero-actions">

              {/* GitHub */}

              {project.github && (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button primary"
                  aria-label={`View ${project.title} source code on GitHub`}
                >

                  View Source

                  <Github size={17} />

                </a>

              )}


              {/* All Projects */}

              <a
                href={import.meta.env.BASE_URL}
                className="button secondary"
                onClick={goBackToPortfolio}
              >

                All Projects

                <ArrowUpRight size={17} />

              </a>

            </div>

          </motion.div>


          {/* ==================================================
              MAIN PROJECT IMAGE
              ================================================== */}

          {images.length > 0 && (

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
                src={images[0]}
                alt={`${project.title} project preview`}
              />

            </motion.div>

          )}

        </section>


        {/* ====================================================
            VISUAL SHOWCASE
            ==================================================== */}

        {images.length > 0 && (

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

              {images.map(
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
                      alt={`${project.title} showcase ${index + 1}`}
                      loading={
                        index === 0
                          ? "eager"
                          : "lazy"
                      }
                    />

                  </motion.figure>

                )
              )}

            </div>

          </section>

        )}


        {/* ====================================================
            PROJECT INFORMATION
            ==================================================== */}

        <section className="project-information">

          {/* Key Features */}

          <div>

            <span className="eyebrow">
              KEY FEATURES
            </span>


            <h2>
              What I built
            </h2>


            <div className="feature-list">

              {project.features?.map(
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


          {/* Technology */}

          <div>

            <span className="eyebrow">
              TECHNOLOGY
            </span>


            <h2>
              Technology Stack
            </h2>


            <div className="detail-tech-list">

              {project.technologies?.map(
                (technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                )
              )}

            </div>

          </div>

        </section>


        {/* ====================================================
            PROJECT CTA
            ==================================================== */}

        <section className="project-cta">

          <span className="eyebrow">
            EXPLORE MORE
          </span>


          <h2>
            See more of my work.
          </h2>


          <a
            href={import.meta.env.BASE_URL}
            className="button primary"
            onClick={goBackToPortfolio}
          >

            Back to Portfolio

            <ArrowUpRight size={17} />

          </a>

        </section>

      </main>

    </div>
  );
}