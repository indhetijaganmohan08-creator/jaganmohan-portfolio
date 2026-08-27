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

  /*
   * ============================================================
   * RETURN TO PORTFOLIO
   * ============================================================
   *
   * Browser history takes the user back to the exact location
   * and scroll position where they opened the project.
   */

  const goBackToPortfolio = (event) => {

    event.preventDefault();


    /*
     * If the project was opened from the portfolio,
     * browser history will contain the portfolio page.
     */

    if (window.history.length > 1) {

      window.history.back();

      return;

    }


    /*
     * Fallback if someone directly opens the project URL.
     */

    window.location.href =
      import.meta.env.BASE_URL;

  };


  /*
   * ============================================================
   * PROJECT IMAGES
   * ============================================================
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
          onClick={goBackToPortfolio}
          aria-label="Return to portfolio"
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

            {/* Back */}

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


            {/* Title */}

            <h1>
              {project.title}
            </h1>


            {/* Description */}

            <p className="project-detail-description">
              {project.description}
            </p>


            {/* Technologies */}

            <div className="project-tags">

              {project.technologies?.map(
                (technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                )
              )}

            </div>


            {/* Actions */}

            <div className="hero-actions">

              {project.github && (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button primary"
                >

                  View Source

                  <Github size={17} />

                </a>

              )}


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
              MAIN IMAGE
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
            IMAGE GALLERY
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

          {/* ==================================================
              FEATURES
              ================================================== */}

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


          {/* ==================================================
              TECHNOLOGY STACK
              ================================================== */}

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
            CTA
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