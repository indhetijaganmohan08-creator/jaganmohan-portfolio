import { useLayoutEffect } from "react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Terminal,
} from "lucide-react";

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/ProjectDetail";

import {
  education,
  experiences,
  profile,
  projects,
  services,
  skills,
  technologies,
} from "./data/portfolioData";


export default function App() {

  /*
   * ============================================================
   * GITHUB PAGES BASE PATH
   * ============================================================
   */

  const basePath = import.meta.env.BASE_URL;

  const pathname =
    window.location.pathname.startsWith(basePath)
      ? window.location.pathname.slice(basePath.length - 1)
      : window.location.pathname;


  /*
   * ============================================================
   * SCROLL RESTORATION
   * ============================================================
   *
   * We disable the browser's automatic scroll restoration.
   *
   * This is important because when opening:
   *
   * /project/face-attendance/
   *
   * the browser may otherwise keep the previous portfolio
   * scroll position.
   */

  useLayoutEffect(() => {

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    /*
     * Project pages must ALWAYS start at the top.
     */

    if (pathname.startsWith("/project/")) {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

    }

  }, [pathname]);


  /*
   * ============================================================
   * PROJECT ROUTING
   * ============================================================
   */

  if (pathname.startsWith("/project/")) {

    const id = pathname
      .split("/")
      .filter(Boolean)[1];

    const project = projects.find(
      (item) => item.id === id
    );

    if (project) {

      return (
        <ProjectDetail
          project={project}
        />
      );

    }

  }


  /*
   * ============================================================
   * MAIN PORTFOLIO
   * ============================================================
   */

  return (

    <div className="app">

      <div className="background-grid" />

      <div className="background-glow glow-one" />

      <div className="background-glow glow-two" />


      <Navbar />


      <main>

        {/* ======================================================
            HERO
            ====================================================== */}

        <section className="hero">

          <div className="hero-grid">

            <motion.div
              className="hero-copy"

              initial={{
                opacity: 0,
                x: -40,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.9,
              }}
            >

              <div className="status-pill">

                <span className="status-dot" />

                Available for opportunities

              </div>


              <p className="hero-kicker">
                MACHINE LEARNING ENGINEER
              </p>


              <h1>

                Building{" "}

                <span>
                  intelligent
                </span>{" "}

                software for real-world
                problems.

              </h1>


              <p className="hero-text">
                {profile.tagline}
              </p>


              <div className="hero-actions">

                <a
                  href="#projects"
                  className="button primary"
                >

                  Explore My Work

                  <ArrowUpRight size={18} />

                </a>


                <a
                  href="#contact"
                  className="button secondary"
                >

                  Let's Connect

                  <MessageCircle size={18} />

                </a>

              </div>


              <div className="hero-socials">

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >

                  <Github size={19} />

                </a>


                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >

                  <Linkedin size={19} />

                </a>


                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                >

                  <Mail size={19} />

                </a>

              </div>

            </motion.div>


            {/* ==================================================
                PROFILE
                ================================================== */}

            <motion.div
              className="hero-visual"

              initial={{
                opacity: 0,
                scale: 0.85,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                duration: 1,
                delay: 0.15,
              }}
            >

              <div className="profile-card">

                <div className="profile-image">

                  <img
                    src={`${basePath}profile.jpg`}
                    alt="Jagan Mohan Indheti"
                  />

                </div>


                <div className="profile-card-bottom">

                  <div>

                    <strong>
                      {profile.name}
                    </strong>

                    <small>
                      {profile.secondaryRole}
                    </small>

                  </div>


                  <span className="mini-code">

                    <Code2 size={17} />

                  </span>

                </div>

              </div>


              <motion.div
                className="floating-card card-ai"

                animate={{
                  y: [0, -10, 0],
                }}

                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >

                <Sparkles size={17} />

                <div>

                  <strong>
                    AI / ML
                  </strong>

                  <small>
                    Intelligent solutions
                  </small>

                </div>

              </motion.div>


              <motion.div
                className="floating-card card-python"

                animate={{
                  y: [0, 10, 0],
                }}

                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
              >

                <Terminal size={17} />

                <div>

                  <strong>
                    Python
                  </strong>

                  <small>
                    Development
                  </small>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </section>


        {/* ======================================================
            ABOUT
            ====================================================== */}

        <section
          id="about"
          className="section"
        >

          <SectionHeading
            number="01 / ABOUT"
            title="A developer focused on turning ideas into working technology."
            description="My approach combines software engineering with machine learning to create solutions that are practical, understandable and built around real user needs."
          />


          <div className="about-grid">

            <motion.div
              className="about-story"

              initial={{
                opacity: 0,
                x: -30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}
            >

              <p>

                I'm{" "}

                <strong>
                  Jagan Mohan Indheti
                </strong>

                , a Machine Learning Engineer
                and AI Software Developer
                interested in building products
                that solve meaningful problems.

              </p>


              <p>

                My experience spans machine
                learning, computer vision,
                web and mobile application
                development.

              </p>


              <p>

                I enjoy working across the
                journey from an initial concept
                to a functional software
                solution.

              </p>

            </motion.div>


            <div className="about-facts">

              {[
                [
                  "01",
                  "AI First",
                  "Machine learning & computer vision",
                ],

                [
                  "02",
                  "Product Mindset",
                  "Technology designed around real problems",
                ],

                [
                  "03",
                  "Full Development",
                  "Interface to backend integration",
                ],

              ].map(
                ([number, title, text]) => (

                  <motion.div
                    className="fact"
                    key={number}

                    whileHover={{
                      x: 8,
                    }}
                  >

                    <span>
                      {number}
                    </span>

                    <div>

                      <strong>
                        {title}
                      </strong>

                      <p>
                        {text}
                      </p>

                    </div>

                  </motion.div>

                )
              )}

            </div>

          </div>

        </section>


        {/* ======================================================
            SKILLS
            ====================================================== */}

        <section
          id="skills"
          className="section section-dark"
        >

          <SectionHeading
            number="02 / SKILLS"
            title="Technologies I work with."
            description="A practical stack covering AI, application development, backend services and modern frontend development."
          />


          <div className="skills-grid">

            <div className="skill-bars">

              {skills.map(
                (skill) => (

                  <div
                    className="skill-row"
                    key={skill.name}
                  >

                    <div className="skill-label">

                      <span>
                        {skill.name}
                      </span>

                      <span>
                        {skill.level}%
                      </span>

                    </div>


                    <div className="skill-track">

                      <motion.div
                        className="skill-fill"

                        initial={{
                          width: 0,
                        }}

                        whileInView={{
                          width: `${skill.level}%`,
                        }}

                        viewport={{
                          once: true,
                        }}

                        transition={{
                          duration: 1,
                        }}
                      />

                    </div>

                  </div>

                )
              )}

            </div>


            <motion.div
              className="tech-cloud"

              initial={{
                opacity: 0,
                scale: 0.95,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
              }}

              viewport={{
                once: true,
              }}
            >

              <span className="tech-title">
                TECHNOLOGY STACK
              </span>


              <div className="tech-list">

                {technologies.map(
                  (technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  )
                )}

              </div>

            </motion.div>

          </div>

        </section>


        {/* ======================================================
            EXPERIENCE
            ====================================================== */}

        <section
          id="experience"
          className="section"
        >

          <SectionHeading
            number="03 / EXPERIENCE"
            title="Professional experience."
            description="Experience developing practical software and machine-learning solutions."
          />


          <div className="timeline">

            {experiences.map(
              (experience) => (

                <motion.article
                  className="timeline-item"
                  key={experience.company}

                  initial={{
                    opacity: 0,
                    x: -25,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  viewport={{
                    once: true,
                  }}
                >

                  <div className="timeline-marker">

                    <BriefcaseBusiness
                      size={18}
                    />

                  </div>


                  <div className="timeline-content">

                    <span className="period">
                      {experience.period}
                    </span>


                    <h3>
                      {experience.title}
                    </h3>


                    <h4>
                      {experience.company}
                    </h4>


                    <p>
                      {experience.description}
                    </p>


                    <ul>

                      {experience.points.map(
                        (point) => (

                          <li key={point}>

                            <CheckCircle2
                              size={16}
                            />

                            {point}

                          </li>

                        )
                      )}

                    </ul>

                  </div>

                </motion.article>

              )
            )}

          </div>

        </section>


        {/* ======================================================
            PROJECTS
            ====================================================== */}

        <section
          id="projects"
          className="section section-projects"
        >

          <SectionHeading
            number="04 / SELECTED WORK"
            title="Projects that demonstrate how I build."
            description="Each project has its own dedicated visual showcase. Open a project to explore it."
          />


          <div className="project-grid">

            {projects.map(
              (project, index) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />

              )
            )}

          </div>

        </section>


        {/* ======================================================
            SERVICES
            ====================================================== */}

        <section className="section">

          <SectionHeading
            number="05 / CAPABILITIES"
            title="What I can build."
          />


          <div className="service-grid">

            {services.map(
              (service) => (

                <motion.div
                  className="service-card"
                  key={service.number}

                  whileHover={{
                    y: -8,
                  }}
                >

                  <span>
                    {service.number}
                  </span>


                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  <ArrowUpRight
                    size={20}
                  />

                </motion.div>

              )
            )}

          </div>

        </section>


        {/* ======================================================
            EDUCATION
            ====================================================== */}

        <section className="section">

          <motion.div
            className="education-card"

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}
          >

            <Terminal size={25} />

            <div>

              <span className="eyebrow">
                06 / EDUCATION
              </span>


              <h2>
                {education.degree}
              </h2>


              <h3>
                {education.field}
              </h3>


              <p>
                {education.institution}
                {" · "}
                {education.period}
              </p>

            </div>

          </motion.div>

        </section>


        {/* ======================================================
            CONTACT
            ====================================================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-inner">

            <span className="eyebrow">
              07 / CONTACT
            </span>


            <h2>
              Have an idea worth building?
            </h2>


            <p>
              I'm open to software development,
              machine-learning opportunities,
              collaborations and interesting
              technical projects.
            </p>


            <div className="contact-actions">

              <a
                href={`mailto:${profile.email}`}
                className="button primary"
              >

                Start a Conversation

                <Mail size={18} />

              </a>


              <a
                href={profile.resume}
                download
                className="button secondary"
              >

                Download Resume

                <Download size={18} />

              </a>

            </div>


            <div className="contact-details">

              <span>

                <Mail size={16} />

                {profile.email}

              </span>


              <span>

                <MapPin size={16} />

                {profile.location}

              </span>

            </div>

          </div>

        </section>

      </main>


      {/* ========================================================
          FOOTER
          ======================================================== */}

      <footer className="footer">

        <div>

          <strong>
            {profile.name}
          </strong>

          <span>
            Machine Learning Engineer ·
            AI Software Developer
          </span>

        </div>


        <div className="footer-links">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >

            <Github size={17} />

          </a>


          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >

            <Linkedin size={17} />

          </a>


          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >

            <Mail size={17} />

          </a>

        </div>


        <span className="copyright">

          © {new Date().getFullYear()}{" "}

          {profile.name}

        </span>

      </footer>

    </div>

  );
}