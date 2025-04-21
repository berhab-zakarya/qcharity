import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import WhoAreWe from './pages/WhoWeArePage';
import SocialWelfare from './pages/Ourwork';
import Contactus from './pages/Contactus';
import Faq from './pages/Faq';
import DonationBanner from './components/Categories/categorie';
import QatarCharityNews from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Relief from './pages/Relief';
import NewsComponent from './components/News/NewsComponent';
import EventPage from './components/events/eventPage';
import CaseSpecialPage from './components/Categories/CaseSepecialPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="who-we-are" element={<WhoAreWe />} />
      <Route path="ourwork" element={<SocialWelfare />} />
      <Route path="reach-us" element={<Contactus />} />
      <Route path="faq" element={<Faq />} />
      <Route path="donate" element={<DonationBanner />} />
      <Route path="/news" element={<NewsComponent />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/case" element={<CaseSpecialPage />} />
    <Route path="news" element={<QatarCharityNews />}>
      <Route path="news-article" element={<NewsArticle />} />
    </Route>
    <Route path="relief" element={<Relief />} />
    </Routes>
  );
}

export default App;
