import React from 'react';
import NoticeBoard from '../components/NoticeBoard';
import QuickLinks from '../components/QuickLinks';
import SSC_Calendar from '../components/SSC_Calendar';
import BrowseExams from '../components/BrowseExams';
import FAQ from '../components/FAQ';
import OtherInitiatives from '../components/OtherInitiatives';


const Home = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8">
          {/* Notice Board Section */}
          <NoticeBoard />
        </div>
        <div className="col-md-4">
          {/* Quick Links and Calendar */}
          <QuickLinks />
          <SSC_Calendar />
        </div>
      </div>
      
      {/* Browse Exams Section */}
      <BrowseExams />

      {/* FAQ Section */}
      <FAQ />

      {/* Other Initiatives Section */}
      <OtherInitiatives />
    </div>
  );
};

export default Home;
