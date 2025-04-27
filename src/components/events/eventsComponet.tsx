import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EventsComponent = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust this value to control scroll distance
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const events = [
    {
      id: 'event1',
      title: 'Social Housing',
      description: '“Habitat for Humanity: Beirut Response” (Lebanon, 2020–2021)',
      descriptionMax: 'Following the Beirut port explosion, Habitat for Humanity launched a large-scale reconstruction program to support affected families. More than 1,000 damaged homes were repaired thanks to donations and the help of local volunteers. This project restored safe shelter for thousands of vulnerable people.',
      image: '/events/E1.jpg',
      date: '2020–2021',
      location: 'Lebanon',
      tag: '#SocialHousing #HabitatForHumanity #Reconstruction #Beirut'
    },
    {
      id: 'event2',
      title: 'Health',
      description: '“Médecins Sans Frontières Emergency Clinic” (Sudan, 2023)',
      descriptionMax: 'In 2023, MSF set up a mobile clinic in western Sudan to respond to the growing number of internally displaced people. Thanks to donations, thousands of consultations were provided, including for pregnant women and children suffering from malnutrition. Services included vaccinations, emergency care, and psychological support.',
      image: '/events/E2.webp',
      date: '2023',
      location: 'Sudan',
      tag: '#Health #MSF #MobileClinic #EmergencyCare'
    },
    {
      id: 'event3',
      title: 'Water, Sanitation, and Hygiene',
      description: '“UNICEF WASH Program in Yemen” (2022)',
      descriptionMax: 'In response to the humanitarian crisis in Yemen, UNICEF installed over 400 water points and rehabilitated sanitation systems in rural areas. The project also distributed hygiene kits to more than 100,000 families and ran public awareness campaigns about essential hygiene practices.',
      image: '/events/E3.jpg',
      date: '2022',
      location: 'Yemen',
      tag: '#WASH #UNICEF #CleanWaterAccess #Yemen'
    },
    {
      id: 'event4',
      title: 'Education',
      description: '“Back to School in Syria” by Save the Children (2021)',
      descriptionMax: 'After years of conflict, Save the Children launched a school reintegration program for displaced children in Syria. The initiative rebuilt 50 schools, trained teachers, and provided learning materials to more than 20,000 children. The project was funded through donations from individuals and supporting businesses.',
      image: '/events/E4.png',
      date: '2021',
      location: 'Syria',
      tag: '#Education #SaveTheChildren #EducationForAll #Syria'
    },
    {
      id: 'event5',
      title: 'Social Engagement',
      description: '“World Cleanup Day” (Global, 2023)',
      descriptionMax: 'On September 16, 2023, millions of volunteers across 191 countries participated in World Cleanup Day. In just one day, over 80,000 tons of waste were collected from streets, forests, rivers, and beaches. This initiative united citizens, schools, and companies around a shared goal: a cleaner planet.',
      image: '/events/E5.jpg',
      date: '2023-09-16',
      location: 'Global',
      tag: '#SocialEngagement #WorldCleanupDay #EcoCitizenship #GlobalAction'
    }
  ];

  const handleReadMore = (event: any) => {
    navigate('/event', { 
      state: {
        imageUrl: event.image,
        title: event.title,
        description: event.descriptionMax,
        date: event.date,
        location: event.location
      }
    });
  };

  // SVG for the arrow icon used in cards
  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 32 14">
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_4832" data-name="Rectangle 4832" width="32" height="14" fill="currentColor" stroke="currentColor" strokeWidth="1" />
        </clipPath>
      </defs>
      <g id="Arrow" clipPath="url(#clip-path)">
        <path id="Path_16210" data-name="Path 16210" d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z" transform="translate(15.504 22.586) rotate(-135)" fill="currentColor" />
      </g>
    </svg>
  );

  const buttonStyle = {
    width: '45px',
    height: '45px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#333',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#fff',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
      transform: 'scale(1.05)'
    }
  };

  return (
    <div className="container my-5 py-10">
      <div className="row gx-6 gx-xl-9 mb-5">
        <div className="col-12">
          <h1 className="display-4 fw-bold position-relative header-circle text-uppercase mb-4">
            Upcoming Events
          </h1>
          <p className="text-muted lead mb-5" style={{ maxWidth: '700px' }}>
            Join us in our upcoming events and initiatives to make a difference in the world.
          </p>
        </div>
      </div>
      <div className="position-relative">
        <button
          className="position-absolute start-0 top-50 translate-middle-y btn rounded-circle z-1 d-none d-md-flex"
          onClick={() => scroll('left')}
          style={{
            ...buttonStyle,
            marginLeft: '-22px'
          }}
        >
          <span style={{ marginLeft: '-2px' }}>&#8249;</span>
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="d-flex flex-nowrap overflow-x-auto" 
          style={{ 
            marginLeft: '-12px', 
            marginRight: '-12px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth'
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {events.map((event) => (
            <div className="col-12 col-md-4 px-3" 
                 key={event.id} 
                 style={{ 
                   flex: '0 0 auto', 
                   maxWidth: '400px',
                   transition: 'transform 0.3s ease'
                 }}>
              <div className="card h-100 shadow-sm rounded">
                <img 
                  src={event.image} 
                  className="card-img-top" 
                  alt={event.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="text-muted">
                      {new Date(event.date).toLocaleDateString()} | {event.location}
                    </small>
                    <button 
                      className="btn btn-link text-decoration-none d-flex align-items-center gap-2"
                      onClick={() => handleReadMore(event)}
                    >
                      Read More
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="position-absolute end-0 top-50 translate-middle-y btn rounded-circle z-1 d-none d-md-flex"
          onClick={() => scroll('right')}
          style={{
            ...buttonStyle,
            marginRight: '-22px'
          }}
        >
          <span style={{ marginRight: '-2px' }}>&#8250;</span>
        </button>
      </div>
    </div>
  );
};

export default EventsComponent;