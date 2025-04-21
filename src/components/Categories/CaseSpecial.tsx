import  { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CaseSpecial.css';

const CaseSpecial = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleReadMore = (item: any) => {
    navigate('/case', { 
      state: {
        imageUrl: item.image,
        title: item.title,
        description: item.descriptionMax
      }
    });
  };

  const caseItems = [
    {
      image: "/content/QCGlobal/images/Humanitarianassistance-M-left.jpg",
      title: "Urgent Medical Aid",
      description: "Supporting critical healthcare needs for families in crisis",
      descriptionMax: "Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis .",
      link: "/cases/medical-aid",
    },
    {
      image: "/content/QCGlobal/images/Humanitarianassistance-M-left.jpg",
      title: "Food Security",
      description: "Providing essential nutrition to vulnerable communities",
      descriptionMax: "Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis .",
      link: "/cases/food-security",
    },
    {
      image: "/content/QCGlobal/images/Humanitarianassistance-M-left.jpg",
      title: "Education Support",
      description: "Enabling access to quality education for children",
      descriptionMax: "Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis .",
      link: "/cases/education",
    },
    {
      image: "/content/QCGlobal/images/Humanitarianassistance-M-left.jpg",
      title: "Shelter Assistance",
      description: "Building safe homes for displaced families",
      descriptionMax: "Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis .",
      link: "/cases/shelter",
    },
    {
      image: "/content/QCGlobal/images/Humanitarianassistance-M-left.jpg",
      title: "Water Projects",
      description: "Delivering clean water to communities in need",
      descriptionMax: "Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis Supporting critical healthcare needs for families in crisis .",
      link: "/cases/water",
    },
  ];

  const buttonStyle = {
    width: '45px',
    height: '45px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  return (
    <section className="case-studies py-15 px-10">
      <div className="alae_container">
        <div className="text mb-10 ml-30">
          <h2 className="display-2 mb-3 text-start">
            <span className="text-uppercase fw-bold">Special Cases</span>
            <div className="title-underline mt-3"></div>
          </h2>
          <p className="text-muted lead" style={{ maxWidth: "700px" }}>
            Discover critical humanitarian cases that need immediate attention
            and support. Your contribution can make a significant difference
            in someone's life today.
          </p>
        </div>
        <div className="position-relative">
          {/* Left scroll button */}
          <button
            className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y d-none d-lg-flex align-items-center justify-content-center shadow-sm z-1"
            onClick={() => scroll('left')}
            style={buttonStyle}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="cases-scroll-container" 
          >
            <div className="cases-wrapper">
              {caseItems.map((item, index) => (
                <div className="case-card" key={index}>
                  <div className="case-image position-relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100 object-cover"
                      style={{ height: "200px" }}
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="text-gray mb-4 small">{item.description}</p>
                    <button 
                      className="btn btn-outline-primary"
                      onClick={() => handleReadMore(item)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right scroll button */}
          <button
            className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y d-none d-lg-flex align-items-center justify-content-center shadow-sm z-1"
            onClick={() => scroll('right')}
            style={buttonStyle}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseSpecial;