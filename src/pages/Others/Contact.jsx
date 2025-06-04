// import React, { useState } from 'react';
// import { FiMapPin, FiPhone, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi';
// import NavBar from '../Nav/NavBar';
// import Footer from '../Nav/Footer';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       message: ''
//     });
//     setTimeout(() => setIsSubmitted(false), 5000);
//   };

//   return (
//     <>
//     <NavBar/>
//     <div style={{
//       minHeight: "100vh",
//       backgroundColor: "#FFFFFF",
//       fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
//       padding: "6rem 2rem 8rem"
//     }}>
//       {/* Hero Section */}
//       <div style={{
//         maxWidth: "80rem",
//         margin: "0 auto 6rem",
//         textAlign: "center"
//       }}>
//         <h1 style={{
//           fontSize: "3rem",
//           fontWeight: "700",
//           color: "#111827",
//           marginBottom: "1.5rem",
//           lineHeight: 1.2
//         }}>
//           Get in <span style={{ color: "#1D4ED8" }}>Touch</span>
//         </h1>
//         <p style={{
//           color: "#6B7280",
//           fontSize: "1.25rem",
//           maxWidth: "60rem",
//           margin: "0 auto",
//           lineHeight: 1.75
//         }}>
//           Our team is ready to assist you with any inquiries. Reach out and we'll respond promptly.
//         </p>
//       </div>

//       {/* Contact Content */}
//       <div style={{
//         maxWidth: "80rem",
//         margin: "0 auto",
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr",
//         gap: "4rem"
//       }}>
//         {/* Contact Information */}
//         <div>
//           <h2 style={{
//             fontSize: "1.875rem",
//             fontWeight: "600",
//             color: "#111827",
//             marginBottom: "2rem"
//           }}>
//             Contact Information
//           </h2>
          
//           <div style={{
//             backgroundColor: "#F9FAFB",
//             borderRadius: "0.75rem",
//             padding: "2rem",
//             border: "1px solid #E5E7EB"
//           }}>
//             <div style={{ marginBottom: "2rem" }}>
//               <h3 style={{
//                 fontSize: "1.25rem",
//                 fontWeight: "600",
//                 color: "#111827",
//                 marginBottom: "1rem",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "0.5rem"
//               }}>
//                 <FiMapPin style={{ color: "#1D4ED8" }} /> Our Headquarters
//               </h3>
//               <p style={{ color: "#6B7280", lineHeight: 1.6 }}>
//                 123 Corporate Drive<br />
//                 Business District<br />
//                 New York, NY 10001<br />
//                 United States
//               </p>
//             </div>

//             <div style={{ marginBottom: "2rem" }}>
//               <h3 style={{
//                 fontSize: "1.25rem",
//                 fontWeight: "600",
//                 color: "#111827",
//                 marginBottom: "1rem",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "0.5rem"
//               }}>
//                 <FiPhone style={{ color: "#1D4ED8" }} /> Phone
//               </h3>
//               <p style={{ color: "#6B7280", lineHeight: 1.6 }}>
//                 Main: +1 (555) 123-4567<br />
//                 Support: +1 (555) 765-4321
//               </p>
//             </div>

//             <div>
//               <h3 style={{
//                 fontSize: "1.25rem",
//                 fontWeight: "600",
//                 color: "#111827",
//                 marginBottom: "1rem",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "0.5rem"
//               }}>
//                 <FiMail style={{ color: "#1D4ED8" }} /> Email
//               </h3>
//               <p style={{ color: "#6B7280", lineHeight: 1.6 }}>
//                 info@corporatesolutions.com<br />
//                 support@corporatesolutions.com
//               </p>
//             </div>
//           </div>

//           <div style={{
//             marginTop: "2rem",
//             backgroundColor: "#F0F9FF",
//             borderRadius: "0.75rem",
//             padding: "2rem",
//             border: "1px solid #E0F2FE"
//           }}>
//             <h3 style={{
//               fontSize: "1.25rem",
//               fontWeight: "600",
//               color: "#0369A1",
//               marginBottom: "1rem"
//             }}>
//               Business Hours
//             </h3>
//             <p style={{ color: "#6B7280", lineHeight: 1.6, marginBottom: "0.5rem" }}>
//               <strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM EST
//             </p>
//             <p style={{ color: "#6B7280", lineHeight: 1.6 }}>
//               <strong>Saturday-Sunday:</strong> Closed
//             </p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div>
//           <h2 style={{
//             fontSize: "1.875rem",
//             fontWeight: "600",
//             color: "#111827",
//             marginBottom: "2rem"
//           }}>
//             Send Us a Message
//           </h2>
          
