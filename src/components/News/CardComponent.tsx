import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardComponent() {
  const navigate = useNavigate();
  
  const cards = [
    {
      id: 1,
      title: "Natural Disaster",
      description: "Thousands need urgent shelter, food, and medical aid after the earthquake",
      descriptionMax: "Following a powerful earthquake that struck a densely populated area, thousands of families are left homeless, without food or clean water. The infrastructure has been completely destroyed, making access to humanitarian aid extremely difficult. The affected populations are sleeping outdoors, without protection from the elements, and lack basic healthcare. By making a financial donation, you enable the rapid delivery of tents, food kits, essential medicines, and clean water. Every contribution counts in providing victims with a minimum of dignity and hope during this ordeal.",
      imageUrl: "/news/N1.jpg",
      date: "2025-04-21",
      location: "Qatar"
    },
    {
      id: 2,
      title: "Attack Victims:", 
      description: "Support those injured and grieving after the tragic attack",
      descriptionMax: "After an attack that caused many casualties, entire families are in shock, dealing with the loss of loved ones, serious injuries, and lasting trauma. The injured need specialized medical care, children need psychological support, and families need assistance to rebuild their lives. By contributing financially, you directly support the establishment of listening cells, medical care for victims, and emergency material aid. Your donation is a helping hand, a tangible act of compassion in the face of horror.",
      imageUrl: "/news/N2.jpg",
      date: "2025-04-22",
      location: "Qatar"
    },
    {
      id: 3,
      title: "🇵🇸 Palestine Crisis",
      description: "Help deliver water, food, and care to families in deep distress.",
      descriptionMax: "In the Palestinian territories, the humanitarian situation is worsening day by day. Bombings, restrictions, and shortages have plunged thousands of families into absolute distress. Hospitals are overwhelmed, there are power cuts, and families lack water and food, with children suffering from trauma. The needs are immense. Your financial donation can help provide medicines, hot meals, infant formula, or support mobile clinics in the hardest-hit areas. By donating today, you show a strong gesture of solidarity where it is most needed.",
      imageUrl: "/news/N3.webp",
      date: "2025-04-23",
      location: "Qatar"
    },
  ];

  const handleReadMore = (card: any) => {
    navigate('/news', { 
      state: {
        imageUrl: card.imageUrl,
        title: card.title,
        description: card.descriptionMax,
        date: card.date,
        location: card.location
      }
    });
  };

  const cardStyle: CSSProperties = {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };

  const overlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5))',
    color: 'white',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: '#ffffff20',
    backdropFilter: 'blur(5px)',
    border: '1px solid white',
    color: 'white',
    padding: '10px 28px',
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginTop: '1.5rem',
  };

  const titleStyle: CSSProperties = {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '1rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };

  const descriptionStyle: CSSProperties = {
    fontSize: '1rem',
    lineHeight: '1.6',
    opacity: '0.9',
  };

  return (
    <div className="container mt-10 py-10">
      <div className="row gx-6 gx-xl-9 mb-5">
        <div className="col-12">
          <h1 className="display-4 fw-bold position-relative header-circle text-uppercase mb-4">
            Latest News
          </h1>
          <p className="text-muted lead mb-5" style={{ maxWidth: '700px' }}>
            Stay informed with our latest updates and news about our charitable initiatives and community impact.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {/* Left section - 2/3 width */}
        <div className="col-md-7">
          <div 
            className="card border-0" 
            style={{ ...cardStyle, height: '500px' }}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
              const image = e.currentTarget.querySelector('img') as HTMLElement;
              if (overlay) overlay.style.opacity = '1';
              if (image) image.style.transform = 'scale(1.05)';
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
              const image = e.currentTarget.querySelector('img') as HTMLElement;
              if (overlay) overlay.style.opacity = '0';
              if (image) image.style.transform = 'scale(1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
          >
            <img 
              src={cards[0].imageUrl} 
              alt={cards[0].title}
              style={imageStyle}
            />
            <div className="overlay" style={overlayStyle}>
              <div>
                <h3 style={titleStyle}>{cards[0].title}</h3>
                <p style={descriptionStyle}>{cards[0].description}</p>
                <button 
                  onClick={() => handleReadMore(cards[0])}
                  className="btn" 
                  style={buttonStyle}
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - 1/3 width */}
        <div className="col-md-5">
          <div className="row g-4">
            {[cards[1], cards[2]].map((card) => (
              <div className="col-12" key={card.id}>
                <div 
                  className="card border-0" 
                  style={{ ...cardStyle, height: '238px' }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                    const image = e.currentTarget.querySelector('img') as HTMLElement;
                    if (overlay) overlay.style.opacity = '1';
                    if (image) image.style.transform = 'scale(1.05)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                    const image = e.currentTarget.querySelector('img') as HTMLElement;
                    if (overlay) overlay.style.opacity = '0';
                    if (image) image.style.transform = 'scale(1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }}
                >
                  <img 
                    src={card.imageUrl} 
                    alt={card.title}
                    style={imageStyle}
                  />
                  <div className="overlay" style={overlayStyle}>
                    <div>
                      <h4 style={{ ...titleStyle, fontSize: '1.4rem' }}>{card.title}</h4>
                      <p style={{ ...descriptionStyle, fontSize: '0.9rem' }}>{card.description}</p>
                      <button 
                        onClick={() => handleReadMore(card)}
                        className="btn" 
                        style={{ ...buttonStyle, padding: '8px 24px' }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}