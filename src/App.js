import AboutMe from './components/UI/AboutMe';
import CardData from './components/Data/cardData';
import EducationsData from './components/Data/EducationsData';
import ExperiencesData from './components/Data/ExperiencesData';
import SkillsData from './components/Data/SkillsData';
import Footer from './components/UI/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap justify-evenly gap-6">
        <AboutMe/>
        <CardData/>
        <div className='flex flex-wrap border border-black md:mx-24'>
          <EducationsData/>
          <ExperiencesData/>
        </div> 
        <div className='flex flex-wrap md:mx-24'>
          <SkillsData/>
        </div>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
