import { useEffect } from 'react';

// Import images
import pediatricConsultationsImg from '@/assets/Pediatric & Child Services/Pediatric Consultations.jpg';
import vaccinationsImg from '@/assets/Pediatric & Child Services/Vaccinations & Immunization.jpg';
import neonatalCareImg from '@/assets/Pediatric & Child Services/Neonatal Care.jpg';
import developmentalMonitoringImg from '@/assets/Pediatric & Child Services/Developmental Monitoring.jpg';
import nutritionCounsellingImg from '@/assets/Pediatric & Child Services/Nutrition Counselling.jpg';
import adolescentHealthImg from '@/assets/Pediatric & Child Services/Adolescent Health.jpg';

const PediatricScrollSection = () => {
  const pediatricServices = [
    {
      title: "Pediatric Consultations",
      description: "Routine health checkups, growth monitoring, and treatment for common childhood illnesses.",
      image: pediatricConsultationsImg
    },
    {
      title: "Vaccinations & Immunization",
      description: "Complete vaccination programs following national immunization schedules, with reminders and tracking.",
      image: vaccinationsImg
    },
    {
      title: "Neonatal Care",
      description: "Advanced care for newborns requiring special attention, including premature babies and those with complications.",
      image: neonatalCareImg
    },
    {
      title: "Developmental Monitoring",
      description: "Regular assessment of developmental milestones and early intervention when needed.",
      image: developmentalMonitoringImg
    },
    {
      title: "Nutrition Counselling",
      description: "Expert dietary guidance for infants, children, and adolescents to ensure optimal growth.",
      image: nutritionCounsellingImg
    },
    {
      title: "Adolescent Health",
      description: "Specialized care for teenagers, including school health programs and adolescent-specific concerns.",
      image: adolescentHealthImg
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.querySelector('.section_tabs');
      if (!sectionElement) return;

      const sectionTop = sectionElement.getBoundingClientRect().top;
      const sectionHeight = sectionElement.clientHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const scrollProgress = Math.max(0, -sectionTop / (sectionHeight - windowHeight));
      
      const sections = document.querySelectorAll('.tabs_let-content');
      const images = document.querySelectorAll('.tabs_image');
      const totalSections = sections.length;
      
      // Determine which section should be active based on scroll progress
      // Ensure activeIndex is always between 0 and totalSections - 1
      const activeIndex = Math.max(0, Math.min(
        Math.floor(scrollProgress * totalSections),
        totalSections - 1
      ));

      sections.forEach((section, index) => {
        if (index === activeIndex) {
          section.classList.add('is-1');
          images[index]?.classList.add('is-1');
        } else {
          section.classList.remove('is-1');
          images[index]?.classList.remove('is-1');
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .section_tabs {
          z-index: 99;
          border-radius: 2rem;
          background-color: #292929;
          position: relative;
        }
        
        .section_header {
          text-align: center;
          padding: 3rem 2rem 2rem;
          background-color: #292929;
          border-radius: 2rem 2rem 0 0;
        }
        
        .section_header h2 {
          color: #f5f5f5;
          margin-bottom: 1rem;
        }
        
        .section_header p {
          color: #a3a3a3;
        }
        
        .padding-section-large {
          padding-top: 0;
          padding-bottom: 7rem;
          position: relative;
        }
        
        @media(max-width: 576px) {
          .padding-section-large {
            padding-bottom: 2rem;
          }
          
          .section_header {
            padding: 2rem 1rem 1rem;
          }
        }
        
        .tabs_height {
          height: 300vh;
        }
        
        @media(max-width: 576px) {
          .tabs_height {
            height: 350vh;
          }
        }
        
        .tabs_sticky-wrapper {
          height: 100vh;
          position: sticky;
          top: 5vh;
        }
        
        .tabs_container {
          width: 100%;
          max-width: 120rem;
          margin-left: auto;
          margin-right: auto;
        }
        
        .tabs_component {
          height: 90vh;
          grid-column-gap: 1.5rem;
          grid-row-gap: 1.5rem;
          grid-template-rows: auto;
          grid-template-columns: 0.4fr 1fr;
          grid-auto-columns: 1fr;
          padding-left: 3.3%;
          padding-right: 3.3%;
          display: grid;
        }
        
        @media(max-width: 768px) {
          .tabs_component {
            grid-template-columns: 1fr;
          }
        }
        
        .tabs_left {
          border-radius: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
          padding: 3rem;
          display: flex;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
        
        @media(max-width: 768px) {
          .tabs_left {
            padding: 2rem;
          }
        }
        
        .tabs_left-top {
          height: 100%;
          position: relative;
        }
        
        .tabs_let-content {
          width: 100%;
          height: 100%;
          text-align: left;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          display: flex;
          position: absolute;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        
        .tabs_let-content.is-1 {
          opacity: 1;
        }
        
        .service-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.5rem 1.25rem;
          border-radius: 2rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        
        .heading-style-h4 {
          letter-spacing: -0.02em;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }
        
        @media(max-width: 768px) {
          .heading-style-h4 {
            font-size: 1.75rem;
          }
        }
        
        .tabs_line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
          margin-bottom: 1.5rem;
        }
        
        .text-color-gray400 {
          color: #4a5568;
          line-height: 1.8;
          font-size: 1.125rem;
        }
        
        @media(max-width: 768px) {
          .text-color-gray400 {
            font-size: 1rem;
          }
        }
        
        .tabs_right {
          width: 100%;
          height: 100%;
          border-radius: 1.25rem;
          position: relative;
          overflow: hidden;
          grid-area: span 1 / span 1 / span 1 / span 1;
        }
        
        .tabs_image {
          width: 100%;
          height: 100%;
          border-radius: 1.25rem;
          object-fit: cover;
          position: absolute;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.5s, transform 0.5s;
        }
        
        .tabs_image.is-1 {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="section_tabs">
        <div className="section_header">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Pediatric & Child Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Expert care for your child from birth through adolescence, ensuring healthy growth and development.
          </p>
        </div>
        <div className="padding-section-large">
          <div className="tabs_height">
            <div className="tabs_sticky-wrapper">
              <div className="tabs_container">
                <div className="tabs_component">
                  <div className="tabs_left">
                    <div className="tabs_left-top">
                      {pediatricServices.map((service, index) => (
                        <div 
                          key={index} 
                          className={`tabs_let-content ${index === 0 ? 'is-1' : ''}`}
                        >
                          <div>
                            <span className="service-badge">Service {String(index + 1).padStart(2, '0')}</span>
                            <h4 className="heading-style-h4">{service.title}</h4>
                            <div className="tabs_line"></div>
                            <p className="text-color-gray400">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tabs_right">
                    {pediatricServices.map((service, index) => (
                      <img
                        key={index}
                        src={service.image}
                        alt={service.title}
                        className={`tabs_image ${index === 0 ? 'is-1' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PediatricScrollSection;
