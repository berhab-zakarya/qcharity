

const OurAreasOfIntervention = () => {
  const interventionAreas = [
    {
      id: 'SocialWelfare',
      title: 'Social Welfare',
      description: 'We help vulnerable communities prepare for disasters and emergencies, survive and recover.',
      image: '/images/Humanitarianassistance.jpg',
      icon: '/icons/siren.svg',
      link:'/ourwork'
    },
    {
      id: 'CleanWaterAndSanitation',
      title: 'Water, sanitation and hygiene',
      description: 'We work with local communities to bring safe water and sanitation facilities closer to those who need it most',
      image: '/images/Water-S.png',
      icon: '/icons/Union 39.svg',
      link:'/QatarCharityCleanWater'
    },
    {
      id: 'HealthNutrition',
      title: 'Health',
      description: 'We work with partners to strengthen health systems and improve access to healthcare in poor communities',
      image: '/images/Health.png',
      icon: '/icons/Path-16537.svg',
      link:'/QatarCharityHealth'
    },
    {
      id: 'SocialHousing',
      title: 'Social housing',
      description: 'We support local governments\' social protection systems and social assistance schemes.',
      image: '/images/Social housing.png',
      icon: '/icons/Union-40.svg',
      link:'/SocialHousing'
    },
    {
      id: 'Education',
      title: 'Education',
      description: 'We work with global partners and local communities to make quality education and safe learning accessible to all.',
      image: '/images/Education.png',
      icon: '/icons/pencil.svg',
      link:'/QatarCharityEducation'
    },
    {
      id: 'SocialCohesion',
      title: 'Social cohesion',
      description: 'We provide vulnerable children with a safe and enabling environment where they can thrive and prosper.',
      image: '/images/Social cohesion.png',
      icon: '/icons/Union-41.svg',
      link:'/QatarCharitySocialCohesion'
    },
    {
      id: 'EconomicEmpowerment',
      title: 'Economic Empowerment',
      description: 'We support global efforts to end hunger and achieve food security.',
      image: '/images/Economic Empowerment.png',
      icon: '/icons/money.svg',
      link:'/EconomicEmpowerment'
    },
    {
      id: 'FoodSecurity',
      title: 'Food Security',
      description: 'We help vulnerable communities prepare for disasters and emergencies, survive and recover.',
      image: '/images/food-s.png',
      icon: '/icons/food-and-drink.svg',
      link:'/FoodSecurity'
    }
  ];

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

  return (
    <section className="our-fields section-number">
      <div className="container">
        <div className="row gx-6 gx-xl-9">
          <div className="col-12">
            <h1 className="display-4 fw-bold position-relative header-circle text-uppercase">
              Our areas of intervention
            </h1>
          </div>
        </div>
        
        <div className="row gx-6 gx-xl-9 mt-0 mt-sm-6 justify-content-between align-items-end">
          <div className="col-12 col-md-7 col-lg-6">
            <p className="mb-7 showOnScroll">
              We envision a world in which all human beings have the right to
              live in peace and dignity
            </p>
          </div>
          <p className="col-md-5 col-lg-6 d-none d-md-block align-content-end text-end v-line-after-pimary f-xs">
            All photos Copyright @ Takaful
          </p>
          <div className="col mb-9"></div>
        </div>
        
        <div className="row gx-6 gx-xl-9 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-4 gx-lg-6 gx-xl-9">
          {interventionAreas.map((area, index) => (
            <div key={index} className="col d-flex align-items-center hovereffect">
              <a href={area.link} className="card rounded-0 border-0 mb-9 mb-md-10 mb-lg-12 text-decoration-none text-body p-0">
                <div className="card-img img-motion rounded-0">
                  <img 
                    className="col-12" 
                    src={area.image} 
                    alt={area.title}
                    width={500}
                    height={350}
                  />
                  
                  <div className="overlay text-white align-items-center justify-content-center">
                    <p className="card-text btn btn-primary rounded-circle px-4 py-6 mt-12">
                      <ArrowIcon />
                    </p>
                    <p className="card-text f-xs col-10 offset-1 mt-9 mt-xl-10">
                      {area.description}
                    </p>
                  </div>
                </div>
                
                <div className="card-body px-0 border-bottom border-dark d-flex align-items-center justify-content-between">
                  <p className="card-text fw-medium float-start mb-0">
                    {area.title}
                  </p>
                  <img 
                    src={area.icon} 
                    alt="" 
                    width={18} 
                    height={18} 
                    className="float-end" 
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAreasOfIntervention;