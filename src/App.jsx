import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
      fontFamily:
        "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    nav: {
      position: "fixed",
      top: 0,
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      zIndex: 50,
      transition: "all 0.3s ease",
    },
    navContainer: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "4rem",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      background: "linear-gradient(to right, #2563eb, #9333ea)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
    navLinks: {
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      padding: "0.5rem 0.75rem",
      borderRadius: "0.375rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textDecoration: "none",
      border: "none",
      backgroundColor: "transparent",
    },
    navLinkActive: {
      color: "#2563eb",
      backgroundColor: "#eff6ff",
    },
    navLinkInactive: {
      color: "#6b7280",
      backgroundColor: "transparent",
    },
    hero: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, #2563eb 0%, #9333ea 50%, #2563eb 100%)",
      color: "white",
      position: "relative",
      overflow: "hidden",
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    heroContent: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      maxWidth: "64rem",
      margin: "0 auto",
      padding: "0 1rem",
    },
    heroTitle: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      animation: "fadeInUp 1s ease-out forwards",
      opacity: 0,
    },
    heroSubtitle: {
      fontSize: "1.5rem",
      marginBottom: "2rem",
      animation: "fadeInUp 1s ease-out 0.3s forwards",
      opacity: 0,
    },
    heroDescription: {
      fontSize: "1.125rem",
      marginBottom: "3rem",
      maxWidth: "32rem",
      margin: "0 auto 3rem auto",
      lineHeight: "1.75",
      animation: "fadeInUp 1s ease-out 0.6s forwards",
      opacity: 0,
    },
    ctaButton: {
      backgroundColor: "white",
      color: "#2563eb",
      padding: "1rem 2rem",
      borderRadius: "9999px",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      animation: "fadeInUp 1s ease-out 0.9s forwards",
      opacity: 0,
    },
    section: {
      padding: "5rem 0",
      backgroundColor: "#f9fafb",
    },
    sectionWhite: {
      backgroundColor: "white",
    },
    sectionContainer: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    sectionTitle: {
      textAlign: "center",
      marginBottom: "4rem",
    },
    sectionTitleText: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "1rem",
    },
    sectionTitleLine: {
      width: "6rem",
      height: "0.25rem",
      background: "linear-gradient(to right, #2563eb, #9333ea)",
      margin: "0 auto",
      borderRadius: "9999px",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "2rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: "all 0.5s ease",
      marginBottom: "2rem",
      opacity: 0,
      transform: "translateY(2rem)",
    },
    cardVisible: {
      opacity: 1,
      transform: "translateY(0)",
    },
    cardHover: {
      transform: "translateY(-0.5rem)",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "1rem",
      flexDirection: "column",
      gap: "1rem",
    },
    cardHeaderDesktop: {
      flexDirection: "row",
      alignItems: "center",
      gap: 0,
    },
    jobTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "0.5rem",
    },
    company: {
      fontSize: "1.25rem",
      color: "#2563eb",
      fontWeight: "600",
    },
    duration: {
      backgroundColor: "#2563eb",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    skillCategory: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "2rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      transition: "all 0.5s ease",
      opacity: 0,
      transform: "translateY(2rem)",
    },
    skillCategoryHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.5rem",
    },
    skillCategoryTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1f2937",
      marginLeft: "0.75rem",
    },
    skillTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      justifyContent: "center",
    },
    skillTag: {
      background: "linear-gradient(135deg, #2563eb, #9333ea)",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      fontWeight: "500",
      transition: "transform 0.3s ease",
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
    },
    contactCard: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "1.5rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: "all 0.5s ease",
      opacity: 0,
      transform: "translateY(2rem)",
    },
    contactCardHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
    },
    contactCardTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      color: "#1f2937",
      marginLeft: "0.75rem",
    },
    contactLink: {
      color: "#2563eb",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      transition: "color 0.3s ease",
    },
    footer: {
      backgroundColor: "#1f2937",
      color: "white",
      padding: "3rem 0",
    },
    footerContent: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 1rem",
      textAlign: "center",
    },
    footerTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    footerDescription: {
      color: "#9ca3af",
      marginBottom: "1.5rem",
    },
    socialLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      marginBottom: "2rem",
    },
    socialLink: {
      color: "#9ca3af",
      transition: "color 0.3s ease",
    },
    copyright: {
      marginTop: "2rem",
      paddingTop: "2rem",
      borderTop: "1px solid #374151",
      color: "#9ca3af",
    },
  };

  const ExperienceCard = ({
    title,
    company,
    duration,
    description,
    delay,
    isVisible,
  }) => (
    <div
      style={{
        ...styles.card,
        ...(isVisible ? styles.cardVisible : {}),
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-0.5rem)";
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div
        style={
          window.innerWidth > 768
            ? { ...styles.cardHeader, ...styles.cardHeaderDesktop }
            : styles.cardHeader
        }
      >
        <div>
          <h3 style={styles.jobTitle}>{title}</h3>
          <p style={styles.company}>{company}</p>
        </div>
        <span style={styles.duration}>{duration}</span>
      </div>
      <p style={{ color: "#6b7280", lineHeight: "1.625" }}>{description}</p>
    </div>
  );

  const SkillCategory = ({ title, skills, icon: Icon, delay, isVisible }) => (
    <div
      style={{
        ...styles.skillCategory,
        ...(isVisible ? styles.cardVisible : {}),
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-0.5rem)";
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div style={styles.skillCategoryHeader}>
        <Icon size={32} color="#2563eb" />
        <h3 style={styles.skillCategoryTitle}>{title}</h3>
      </div>
      <div style={styles.skillTags}>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={styles.skillTag}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const EducationCard = ({
    degree,
    institution,
    duration,
    delay,
    isVisible,
  }) => (
    <div
      style={{
        ...styles.card,
        ...(isVisible ? styles.cardVisible : {}),
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-0.5rem)";
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h3 style={styles.jobTitle}>{degree}</h3>
      <p style={{ ...styles.company, marginBottom: "0.5rem" }}>{institution}</p>
      <p style={{ color: "#6b7280" }}>{duration}</p>
    </div>
  );

  const ContactCard = ({
    icon: Icon,
    label,
    value,
    link,
    delay,
    isVisible,
  }) => (
    <div
      style={{
        ...styles.contactCard,
        ...(isVisible ? styles.cardVisible : {}),
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-0.5rem)";
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div style={styles.contactCardHeader}>
        <Icon size={24} color="#2563eb" />
        <h3 style={styles.contactCardTitle}>{label}</h3>
      </div>
      {link ? (
        <a
          href={link}
          style={styles.contactLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#1d4ed8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#2563eb";
          }}
        >
          {value}
          <ExternalLink size={16} style={{ marginLeft: "0.5rem" }} />
        </a>
      ) : (
        <p style={{ color: "#6b7280" }}>{value}</p>
      )}
    </div>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    ["experience", "skills", "education", "contact"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem !important;
            }
            .hero-subtitle {
              font-size: 1.25rem !important;
            }
            .section-title {
              font-size: 2rem !important;
            }
            .nav-links {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Aditya Kumar</div>
          <div style={styles.navLinks} className="nav-links">
            {["home", "experience", "skills", "education", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={{
                    ...styles.navLink,
                    ...(activeSection === section
                      ? styles.navLinkActive
                      : styles.navLinkInactive),
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section) {
                      e.currentTarget.style.color = "#2563eb";
                      e.currentTarget.style.backgroundColor = "#eff6ff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section) {
                      e.currentTarget.style.color = "#6b7280";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle} className="hero-title">
            Aditya Kumar
          </h1>
          <p style={styles.heroSubtitle} className="hero-subtitle">
            Full Stack Developer
          </p>
          <p style={styles.heroDescription}>
            Passionate developer with expertise in React, Node.js, and modern
            web technologies. Currently working at Cognizant Technology
            Solutions, creating scalable solutions and innovative digital
            experiences.
          </p>
          <button
            onClick={() => scrollToSection("experience")}
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#f3f4f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleText} className="section-title">
              Professional Experience
            </h2>
            <div style={styles.sectionTitleLine}></div>
          </div>

          <div>
            <ExperienceCard
              title="Full Stack Developer"
              company="Cognizant Technology Solutions"
              duration="July 2022 - Present"
              description="Developing and maintaining full-stack web applications using React, Node.js, and Express. Working with databases including MongoDB, MS SQL, and MySQL to create robust backend solutions. Collaborating with cross-functional teams to deliver high-quality software products."
              delay={200}
              isVisible={isVisible.experience}
            />

            <ExperienceCard
              title="Software Development Intern"
              company="Cognizant Technology Solutions"
              duration="Feb 2022 - June 2022"
              description="Gained hands-on experience in software development lifecycle, working on real-world projects and learning industry best practices in web development. Contributed to frontend and backend development using modern web technologies."
              delay={400}
              isVisible={isVisible.experience}
            />

            <ExperienceCard
              title="Research Intern"
              company="NIT Patna"
              duration="June 2021"
              description="Participated in research activities and gained exposure to advanced computing concepts and methodologies. Worked on innovative projects that enhanced my technical skills and problem-solving abilities."
              delay={600}
              isVisible={isVisible.experience}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        style={{ ...styles.section, ...styles.sectionWhite }}
      >
        <div style={styles.sectionContainer}>
          <div style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleText} className="section-title">
              Technical Skills
            </h2>
            <div style={styles.sectionTitleLine}></div>
          </div>

          <div style={styles.skillsGrid}>
            <SkillCategory
              title="Frontend Development"
              skills={[
                "React",
                "Next.js",
                "Angular",
                "JavaScript",
                "TypeScript",
              ]}
              icon={Code}
              delay={200}
              isVisible={isVisible.skills}
            />

            <SkillCategory
              title="Backend Development"
              skills={["Node.js", "Express.js", "MongoDB", "MS SQL", "MySQL"]}
              icon={Server}
              delay={400}
              isVisible={isVisible.skills}
            />

            <SkillCategory
              title="Tools & Technologies"
              skills={["Git", "Docker", "AWS"]}
              icon={Database}
              delay={600}
              isVisible={isVisible.skills}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleText} className="section-title">
              Education
            </h2>
            <div style={styles.sectionTitleLine}></div>
          </div>

          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <EducationCard
              degree="Bachelor of Engineering"
              institution="Sant Longowal Institute of Engineering and Technology"
              duration="July 2019 - June 2022"
              delay={200}
              isVisible={isVisible.education}
            />

            <EducationCard
              degree="Diploma in Computer Science"
              institution="Sant Longowal Institute of Engineering and Technology"
              duration="July 2016 - June 2022"
              delay={400}
              isVisible={isVisible.education}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ ...styles.section, ...styles.sectionWhite }}
      >
        <div style={styles.sectionContainer}>
          <div style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleText} className="section-title">
              Get In Touch
            </h2>
            <div style={styles.sectionTitleLine}></div>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                marginTop: "1.5rem",
                maxWidth: "32rem",
                margin: "1.5rem auto 0 auto",
              }}
            >
              Ready to bring your ideas to life? Let's connect and build
              something amazing together.
            </p>
          </div>

          <div style={styles.contactGrid}>
            <ContactCard
              icon={Phone}
              label="Mobile"
              value="7347422841"
              link="tel:7347422841"
              delay={200}
              isVisible={isVisible.contact}
            />

            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="7347422841"
              link="https://wa.me/7347422841"
              delay={300}
              isVisible={isVisible.contact}
            />

            <ContactCard
              icon={Send}
              label="Telegram"
              value="7347422841"
              link="https://t.me/7347422841"
              delay={400}
              isVisible={isVisible.contact}
            />

            <ContactCard
              icon={Mail}
              label="Email"
              value="belikeaditya25@gmail.com"
              link="mailto:belikeaditya25@gmail.com"
              delay={500}
              isVisible={isVisible.contact}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <h3 style={styles.footerTitle}>Aditya Kumar</h3>
          <p style={styles.footerDescription}>
            Full Stack Developer | Ready to build something amazing
          </p>
          <div style={styles.socialLinks}>
            <a
              href="mailto:belikeaditya25@gmail.com"
              style={styles.socialLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <Mail size={24} />
            </a>
            <a
              href="https://wa.me/7347422841"
              style={styles.socialLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://t.me/7347422841"
              style={styles.socialLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <Send size={24} />
            </a>
          </div>
          <div style={styles.copyright}>
            <p>&copy; 2025 Aditya Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
