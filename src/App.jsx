import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#home" className="brand" onClick={closeMenu}>
          AJ<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#journey">JOURNEY</a>
          <a href="#learning">LEARNING</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a
          href="https://github.com/ahsanajabeen"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GITHUB ↗
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>


      {/* ================= MOBILE MENU ================= */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          HOME
        </a>

        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>

        <a href="#journey" onClick={closeMenu}>
          JOURNEY
        </a>

        <a href="#learning" onClick={closeMenu}>
          LEARNING
        </a>

        <a href="#projects" onClick={closeMenu}>
          PROJECTS
        </a>

        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>

        <a
          href="https://github.com/ahsanajabeen"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          GITHUB ↗
        </a>

      </div>


      {/* ================= HERO / FIRST SECTION ================= */}

      <section className="hero" id="home">

        <div className="hero-grid">

          {/* LEFT SIDE NUMBER */}

          <div className="hero-meta">

            <span>01</span>

            <div className="vertical-line"></div>

            <p>
              DEVOPS · CLOUD · AUTOMATION
            </p>

          </div>


          {/* MAIN HERO CONTENT */}

          <div className="hero-main">

            <p className="hero-kicker">
              DEVOPS & CLOUD ENGINEER IN TRAINING
            </p>

            <div className="education-label">

             

            </div>


            <h1>
              AHSANA
              <br />
              <span>JABEEN</span>
            </h1>


            <div className="hero-introduction">

              <div className="intro-line"></div>

              <div>

                <h2>
                  Building my path into{" "}
                  <strong>
                    DevOps & Cloud Engineering.
                  </strong>
                </h2>

                <p>
                  Computer Science graduate focused on Linux,
                  containers, cloud infrastructure, automation
                  and continuous learning through hands-on work.
                </p>


                {/* HERO BUTTONS */}

                <div className="hero-actions">

                  <a
                    href="#projects"
                    className="primary-button"
                  >
                    VIEW MY WORK ↗
                  </a>


                  <a
                    href="https://github.com/ahsanajabeen"
                    target="_blank"
                    rel="noreferrer"
                    className="text-button"
                  >
                    GITHUB ↗
                  </a>


                  <a
  href="/resume/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="text-button"
>
  VIEW RESUME ↗
</a>

                </div>


                {/* LINKEDIN + EMAIL */}

                <div className="hero-social-links">

                  <a
                    href="https://www.linkedin.com/in/ahsana-jabeen/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>


                  <a
                    href="mailto:ahsanajabeen25@gmail.com"
                  >
                    EMAIL ↗
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* ================= SYSTEM MAP ================= */}

          <div className="system-map">

            <div className="map-label">

              CURRENT DIRECTION

              <span>
                ● BUILDING
              </span>

            </div>


            <div className="system-path">

              <div className="system-node active">

                <small>01</small>

                <strong>
                  LINUX
                </strong>

                <span>
                  FOUNDATION
                </span>

              </div>


              <div className="connector"></div>


              <div className="system-node">

                <small>02</small>

                <strong>
                  CONTAINERS
                </strong>

                <span>
                  DOCKER
                </span>

              </div>


              <div className="connector"></div>


              <div className="system-node">

                <small>03</small>

                <strong>
                  ORCHESTRATION
                </strong>

                <span>
                  KUBERNETES · OPENSHIFT
                </span>

              </div>


              <div className="connector"></div>


              <div className="system-node">

                <small>04</small>

                <strong>
                  AUTOMATION
                </strong>

                <span>
                  GIT · CI/CD · PYTHON
                </span>

              </div>


              <div className="connector"></div>


              <div className="system-node">

                <small>05</small>

                <strong>
                  CLOUD
                </strong>

                <span>
                  AWS
                </span>

              </div>

            </div>


            <div className="map-footer">

              <span>
                STATUS:
              </span>

              <strong>
                LEARNING → BUILDING
              </strong>

            </div>

          </div>

        </div>


        <div className="hero-bottom">

          <div className="scroll-line"></div>

          SCROLL TO EXPLORE

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="section about-section-wrapper"
        id="about"
      >

        <div className="section-index">
          02
        </div>


        <div className="about-layout">

          {/* LEFT SIDE */}

          <div className="about-title">

            <p>
              ABOUT
            </p>

            <h2>
              WHO
              <br />
              <span>AM I?</span>
            </h2>

            <div className="about-line"></div>

          </div>


          {/* RIGHT SIDE */}

          <div className="about-content">

            <p className="about-large">
              I'm a BSc Computer Science graduate building my path
              into DevOps and Cloud Engineering through hands-on
              projects, practical learning and continuous experimentation.
            </p>


            <p>
              I'm developing my skills in Linux, Docker, Kubernetes,
              OpenShift and AWS, while using Python and Git for
              automation, development and infrastructure-related work.
            </p>


            <p>
              I enjoy taking concepts from courses and turning them
              into working systems — building environments,
              experimenting with containers, automating tasks and
              troubleshooting problems to understand why things break.
            </p>


            <p>
              I'm looking for an entry-level DevOps or Cloud
              Engineering role or internship where I can continue
              learning, contribute from day one and grow with a
              technically strong team.
            </p>


            <div className="focus-box">

              <span>
                CURRENTLY FOCUSED ON
              </span>

              <div className="focus-items">

                <strong>LINUX</strong>
                <strong>CONTAINERS</strong>
                <strong>KUBERNETES</strong>
                <strong>CLOUD</strong>
                <strong>AUTOMATION</strong>
                <strong>CI/CD</strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= JOURNEY ================= */}

      <section
        className="section journey-section"
        id="journey"
      >

        <div className="section-index">
          03
        </div>


        <div className="section-heading">

          <p>
            DEVOPS / CLOUD JOURNEY
          </p>

          <h2>
            From learning{" "}
            <span>
              → building.
            </span>
          </h2>

          <p className="section-description">
            A connected path from understanding systems
            to building, automating and deploying them.
          </p>

        </div>


        <div className="journey">

          {/* 01 */}

          <div className="journey-step">

            <div className="journey-number">
              01
            </div>

            <div className="journey-content">

              <small>
                FOUNDATION
              </small>

              <h3>
                LINUX
              </h3>

              <p>
                Understanding operating systems, users,
                permissions, services, networking and
                system administration.
              </p>

            </div>

          </div>


          <div className="journey-connector">
            →
          </div>


          {/* 02 */}

          <div className="journey-step">

            <div className="journey-number">
              02
            </div>

            <div className="journey-content">

              <small>
                BUILD
              </small>

              <h3>
                DOCKER
              </h3>

              <p>
                Learning containerization and how applications
                can be packaged and run consistently.
              </p>

            </div>

          </div>


          <div className="journey-connector">
            →
          </div>


          {/* 03 */}

          <div className="journey-step">

            <div className="journey-number">
              03
            </div>

            <div className="journey-content">

              <small>
                ORCHESTRATE
              </small>

              <h3>
                KUBERNETES
              </h3>

              <p>
                Exploring container orchestration,
                deployments, services and environments.
              </p>

            </div>

          </div>


          <div className="journey-connector">
            →
          </div>


          {/* 04 */}

          <div className="journey-step">

            <div className="journey-number">
              04
            </div>

            <div className="journey-content">

              <small>
                AUTOMATE
              </small>

              <h3>
                CI/CD
              </h3>

              <p>
                Connecting Git, Python and automation
                concepts to development workflows.
              </p>

            </div>

          </div>


          <div className="journey-connector">
            →
          </div>


          {/* 05 */}

          <div className="journey-step">

            <div className="journey-number">
              05
            </div>

            <div className="journey-content">

              <small>
                DEPLOY
              </small>

              <h3>
                AWS
              </h3>

              <p>
                Building toward practical cloud infrastructure
                and deployment experience.
              </p>

            </div>

          </div>

        </div>


        <div className="journey-note">

          <span>
            THE GOAL
          </span>

          <p>
            Turn individual technologies into practical systems —
            understanding how infrastructure, containers,
            automation and cloud platforms work together.
          </p>

        </div>

      </section>


      {/* ================= LEARNING & CERTIFICATES ================= */}

      <section
        className="section"
        id="learning"
      >

        <div className="section-index">
          04
        </div>


        <div className="section-heading">

          <p>
            LEARNING & RECOGNITION
          </p>

          <h2>
            Beyond{" "}
            <span>
              the classroom.
            </span>
          </h2>

          <p className="section-description">
            Learning experiences and technical exposure
            that have contributed to my development.
          </p>

        </div>


        <div className="learning-list">

          {/* 01 */}

          <article className="learning-card">

            <span className="learning-number">
              01
            </span>

            <div>

              <span className="learning-type">
                INTERNSHIP
              </span>

              <h3>
                FULL STACK DEVELOPMENT
              </h3>

              <p>
                ICT Academy of Kerala · Grade A
              </p>

            </div>

            <a
              href="/certificates/Full-Stack-Development.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ↗
            </a>

          </article>


          {/* 02 */}

          <article className="learning-card">

            <span className="learning-number">
              02
            </span>

            <div>

              <span className="learning-type">
                CLOUD / DEVOPS EVENT
              </span>

              <h3>
                HATATHON
              </h3>

              <p>
                IPSR Solutions Ltd. · 15–16 July 2026
              </p>

            </div>

            <a
              href="/certificates/Hatathon.png"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ↗
            </a>

          </article>


          {/* 03 */}

          <article className="learning-card">

            <span className="learning-number">
              03
            </span>

            <div>

              <span className="learning-type">
                TECHNICAL SESSION
              </span>

              <h3>
                DEVOPS & CLOUD
              </h3>

              <p>
                Wynxio Technologies
              </p>

            </div>

            <a
              href="/certificates/DevOps-and-Cloud.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ↗
            </a>

          </article>


          {/* 04 */}

          <article className="learning-card">

            <span className="learning-number">
              04
            </span>

            <div>

              <span className="learning-type">
                SEMINAR
              </span>

              <h3>
                RED HAT CAREER OPPORTUNITIES
              </h3>

              <p>
                IPSR Solutions Ltd. × Red Hat
              </p>

            </div>

            <a
              href="/certificates/Red-Hat-Seminar.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ↗
            </a>

          </article>


          {/* 05 */}

          <article className="learning-card">

            <span className="learning-number">
              05
            </span>

            <div>

              <span className="learning-type">
                AI / PROMPT ENGINEERING
              </span>

              <h3>
                ONE MILLION PROMPTERS
              </h3>

              <p>
                Dubai Future Foundation
              </p>

            </div>

            <a
              href="/certificates/One-Million-Prompters.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ↗
            </a>

          </article>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-index">
          05
        </div>


        <div className="section-heading">

          <p>
            PROJECTS
          </p>

          <h2>
            Built,{" "}
            <span>
              not just learned.
            </span>
          </h2>

          <p className="section-description">
            Hands-on work will appear here as projects
            are completed and documented.
          </p>

        </div>


        <div className="projects-placeholder">

          <span>
            PROJECTS / 05
          </span>

          <div className="placeholder-line"></div>

          <p>
            New work will be added here.
          </p>

          <div className="placeholder-mark">
            +
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-index">
          06
        </div>


        <div className="contact-content">

          <span className="contact-label">
            GET IN TOUCH
          </span>


          <h2>
            Let's build
            <br />
            <span>
              something.
            </span>
          </h2>


          <p className="contact-description">
            I'm open to entry-level DevOps and Cloud Engineering
            opportunities, internships, technical conversations
            and collaborative learning.
          </p>

        </div>

      </section>


      {/* ================= CREATIVE FOOTER ================= */}

      <footer className="footer">

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-name">
              AHSANA<span>.</span>
            </div>

            <p>
              DEVOPS & CLOUD ENGINEER
              <br />
              IN TRAINING
            </p>

          </div>


          {/* STATUS */}

          <div className="footer-status">

            <div className="status-heading">

              <span className="status-dot"></span>

              SYSTEM STATUS

            </div>

            <strong>
              AVAILABLE / BUILDING
            </strong>

            <small>
              Linux · Containers · Cloud · Automation
            </small>

          </div>


          {/* STACK */}

          <div className="footer-stack">

            <span className="footer-label">
              CURRENT STACK
            </span>

            <div className="footer-tags">

              <span>LINUX</span>
              <span>DOCKER</span>
              <span>K8S</span>
              <span>AWS</span>
              <span>GIT</span>
              <span>CI/CD</span>

            </div>

          </div>

        </div>


        {/* FOOTER MIDDLE */}

        <div className="footer-middle">

          <div className="footer-terminal">

            <span className="terminal-symbol">
              &gt;
            </span>

            <span>
              building_the_next_step...
            </span>

            <span className="terminal-cursor">
              _
            </span>

          </div>


          {/* FOOTER LINKS */}

          <div className="footer-links">

            <a
              href="https://www.linkedin.com/in/ahsana-jabeen/"
              target="_blank"
              rel="noreferrer"
            >

              <span>
                LINKEDIN
              </span>

              LinkedIn ↗

            </a>


            <a
              href="mailto:ahsanajabeen25@gmail.com"
            >

              <span>
                EMAIL
              </span>

              Email ↗

            </a>


            <a
              href="https://github.com/ahsanajabeen"
              target="_blank"
              rel="noreferrer"
            >

              <span>
                GITHUB
              </span>

              GitHub ↗

            </a>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <span>
            AHSANA JABEEN / 2026
          </span>

          <span>
            CLOUD · DEVOPS · AUTOMATION
          </span>

          <span>
            © ALL RIGHTS RESERVED
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;