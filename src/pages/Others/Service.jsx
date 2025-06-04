import React, { useState } from 'react';
import { FiCheck, FiBarChart2, FiCode, FiCloud, FiDatabase, FiLock, FiServer,FiArrowRight  } from 'react-icons/fi';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';

const Service = () => {
  const [activeTab, setActiveTab] = useState('development');

  const services = {
    development: {
      title: "Custom Development",
      icon: <FiCode size={48} />,
      image:'https://www.binaryfolks.com/media/untitled%20folder/18771.png.pagespeed.ce.gcIHD93TPW.png',
      description: "Tailored software solutions designed to meet your specific business requirements and workflows.",
      features: [
        "Enterprise-grade web applications",
        "Mobile app development",
        "Legacy system modernization",
        "API integration services",
        "Continuous deployment pipelines"
      ]
    },
    cloud: {
      title: "Cloud Solutions",
      icon: <FiCloud size={48} />,
        image:'https://it3sixtyfive.com/wp-content/uploads/2024/04/website-design-development-school-managemnt-chennai-perambur-archerwebsol-Cloud-Solutions.png',
      description: "Comprehensive cloud services to optimize your infrastructure and reduce operational costs.",
      features: [
        "Cloud migration strategy",
        "Multi-cloud architecture",
        "Serverless computing",
        "Container orchestration",
        "Disaster recovery planning"
      ]
    },
    data: {
      title: "Data Analytics",
      icon: <FiDatabase size={48} />,
        image:'https://www.springboard.com/blog/wp-content/uploads/2020/08/learn-10-essential-predictive-analytics-techniques-scaled.jpg',
      description: "Transform your data into actionable insights with our advanced analytics platforms.",
      features: [
        "Business intelligence dashboards",
        "Predictive analytics",
        "Big data processing",
        "Data visualization",
        "Machine learning integration"
      ]
    },
    security: {
      title: "Security Services",
      icon: <FiLock size={48} />,
        image:'https://5.imimg.com/data5/IJ/NA/HZ/SELLER-6814007/information-security.png',
      description: "End-to-end security solutions to protect your digital assets and maintain compliance.",
      features: [
        "Risk assessment audits",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "Regulatory compliance"
      ]
    }
  };

  return (
    <>
    <NavBar/>
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#FFFFFF",
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      padding: "6rem 2rem 8rem"
    }}>
      {/* Hero Section */}
      <div style={{
        maxWidth: "80rem",
        margin: "0 auto 6rem",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "1.5rem",
          lineHeight: 1.2
        }}>
          Enterprise-Grade <span style={{ color: "#1D4ED8" }}>Technology Services</span>
        </h1>
        <p style={{
          color: "#6B7280",
          fontSize: "1.25rem",
          maxWidth: "60rem",
          margin: "0 auto",
          lineHeight: 1.75
        }}>
          Comprehensive solutions designed to address your most critical business challenges and drive digital transformation.
        </p>
      </div>

      {/* Services Tabs */}
      <div style={{
        maxWidth: "80rem",
        margin: "0 auto 6rem",
        backgroundColor: "#F9FAFB",
        borderRadius: "0.75rem",
        padding: "3rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {Object.keys(services).map((serviceKey) => (
            <button
              key={serviceKey}
              onClick={() => setActiveTab(serviceKey)}
              style={{
                padding: "0.875rem 1.75rem",
                borderRadius: "0.5rem",
                border: "none",
                backgroundColor: activeTab === serviceKey ? "#1D4ED8" : "#E5E7EB",
                color: activeTab === serviceKey ? "white" : "#4B5563",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              {React.cloneElement(services[serviceKey].icon, { 
                size: 20,
                color: activeTab === serviceKey ? "white" : "#4B5563"
              })}
              {services[serviceKey].title}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center"
        }}>
          <div>
            <div style={{
              backgroundColor: "white",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}>
              {services[activeTab].icon}
            </div>
            <h2 style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1rem"
            }}>
              {services[activeTab].title}
            </h2>
            <p style={{
              color: "#6B7280",
              lineHeight: 1.75,
              marginBottom: "2rem",
              fontSize: "1.125rem"
            }}>
              {services[activeTab].description}
            </p>
            <ul style={{
              listStyle: "none",
              padding: 0
            }}>
              {services[activeTab].features.map((feature, index) => (
                <li key={index} style={{
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem"
                }}>
                  <FiCheck style={{ color: "#1D4ED8", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ color: "#4B5563" }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        <div style={{

  borderRadius: "0.5rem",
  height: "400px",
  width:'500px',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontWeight: "500",
  overflow: "hidden" // This ensures no part of the image spills outside the container
}}>
  <img 
    src={services[activeTab].image}
    style={{
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain" // This maintains aspect ratio while fitting within container
    }}
  />
</div>
        </div>
      </div>

      {/* Process Section */}
      <div style={{
        maxWidth: "80rem",
        margin: "0 auto 6rem",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "1rem"
        }}>
          Our Proven Methodology
        </h2>
        <p style={{
          color: "#6B7280",
          maxWidth: "48rem",
          margin: "0 auto 3rem",
          lineHeight: 1.75,
          fontSize: "1.125rem"
        }}>
          A structured approach to ensure successful delivery and maximum value from our services
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          marginTop: "3rem"
        }}>
          {[
            { number: "01", title: "Discovery", description: "Requirement analysis and planning" },
            { number: "02", title: "Design", description: "Solution architecture and prototyping" },
            { number: "03", title: "Development", description: "Agile implementation with sprints" },
            { number: "04", title: "Deployment", description: "Seamless rollout and integration" },
            { number: "05", title: "Optimization", description: "Continuous improvement cycles" }
          ].map((step, index) => (
            <div key={index} style={{
              backgroundColor: "#F9FAFB",
              borderRadius: "0.5rem",
              padding: "2rem",
              transition: "all 0.3s ease",
              border: "1px solid #E5E7EB"
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#1D4ED8",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                margin: "0 auto 1.5rem"
              }}>
                {step.number}
              </div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "0.5rem"
              }}>
                {step.title}
              </h3>
              <p style={{
                color: "#6B7280",
                fontSize: "0.875rem",
                lineHeight: 1.5
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        maxWidth: "80rem",
        margin: "0 auto",
        backgroundColor: "#1D4ED8",
        color: "white",
        borderRadius: "0.75rem",
        padding: "4rem",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "1rem"
        }}>
          Ready to Transform Your Business?
        </h2>
        <p style={{
          opacity: 0.9,
          maxWidth: "48rem",
          margin: "0 auto 2rem",
          lineHeight: 1.75,
          fontSize: "1.125rem"
        }}>
          Schedule a consultation with our experts to discuss how we can help you achieve your strategic goals.
        </p>
        <button style={{
          backgroundColor: "white",
          color: "#1D4ED8",
          padding: "0.875rem 2rem",
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
          Contact Our Team <FiArrowRight />
        </button>
      </div>
    </div>
           <Footer/>
    </>
  );
};

export default Service;