//           {isSubmitted ? (
//             <div style={{
//               backgroundColor: "#F0FDF4",
//               borderRadius: "0.75rem",
//               padding: "2rem",
//               border: "1px solid #DCFCE7",
//               textAlign: "center"
//             }}>
//               <FiCheckCircle style={{
//                 color: "#16A34A",
//                 fontSize: "3rem",
//                 marginBottom: "1rem"
//               }} />
//               <h3 style={{
//                 fontSize: "1.5rem",
//                 fontWeight: "600",
//                 color: "#166534",
//                 marginBottom: "0.5rem"
//               }}>
//                 Thank You!
//               </h3>
//               <p style={{ color: "#6B7280", lineHeight: 1.6 }}>
//                 Your message has been sent successfully. Our team will get back to you within 24 hours.
//               </p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} style={{
//               backgroundColor: "#F9FAFB",
//               borderRadius: "0.75rem",
//               padding: "2rem",
//               border: "1px solid #E5E7EB"
//             }}>
//               <div style={{ marginBottom: "1.5rem" }}>
//                 <label style={{
//                   display: "block",
//                   color: "#374151",
//                   fontWeight: "500",
//                   marginBottom: "0.5rem"
//                 }}>
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "0.375rem",
//                     border: "1px solid #D1D5DB",
//                     backgroundColor: "white",
//                     transition: "all 0.2s ease"
//                   }}
//                 />
//               </div>

//               <div style={{ marginBottom: "1.5rem" }}>
//                 <label style={{
//                   display: "block",
//                   color: "#374151",
//                   fontWeight: "500",
//                   marginBottom: "0.5rem"
//                 }}>
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     width: "100%",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "0.375rem",
//                     border: "1px solid #D1D5DB",
//                     backgroundColor: "white",
//                     transition: "all 0.2s ease"
//                   }}
//                 />
//               </div>

