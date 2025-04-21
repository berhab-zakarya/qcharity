

import ImpactStatistics from "../components/sections/ImpactStatistics";
import MainBanner from "../components/sections/MainBanner";

import OurAreasOfIntervention from "../components/sections/OurAreasOfIntervention";
import OurOffices from "../components/sections/OurOffices";
import PeopleReached from "../components/sections/PeopleReached";
import WhatDrivesUs from "../components/sections/WhatDrivesUs";
import OurPartners from "../components/sections/OurPartners";
import { useEffect } from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import CardComponent from "../components/News/CardComponent";
import EventsComponent from "../components/events/eventsComponet";

export default function Home() {
  useEffect(() => {
    import('../qc.global.css'); // تحميل CSS الخاص بـ Home فقط
  }, []);
  return (
    <div className="">
      {/* Header */}
      <Header />

      <main className="flex-1">
        <MainBanner />
        <WhatDrivesUs />
        <CardComponent />
        
        <OurAreasOfIntervention />
        <EventsComponent/>
        <ImpactStatistics />
        <PeopleReached />
       
        <OurPartners />
  
        <OurOffices />

    
   
      </main>

      <Footer/>
      {/* <Footer /> */}
    </div>
  );
}
