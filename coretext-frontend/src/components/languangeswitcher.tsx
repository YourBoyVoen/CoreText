import React from 'react';

interface LanguageSwitchProps {
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language" className="text-sm font-medium text-gray-700">
        Language:
      </label>
      <select
        id="language"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 text-sm"
      >
        <option value="en">English</option>
        <option value="id">Bahasa Indonesia</option>
        {/* Tambahkan bahasa lain jika diperlukan */}
      </select>
    </div>
  );
};

export default LanguageSwitch;
