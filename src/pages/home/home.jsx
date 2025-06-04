import React, { useState } from 'react';
import NavBar from '../Nav/NavBar';
import { FiArrowRight, FiCheck, FiBarChart2, FiUsers, FiGlobe } from 'react-icons/fi';
import Footer from '../Nav/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
  }
  const services = [
    {
      icon: <FiBarChart2 size={32} />,
      title: "Business Strategy",
      description: "We leverage data-driven insights to guide your business decisions. Our strategies are designed to accelerate your growth efficiently, helping you stay ahead of the competition. By focusing on measurable outcomes, we strengthen your position in the market for long-term success."
    },
    {
      icon: <FiUsers size={32} />,
      title: "Digital Transformation",
      description: "We offer comprehensive modernization of your business operations to enhance efficiency and agility. By integrating innovative technologies, we streamline processes and reduce costs. This transformation empowers your organization to adapt quickly and thrive in a competitive market."
    },
    {
      icon: <FiGlobe size={32} />,
      title: "Global Solutions",
      description: "We deliver world-class services designed specifically to meet your international needs. Our expertise ensures seamless solutions across diverse markets and cultures. This personalized approach helps your business expand globally with confidence and success."
    }
  ];

  const testimonials = [
    {
      quote: "Their strategic approach transformed our digital infrastructure and improved efficiency by 40%.",
      author: "Sarah Johnson, CEO of TechNova"
    },
    {
      quote: "The team delivered exceptional results on time and under budget. True professionals.",
      author: "Michael Chen, Director at GlobalEdge"
    },
    {
      quote: "We've partnered with them for 5 years and they continue to exceed our expectations.",
      author: "Emma Rodriguez, VP Operations at FinCorp"
    }
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <NavBar />

      {/* Hero Section */}
      <div style={{
        backgroundColor: "#081E5AFF",
        color: "white",
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          maxWidth: "72rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            lineHeight: 1.2
          }}>
            Elevating Businesses Through <span >Innovative Solutions</span>
          </h1>
          <p style={{
            fontSize: "1.25rem",
            maxWidth: "48rem",
            margin: "0 auto 2.5rem",
            opacity: 0.9
          }}>
            We deliver cutting-edge technology and strategic consulting to help your organization thrive in the digital age.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button style={{
              backgroundColor: "white",
              color: "#081E5AFF",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              Get Started <FiArrowRight />
            </button>
            <button style={{
              backgroundColor: "transparent",
              color: "white",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              border: "2px solid white",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}>
              Learn More
            </button>
          </div>
        </div>
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "radial-gradient(circle at 70% 30%, rgba(29,78,216,0.8) 0%, rgba(29,78,216,0) 70%)",
          zIndex: 0
        }}></div>
      </div>

      {/* Clients Logo Marquee */}
      <div style={{
        backgroundColor: "#F9FAFB",
        padding: "2rem 0",
        borderBottom: "1px solid #E5E7EB"
      }}>
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          overflow: "hidden"
        }}>
          <p style={{
            textAlign: "center",
            color: "#6B7280",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>Trusted by industry leaders</p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            alignItems: "center",
            flexWrap: "wrap"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "4rem",

              animation: "fadeIn 1s ease-out"
            }}>
              {["TechNova", "GlobalEdge", "FinCorp", "Stratify", "OmniSys"].map((client, index) => (
                <div key={index} style={{
                  filter: "grayscale(100%)",
                  opacity: 0.8,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  animation: `floatLogo 6s infinite ${index * 0.2}s ease-in-out`,
                  ":hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "translateY(-5px) scale(1.05)",
                    boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
                    animation: "none"
                  }
                }}>
                  <div style={{
                    color: "#1E293B",
                    fontWeight: "700",
                    fontSize: "1.35rem",
                    position: "relative"
                  }}>
                    {client}
                    <span style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "0",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#4F46E5",
                      transition: "width 0.3s ease",
                      ":hover": {
                        width: "100%"
                      }
                    }} />
                  </div>
                </div>
              ))}
              <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(20px); }
    }
    
    @keyframes floatLogo {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes ripple {
      0% {
        transform: scale(0, 0);
        opacity: 1;
      }
      20% {
        transform: scale(25, 25);
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: scale(40, 40);
      }
    }
  `}</style>
            </div>
            {/* {["TechNova", "GlobalEdge", "FinCorp", "Stratify", "OmniSys"].map((client, index) => (
              <div key={index} style={{
                color: "#4B5563",
                fontWeight: "600",
                fontSize: "1.25rem",
                opacity: 0.7,
                transition: "opacity 0.3s ease"
              }}>{client}</div>
            ))} */}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div style={{
        padding: "6rem 2rem",
        maxWidth: "80rem",
        margin: "0 auto"
      }}>
        <div style={{
          textAlign: "center",
          marginBottom: "4rem"
        }}>
          <h2 style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "1rem"
          }}>Our Core Services</h2>
          <p style={{
            color: "#6B7280",
            maxWidth: "62rem",
            margin: "0 auto",
            fontSize: "1.125rem",
            lineHeight: 1.75
          }}>Comprehensive solutions designed to address your most critical business challenges.
            We specialize in crafting tailored strategies that align with your unique goals and industry demands.
            Our team leverages the latest technologies to enhance efficiency, drive innovation, and accelerate growth.
            From seamless system integration to scalable digital transformations, we deliver results that matter.
            With a client-first approach, we ensure every solution is practical, measurable, and sustainable.
            Partner with us to unlock new opportunities, overcome barriers, and thrive in a digital-first world.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "3rem"
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: hoveredService === index ? "#1D4ED8" : "#F9FAFB",
                color: hoveredService === index ? "white" : "#111827",
                padding: "2.5rem 2rem",
                borderRadius: "0.5rem",
                transition: "all 0.3s ease",
                transform: hoveredService === index ? "translateY(-8px)" : "none",
                boxShadow: hoveredService === index ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none",
                textAlign: "center"
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div style={{
                backgroundColor: hoveredService === index ? "rgba(255,255,255,0.1)" : "white",
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                transition: "all 0.3s ease"
              }}>
                {React.cloneElement(service.icon, {
                  color: hoveredService === index ? "white" : "#1D4ED8"
                })}
              </div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem"
              }}>{service.title}</h3>
              <p style={{
                color: hoveredService === index ? "rgba(255,255,255,0.9)" : "#6B7280",
                lineHeight: 1.6
              }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{
        backgroundColor: "#081E5AFF",
        color: "white",
        padding: "6rem 2rem",
        textAlign: "center"
      }}>
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            marginBottom: "1rem"
          }}>Client Success Stories</h2>
          <p style={{
            opacity: 0.9,
            maxWidth: "48rem",
            margin: "0 auto 3rem",
            fontSize: "1.125rem",
            lineHeight: 1.75
          }}>Hear from organizations that have transformed their operations with our solutions</p>

          <div style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "3rem",
            borderRadius: "0.5rem",
            maxWidth: "56rem",
            margin: "0 auto 2rem",
            minHeight: "200px",
            position: "relative"
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: "3rem",
                  left: "3rem",
                  right: "3rem",
                  opacity: activeTestimonial === index ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  visibility: activeTestimonial === index ? 'visible' : 'hidden'
                }}
              >
                <p style={{
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6
                }}>"{testimonial.quote}"</p>
                <p style={{
                  fontWeight: "600"
                }}>- {testimonial.author}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: activeTestimonial === index ? "white" : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: "6rem 2rem",
        textAlign: "center",
        backgroundColor: "#F9FAFB"
      }}>
        <div style={{
          maxWidth: "62rem",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "1.5rem"
          }}>Ready to Transform Your Business?</h2>
          <p style={{
            color: "#6B7280",
            fontSize: "1.125rem",
            lineHeight: 1.75,
            marginBottom: "2.5rem"
          }}>Schedule a consultation with our experts to discuss how we can help you achieve your strategic goals.
            Whether you're planning a digital transformation or seeking to optimize current operations, we're here to guide you.
            Our team takes the time to understand your business, challenges, and long-term vision.
            We’ll work with you to craft tailored, actionable solutions that drive measurable outcomes.
            From ideation to implementation, our expert guidance ensures you stay ahead in a rapidly evolving market.
            Let’s collaborate and turn your goals into a winning strategy—book your free consultation today.</p>
          <button onClick={handleClick} style={{

            backgroundColor: "#1D4ED8",
            color: "white",
            padding: "0.875rem 2.5rem",
            borderRadius: "0.375rem",
            border: "none",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            Contact Us <FiArrowRight />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;