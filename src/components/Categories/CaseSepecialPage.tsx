
import { useLocation, useNavigate } from 'react-router-dom';

const CaseSpecialPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, title, description } = location.state;

  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100">
          {/* Left half - Image */}
          <div className="col-6 px-0">
            <div 
              className="h-100"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>

          {/* Right half - Content */}
          <div className="col-6 d-flex align-items-start bg-white px-5">
            <div className="py-5" style={{ maxWidth: '600px' }}>
              {/* Back Button */}
              <button 
                onClick={() => navigate(-1)}
                className="btn btn-link text-decoration-none mb-5 p-0 d-flex align-items-center gap-2 text-secondary"
              >
                <i className="bi bi-arrow-left"></i>
                Back
              </button>

              {/* Title */}
              <h1 className="display-4 fw-bold lh-sm mb-4" style={{ 
                color: '#1a1a1a',
                fontSize: 'calc(1.8rem + 1.5vw)'
              }}>
                {title}
              </h1>

              {/* Separator */}
              <div className="separator my-4" style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(to right, #3498DB, #2980B9)',
                borderRadius: '4px'
              }}/>

              {/* Description */}
              <div className="content-wrapper mt-5">
                <p className="text-gray-700" style={{ 
                  color: '#4a4a4a',
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                  maxWidth: '95%'
                }}>
                  {description}
                </p>
              </div>

              {/* Donate Button */}
              <button className="btn btn-primary rounded-pill mt-5 px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm hover-lift">
                <span>Donate</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseSpecialPage;