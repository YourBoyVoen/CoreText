import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import ModelSelector from './components/modelselector';
// import Textbox from './components/textbox';
// import Button from './components/button';
import HeroSection from './sections/HeroSection'
import HowToUseSection from './sections/HowToUseSection'
import TextSummarizer from './sections/SummarizerSection'
import AboutUsSection from './sections/AboutUsSection';
// import LanguageSwitch from './components/languangeswitcher';

function App() {
  // const [count, setCount] = useState(0);
  // const [selectedModel, setSelectedModel] = useState('Paragraph');
  // const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState('en');

  return (
    <>
      <Navbar
        selectedLanguage={language}
        onLanguageChange={setLanguage}
      />

      <div className='overscroll-none'>
        <HeroSection />
        <TextSummarizer />
        <HowToUseSection />
        <AboutUsSection />
      </div>

      <Footer />
    </>
  );
}

export default App;