//               <div style={{ marginBottom: "1.5rem" }}>
//                 <label style={{
//                   display: "block",
//                   color: "#374151",
//                   fontWeight: "500",
//                   marginBottom: "0.5rem"
//                 }}>
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   style={{
//                     width: "100%",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "0.375rem",
//                     border: "1px solid #D1D5DB",
//                     backgroundColor: "white",
//                     transition: "all 0.2s ease"
//                   }}
//                 />
//               </div>

//               <div style={{ marginBottom: "2rem" }}>
//                 <label style={{
//                   display: "block",
//                   color: "#374151",
//                   fontWeight: "500",
//                   marginBottom: "0.5rem"
//                 }}>
//                   Your Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="5"
//                   style={{
//                     width: "100%",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "0.375rem",
//                     border: "1px solid #D1D5DB",
//                     backgroundColor: "white",
//                     transition: "all 0.2s ease",
//                     resize: "vertical"
//                   }}
//                 ></textarea>
//               </div>

//               <button type="submit" style={{
//                 backgroundColor: "#1D4ED8",
//                 color: "white",
//                 padding: "0.875rem 2rem",
//                 borderRadius: "0.375rem",
//                 border: "none",
//                 fontWeight: "600",
//                 fontSize: "1rem",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "0.5rem",
//                 width: "100%",
//                 justifyContent: "center"
//               }}>
//                 Send Message <FiSend />
//               </button>
//             </form>
//           )}
//         </div>
//       </div>

//       {/* Map Section */}
//      <div style={{
//   maxWidth: "80rem",
//   margin: "4rem auto 0",
//   borderRadius: "0.75rem",
//   overflow: "hidden",
//   boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//   height: "400px"
// }}>
//   <iframe
//     title="New York Map"
//     width="100%"
//     height="100%"
//     frameBorder="0"
//     style={{ border: 0 }}
//     src="https://maps.google.com/maps?q=New%20York%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
//     allowFullScreen
//   ></iframe>

// </div>

//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <NavBar />
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
            Get in <span style={{ color: "#1D4ED8" }}>Touch</span>
          </h1>
          <p style={{
            color: "#6B7280",
            fontSize: "1.25rem",
            maxWidth: "60rem",
            margin: "0 auto",
            lineHeight: 1.75
          }}>
      Our team is always ready to assist you with any inquiries you may have. Reach out to us, and we’ll respond promptly to ensure you get the support you need. Your success is our priority.
          </p>
        </div>

        {/* Contact Section */}
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem"
        }}>
          {/* Left: Contact Information */}
          <div>
            <h2 style={{
              fontSize: "1.875rem",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "2rem"
            }}>
              Contact Information
            </h2>

            <div style={{
              backgroundColor: "#F9FAFB",
              borderRadius: "0.75rem",
              padding: "2rem",
              border: "1px solid #E5E7EB"
            }}>
              {/* Address */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={titleStyle}><FiMapPin style={iconStyle} /> Our Headquarters</h3>
                <p style={textStyle}>
                  123 Corporate Drive<br />
                  Business District<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={titleStyle}><FiPhone style={iconStyle} /> Phone</h3>
                <p style={textStyle}>
                  Main: +1 (555) 123-4567<br />
                  Support: +1 (555) 765-4321
                </p>
              </div>

              {/* Email */}
              <div>
                <h3 style={titleStyle}><FiMail style={iconStyle} /> Email</h3>
                <p style={textStyle}>
                  info@corporatesolutions.com<br />
                  support@corporatesolutions.com
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div style={{
              marginTop: "2rem",
              backgroundColor: "#F0F9FF",
              borderRadius: "0.75rem",
              padding: "2rem",
              border: "1px solid #E0F2FE"
            }}>
              <h3 style={{ ...titleStyle, color: "#0369A1" }}>Business Hours</h3>
              <p style={textStyle}><strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM EST</p>
              <p style={textStyle}><strong>Saturday-Sunday:</strong> Closed</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 style={{
              fontSize: "1.875rem",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "2rem"
            }}>
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <div style={successBoxStyle}>
                <FiCheckCircle style={successIconStyle} />
                <h3 style={successTitleStyle}>Thank You!</h3>
                <p style={textStyle}>Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={formBoxStyle}>
                {['name', 'email', 'phone'].map((field, idx) => (
                  <div key={idx} style={{ marginBottom: "1.5rem" }}>
                    <label style={labelStyle}>{field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Phone Number'}</label>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required={field !== 'phone'}
                      style={inputStyle}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: "2rem" }}>
                  <label style={labelStyle}>Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{ ...inputStyle, resize: "vertical" }}
                  ></textarea>
                </div>

                <button type="submit" style={buttonStyle}>
                  Send Message <FiSend />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Map Section */}
        <div style={mapContainerStyle}>
          <iframe
            title="New York Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=New%20York%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

// === Reusable Inline Styles ===
const titleStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#111827",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem"
};

const iconStyle = {
  color: "#1D4ED8"
};

const textStyle = {
  color: "#6B7280",
  lineHeight: 1.6
};

const labelStyle = {
  display: "block",
  color: "#374151",
  fontWeight: "500",
  marginBottom: "0.5rem"
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.375rem",
  border: "1px solid #D1D5DB",
  backgroundColor: "white",
  transition: "all 0.2s ease"
};

const formBoxStyle = {
  backgroundColor: "#F9FAFB",
  borderRadius: "0.75rem",
  padding: "2rem",
  border: "1px solid #E5E7EB"
};

const buttonStyle = {
  backgroundColor: "#1D4ED8",
  color: "white",
  padding: "0.875rem 2rem",
  borderRadius: "0.375rem",
  border: "none",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  width: "100%",
  justifyContent: "center"
};

const successBoxStyle = {
  backgroundColor: "#F0FDF4",
  borderRadius: "0.75rem",
  padding: "2rem",
  border: "1px solid #DCFCE7",
  textAlign: "center"
};

const successIconStyle = {
  color: "#16A34A",
  fontSize: "3rem",
  marginBottom: "1rem"
};

const successTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#166534",
  marginBottom: "0.5rem"
};

const mapContainerStyle = {
  maxWidth: "80rem",
  margin: "4rem auto 0",
  borderRadius: "0.75rem",
  overflow: "hidden",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  height: "400px"
};
