import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import ModelSelector from './components/modelselector';
// import Textbox from './components/textbox';
// import Button from './components/button';
import HeroSection from './sections/HeroSection'
import HowToUseSection from './sections/HowToUseSection'
import TextSummarizer from './sections/SummarizerSection'
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
      </div>
      
      {/* <main className="p-4 text-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mt-4 text-gray-800">
          {language === 'en' ? 'Welcome to CoreText.ai' : 'Selamat Datang di CoreText.ai'}
        </h1> */}

        {/* Model Selector
        <div className="mt-6">
          <ModelSelector
            selectedModel={selectedModel}
            onSelectModel={setSelectedModel}
          />
          <p className="mt-2 text-sm text-gray-500">
            You selected: <strong>{selectedModel}</strong>
          </p>
        </div> */}

        {/* <div className='overscroll-none'>
        <HeroSection />
        <TextSummarizer />
        <HowToUseSection />
      </div> */}

      {/* </main> */}

      <Footer />
    </>
  );
}

export default App;