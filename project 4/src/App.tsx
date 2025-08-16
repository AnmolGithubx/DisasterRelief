import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmergencyResources from './components/EmergencyResources';
import HelpRequestForm from './components/HelpRequestForm';
import VolunteerRegistration from './components/VolunteerRegistration';
import DonationTracking from './components/DonationTracking';
import UpdatesBoard from './components/UpdatesBoard';
import Footer from './components/Footer';

function App() {
  return (
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <EmergencyResources />
        <HelpRequestForm />
        <VolunteerRegistration />
        <DonationTracking />
        <UpdatesBoard />
        <Footer />
      </div>
  );
}

export default App;