
import React, { useState } from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import { FaLightbulb, FaHandsHelping, FaChartLine, FaAward } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredCard, setHoveredCard] = useState(null);
const cards = [
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    title: "Professional Team",
    desc: "Our experienced team combines expertise and innovation to deliver exceptional solutions.",
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    title: "Strategic Solutions",
    desc: "We develop data-driven strategies and technologies to propel your business forward.",
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    title: "Client-Centric Approach",
    desc: "Your business objectives are at the core of every solution we create.",
  },
];

  const companyInfo = {
    mission: {
      title: "Our Mission",
      content: "Our mission is to empower businesses by delivering innovative technology solutions that fuel sustainable growth, enhance operational efficiency, and create a lasting competitive advantage in today’s fast-evolving digital landscape. We strive to transform challenges into opportunities through cutting-edge software, strategic insights, and a customer-centric approach that drives success and innovation."
    },
    vision: {
      title: "Our Vision",
      content: "Our vision is to become the most trusted partner for enterprise digital transformation—recognized globally for consistently delivering measurable business outcomes through innovative, cutting-edge technology solutions. We aim to redefine industry standards by fostering long-term partnerships, driving operational excellence, and enabling organizations to thrive in a digital-first world."
    },
    values: {
      title: "Our Values",
      content: "Integrity, Excellence, Collaboration, and Client-Centric Innovation are the core values that define who we are and guide everything we do. These principles shape our culture, drive our decisions, and ensure that we consistently deliver meaningful results for our clients."
    }
  };

  return (
    <>
    <NavBar/>
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "4rem 2rem 8rem",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Interactive About Section */}
      <div
        style={{
          maxWidth: "80rem",
          width: "100%",
          marginBottom: "4rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: "600",
            color: "#111827",
            marginBottom: "1.5rem",
            letterSpacing: "-0.025em",
            position: "relative",
            display: "inline-block",
          }}
        >
          About Us
          <span
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "0",
              width: "60%",
              height: "4px",
              backgroundColor: "#1D4ED8",
              borderRadius: "2px",
              margin: "0 auto",
              right: "0",
            }}
          ></span>
        </h2>

        {/* Animated Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2.5rem",
            gap: "1rem",
          }}
        >
          {Object.keys(companyInfo).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.375rem",
                border: "none",
                backgroundColor: activeTab === tab ? "#1D4ED8" : "#F3F4F6",
                color: activeTab === tab ? "white" : "#4B5563",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.backgroundColor = "#E5E7EB";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.backgroundColor = "#F3F4F6";
                }
              }}
            >
              {companyInfo[tab].title}
            </button>
          ))}
        </div>

        {/* Animated Content Area */}
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
            minHeight: "160px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              opacity: activeTab === 'mission' ? 1 : 0,
              transform: `translateY(${activeTab === 'mission' ? 0 : '20px'})`,
              transition: "all 0.4s ease",
              visibility: activeTab === 'mission' ? 'visible' : 'hidden',
            }}
          >
            <p
              style={{
                color: "#4B5563",
                lineHeight: 1.75,
                fontSize: "1.125rem",
              }}
            >
              {companyInfo.mission.content}
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              opacity: activeTab === 'vision' ? 1 : 0,
              transform: `translateY(${activeTab === 'vision' ? 0 : '20px'})`,
              transition: "all 0.4s ease",
              visibility: activeTab === 'vision' ? 'visible' : 'hidden',
            }}
          >
            <p
              style={{
                color: "#4B5563",
                lineHeight: 1.75,
                fontSize: "1.125rem",
              }}
            >
              {companyInfo.vision.content}
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              opacity: activeTab === 'values' ? 1 : 0,
              transform: `translateY(${activeTab === 'values' ? 0 : '20px'})`,
              transition: "all 0.4s ease",
              visibility: activeTab === 'values' ? 'visible' : 'hidden',
            }}
          >
            <p
              style={{
                color: "#4B5563",
                lineHeight: 1.75,
                fontSize: "1.125rem",
              }}
            >
              {companyInfo.values.content}
            </p>
          </div>
        </div>

        {/* Stats Counter */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "200+", label: "Clients Worldwide" },
            { number: "98%", label: "Client Retention" },
            { number: "50+", label: "Industry Awards" }
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "1.5rem",
                minWidth: "160px",
                backgroundColor: "#F9FAFB",
                borderRadius: "0.5rem",
                transition: "all 0.3s ease",
                transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                boxShadow: hoveredCard === index ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "700",
                  color: "#1D4ED8",
                  marginBottom: "0.5rem",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "#6B7280",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: "80rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {cards.map(({ img, title, desc }, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#F9FAFB",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              border: "1px solid #E5E7EB",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)";
            }}
          >
            <img
              src={img}
              alt={title}
              style={{ 
                width: "100%", 
                height: "200px", 
                objectFit: "cover",
                borderBottom: "1px solid #E5E7EB"
              }}
            />
            <div style={{ padding: "1.5rem", flexGrow: 1 }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "#111827",
                }}
              >
                {title}
              </h3>
              <p style={{ 
                color: "#6B7280", 
                lineHeight: 1.6, 
                fontSize: "1rem",
                marginBottom: "1.5rem"
              }}>
                {desc}
              </p>
              <a
                href="#"
                style={{
                  color: "#1D4ED8",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                Learn more
                <svg
                  style={{ marginLeft: "0.5rem", width: "1rem", height: "1rem" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
   {/* Why Choose Us Section */}
<div
  style={{
    maxWidth: "80rem",
    width: "100%",
    marginTop: "5rem",
    padding: "2rem",
    backgroundColor: "#1E3A8A",
    borderRadius: "1rem",
    color: "#FFFFFF",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "2rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
    }}
  >
    Why Choose Us
  </h2>
  <p
    style={{
      fontSize: "1.125rem",
      maxWidth: "40rem",
      margin: "0 auto 2.5rem",
      lineHeight: 1.75,
    }}
  >
    Comprehensive solutions designed to address your most critical business challenges.
    We blend innovation, efficiency, and reliability to drive impactful outcomes for our clients.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "2rem",
    
    }}
  >
    {[
      {
        title: "Innovation First",
        desc: "Constantly evolving solutions using the latest in technology and design thinking.",
       icon: <FaLightbulb size={36} />
      },
      {
        title: "End-to-End Support",
        desc: "From strategy to support, we stand with you every step of the journey.",
         icon: <FaHandsHelping size={36} />
      },
      {
        title: "Scalable Solutions",
        desc: "Our services grow with your business — no matter the size or stage.",
          icon: <FaChartLine size={36} />
      },
      {
        title: "Proven Results",
        desc: "We prioritize outcomes that add value, efficiency, and measurable success.",
          icon: <FaAward size={36} />
      },
    ].map(({ title, desc, icon }, i) => (
      <div
        key={i}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          textAlign: "left",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
      >
        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>{desc}</p>
      </div>
    ))}
  </div>
</div>

      {/* Rest of your cards section would go here */}
    </div>
       <Footer/>
    </>
  );
};

export default About;