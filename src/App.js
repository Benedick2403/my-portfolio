import AboutMe from './components/UI/AboutMe';
import CardData from './components/Data/cardData';
import EducationsData from './components/Data/EducationsData';
import ExperiencesData from './components/Data/ExperiencesData';
import SkillsData from './components/Data/SkillsData';
import EmailSection from './components/UI/EmailSection';
import Footer from './components/UI/Footer';

import './App.css';

function App() {
  return (
    <>
      <div>
        <div className='flex flex-wrap justify-between w-screen h-full pt-12 pb-5 px-8 text-left lg:h-screen lg:pt-24 lg:pb-10 lg:px-32'>
          <AboutMe/>
          <CardData/>
        </div>
        <div className='w-full h-full px-8 py-4 lg:px-32'>
          <EducationsData/>
          <ExperiencesData/>
        </div> 
        <div className='w-full h-full px-8 py-4 lg:py-12'>
          <SkillsData/>
        </div>
        <div>
          <EmailSection/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
