
import CurrentAppeals from "../components/sections/CurrentAppeals";
import DevelopmentHumanitarianAid from "../components/sections/DevelopmentHumanitarianAid";
import ImpactStatistics from "../components/sections/ImpactStatistics";
import MainBanner from "../components/sections/MainBanner";
import NewsletterSubscription from "../components/sections/NewsLetterSubscribe";
import NewsSection from "../components/sections/NewsSection";
import OurAreasOfIntervention from "../components/sections/OurAreasOfIntervention";
import OurOffices from "../components/sections/OurOffices";
import PeopleReached from "../components/sections/PeopleReached";
import WhatDrivesUs from "../components/sections/WhatDrivesUs";
import OurPartners from "../components/sections/OurPartners";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import('../qc.global.css'); // تحميل CSS الخاص بـ Home فقط
  }, []);
  return (
    <div className="">
      {/* Header */}
      {/* <Header /> */}

      <main className="flex-1">
        <MainBanner />
        <WhatDrivesUs />

        <OurAreasOfIntervention />
        <ImpactStatistics />
        <PeopleReached />
        <DevelopmentHumanitarianAid />
        <OurPartners />
        <CurrentAppeals />
        <NewsSection />
        <OurOffices />
        <NewsletterSubscription />
      </main>

      {/* <Footer/> */}
      {/* <Footer /> */}
    </div>
  );
}
