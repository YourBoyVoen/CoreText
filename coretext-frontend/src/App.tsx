
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ModelSelector from './components/modelselector';
import Textbox from './components/textbox';
import Button from './components/button';
import summarizer from './sections/SummarizerSection';
import HowToUseSection from './sections/HowToUseSection';
import HeroSection from './sections/HeroSection';
import about us from './sections/AboutUsSection';
// import LanguageSwitch from './components/languangeswitcher';

function App() {
  // const [count, setCount] = useState(0);
  const [selectedModel, setSelectedModel] = useState('Paragraph');
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState('en');

  return (
    <>
      <Navbar
        selectedLanguage={language}
        onLanguageChange={setLanguage}
      />
      
      <main className="p-4 text-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mt-4 text-gray-800">
          {language === 'en' ? 'Welcome to CoreText.ai' : 'Selamat Datang di CoreText.ai'}
        </h1>

        {/* Model Selector */}
        <div className="mt-6">
          <ModelSelector
            selectedModel={selectedModel}
            onSelectModel={setSelectedModel}
          />
          <p className="mt-2 text-sm text-gray-500">
            You selected: <strong>{selectedModel}</strong>
          </p>
        </div>

        {/* Textbox Input */}
        <div className="mt-6 max-w-2xl mx-auto">
          <Textbox
            label={language === 'en' ? 'Enter your text' : 'Masukkan teks kamu'}
            placeholder={language === 'en' ? 'Type something...' : 'Tulis sesuatu...'}
            value={inputText}
            onChange={setInputText}
          />

          <div className="mt-4 text-center">
          <Button
            text={language === 'en' ? 'Summarize' : 'Ringkas'}
            onClick={() => console.log('Clicked')}
            />
          </div>
        </div>


      </main>

      <Footer />
    </>
  );
}

export default App;
