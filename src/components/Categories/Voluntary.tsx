import { useState, useRef } from "react";

type VoluntaryItem = {
  image: string;
  title: string;
  description: string;
  link?: string;
};

type VoluntaryProps = {
  items: VoluntaryItem[];
};

const Voluntary = ({ items }: VoluntaryProps) => {
  const [activeQR, setActiveQR] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="case-studies py-15">
      <div className="alae_container px-10">
        <div className="text mb-10 ml-30">
          <h2 className="display-2 mb-3 text-start">
            <span className="text-uppercase fw-bold">
              Volunteer Opportunities
            </span>
            <div className="title-underline mt-3"></div>
          </h2>
          <p className="text-muted lead" style={{ maxWidth: "700px" }}>
            Join our volunteering initiatives and make a positive impact in your
            community. Together, we can create meaningful change and help those
            in need through dedicated service and compassion.
          </p>
        </div>
        <div className="position-relative">
          <div
            className="horizontal-scroll-wrapper"
            ref={scrollContainerRef}
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              margin: "0 -20px",
              padding: "0 40px",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              scrollBehavior: "smooth",
              position: "relative",
            }}
          >
            <div className="d-flex flex-nowrap gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: "300px",
                    maxWidth: "300px",
                    flex: "0 0 auto",
                  }}
                >
                  <div className="case-card h-100 rounded-3 overflow-hidden">
                    <div className="case-image position-relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100 object-cover"
                        style={{ height: "200px" }}
                      />
                    </div>
                    <div className="case-content p-4 bg-white">
                      <h5 className="fw-bold mb-2">{item.title}</h5>
                      <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                        {item.description}
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <button
                          onClick={() =>
                            setActiveQR(activeQR === index ? null : index)
                          }
                          className="btn btn-primary btn-sm"
                        >
                          {activeQR === index ? "Hide QR" : "Show QR"}
                        </button>
                      </div>
                      {activeQR === index && (
                        <div className="mt-3 text-center">
                          <img
                            src="/content/images/codeQr/codeqr.jpg"
                            alt="QR Code"
                            style={{
                              width: "120px",
                              height: "120px",
                              margin: "0 auto",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Navigation Button */}
          <button
            onClick={() => scroll("left")}
            className="nav-arrow nav-arrow-left d-none d-lg-flex"
            style={{
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1000,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "white",
              border: "none",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={() => scroll("right")}
            className="nav-arrow nav-arrow-right d-none d-lg-flex"
            style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1000,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "white",
              border: "none",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Voluntary;
